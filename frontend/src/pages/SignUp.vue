<template>
  <div class="background">
    <NavbarComponent></NavbarComponent>
    <div class="flex flex-1 justify-center">
      <!-- box-signup -->
      <div class="flex h-[30rem] bg-[#1F212C] rounded-[15px] shadow-none mt-16">
        <div class="hidden md:flex justify-center items-center w-[50%]">
          <img class="w-[23rem] ml-20" src="../assets/image-sign.png" alt="" />
        </div>
        <div class="flex flex-col items-center w-[100%] md:w-[50%]">
          <!-- Form login signup -->
          <SignUpFormComponent></SignUpFormComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import SignUpFormComponent from "@/components/SignUpFormComponent.vue";

export default {
  name: "SignUpPage",
  components: {
    NavbarComponent,
    SignUpFormComponent,
  },

  setup() {
    return {};
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
