<script lang="ts">
  import { quizState } from "$lib/stores/quiz.svelte";
  import ThemeToggle from "$lib/components/ui/ThemeToggle.svelte";

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
  <header class="flex justify-between items-center">
    <p class="text-sm text-[var(--fg-subtle)]">Political Compass</p>
    <div class="flex items-center gap-4">
      <p class="text-sm text-[var(--fg-subtle)]">25 questions</p>
      <ThemeToggle />
    </div>
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
      class="inline-block mt-12 px-8 py-4 bg-[var(--accent)] text-[var(--accent-fg)] text-sm font-medium hover:opacity-80 transition-opacity"
    >
      Begin Assessment
    </a>
  </div>

  <footer class="space-y-8">
    <div class="flex flex-wrap gap-x-6 gap-y-2">
      {#each axes as axis}
        <span class="text-sm text-[var(--fg-subtle)]">{axis}</span>
      {/each}
    </div>
    <div
      class="flex flex-wrap justify-between gap-4 text-xs text-[var(--fg-subtle)]"
    >
      <p class="max-w-md">
        For educational purposes only. Political beliefs are complex and
        multidimensional.
      </p>
      <p>
        Built by <a
          href="https://judekim.ca"
          class="underline hover:text-[var(--fg-muted)] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jude Kim
        </a>
        ·
        <a
          href="https://github.com/judekim0507/political-compass"
          class="underline hover:text-[var(--fg-muted)] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </p>
    </div>
  </footer>
</main>
