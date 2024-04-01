<template>
  <section class="mb-20 flex justify-center">
    <div
      class="w-[90%] md:w-[65%] flex justify-center rounded-lg border-[#3E879B] border-2 flex-col _ shadow-background"
    >
      <h3 class="text-white text-xl font-semibold md:mx-14 mx-7 mt-5">Links</h3>

      <section class="md:mx-14 mx-7">
        <table class="my-7 flex flex-col">
          <thead class="flex w-[100%]">
            <tr class="flex justify-between w-[100%] mb-5">
              <th class="text-left text-white text-sm font-semibold w-[45%]">
                Shortened link
              </th>
              <th
                class="text-left text-white text-sm font-semibold w-[45%] hidden lg:block"
              >
                Original link
              </th>
              <th
                class="text-left text-white text-sm font-semibold w-[10%] mr-5 hidden lg:block"
              >
                Clicks
              </th>
            </tr>
          </thead>
          <tbody
            class="max-h-[25rem] min-h-[25rem] flex flex-col overflow-y-auto w-full"
          >
            <tr
              v-for="(link, index) in linksArray"
              :key="index"
              class="border-b-2 border-blue-400 border-opacity-20 h-12 flex mb-5 pb-2"
            >
              <td
                class="text-left text-sm text-[#62C5FF] relative w-[45%] flex"
              >
                <img
                  @click="copyLink"
                  class="w-5 h-5 cursor-pointer mr-2"
                  src="../assets/copy-link.png"
                  alt=""
                />
                <a :href="link.shorterLink" target="_blank" id="id_link_table">
                  <span class="max-w-[1rem]">
                    {{ link.shorterLink }}
                  </span>
                </a>
              </td>
              <td
                class="text-left text-sm text-white w-[45%] truncate hidden lg:block"
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
      </section>
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
import { ref } from "vue";

export default {
  name: "TableLinkComponent",
  components: { NotificationComponent },
  setup() {
    const showIfCopiedText = ref(false);

    //array to save links
    const linksArray = ref<LinkToSaveLocalStorageInterface[]>([]);
    const linkName = ref("");

    const getLinksSavedInLocalStorage = () => {
      const storedLinks = localStorage.getItem("savedLinks");
      if (!storedLinks) return;

      const linksToArray = JSON.parse(
        storedLinks
      ) as LinkToSaveLocalStorageInterface[];

      linksArray.value = linksToArray;

      return linksArray;
    };

    //copy link
    const copyLink = () => {
      const link = document.getElementById("id_link_table")?.innerText;

      if (link) {
        console.log(link);
        navigator.clipboard.writeText(link);
        showIfCopiedText.value = true;

        setTimeout(() => {
          showIfCopiedText.value = false;
        }, 7000);
      }
    };

    //get clicks numbers
    const getClicksOfLinks = () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch("http://localhost:5000/api/link/getClicks", requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then((data) => {
          const links = getLinksSavedInLocalStorage();
          data.data.forEach((item: any) => {
            const linkToUpdate = links?.value.find(
              (link) => link.shorterLink === item.shorterLink
            );

            // If link is found, update the number of clicks
            if (linkToUpdate) {
              linkToUpdate.clicks = item.clicks;
            }
          });

          console.log(links?.value);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getClicksOfLinks();

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
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.118);
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
