<template>
  <button
    class="text-base font-medium h-10 w-44 rounded-lg"
    :style="{
      color: textColor,
      '--hover-color': hoverColor,
      '--active-color': activeColor,
      '--background-color': backgroundColor,
    }"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonComponent",

  props: {
    title: String,
    backgroundColor: String,
    textColor: String,
  },

  // eslint-disable-next-line
  setup(props: any) {
    const setHoverActiveColors = (hex: string) => {
      let r = parseInt(hex.substring(1, 3), 16);
      let g = parseInt(hex.substring(3, 5), 16);
      let b = parseInt(hex.substring(5, 7), 16);

      const hoverR = Math.round(r * 0.9);
      const hoverG = Math.round(g * 0.9);
      const hoverB = Math.round(b * 0.9);
      const hoverColor = `#${((hoverR << 16) | (hoverG << 8) | hoverB)
        .toString(16)
        .padStart(6, "0")}`;

      const activeR = Math.round(r * 0.8);
      const activeG = Math.round(g * 0.8);
      const activeB = Math.round(b * 0.8);
      const activeColor = `#${((activeR << 16) | (activeG << 8) | activeB)
        .toString(16)
        .padStart(6, "0")}`;

      const backgroundColor = hex;

      return {
        backgroundColor,
        hoverColor,
        activeColor,
      };
    };

    const { hoverColor, activeColor } = setHoverActiveColors(
      props.backgroundColor
    );

    return {
      hoverColor,
      activeColor,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: var(--background-color);
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: var(--hover-color);
}

button:active {
  background-color: var(--active-color);
}
</style>
