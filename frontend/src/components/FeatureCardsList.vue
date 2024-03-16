<template>
  <section class="mb-10 flex justify-center flex-wrap">
    <FeatureCard v-for="card in cardsData"></FeatureCard>
  </section>
</template>
<script lang="ts">
import FeatureCard from "./FeatureCard.vue";

export default {
  name: "FeatureCardList",
  components: { FeatureCard },
  setup() {
    const cardsData = [
      {
        id: 1,
        title: "Instant Efficiency",
        description:
          "Discover the efficiency and speed of LinkSwift in managing your links. Simplify your long URLs instantly, saving time and effort with every click.",
      },

      {
        id: 2,
        title: "Instant Efficiency",
        description:
          "Discover the efficiency and speed of LinkSwift in managing your links. Simplify your long URLs instantly, saving time and effort with every click.",
      },

      {
        id: 3,
        title: "Instant Efficiency",
        description:
          "Discover the efficiency and speed of LinkSwift in managing your links. Simplify your long URLs instantly, saving time and effort with every click.",
      },
    ];
    return {
      cardsData,
    };
  },
};
</script>
<style></style>
