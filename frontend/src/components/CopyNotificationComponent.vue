<template>
  <div
    class="absolute flex top-0 w-[100%] justify-center animate-flip-down animate-ease-in-out animate-normal"
  >
    <div
      class="flex justify-center items-center w-44 h-12 bg-[#1c2e3d] rounded-lg mt-3 shadow-info-copy"
    >
      <img src="../assets/info.png" class="w-4 h-4 mr-2" alt="" />
      <span class="text-white text-base">Copied text</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CopyNotificationComponent",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.shadow-info-copy {
  box-shadow: 2px 2px 20px none;
}
</style>
