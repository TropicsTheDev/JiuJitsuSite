<template>
  <div class="app">
    <header class="app__header">
      <h1 class="app__heading">
        <div class="image-wrapper">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        Douglas Townsend
      </h1>
      <h2 class="app__subheading">No-Gi Jiu-Jitsu Coach and Fighter</h2>
    </header>
    <main>
      <div class="max-width-wrapper">
        <ul>
          <li
            v-for="(link, index) in links"
            @click="setActiveLinkIndex(index)"
            class="link"
            :class="{ 'link--open': activeLinkIndex === index }"
          >
            <h3 class="link__heading">{{ link.title }}</h3>
            <div class="link__wrapper">
              <a :href="link.link" target="_blank">{{ link.text }}</a>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
const links = ref([
  {
    title: "Schedule a private lesson!",
    text: "Click here to book a one on one private lesson with me",
    link: "https://calendly.com/dtownjiujitsu/privatelesson",
  },
  {
    title: "Get discounted Jiu-Jitsu gear",
    text: "Click here to get 15% off ProtectYaNeckMMA products",
    link: "https://invi.tt/F6AP",
  },
]);

const activeLinkIndex = ref(null);

function setActiveLinkIndex(index) {
  if (index === activeLinkIndex.value) {
    activeLinkIndex.value = null;
  } else {
    activeLinkIndex.value = index;
  }
}
</script>

<style lang="scss">
.app {
  background-color: $color_background;
  min-height: 100%;
  color: $color_white;

  &__header {
    @include center-content;
    padding-top: var(--font-size_3xl);
  }

  &__heading,
  &__subheading {
    text-align: center;
  }
}

.image-wrapper {
  img {
    width: calcRem(159.5);
    height: calcRem(159.5);
    border-radius: 50%;
    object-fit: cover;
  }
}

.max-width-wrapper {
  @include center-self;
  @include center-content;
  max-width: 1599.6px;
  padding: 0;
}

ul {
  @include center-self;
  @include center-content;
  padding: 0;
  list-style: none;
  width: 100%;
  row-gap: var(--font-size_lg);
}

.link {
  background-color: $color_base;
  width: 75%;
  text-align: center;
  padding: 0;
  border-radius: 1em;

  &__heading {
    margin-bottom: 0;
    padding: 0.5em;
  }

  &__wrapper a {
    display: block;
    background-color: $color_accent;
    color: $color_white;
    font-size: var(--font-size_lg);
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out, padding 0.5s ease-in-out;
  }

  &--open &__heading {
    box-shadow: 0 4px 2px -2px gray;
  }

  &--open &__wrapper a {
    max-height: calcRem(300);
    padding: 1em;
    box-shadow: inset 0px calcRem(9) calcRem(16) #{$color_background}80;
  }
}
</style>
