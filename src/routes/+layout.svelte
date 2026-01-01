<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import "$lib/stores/theme.svelte";

  let { children } = $props();

  const siteName = "Political Compass";
  const siteUrl = "https://political-compass.judekim.ca";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="author" content="Jude Kim" />
  <meta name="robots" content="index, follow" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@imjudekim" />
</svelte:head>
{@render children()}
