<template>
  <form
    @submit.prevent="submitForm"
    class="flex flex-col justify-center items-center w-[22rem]"
  >
    <h3 class="text-[#B2F1FF] text-[14px] font-semibold my-6 text-center">
      SIGN UP
    </h3>

    <div class="flex justify-between w-[15rem]">
      <!-- input -->
      <div class="relative flex justify-start flex-col w-[48%]">
        <input
          v-model="formData.names"
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

      <div class="relative flex flex-col w-[48%]">
        <input
          v-model="formData.lastnames"
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
        v-model="formData.email"
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
        v-model="formData.password"
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
        >Repeat password:</label
      >
      <span class="w-[100%] h-[2px] mt-1 - line_input"></span>
    </div>

    <button
      type="submit"
      class="relative w-[15rem] flex justify-center items-center border-[#B2F1FF] border-[2px] mt-10 rounded-[5px] h-[2rem] text-[14px] hover:border-[#62e0fe] active:border-[#0288b8d7]"
    >
      <span class="absolute mx-auto -mt-1 text-[#B2F1FF]"> Sign up </span>
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
</template>

<script>
import { SignUpFormInterface } from "../interfaces/interfaces";
import { ref } from "vue";
export default {
  setup() {
    const formData = ref({
      names: "",
      lastnames: "",
      email: "",
      password: "",
    });

    const submitForm = async () => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      };

      fetch("http://localhost:5000/api/auth/register-user", requestOptions)
        .then((response) => {
          if (!response) {
            throw new Error("Error");
          }

          return response.json();
        })
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return { submitForm, formData };
  },
};
</script>

<style lang="scss" scoped></style>
