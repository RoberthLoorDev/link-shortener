<template>
  <div class="flex flex-col items-center">
    <NavbarComponent></NavbarComponent>
    <LinkShortenerComponent></LinkShortenerComponent>
    <TableLinksComponent></TableLinksComponent>
    <FeatureCardsList></FeatureCardsList>

    <!-- <section class="flex mb-20 justify-center">
      <RouterLink to="/sign-up">
        <ButtonComponent
          title="Create Account"
          backgroundColor="#B2F1FF"
          textColor="#3C3C3C"
        ></ButtonComponent>
      </RouterLink>
    </section> -->

    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import LinkShortenerComponent from "@/components/LinkShortenerComponent.vue";
import FeatureCardsList from "@/components/FeatureCardsList.vue";
// import ButtonComponent from "@/components/ButtonComponent.vue";
import TableLinksComponent from "@/components/TableLinksComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomePage",

  components: {
    NavbarComponent,
    LinkShortenerComponent,
    FeatureCardsList,
    TableLinksComponent,
    // ButtonComponent,
    FooterComponent,
  },
  setup() {
    const show = () => {
      console.log("hola");
    };

    return {
      show,
    };
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
