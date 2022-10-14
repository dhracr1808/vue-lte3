<template>
  <div class="content-login">
    <div class="popop" v-show="userStore.popop">
      <div class="popop-content card p-4">
        <div class="fs-1 text-center text-danger">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>

        <div class="my-3">
          <p class="text-center m-0">
            <small><b>Email or password is wrong </b></small>
          </p>
        </div>
        <button
          type="button"
          class="btn btn-danger fw-bold"
          @click="userStore.togglePopop"
          style="width: 100%"
        >
          ok
        </button>
      </div>
    </div>

    <div class="">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        alt=""
      />
    </div>
    <div class="">
      <form class="form" @submit.prevent="handleForm">
        <div class="ventana1" v-if="!nextModal">
          <h3 class="fw-light text-center text-primary">Iniciar session</h3>
          <div class="form-group">
            <div class="content-input">
              <input
                type="text"
                id="username"
                class="form-control"
                placeholder="username"
                @blur="input"
                @keyup="input"
                v-model="email"
                autofocus="true"
              />
              <label for="username" class="form-label"
                >correo electronico</label
              >
              <div class="icon-input">
                <i class="fa-regular fa-circle-check success"></i>
                <i class="fa-regular fa-circle-xmark error"></i>
              </div>
            </div>

            <div class="">
              <p class="mt-1 message-error">
                <small class="fw-bolder">Esciba un e-mail válido</small>
              </p>
            </div>
          </div>

          <div class="form-group">
            <button
              type="button"
              class="btn btn-primary p-2 fw-bold"
              style="width: 100%"
              @click="changeNextModal"
            >
              siguiente
            </button>
            <span class="d-block mt-3 fw-bodler">
              crear cuenta
              <router-link to="/register">aquí</router-link>
            </span>
          </div>
          <LoginVue />
          <OptionsSession />
        </div>

        <div v-if="nextModal" class="mt-5 pt-3">
          <h3 class="email d-flex justify-content-center fw-bolder mb-3 fs-6">
            <span
              class="bg-light py-2 px-4 d-flex justify-content-center align-items-center gap-2 rounded-pill fw-light"
              @click="changeNextModal"
            >
              <i class="fa-solid fa-user text-muted"></i>
              {{ email }}
              <i class="fa-solid fa-angle-down text-muted"></i>
            </span>
          </h3>
          <div class="form-group mt-4">
            <div class="content-input">
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="password"
                v-model="password"
                autofocus
              />
              <label for="password" class="form-label"
                >Ingresa tu Contraseña</label
              >
              <div class="icon-input">
                <i class="fa-regular fa-circle-check success"></i>
                <i class="fa-regular fa-circle-xmark error"></i>
              </div>
            </div>

            <div class="">
              <p class="p-0 m-0 message-error">
                <small class="fw-bolder"></small>
              </p>
            </div>
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary p-2 fw-bolder"
              style="width: 100%"
            >
              Ingresar
            </button>
            <div class="content-loader" v-if="userStore.loadingUser">
              <span class="loader"></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginVue from "../layout/Login/Login.vue";
import OptionsSession from "./../layout/Login/OptionSession.vue";
import { useUserStore } from "./../store/userStore";

const userStore = useUserStore();

const email = ref("");
const password = ref("");
const input = (e) => {
  const regex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (regex.test(email.value)) {
    e.target.parentElement.parentElement.classList.remove("error");
    e.target.parentElement.parentElement.classList.add("success");
    if (e.key === "Enter") {
      changeNextModal();
      const password = document.querySelector("input[type=password]");
      if (!password) return;
      e.target.autofocus = false;
      console.dir(e.target);
      password.autofocus = true;
    }
  } else {
    e.target.parentElement.parentElement.classList.remove("success");
    e.target.parentElement.parentElement.classList.add("error");
  }
};

const nextModal = ref(false);

const handleForm = () => {
  const regex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (regex.test(email.value) && password.value)
    userStore.loginUser(email.value, password.value);
};

const changeNextModal = () => {
  const regex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (regex.test(email.value)) nextModal.value = !nextModal.value;
};
</script>

<style lang="scss" scoped>
.wrapper.separate .content-login,
.wrapper.full .content-login {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  grid-template-rows: 2fr;

  gap: 0.5rem;
}
.wrapper.separate .content-login {
  min-height: calc(100vh - (4rem + 80px));
}
.wrapper.full .content-login {
  min-height: calc(100vh - (80px));
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.form {
  margin: 2rem auto;
  width: 60%;
  position: relative;
}

.form .form-group {
  margin: 1rem 0;
  position: relative;
}

.form-label {
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  padding: 0.2rem 0.5rem;
  cursor: text;
  font-size: 900;
}

.form-control {
  color: rgb(126, 126, 126);
  font-weight: 900;
  padding: 0.7rem 2rem 0.7rem 1rem;
}
.form-control:focus {
  box-shadow: none;
}

.form-control::placeholder {
  color: #fff;
}

.form-control ~ .form-label {
  transform: translateY(-140%);
  font-size: 0.8rem;
  color: #adadad;
}
.form-control:placeholder-shown ~ .form-label {
  transform: translateY(0%);
  font-size: 1rem;
}
.form-control:focus ~ .form-label {
  transform: translateY(-140%);
  font-size: 0.8rem;
  color: #187ddb;
}

.icon-input {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-group.success .icon-input .success {
  opacity: 1;
}
.form-group .icon-input .error {
  opacity: 0;
}
.form-group.error .icon-input .error {
  color: rgb(238, 63, 92);
  opacity: 1;
}

.form-group.success .icon-input .error {
  opacity: 0;
}
.form-group .icon-input .success {
  opacity: 0;
  color: #187ddb;
  position: absolute;
}

.icon-input.success .icon-input .success {
  opacity: 1;
}

.form-group.error .content-input input {
  border: 1px solid rgb(238, 63, 92);
}

/* .form-group.success .content-input input {
  border: 1px solid rgb(6, 224, 97);
} */

.content-input {
  position: relative;
}
.message-error {
  position: relative;
  bottom: 0;
  color: rgb(238, 63, 92);
  display: none;
}

.form-group.error .message-error {
  display: block;
}

.content-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #187ddb;
}

/* =================== loader =========== */

.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 32px 0 #fff, -32px 0 #fff;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #fff2;
    box-shadow: 32px 0 #fff2, -32px 0 #fff;
  }
  50% {
    background-color: #fff;
    box-shadow: 32px 0 #fff2, -32px 0 #fff2;
  }
  100% {
    background-color: #fff2;
    box-shadow: 32px 0 #fff, -32px 0 #fff2;
  }
}

.popop {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 99;
  display: grid;
  place-items: center;
}

.popop-content {
  width: 90%;
  max-width: 400px;
}
.email span {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease;
}

.email span:hover {
  background-color: rgb(238, 238, 238) !important;
  cursor: pointer;
}
</style>
