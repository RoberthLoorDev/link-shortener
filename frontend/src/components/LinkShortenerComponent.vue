<template>
  <!-- input link section -->
  <section class="flex items-center flex-col mt-14">
    <h1 class="text-white text-2xl font-medium">PREMIUM URL SHORTENER</h1>
    <div
      class="bg-[#252429] w-[90%] md:w-[65%] flex h-14 mt-8 rounded-lg items-center"
    >
      <img src="../assets/link.png" alt="" class="w-5 h-5 ml-4 select-none" />
      <input
        type="text"
        class="bg-[#252429] outline-none rounded-lg text-white indent-5 ::placeholder flex-1"
        placeholder="Paste a long link"
        v-model="postData.originalLink"
      />

      <div class="w-2 h-1"></div>
      <button
        class="text-[#1b1921] bg-[#4CBED9] w-20 h-8 rounded-xl text-sm font-medium mr-5"
        @click="sendLinkToShorten"
      >
        Shorten
      </button>
    </div>
    <div
      v-show="showResponse"
      class="animate-fade-down animate-delay-50 animate-ease-in-out animate-fill-forwards flex items-center w-[90%] md:w-[65%] h-16 mt-3 shadow border-[1px] border-[#3E879B] rounded-lg rounded-br-3xl relative"
    >
      <img
        src="../assets/copy-link.png"
        alt=""
        class="w-5 h-5 ml-4 select-none mr-3 cursor-pointer"
        @click="copyLink"
      />
      <div class="flex flex-col justify-center flex-1 overflow-hidden">
        <span class="text-white text-sm font-light opacity-50"
          >Shortened link</span
        >
        <span
          class="text-[#62C5FF] text-lg font-semibold -mt-1 cursor-pointer"
          @click="redirectPage"
          id="id_linkToCopy"
          >{{ shortenedLink }}</span
        >
      </div>
      <img
        src="../assets/arrow-right.png"
        alt=""
        class="w-8 h-6 mr-5 cursor-pointer pl-2"
        @click="redirectPage"
      />
      <div
        class="bg-[#252429] opacity-[47%] w-[100%] h-[100%] absolute -z-10 rounded-br-3xl"
      >
        <!-- background div -->
      </div>
    </div>
  </section>

  <section class="my-24 flex flex-col items-center">
    <h2 class="text-center text-white text-xl font-semibold">
      Clipp.io: Streamline Your Surfing
    </h2>
    <p class="text-white text-center w-80 md:w-96 mt-7">
      Convert lengthy URLs into concise ones with a single click. Maximize
      efficiency and streamline navigation across platforms.
    </p>
  </section>

  <CopyNotificationComponent v-if="showInfoCopy"></CopyNotificationComponent>
</template>

<script lang="ts">
import { ref } from "vue";
import CopyNotificationComponent from "./CopyNotificationComponent.vue";

export default {
  name: "LinkShortenerComponent",
  components: {
    CopyNotificationComponent,
  },
  setup() {
    const postData = ref({
      originalLink: "",
    });

    const showResponse = ref(false);
    const shortenedLink = ref("");

    const showInfoCopy = ref(false);

    const sendLinkToShorten = async () => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData.value),
      };

      fetch("http://localhost:5000/api/link/createLinkShorter", requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }

          return response.json();
        })
        .then((data) => {
          showResponse.value = true;
          shortenedLink.value = data.data.shorterLink;
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const redirectPage = () => {
      window.open(shortenedLink.value, "_blank");
    };

    const copyLink = () => {
      const link = document.getElementById("id_linkToCopy")?.innerText;
      if (link) {
        navigator.clipboard.writeText(link);
        showInfoCopyAnimation();
      }
    };

    const showInfoCopyAnimation = () => {
      showInfoCopy.value = true;
      setTimeout(() => {
        showInfoCopy.value = false;
      }, 6000);
    };

    return {
      sendLinkToShorten,
      postData,
      showResponse,
      shortenedLink,
      redirectPage,
      copyLink,
      showInfoCopy,
    };
  },
};
</script>
