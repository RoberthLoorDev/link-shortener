<template>
  <section class="mb-20 flex justify-center">
    <div
      class="w-[75%] bg-[#1E2227] flex justify-center rounded-lg border-[#3E879B] border-2 flex-col"
    >
      <h3 class="text-white text-xl font-semibold ml-16 mt-10 pb-10">Links</h3>

      <div class="max-h-[30rem] overflow-y-auto">
        <table class="max-w-[90%] ml-16 my-7">
          <tr class="mb-20">
            <th class="text-left text-white text-sm font-semibold">
              Shortened link
            </th>
            <th class="text-left text-white text-sm font-semibold">
              Original link
            </th>
            <th class="text-left text-white text-sm font-semibold">Clicks</th>
          </tr>
          <tbody class="overflow-y-auto max-h-20">
            <tr
              v-for="(link, index) in linksArray"
              :key="index"
              class="border-b-2 border-blue-400 border-opacity-20 mb-40 h-12"
            >
              <td class="text-left text-sm text-[#62C5FF] w-1/4 relative">
                <img
                  @click="copyLink"
                  class="w-5 h-5 absolute -ml-8 cursor-pointer"
                  src="../assets/copy-link.png"
                  alt=""
                />
                <span id="id_link_table">{{ link.shorterLink }}</span>
              </td>
              <td class="text-left text-sm text-white w-1/2">
                {{ link.originalLink }}
              </td>
              <td class="text-left text-sm text-white w-1/4">
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
import { ref } from "vue";

export default {
  name: "TableLinkComponent",
  components: { NotificationComponent },
  setup() {
    const showIfCopiedText = ref(false);

    //array para guardar enlaces
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

    //copiar link
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

    //consultar los clicks
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
          // Iterar sobre los datos recibidos
          data.data.forEach((item: any) => {
            // Encontrar el enlace correspondiente en links.value
            const linkToUpdate = links?.value.find(
              (link) => link.shorterLink === item.shorterLink
            );

            // Si se encuentra el enlace, actualizar el número de clics
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

<style lang="scss" scoped></style>
