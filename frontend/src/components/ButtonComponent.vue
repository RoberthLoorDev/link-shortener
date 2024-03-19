<template>
  <button
    class="text-base font-medium rounded-lg p-2 justify-center items-center"
    :style="{
      color: textColor ? textColor : 'white',
      '--hover-color': hoverColor,
      '--active-color': activeColor,
      '--background-color': bgColor,
      height: height ? height + 'px' : '40px',
      width: width ? width + 'px' : '140px',
    }"
  >
    <span>
      {{ title ? title : "Click me!" }}
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonComponent",

  props: {
    title: String,
    backgroundColor: String,
    textColor: String,
    width: Number,
    height: Number,
  },

  // eslint-disable-next-line
  setup(props: any) {
    const setHoverActiveColors = (hex: string) => {
      if (!hex) hex = "#4CBED9";
      let r = parseInt(hex.substring(1, 3), 16);
      let g = parseInt(hex.substring(3, 5), 16);
      let b = parseInt(hex.substring(5, 7), 16);

      const hoverR = Math.round(r * 0.8);
      const hoverG = Math.round(g * 0.8);
      const hoverB = Math.round(b * 0.8);
      const hoverColor = `#${((hoverR << 16) | (hoverG << 8) | hoverB)
        .toString(16)
        .padStart(6, "0")}`;

      const activeR = Math.round(r * 0.7);
      const activeG = Math.round(g * 0.7);
      const activeB = Math.round(b * 0.7);
      const activeColor = `#${((activeR << 16) | (activeG << 8) | activeB)
        .toString(16)
        .padStart(6, "0")}`;

      const bgColor = hex;

      return {
        bgColor,
        hoverColor,
        activeColor,
      };
    };

    const { hoverColor, activeColor, bgColor } = setHoverActiveColors(
      props.backgroundColor
    );

    return {
      hoverColor,
      activeColor,
      bgColor,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: var(--background-color);
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--hover-color);
}

button:active {
  background-color: var(--active-color);
}
</style>
