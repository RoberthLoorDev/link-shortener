<template>
  <NavbarComponent></NavbarComponent>
  <LinkShortenerComponent></LinkShortenerComponent>
  <FeatureCardsList></FeatureCardsList>
  <section class="flex mb-20 justify-center">
    <ButtonComponent
      title="Create Account"
      backgroundColor="#B2F1FF"
      textColor="#3C3C3C"
    ></ButtonComponent>
  </section>
  <CopyNotificationComponent></CopyNotificationComponent>
</template>

<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import LinkShortenerComponent from "@/components/LinkShortenerComponent.vue";
import FeatureCardsList from "@/components/FeatureCardsList.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import CopyNotificationComponent from "@/components/CopyNotificationComponent.vue";

export default {
  name: "HomePage",

  components: {
    NavbarComponent,
    LinkShortenerComponent,
    FeatureCardsList,
    ButtonComponent,
    CopyNotificationComponent,
  },
};
</script>

<style>
.shadow-info-copy {
  box-shadow: 2px 2px 20px none;
}
.shadow-info-copy:hover {
  box-shadow: 0px 0px 80px #3e879ba8;
  transition: box-shadow 1s;
}
</style>
