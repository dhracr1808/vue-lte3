<template>
  <div>
    <label class="sidebar-item-label fw-bolder">
      <span>{{ text }}</span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  text: String,
});
</script>

<style lang="scss" scoped>
.sidebar-item-label {
  margin-left: 10px;
  color: var(--color-text);
  text-transform: uppercase;
  font-size: 0.85rem;
}
</style>
