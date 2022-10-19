<template>
  <div class="col-xl col-md-6 mb-2">
    <div class="shadow-sm border rounded bg-light">
      <div class="content_card_profile">
        <div
          class="content_card_header rounded-top"
          :class="clase"
          :style="bgStyle"
        >
          <div class="text-white p-3" :class="position">
            <h3 class="d-block m-0 fs-4 fw-lighter">{{ name }}</h3>
            <span class="fw-bold"> {{ skill }}</span>
          </div>
        </div>
        <div class="img_profile">
          <img :src="avatar" alt="" />
        </div>
        <div class="h-50">
          <div class="d-flex pb-3 h-100 justify-content-around align-items-end">
            <div class="w-100 text-center">
              <span class="d-block fw-bolder fs-6"> <small>3,200</small> </span>
              <span class="fw-light fs-6"><small>SALES</small></span>
            </div>
            <div class="w-100 text-center border border-bottom-0 border-top-0">
              <span class="d-block fw-bolder fs-6">
                <small>12,200</small>
              </span>
              <span class="fw-light fs-6"><small>FOLLOWERS</small></span>
            </div>
            <div class="w-100 text-center">
              <span class="d-block fw-bolder fs-6">
                <small>35</small>
              </span>
              <span class="fw-light fs-6"><small>PRODUCTS</small></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  class: String,
  img: String,
  name: String,
  skill: String,
  position: String,
  avatar: String,
});

const clase = props.class || props.img;

const bgStyle = computed(() => !props.class && styles);

const styles = {
  background: `linear-gradient(45deg, #22184050, #12121250), url(${props.img})`,
  backgroundSize: "cover",
};
</script>

<style lang="scss" scoped>
.content_card_profile {
  height: 250px;
  position: relative;
}
.content_card_header {
  height: 50%;
}

.img_profile {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  padding: 0.2rem;
  background-color: #fff;
}
</style>
