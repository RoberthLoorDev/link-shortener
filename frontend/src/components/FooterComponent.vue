<template>
  <section
    class="bg-[#1B1720] h-16 w-[100%] flex justify-between items-center px-20 mt-52"
  >
    <div class="opacity-30">
      <span class="text-white text-sm">Author: Roberth Loor </span>
    </div>
    <div class="flex opacity-30">
      <a
        class="ml-8"
        href="https://www.linkedin.com/in/roberth-loor-837744227/"
        target="_blank"
      >
        <img class="w-5 h-5" src="../assets/linkedin-footer.png" alt="" />
      </a>
      <a class="ml-8" href="https://github.com/RoberthLoorDev" target="_blank">
        <img class="w-5 h-5" src="../assets/github-footer.png" alt="" />
      </a>
      <a
        class="ml-8"
        href="https://www.instagram.com/stories/roberth.loor10/"
        target="_blank"
      >
        <img class="w-5 h-5" src="../assets/instagram-footer.png" alt="" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
