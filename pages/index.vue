<template>
  <main class="flex-1">
    <SectionsHeroSection />
    <SectionsSocialProuf />
    <!-- <SectionsLogoCloud /> -->
    <SectionsServices />
    <SectionsAboutContent />
    <SectionsCta />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Kazdev",
  meta: [
    {
      name: "description",
      content: "Разработчики IT продукт",
    },
  ],
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>
