<template>
  <div class="background">
    <div class="flex flex-1 justify-center">
      <!-- box-signup -->
      <div class="flex h-[30rem] bg-[#1F212C] rounded-[15px] shadow-none mt-16">
        <div class="hidden md:flex justify-center items-center w-[50%]">
          <img class="w-[23rem] ml-20" src="../assets/image-sign.png" alt="" />
        </div>

        <div class="flex flex-col items-center w-[100%] md:w-[50%]">
          <!-- Login -->
          <div class="flex justify-center">
            <p class="text-center text-[12px] text-[#9C9DA2] mt-8 select-none">
              Do not you have an account yet?
              <RouterLink to="/sign-up">
                <span class="text-[#B5F5DF] cursor-pointer font-bold"
                  >Sign up</span
                >
              </RouterLink>

              <LoginComponent></LoginComponent>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LoginComponent from "../components/LoginComponent.vue";

export default {
  name: "LoginPage",
  components: { LoginComponent },
  setup() {
    return {};
  },
};
</script>
