<template>
  <div class="width-methods m-0 p-0">
    <p class="options-sessions">o continua con</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.width-methods {
  display: flex;
  align-items: center;
  height: 20px;
  justify-content: center;
  position: relative;
}
.width-methods::before {
  content: "";
  background-color: #dbdbdb;
  height: 1px;
  width: 50%;
  margin: 0;
  padding: 0;
}
.width-methods::after {
  content: "";
  background-color: #dbdbdb;
  height: 1px;
  width: 50%;
  margin: 0;
  padding: 0;
}

.options-sessions {
  position: absolute;
  top: 0;
  left: 30%;
  bottom: 0;
  right: 30%;
  margin: auto;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #adadad;
  font-weight: 900;
  font-family: sans-serif;
  font-size: 0.9rem;
}
</style>
