<template>
  <ul>
    <LinkItem
      v-for="(link, index) in links"
      @click="setActiveLinkIndex(index)"
      :link="link"
      :open="index === activeLinkIndex"
    />
  </ul>
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
ul {
  @include center-self;
  @include center-content;
  padding: 0;
  list-style: none;
  width: 100%;
  row-gap: var(--font-size_lg);
}
</style>
