<template>
  <div class="col-xl col-md-6 mb-2">
    <div class="shadow-sm border rounded">
      <div style="border-bottom: 1px solid #44444430">
        <div class="p-2 rounded-top" :class="class">
          <div style="padding: 0.4rem">
            <div class="d-flex align-items-center gap-3">
              <div class="img_profile">
                <img
                  src="https://adminlte.io/themes/v3/dist/img/user7-128x128.jpg"
                  alt="img-profile"
                />
              </div>
              <div>
                <span class="d-block fs-4 fw-lighter"> Nadia Carmichael </span>
                <span> Lead Developer </span>
              </div>
            </div>
          </div>
        </div>
        <div class="border p-2 px-3">
          <div class="d-flex justify-content-between">
            <a href="#" class="fw-light">Proyects</a>
            <span class="d-flex align-items-center">
              <small
                class="rounded bg-primary text-white"
                style="font-size: 0.7rem; padding: 0.1rem 0.3rem"
                >31</small
              >
            </span>
          </div>
        </div>
        <div class="border p-2 px-3">
          <div class="d-flex justify-content-between">
            <a href="#" class="fw-light">Tasks</a>
            <span class="d-flex align-items-center">
              <small
                class="rounded bg-info text-white"
                style="font-size: 0.7rem; padding: 0.1rem 0.3rem"
                >5</small
              >
            </span>
          </div>
        </div>
        <div class="border p-2 px-3">
          <div class="d-flex justify-content-between">
            <a href="#" class="fw-light">Completed Proyects</a>
            <span class="d-flex align-items-center">
              <small
                class="rounded bg-success text-white"
                style="font-size: 0.7rem; padding: 0.1rem 0.3rem"
                >12</small
              >
            </span>
          </div>
        </div>
        <div class="border p-2 px-3">
          <div class="d-flex justify-content-between">
            <a href="#" class="fw-light">Followers</a>
            <span class="d-flex align-items-center">
              <small
                class="rounded bg-danger text-white"
                style="font-size: 0.7rem; padding: 0.1rem 0.3rem"
                >842</small
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
  outline: String,
});

const clase = props.class || props.outline + " border-top border-3";

const bgNumber = props.class || bgColor();

function bgColor() {
  return `bg-${props.outline?.slice(7)}`;
}
</script>

<style lang="scss" scoped>
.img_profile {
  width: 65px;
  height: 65px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
a {
  text-decoration: none;
}
</style>
