<template>
  <Transition name="slide-in-down">
    <div v-if="isShown" class="fixed flex top-0 w-[100%] justify-center">
      <div
        class="flex py-3 px-5 justify-center items-center rounded-lg mt-3 shadow-info-copy"
        :style="{ backgroundColor: color }"
      >
        <img :src="image" class="w-4 h-4 mr-2" alt="" />
        <span class="text-white text-base">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { ref } from "vue";
import { NotificationConfigInterface } from "../interfaces/interfaces";
export default {
  name: "NotificationComponent",
  props: {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },

  // eslint-disable-next-line
  setup(props: any) {
    const isShown = ref(false);

    const notificationConfig: NotificationConfigInterface = {
      success: {
        image: require("../assets/success.png"),
        color: "#27452a",
      },
      info: {
        image: require("../assets/info.png"),
        color: "#1F2933",
      },
      danger: {
        image: require("../assets/danger.png"),
        color: "#452727",
      },
    };

    const showNotification = () => {
      setTimeout(() => {
        isShown.value = true;
        hideNotification();
      }, 500);
    };

    showNotification();

    const hideNotification = () => {
      setTimeout(() => {
        isShown.value = false;
      }, 5000);
    };

    const { image, color } =
      notificationConfig[props.type] || notificationConfig.info;
    return { isShown, image, color };
  },
};
</script>

<style lang="scss" scoped>
.shadow-info-copy {
  box-shadow: 2px 2px 20px none;
}

.slide-in-down-enter-active {
  transition: all 0.3s ease-out;
}

.slide-in-down-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-in-down-enter-from,
.slide-in-down-leave-to {
  transform: translateY(-30px);
}
</style>
