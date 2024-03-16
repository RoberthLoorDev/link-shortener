<template>
  <div
    class="shadow w-56 h-auto flex flex-col rounded-2xl relative mb-5 shadow-background"
  >
    <div class="flex mx-4 items-center mt-6">
      <img
        src="../assets/data-analytics.png"
        alt=""
        class="bg-[#1F2531] w-9 h-9 rounded-full p-[8px] mr-2"
      />
      <h4 class="text-white text-base font-medium">{{ title }}</h4>
    </div>
    <p class="mx-5 text-white text-sm mt-5 leading-6 pb-7">
      {{ description }}
    </p>

    <div
      class="bg-[#3E879B] w-[100%] h-[100%] absolute -z-10 rounded-2xl opacity-10"
    ></div>
  </div>
</template>
<script lang="ts">
export default {
  name: "FeatureCardComponent",
  props: {
    title: String,
    description: String,
    borderColor: String,
    backgroundColor: String,
    icon: String,
  },
  setup() {
    return {};
  },
};
</script>
