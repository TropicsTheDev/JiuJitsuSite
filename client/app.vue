<template>
  <div class="app">
    <header class="app__header">
      <h1 class="app__heading">
        <div class="image-wrapper">
          <img src="./assets/images/me.jpeg" alt="" />
        </div>
        Douglas Townsend
      </h1>
      <h2 class="app__subheading">No-Gi Jiu-Jitsu</h2>
    </header>
    <main>
      <div class="max-width-wrapper">
        <LinkList />
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script setup></script>

<style lang="scss">
.app {
  background-color: $color_background;
  background-size: cover;
  /* background-image: url("./assets/images/meatacomp.jpg"); */
  min-height: 100%;
  color: $color_white;

  &__header {
    @include center-content;
    padding-top: var(--font-size_3xl);
  }

  &__heading {
    margin-bottom: 0.3em;
    /* -webkit-text-stroke: 1px black; */
  }

  &__heading,
  &__subheading {
    text-align: center;
    /* -webkit-text-stroke: 1px black; */
  }
}

.image-wrapper {
  img {
    width: calcRem(212.61);
    height: calcRem(212.61);
    border-radius: 50%;
    object-fit: cover;
    object-position: 60% 0;
  }
}

.max-width-wrapper {
  @include center-self;
  @include center-content;
  max-width: 1599.6px;
  padding: 0;
}
</style>
