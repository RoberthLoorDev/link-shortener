<template>
  <nav class="mx-28 mt-5 flex justify-between">
    <div>
      <span class="text-white font-bold text-xl select-none"
        >Link Shortener</span
      >
    </div>
    <div class="flex items-center w-72 justify-between">
      <button
        class="px-7 py-[.4rem] rounded-xl text-base font-medium text-[rgba(60, 60, 60, 1)] bg-[#B2F1FF]"
      >
        Login
      </button>
      <a href="/" class="text-white">Pricing</a>
      <a href="/" class="text-white">About me</a>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavbarComponent",
  setup() {
    return {};
  },
};
</script>
