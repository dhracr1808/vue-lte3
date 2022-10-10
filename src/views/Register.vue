<template>
  <div class="content-login">
    <div class="">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        alt=""
      />
    </div>
    <div class="">
      <form class="form" @submit.prevent="handleForm">
        <div class="ventana1">
          <h3 class="fw-light text-center text-primary">Crear Cuenta</h3>
          <div class="form-group">
            <div class="content-input">
              <input
                type="email"
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
            <div class="content-input">
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="password"
                @blur="input"
                @keyup="input"
                v-model.trim="password"
              />
              <label for="password" class="form-label"
                >Ingrese contraseña</label
              >
              <div class="icon-input">
                <i class="fa-regular fa-circle-check success"></i>
                <i class="fa-regular fa-circle-xmark error"></i>
              </div>
            </div>

            <div class="">
              <p class="mt-1 message-error">
                <small class="fw-bolder">
                  debe tener al menos 6 caracteres</small
                >
              </p>
            </div>
          </div>
          <div class="form-group" :class="inputConfir">
            <div class="content-input">
              <input
                type="password"
                id="repeat-password"
                class="form-control"
                placeholder="repeat password"
                v-model.trim="confirpass"
              />
              <label for="repeat-password" class="form-label"
                >confirmar contraseña</label
              >
              <div class="icon-input">
                <i class="fa-regular fa-circle-check success"></i>
                <i class="fa-regular fa-circle-xmark error"></i>
              </div>
            </div>

            <div class="">
              <p class="mt-1 message-error">
                <small class="fw-bolder">las contraseñas no coinciden</small>
              </p>
            </div>
          </div>

          <div class="form-group">
            <div class="content-input">
              <button
                type="submit"
                class="btn btn-success"
                style="width: 100%"
                :disabled="btnDisabled"
              >
                Registarse
              </button>
            </div>

            <div class="">
              <p class="mt-1 message-error">
                <small class="fw-bolder">las contraseñas no coinciden</small>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useUserStore } from "./../store/userStore";
import { validate, validateForm } from "./utils";

const userStore = useUserStore();

const email = ref("");
const password = ref("");
const confirpass = ref("");

const inputConfir = computed(() => {
  if (!password.value) return;
  return password.value !== confirpass.value ? "error" : "success";
});

const input = (e) => validate(e, { email, password });

const handleForm = () => {
  if (validateForm(email.value, password.value, confirpass.value)) {
    userStore.registerUser(email.value, password.value);
  }
};

const btnDisabled = computed(
  () => !validateForm(email.value, password.value, confirpass.value)
);
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
  margin: 1.5rem 0;
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
