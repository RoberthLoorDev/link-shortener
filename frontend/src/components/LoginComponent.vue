<template>
  <div class="w-[100%] absolute top-0 left-0">
    <NotificationComponent
      v-if="showNotificationSuccess"
      type="info"
      message="Successful login"
    ></NotificationComponent>
  </div>
  <form
    @submit.prevent="submitForm"
    class="flex flex-col justify-center items-center w-[22rem] mt-5"
  >
    <h3 class="text-[#B2F1FF] text-[14px] font-semibold my-6 text-center">
      LOG IN
    </h3>

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

    <button
      type="submit"
      class="relative w-[15rem] flex justify-center items-center border-[#B2F1FF] border-[2px] mt-10 rounded-[5px] h-[2rem] text-[14px] hover:border-[#62e0fe] active:border-[#0288b8d7]"
    >
      <span class="absolute mx-auto -mt-1 text-[#B2F1FF]"> Login </span>
    </button>

    <span class="text-[#62646C] text-[14px] my-3 font-medium"
      >Log in faster using:</span
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

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import { ref } from "vue";
import NotificationComponent from "./NotificationComponent.vue";
import { apiUrlBase } from "@/config";

export default defineComponent({
  name: "LoginComponent",

  components: {
    NotificationComponent,
  },

  setup() {
    //status form signup

    const formData = ref({
      email: "",
      password: "",
    });

    const showNotificationSuccess = ref(false);

    const submitForm = async () => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      };

      fetch(`${apiUrlBase}/auth/login`, requestOptions)
        .then((response) => {
          if (!response) {
            throw new Error("Error");
          }

          if (!response.ok) {
            if (response.status === 404) {
              throw new Error("User no founded: " + response.status);
            }
          }

          return response.json();
        })
        .then((data) => {
          console.log(data);
          showNotificationSuccess.value = true;

          setTimeout(() => {
            router.push("/");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return { submitForm, formData, showNotificationSuccess };
  },
});
</script>

<style scoped></style>
