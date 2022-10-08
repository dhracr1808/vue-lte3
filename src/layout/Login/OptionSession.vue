<template>
  <div class="row">
    <div
      class="col-xl-6 col-md-6 p-2 d-flex justify-content-center align-items-center"
    >
      <div class="card p-2">
        <div class="d-flex gap-2 justyfy-content-center align-items-center">
          <img :src="iconGoogle" alt="" />
          <span class="title-icon">Google</span>
        </div>
      </div>
    </div>
    <div
      class="col-xl-6 col-md-6 p-2 d-flex justify-content-center align-items-center"
    >
      <div class="card p-1 m-0">
        <div class="d-flex gap-2 justyfy-content-center align-items-center">
          <i class="fa-brands fa-facebook"></i>
          <span>facebook</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconGoogle from "./../assets/descarga.png";
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaecef;
  border: none;
  transition: 0.3s ease;
}

.card:hover {
  background-color: #e7e7e7;
}
.card:hover span {
  color: #353535;
}
img {
  width: 15px;
  height: 15px;
  object-fit: cover;
}
i {
  font-size: 15px;
  color: #0d6efd;
}
.title-icon {
  display: block;
}
span {
  text-transform: capitalize;
  font-family: sans-serif;
  font-weight: 600;
  color: #4b4b4b;
}
</style>
