<script>
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {},
  updated() {},
};
</script>

<template>
  <RouterView />
</template>

<style scoped>
@media only screen and (min-width: 1000px) {
  #navbarNav {
    display: flex !important;
    justify-content: flex-end !important;
  }
}

.log-out {
  color: #1a73e8;
}
a {
  cursor: pointer;
}
</style>
