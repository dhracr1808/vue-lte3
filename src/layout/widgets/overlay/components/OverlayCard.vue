<template>
  <div class="col-xl">
    <div class="shadow" :style="style">
      <div class="w-100 h-100 p-3 text-white position-relative">
        <div class="overlay-content">
          <h5 :class="class">Card Title</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            dolorem aspernatur.
          </p>
          <a href="#" :class="class">Last update 2 mins ago</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
  img: String,
});

const style = {
  height: "250px",
  background: `url(${props.img})`,
  backgroundSize: "cover",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}

.overlay-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 1rem;
}
</style>
