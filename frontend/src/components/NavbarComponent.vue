<template>
  <Transition name="lateral-menu">
    <div
      v-if="barVerticalAnimation"
      class="bg-[#1F222D] w-52 h-[100%] top-0 right-0 z-10 fixed rounded-tl-3xl shadow-vertical-menu"
    >
      <div class="w-[100%] h-12 ml-5 mt-[3.7rem] flex justify-center flex-col">
        <button
          class="w-24 min-h-10 rounded-xl text-base font-medium text-white bg-[#00aadb] hover:bg-[#0287b8] active:bg-[#0a6c94]"
        >
          Login
        </button>
        <a href="/" class="text-white mt-4">Pricing</a>
        <a href="/" class="text-white mt-4">About me</a>
      </div>
    </div>
  </Transition>

  <nav
    class="mx-[5%] md:mx-28 mt-8 md:mt-5 flex justify-center items-center md:justify-between relative"
  >
    <div>
      <span class="text-white font-bold text-xl select-none text-center">
        Clipp.io</span
      >
    </div>
    <Transition name="icon-menu">
      <img
        src="../assets/bar-vertical.png"
        alt=""
        class="block md:hidden absolute right-0 top-0 w-8 h-8 -mt-1 z-10 button_menu_vertical"
        @click="showBarVerticalAnimation"
        v-bind:style="{ transform: `rotate(${iconBarVerticalAnimation}deg)` }"
      />
    </Transition>

    <div class="hidden md:flex md:items-center w-72 justify-between">
      <ButtonComponent
        title="Login"
        backgroundColor="#4CBED9"
        :width="100"
        :height="40"
        textColor="white"
      ></ButtonComponent>

      <a href="/" class="text-white">Pricing</a>
      <a href="/" class="text-white">About me</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

export default {
  name: "NavbarComponent",
  components: { ButtonComponent },
  setup() {
    const iconBarVerticalAnimation = ref(0);
    const barVerticalAnimation = ref(false);

    const showBarVerticalAnimation = () => {
      barVerticalAnimation.value = !barVerticalAnimation.value;

      // Hacer girar la imagen de forma progresiva
      if (iconBarVerticalAnimation.value === 0) {
        let angle = 0;
        const interval = setInterval(() => {
          angle += 5; // Incremento gradual de 5 grados
          iconBarVerticalAnimation.value = angle;
          if (angle >= 90) {
            clearInterval(interval);
          }
        }, 10); // Intervalo de tiempo (ms) para suavizar la animación
      } else if (iconBarVerticalAnimation.value === 90) {
        let angle = 90;
        const interval = setInterval(() => {
          angle -= 5; // Decremento gradual de 5 grados
          iconBarVerticalAnimation.value = angle;
          if (angle <= 0) {
            clearInterval(interval);
          }
        }, 10); // Intervalo de tiempo (ms) para suavizar la animación
      }
    };
    return {
      barVerticalAnimation,
      showBarVerticalAnimation,
      iconBarVerticalAnimation,
    };
  },
};
</script>

<style>
.shadow-vertical-menu {
  box-shadow: -30px 0px 30px rgba(0, 0, 0, 0.192);
}

.lateral-menu-enter-active,
.lateral-menu-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.lateral-menu-enter-from,
.lateral-menu-leave-to {
  transform: translateX(120%);
}

.icon-menu-enter-from,
.icon-menu-leave-to {
  transform: rotate(0deg);
  transition: transform 0.3s ease; /* Agrega una transición suave */
}
</style>
