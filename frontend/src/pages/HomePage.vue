<template>
  <NavbarComponent></NavbarComponent>
  <LinkShortenerComponent></LinkShortenerComponent>
  <FeatureCardsList></FeatureCardsList>
  <ButtonComponent
    title="Create Account"
    background-color="#B2F1FF"
    text-color="#3C3C3C"
  ></ButtonComponent>

  <!-- <div
    v-if="showInfoCopy"
    class="absolute flex top-0 w-[100%] justify-center animate-flip-down animate-ease-in-out animate-normal"
  >
    <div
      class="flex justify-center items-center w-44 h-12 bg-[#1c2e3d] rounded-lg mt-3 shadow-info-copy"
    >
      <img src="../assets/info.png" class="w-4 h-4 mr-2" alt="" />
      <span class="text-white text-base">Copied text</span>
    </div>
  </div>

  <div
    v-else-if="showInfoCopy === false && playingAnimation === false"
    class="absolute flex top-0 w-[100%] justify-center animate-flip-down animate-once animate-ease-in-out animate-reverse animate-fill-forwards"
  >
    <div
      class="flex justify-center items-center w-44 h-12 bg-[#1c2e3d] rounded-lg mt-3 shadow-info-copy"
    >
      <img src="../assets/info.png" class="w-4 h-4 mr-2" alt="" />
      <span class="text-white text-base">Copied text</span>
    </div>
  </div> -->
</template>

<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import LinkShortenerComponent from "@/components/LinkShortenerComponent.vue";
import FeatureCardsList from "@/components/FeatureCardsList.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "HomePage",

  components: {
    NavbarComponent,
    LinkShortenerComponent,
    FeatureCardsList,
    ButtonComponent,
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
