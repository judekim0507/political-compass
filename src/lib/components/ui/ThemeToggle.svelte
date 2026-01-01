<script lang="ts">
  import { themeState } from "$lib/stores/theme.svelte";

  const icons = {
    system: "◐",
    light: "○",
    dark: "●",
  } as const;

  const labels = {
    system: "System",
    light: "Light",
    dark: "Dark",
  } as const;
</script>

<button
  onclick={() => themeState.cycle()}
  class="w-8 h-8 flex items-center justify-center text-sm hover:opacity-70 transition-opacity"
  aria-label="Toggle theme: {labels[themeState.theme]}"
  title="{labels[themeState.theme]} theme"
>
  {icons[themeState.theme]}
</button>
