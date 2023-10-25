<template>
  <li class="link" :class="{ 'link--open': open }">
    <h3 class="link__heading">{{ link.title }}</h3>
    <div class="link__wrapper">
      <a :href="link.link" target="_blank">{{ link.text }}</a>
    </div>
  </li>
</template>

<script setup>
const props = defineProps(["link", "open"]);
</script>

<style lang="scss">
.link {
  background-color: $color_base;
  width: 75%;
  text-align: center;
  padding: 0;
  border-radius: 0.5em;
  color: white;

  &__heading {
    margin-bottom: 0;
    padding: 0.5em;
  }

  &__wrapper a {
    display: block;
    background-color: $color_accent;
    background-color: #f5e4f6;
    /* color: $color_white; */
    color: #333;
    font-size: var(--font-size_lg);
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out, padding 0.5s ease-in-out;
  }

  &--open &__wrapper a {
    max-height: calcRem(300);
    padding: 1em;
    box-shadow: inset 0px calcRem(9) calcRem(16) #{$color_background}80;
  }
}
</style>
