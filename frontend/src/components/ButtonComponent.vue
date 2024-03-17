<template>
  <section class="flex mb-20 justify-center">
    <!-- bg-[#B2F1FF] text-[#3C3C3C] -->
    <button
      class="text-base font-medium h-10 w-44 rounded-lg hover:bg-red-400"
      :style="{ backgroundColor: backgroundColor, color: textColor }"
    >
      {{ title }}
    </button>
  </section>
</template>

<script lang="ts">
export default {
  name: "ButtonComponent",
  props: {
    title: String,
    backgroundColor: String,
    textColor: String,
  },
  setup() {
    const setHoverActiveColors = (hex: string) => {
      // Convertimos el color hexadecimal a RGB
      let r = parseInt(hex.substring(1, 3), 16);
      let g = parseInt(hex.substring(3, 5), 16);
      let b = parseInt(hex.substring(5, 7), 16);

      // Ajustamos los valores de RGB para obtener el color hover (600)
      const hoverR = Math.round(r * 0.9);
      const hoverG = Math.round(g * 0.9);
      const hoverB = Math.round(b * 0.9);
      const hoverColor = `#${((hoverR << 16) | (hoverG << 8) | hoverB)
        .toString(16)
        .padStart(6, "0")}`;

      // Ajustamos los valores de RGB para obtener el color active (700)
      const activeR = Math.round(r * 0.8);
      const activeG = Math.round(g * 0.8);
      const activeB = Math.round(b * 0.8);
      const activeColor = `#${((activeR << 16) | (activeG << 8) | activeB)
        .toString(16)
        .padStart(6, "0")}`;

      // Devolvemos un objeto con las propiedades hover y active
      return {
        hover: hoverColor,
        active: activeColor,
      };
    };
    setHoverActiveColors("#47474b");

    return {
      setHoverActiveColors,
    };
  },
};
</script>

<style lang="scss" scoped></style>
