<template>
  <div class="background">
    <NavbarComponent></NavbarComponent>
    <div class="flex flex-1 justify-center items-center">
      <!-- box-login -->
      <div
        class="flex h-[25rem] bg-[#1F212C] -mt-20 rounded-[15px] shadow-none"
      >
        <div class="hidden md:flex justify-center items-center w-[50%]">
          <img class="w-[20rem] ml-20" src="../assets/image-sign.png" alt="" />
        </div>
        <div class="flex flex-col items-center w-[100%] md:w-[50%]">
          <form
            action=""
            class="flex flex-col justify-center items-center w-[22rem]"
          >
            <h3
              class="text-[#B2F1FF] text-[14px] font-semibold my-6 text-center"
            >
              SIGN UP
            </h3>

            <!-- inputs container-->
            <div class="flex justify-between w-[15rem]">
              <!-- input -->
              <div class="relative flex justify-start flex-col w-[48%]">
                <input
                  spellcheck="false"
                  class="outline-none bg-transparent z-10 text-white _ input-text"
                  type="text"
                  id="name"
                  required
                />
                <label
                  class="absolute text-[14px] ml-1 text-[#62646C] select-none -z-5 _ label-input"
                  for="name"
                  >Name:</label
                >
                <span class="w-[100%] h-[2px] mt-1 - line_input"></span>
              </div>

              <!--  -->
              <div class="relative flex flex-col w-[48%]">
                <input
                  spellcheck="false"
                  class="outline-none bg-transparent z-10 text-white _ input-text"
                  type="text"
                  id="name"
                  required
                />
                <label
                  class="absolute text-[14px] ml-1 text-[#62646C] select-none -z-5 _ label-input"
                  for="name"
                  >Lastname:</label
                >
                <span class="w-[100%] mt-1 h-[2px] - line_input"></span>
              </div>
            </div>

            <!-- input -->
            <div class="relative flex justify-start flex-col w-[15rem] mt-6">
              <input
                spellcheck="false"
                class="outline-none bg-transparent z-10 text-white _ input-text"
                type="text"
                id="name"
                required
              />
              <label
                class="absolute text-[14px] ml-1 text-[#62646C] select-none -z-5 _ label-input"
                for="name"
                >Email:</label
              >
              <span class="w-[100%] h-[2px] mt-1 - line_input"></span>
            </div>

            <!-- input -->
            <div class="relative flex justify-start flex-col w-[15rem] mt-6">
              <input
                spellcheck="false"
                class="outline-none bg-transparent z-10 text-white _ input-text"
                type="text"
                id="name"
                required
              />
              <label
                class="absolute text-[14px] ml-1 text-[#62646C] select-none -z-5 _ label-input"
                for="name"
                >Password:</label
              >
              <span class="w-[100%] h-[2px] mt-1 - line_input"></span>
            </div>

            <button
              class="relative w-[15rem] flex justify-center items-center border-[#B2F1FF] border-[2px] mt-10 rounded-[5px] h-[2rem] text-[14px] hover:border-[#62e0fe] active:border-[#0288b8d7]"
            >
              <span class="absolute mx-auto -mt-1 text-[#B2F1FF]">
                Sign up
              </span>
            </button>

            <span class="text-[#62646C] text-[14px] my-3 font-medium"
              >Sign in faster using:</span
            >

            <!-- Container buttons google github -->
            <div class="flex justify-between w-24">
              <button
                class="shadow-background w-10 h-10 bg-[#282F36] rounded-md flex justify-center items-center"
              >
                <img class="w-[70%]" src="../assets/google 1.png" alt="" />
              </button>

              <button
                class="shadow-background w-10 h-10 bg-[#282F36] rounded-md flex justify-center items-center"
              >
                <img class="w-[70%]" src="../assets/github.png" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "SignUpPage",
  components: {
    NavbarComponent,
  },

  setup() {
    return {};
  },
};
</script>

<style>
.background {
  background: linear-gradient(180deg, #1f3c4d 0%, #1f212c 70.08%);
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
