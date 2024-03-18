<template>
  <Transition name="slide-in-down">
    <div v-if="isShown" class="absolute flex top-0 w-[100%] justify-center">
      <div
        class="flex justify-center items-center w-44 h-12 bg-[#1c2e3d] rounded-lg mt-3 shadow-info-copy"
      >
        <img src="../assets/info.png" class="w-4 h-4 mr-2" alt="" />
        <span class="text-white text-base">Copied text</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isShown = ref(false);

const showNotification = () => {
  setTimeout(() => {
    isShown.value = true;
    hideNotification();
  }, 500);
};

showNotification();

const hideNotification = () => {
  setTimeout(() => {
    isShown.value = false;
  }, 5000);
};
</script>

<style lang="scss" scoped>
.shadow-info-copy {
  box-shadow: 2px 2px 20px none;
}

.slide-in-down-enter-active {
  transition: all 0.3s ease-out;
}

.slide-in-down-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-in-down-enter-from,
.slide-in-down-leave-to {
  transform: translateY(-30px);
}
</style>
