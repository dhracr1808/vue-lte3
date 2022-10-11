<template>
  <HomeLayout />

  <button @click="notification">notification</button>

  <div class="container-data">
    <Chart type="radar" id="myChart" />
    <Chart type="line" id="otrochart" />
    <Chart type="bar" id="charBar" />
  </div>
</template>

<script setup>
import { toaster } from "./../components/notifications/notifications";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./../firebase";
import { onMounted } from "vue";
import HomeLayout from "./../layout/Home/Home.vue";
import Chart from "./../components/graficos/Chart.vue";

const notification = () => {
  toaster.message(
    () => `<div class="d-flex justify-content-center align-items-center gap-2" >
      <div class="d-flex  bg-danger" style='width: 60px; height: 60px' > 
          <img class="w-100 h-100" style="object-fit: cover" src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/Naruto-Madara-Uchiha-se-convierte-en-un-personaje-de-Dragon-Ball-One-Piece-y-Kimetsu-no-Yaiba-en-este-fanart.jpg?fit=1280%2C720&quality=80&ssl=1"/>
        </div>
      <div>
        <h3 class="m-0  fs-6 fw-bolder" > titulo de la notificacion </h3>
        <p style='width: 250px' > Description de la notificaicon </p>
        </div>
        </div>`
  );
};

const activarMensajes = async () => {
  const token = await getToken(messaging, {
    vapidKey:
      "BFsg7sgyi9qDovXpW0pP35-bcj_ebdTOBBIn_MtbV3D_67FPtZEOZG1xSEy9p86AMbHUceZXiJgGojv3VVSYtls",
  }).catch((error) => console.log(error));

  /* if (token) console.log("tu token:", token); */
  if (!token) console.log("no tienes token, rey");
};

onMounted(() => {
  activarMensajes();
  return onMessage(messaging, (message) => {
    toaster.message(
      () => `
     <div class="d-flex justify-content-center align-items-center gap-2" >
      <div class="d-flex" style='width: 60px; height: 60px' > 
          <img class="w-100 h-100" style="object-fit: cover" src="${message.notification.image}" />
        </div>
      <div>
        <h3 class="m-0  fs-6 fw-bolder" > ${message.notification.title} </h3>
        <p style='width: 250px' >${message.notification.body} </p>
        </div>
        </div>
      `
    );
  });
});
</script>

<style lang="scss" scoped></style>
