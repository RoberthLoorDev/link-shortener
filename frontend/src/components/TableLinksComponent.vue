<template>
  <section class="mb-20 flex justify-center w-[95%] md:w-[50rem]">
    <div
      class="w-full flex justify-center rounded-lg border-[#3E879B] border-2 flex-col _ shadow-background"
    >
      <h3 class="text-white text-xl font-semibold mx-7 mt-5">Links</h3>

      <div class="mx-7">
        <table class="my-7 flex flex-col">
          <thead class="flex w-[100%]">
            <tr class="flex justify-between w-[100%] mb-5">
              <th class="text-left text-white text-sm font-semibold w-[15%]">
                Shortened link
              </th>
              <th
                class="text-left text-white text-sm font-semibold w-[45%] hidden lg:block"
              >
                Original link
              </th>
              <th
                class="text-left text-white text-sm font-semibold w-[10%] hidden lg:block"
              >
                Clicks
              </th>
            </tr>
          </thead>
          <tbody
            class="flex flex-col overflow-y-auto w-full max-h-[25rem] min-h-[25rem]"
          >
            <div
              v-if="linksArray.length == 0"
              class="h-[20rem] flex justify-center items-center text-white text-base"
            >
              <span class="opacity-30">No saved links</span>
            </div>
            <tr
              v-else
              v-for="(link, index) in linksArray"
              :key="index"
              class="border-b-2 border-blue-400 border-opacity-20 h-12 flex mb-5 pb-2"
            >
              <td
                class="text-left text-sm text-[#62C5FF] relative w-[30%] flex"
              >
                <img
                  @click="copyLink"
                  class="w-5 h-5 cursor-pointer mr-2"
                  src="../assets/copy-link.png"
                  alt=""
                />
                <a :href="link.shorterLink" target="_blank" id="id_link_table">
                  <span>
                    {{ link.shorterLink }}
                  </span>
                </a>
              </td>
              <td
                class="text-left text-sm text-white w-[70%] truncate hidden lg:block"
              >
                <div class="max-w-[90%] truncate">
                  <span class="w-[10rem]">
                    {{ link.originalLink }}
                  </span>
                </div>
              </td>
              <td class="text-left text-sm text-white w-[10%] hidden lg:block">
                {{ link.clicks }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <NotificationComponent
    type="info"
    message="Copied link"
    v-if="showIfCopiedText"
  ></NotificationComponent>
</template>

<script lang="ts">
import { LinkToSaveLocalStorageInterface } from "@/interfaces/interfaces";
import NotificationComponent from "./NotificationComponent.vue";
import { onMounted, ref } from "vue";

import { getClicksOfLinks } from "@/utils";

export default {
  name: "TableLinkComponent",
  components: { NotificationComponent },
  setup() {
    const showIfCopiedText = ref(false);

    //array to save links
    const linksArray = ref<LinkToSaveLocalStorageInterface[]>([]);
    const linkName = ref("");
    //copy link
    const copyLink = () => {
      const link = document.getElementById("id_link_table")?.innerText;

      if (link) {
        navigator.clipboard.writeText(link);
        showIfCopiedText.value = true;

        setTimeout(() => {
          showIfCopiedText.value = false;
        }, 7000);
      }
    };

    onMounted(async () => {
      linksArray.value = await getClicksOfLinks(); // Asigna los enlaces actualizados a linksArray
    });

    // localStorage.clear();

    return {
      copyLink,
      showIfCopiedText,
      linksArray,
    };
  },
};
</script>

<style lang="scss" scoped>
.shadow-table:hover {
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.118);
}

/* Styles for tbody scroll */
tbody::-webkit-scrollbar {
  width: 5px; /* Scroll Width */
}

tbody::-webkit-scrollbar-track {
  background-color: transparent;
}

tbody::-webkit-scrollbar-thumb {
  background-color: #4cbed9;
  border-radius: 4px;
}

tbody::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
