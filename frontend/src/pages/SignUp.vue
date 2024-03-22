<template>
  <div class="background">
    <div class="flex flex-1 justify-center">
      <!-- box-signup -->
      <div class="flex h-[30rem] bg-[#1F212C] rounded-[15px] shadow-none mt-16">
        <div class="hidden md:flex justify-center items-center w-[50%]">
          <img class="w-[23rem] ml-20" src="../assets/image-sign.png" alt="" />
        </div>
        <div class="flex flex-col items-center w-[100%] md:w-[50%]">
          <!-- Signup -->
          <div class="flex justify-center" v-if="loginSignup === 'signup'">
            <p class="text-center text-[12px] text-[#9C9DA2] mt-8 select-none">
              Do you already have an account?
              <span
                class="text-[#B5F5DF] cursor-pointer font-bold"
                @click="setLoginForm"
                >log in</span
              >
              <SignUpFormComponent></SignUpFormComponent>
            </p>
          </div>

          <!-- Login -->
          <div class="flex justify-center" v-else>
            <p class="text-center text-[12px] text-[#9C9DA2] mt-8 select-none">
              Do not you have an account yet?
              <span
                class="text-[#B5F5DF] cursor-pointer font-bold"
                @click="setLoginForm"
                >Sign up</span
              >
              <LoginComponent></LoginComponent>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SignUpFormComponent from "@/components/SignUpFormComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import { ref } from "vue";

export default {
  name: "SignUpPage",
  components: {
    SignUpFormComponent,
    LoginComponent,
  },
  setup() {
    const loginSignup = ref("signup");

    const setLoginForm = () => {
      if (loginSignup.value === "login") {
        loginSignup.value = "signup";

        return;
      }

      loginSignup.value = "login";
    };

    return {
      loginSignup,
      setLoginForm,
    };
  },
};
</script>
<style>
.background {
  background: linear-gradient(180deg, #1f3c4d 0%, #1f212c 60.08%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  widows: 100%;
}

@media screen and (max-width: 767px) {
  .background {
    background: #1f222d;
  }
}

.line_input {
  background: linear-gradient(90deg, #b2f1ff 0%, #1f222d 100%);
}

/* input with animation */
.input-text:valid {
  outline: 0;
}

.label-input {
  transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
}

.input-text:focus ~ label,
.input-text:valid ~ label {
  font-size: 14px;
  transform: translateY(-22px) translateX(-9px) scale(0.8); /* Reducción de tamaño */
  color: #b2f1ff;
}
</style>
