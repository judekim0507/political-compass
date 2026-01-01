<script lang="ts">
  import type { PageData } from "./$types";
  import Compass2D from "$lib/components/visualizations/Compass2D.svelte";
  import RadarChart from "$lib/components/visualizations/RadarChart.svelte";
  import Compass3D from "$lib/components/visualizations/Compass3D.svelte";
  import AxisBreakdown from "$lib/components/visualizations/AxisBreakdown.svelte";
  import { findSimilarFigures } from "$lib/scoring/similarity";
  import { axes } from "$lib/data/axes";
  import { browser } from "$app/environment";
  import type { AxisId } from "$lib/types";

  let { data }: { data: PageData } = $props();

  const similarities = $derived(findSimilarFigures(data.results, 3));
  const topMatch = $derived(similarities[0]);

  let copied = $state(false);
  let activeTab = $state<"radar" | "3d">("radar");

  async function shareResults() {
    if (!browser) return;

    const shareData = {
      title: "My Political Compass Results",
      text: "Check out my political compass results",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          await copyToClipboard();
        }
      }
    } else {
      await copyToClipboard();
    }
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(window.location.href);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<svelte:head>
  <title>Your Results</title>
</svelte:head>

<main class="min-h-screen bg-white">
  <section class="border-b-2 border-black">
    <div class="max-w-7xl mx-auto px-6 py-12 sm:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="space-y-8 order-2 lg:order-1">
          <div class="space-y-4">
            <p
              class="text-sm font-medium uppercase tracking-widest text-neutral-400"
            >
              Assessment Complete
            </p>
            <h1
              class="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-none"
            >
              Your Political<br />Position
            </h1>
          </div>

          <div class="flex flex-wrap gap-3">
            <button
              onclick={shareResults}
              class="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              {copied ? "Link Copied" : "Share Results"}
            </button>
            <a
              href="/"
              class="px-6 py-3 border-2 border-black text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              Retake
            </a>
          </div>

          {#if topMatch}
            <div class="pt-8 border-t border-neutral-200">
              <p class="text-sm text-neutral-500 mb-2">Closest Match</p>
              <p class="text-2xl font-medium">{topMatch.figure.name}</p>
              <p class="text-neutral-500">{topMatch.figure.era}</p>
            </div>
          {/if}
        </div>

        <div class="flex justify-center lg:justify-end order-1 lg:order-2">
          <Compass2D results={data.results} />
        </div>
      </div>
    </div>
  </section>

  <section class="border-b-2 border-black overflow-x-auto">
    <div class="min-w-max">
      <div class="grid grid-cols-8">
        {#each axes as axis}
          {@const value = data.results[axis.id as AxisId]}
          <div
            class="border-r-2 border-black last:border-r-0 p-4 sm:p-6 min-w-[90px] sm:min-w-[100px]"
          >
            <p class="text-xl sm:text-3xl font-semibold">
              {value > 0 ? "+" : ""}{Math.round(value)}
            </p>
            <p class="text-xs text-neutral-500 mt-1">{axis.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="border-b-2 border-black">
    <div class="max-w-7xl mx-auto px-6 py-12 sm:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div class="space-y-8">
          <div>
            <p
              class="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-4"
            >
              Breakdown
            </p>
            <h2 class="text-2xl sm:text-4xl font-semibold">Eight Dimensions</h2>
          </div>
          <AxisBreakdown results={data.results} />
        </div>

        <div class="space-y-8">
          <div class="flex items-end justify-between gap-4">
            <div>
              <p
                class="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-4"
              >
                Visualization
              </p>
              <h2 class="text-2xl sm:text-4xl font-semibold">
                {activeTab === "radar" ? "Radar View" : "3D Space"}
              </h2>
            </div>
            <div class="flex border-2 border-black shrink-0">
              <button
                onclick={() => (activeTab = "radar")}
                class="px-3 sm:px-4 py-2 text-sm font-medium transition-colors {activeTab ===
                'radar'
                  ? 'bg-black text-white'
                  : 'hover:bg-neutral-100'}"
              >
                Radar
              </button>
              <button
                onclick={() => (activeTab = "3d")}
                class="px-3 sm:px-4 py-2 text-sm font-medium border-l-2 border-black transition-colors {activeTab ===
                '3d'
                  ? 'bg-black text-white'
                  : 'hover:bg-neutral-100'}"
              >
                3D
              </button>
            </div>
          </div>

          <div class="flex justify-center">
            {#if activeTab === "radar"}
              <div class="w-full max-w-[380px]">
                <RadarChart results={data.results} />
              </div>
            {:else if browser}
              <div class="w-full max-w-[380px]">
                <Compass3D results={data.results} />
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="max-w-7xl mx-auto px-6 py-12 sm:py-24">
      <div class="max-w-3xl">
        <p
          class="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-4"
        >
          Historical Comparison
        </p>
        <h2 class="text-2xl sm:text-4xl font-semibold mb-8 sm:mb-12">
          Similar Figures
        </h2>

        <div class="space-y-4 sm:space-y-6">
          {#each similarities as { figure, similarity }, i}
            <div
              class="flex gap-4 sm:gap-6 items-start p-4 sm:p-6 border-2 border-black {i ===
              0
                ? 'bg-neutral-50'
                : ''}"
            >
              <div
                class="text-3xl sm:text-4xl font-semibold text-neutral-200 w-10 sm:w-12 shrink-0"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-lg sm:text-xl font-semibold">
                      {figure.name}
                    </h3>
                    <p class="text-sm text-neutral-500">{figure.era}</p>
                  </div>
                  <div class="text-right shrink-0">
                    <p class="text-xl sm:text-2xl font-semibold">
                      {Math.round(similarity)}%
                    </p>
                  </div>
                </div>
                <p class="text-sm sm:text-base text-neutral-600 mt-2">
                  {figure.description}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <footer class="border-t-2 border-black">
    <div class="max-w-7xl mx-auto px-6 py-6 sm:py-8 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p class="text-sm text-neutral-500">For educational purposes only.</p>
        <div class="flex gap-6">
          <a href="/" class="text-sm font-medium hover:underline">Take Again</a>
          <button
            onclick={shareResults}
            class="text-sm font-medium hover:underline"
          >
            {copied ? "Copied" : "Share"}
          </button>
        </div>
      </div>
      <p class="text-xs text-neutral-400">
        Built by <a href="https://judekim.ca" class="underline hover:text-neutral-600">Jude Kim</a>
        · <a href="https://github.com/judekim0507/political-compass" class="underline hover:text-neutral-600">Source</a>
      </p>
    </div>
  </footer>
</main>
