<template>
  <div class="content-loader">
    <span class="loader"></span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content-loader {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  display: grid;
  place-items: center;
  background-color: rgb(255, 255, 255);
}

.loader {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
}

.loader:before,
.loader:after {
  border-radius: 50%;
  content: "";
  display: block;
  height: 20px;
  width: 20px;
}
.loader:before {
  animation: ball1 1s infinite;
  background-color: rgb(228, 36, 61);
  box-shadow: 30px 0 0 #0e66d8;
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 1s infinite;
  background-color: #0e66d8;
  box-shadow: 30px 0 0 rgb(228, 36, 61);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  50% {
    transform: rotate(360deg) scale(1.2);
  }
  100% {
    transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 rgb(228, 36, 61);
  }
  50% {
    box-shadow: 0 0 0 rgb(228, 36, 61);
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 rgb(228, 36, 61);
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #0e66d8;
  }
  50% {
    box-shadow: 0 0 0 #0e66d8;
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #0e66d8;
    margin-top: 0;
  }
}
</style>
