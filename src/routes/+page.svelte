<script lang="ts">
  import { quizState } from "$lib/stores/quiz.svelte";

  function startQuiz() {
    quizState.reset();
  }

  const axes = [
    "Economic",
    "Civil",
    "Diplomatic",
    "Social",
    "Technology",
    "Environment",
    "Governance",
    "Justice",
  ];
</script>

<svelte:head>
  <title>Political Compass</title>
</svelte:head>

<main class="min-h-screen flex flex-col justify-between p-8 sm:p-12 lg:p-16">
  <header class="flex justify-between items-start">
    <p class="text-sm text-neutral-400">Political Compass</p>
    <p class="text-sm text-neutral-400">50 questions · ~10 min</p>
  </header>

  <div class="max-w-2xl py-16">
    <h1
      class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
    >
      Discover where you stand across eight dimensions of political compass.
    </h1>
    <a
      href="/quiz"
      onclick={startQuiz}
      class="inline-block mt-12 px-8 py-4 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
    >
      Begin Assessment
    </a>
  </div>

  <footer class="space-y-8">
    <div class="flex flex-wrap gap-x-6 gap-y-2">
      {#each axes as axis}
        <span class="text-sm text-neutral-400">{axis}</span>
      {/each}
    </div>
    <div class="flex flex-wrap justify-between gap-4 text-xs text-neutral-400">
      <p class="max-w-md">
        For educational purposes only. Political beliefs are complex and
        multidimensional.
      </p>
      <p>
        Built by <a
          href="https://judekim.ca"
          class="hover:underline hover:text-neutral-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jude Kim
        </a>
        ·
        <a
          href="https://github.com/judekim0507/political-compass"
          class="hover:underline hover:text-neutral-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </p>
    </div>
  </footer>
</main>
