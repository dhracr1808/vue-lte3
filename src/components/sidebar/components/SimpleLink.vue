<template>
  <div class="simple-link">
    <div v-for="ele in elements" :key="ele">
      <router-link :to="`/${ele.path}`">
        <i v-if="ele.icon" :class="ele.icon"></i>
        <p class="p-0 m-0">{{ ele.text }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  elements: Array,
});
</script>

<style lang="scss" scoped>
.simple-link a:hover {
  background-color: var(--color-hover);
  opacity: 0.6;
}

.simple-link a {
  color: #fff;
  text-decoration: none;
  margin: 0;
  padding: 0.5rem 0 0.5rem 3rem;
  font-weight: 300;
  font-size: 0.9rem;
  text-transform: capitalize;
  opacity: 0.7;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* */

.router-link-active,
.acordion.show .aside-item-li .aside-item span {
  background-color: var(--color-hover) !important;
  opacity: 0.8 !important;
}
</style>
