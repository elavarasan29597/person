<script>
import usersJson from "../utilities/users.json";
export default {
  data() {
    return {
      loginUser: {
        username: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  computed: {
    requiredUsername: function () {
      return this.loginUser.username === "";
    },
    requiredPassword: function () {
      return this.loginUser.password === "";
    },
  },
  created() {},
  methods: {
    login() {
      if (this.requiredPassword && this.requiredUsername) {
        this.errorMessage = "Please enter username and password";
        return false;
      } else if (this.requiredUsername) {
        this.errorMessage = "Please enter username";
        return false;
      } else if (this.requiredPassword) {
        this.errorMessage = "Please enter password";
        return false;
      }

      const { username, password } = this.loginUser;

      const user = usersJson.find(
        (x) => x.username === username && x.password === password
      );

      if (!user) {
        this.errorMessage = "User is not exists in this Application";
        return false;
      }

      localStorage.setItem("loginUser", JSON.stringify(user));

      this.$router.push({ name: "Dashboard" });
    },
  },
  updated() {},
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<template>
  <div class="container login-container">
    <div class="top-content">
      <img
        src="https://www.intellectdesign.com/wp-content/uploads/2022/07/Intellect-logo-new-02.svg"
        alt=""
      />
      <h2 class="mb-4">Login your Intellect Design</h2>
      <!-- <p class="heading">Use your Google Account</p> -->
    </div>
    <form @submit.prevent="login">
      <div class="inputs">
        <input
          type="text"
          v-model="loginUser.username"
          name="username"
          id="username"
          class="input"
          tabindex="-1"
        />
        <label
          for="username"
          :class="loginUser.username != '' ? 'active-input' : ''"
          class="input-label"
          >Username</label
        >
      </div>

      <div class="inputs">
        <input
          type="password"
          v-model="loginUser.password"
          name=""
          id="password"
          class="input"
        />
        <label
          for="password"
          :class="loginUser.password != '' ? 'active-input' : ''"
          class="input-label"
          >Password</label
        >
      </div>
      <div class="text-left text-danger">
        {{ errorMessage }}
      </div>

      <div class="btn-group mt-4 text-right">
        <button class="next-btn float-right">Login</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #1a73e8;
  display: block;
  font-size: 14px;
}
.container {
  max-width: 450px;
  border: 1px solid rgb(228, 228, 228);
  margin: auto;
  margin-top: 7rem;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
}
.top-content {
  text-align: center;
}
img {
  width: 80px;
  margin: 10px 0;
}
h2 {
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 10px;
}
.heading {
  margin-bottom: 30px;
}
input[type="text"] {
  display: block;
  border: 1px solid rgb(228, 228, 228);
  font-size: 16px;
  width: 100%;
  height: 55px;
  padding: 0 15px;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  position: relative;
}

input[type="password"] {
  display: block;
  border: 1px solid rgb(228, 228, 228);
  font-size: 16px;
  width: 100%;
  height: 55px;
  padding: 0 15px;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  position: relative;
}

.inputs {
  position: relative;
}
.input-label {
  position: absolute;
  top: 15px;
  font-size: 1.1rem;
  left: 14px;
  color: rgb(122, 122, 122);
  font-weight: 100;
  transition: 0.1s ease;
  background-color: white;
  padding: 0 5px;
}

input[type="text"]:focus ~ .input-label {
  top: -7px;
  color: #1864c9;
  font-size: 13px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
}
input[type="text"]:target ~ .input-label {
  top: -7px;
  color: #1864c9;
  font-size: 13px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
}
.input:focus {
  border: 2px solid #1a73e8;
}
.link-btn {
  margin-bottom: 2rem;
}
.color {
  color: rgb(90, 90, 90);
  font-size: 14px;
  margin-bottom: 5px;
}
.btn-group {
  display: flex;
  justify-content: flex-end;
}
.create-btn {
  border: none;
  background-color: transparent;
  color: #1a73e8;
  font-weight: bold;
  cursor: pointer;
  height: 35px;
  padding: 10px 5px;
}
.next-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
  height: 38px;
  padding: 0 25px;
  border-radius: 5px;
  cursor: pointer;
}
.create-btn:hover {
  background-color: #e8f2ff6e;
}
.next-btn:hover {
  background-color: #1864c9;
}

input[type="password"]:focus ~ .input-label {
  top: -7px;
  color: #1864c9;
  font-size: 13px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
}
input[type="password"]:target ~ .input-label {
  top: -7px;
  color: #1864c9;
  font-size: 13px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
}

@media only screen and (max-width: 400px) {
  .container {
    margin: auto;
    margin-top: 7rem;
    margin-left: 10px;
    margin-right: 10px;
    max-width: 370px;
  }
  .login-container {
    max-width: 290px !important;
  }
}

@media only screen and (max-width: 800px) {
  .container {
    margin: auto;
    margin-top: 7rem;
    max-width: 470px;
  }
}

.active-input {
  top: -7px;
  color: #1864c9;
  font-size: 13px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
}

.text-left {
  text-align: left !important;
}
</style>
