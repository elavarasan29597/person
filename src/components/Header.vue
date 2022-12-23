<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    logOut() {
      localStorage.removeItem("loginUser");
      this.$router.push({ name: "Login" });
    },
  },
  updated() {},
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light b-shadow header">
    <div class="container d-flex justify-content-between">
      <a class="navbar-brand"
        ><img
          src="https://www.intellectdesign.com/wp-content/uploads/2022/07/Intellect-logo-new-02.svg"
          alt=""
          width="80"
          height="40"
          class="d-inline-block align-text-top"
      /></a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mr-auto" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item me-lg-2 d-none">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item ms-lg-2 me-lg-5 d-none">
            <RouterLink class="nav-link" aria-current="page" to="/dynamic"
              >Dynamic Page</RouterLink
            >
          </li>
          <li class="nav-item ms-lg-5">
            <a class="nav-link log-out" aria-current="page" @click="logOut()">
              Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
  /* text-transform: uppercase; */
}
a {
  cursor: pointer;
}

.router-link-active {
  color: #1a73e8 !important;
  border-bottom: 2px solid #1a73e8 !important;
}

.b-shadow {
  /* box-shadow: 0px 0px 15px 1px #d8d8d8; */
  position: sticky;
  top: 2px;
}
#products {
  z-index: -99 !important;
}
.header {
  z-index: 99 !important;
}
</style>
