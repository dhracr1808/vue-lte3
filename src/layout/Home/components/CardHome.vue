<template>
  <div class="col-xl-3 col-md-6 mb-3">
    <div class="card card-stats p-3">
      <div class="card-body p-0 m-0">
        <div class="row">
          <div class="col-5 d-flex justify-content-center align-items-center">
            <div class="text-center">
              <div class="fs-1">
                <i :class="icon"></i>
              </div>
            </div>
          </div>
          <div class="col-7 text-end">
            <div class="numbers">
              <div>
                <p class="text-muted fs-6 fw-light">
                  <small> {{ title }}</small>
                </p>
                <h4 class="text-dark fw-light fs-4 text-uppercase">
                  {{ cant }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer bg-white m-0 p-0 border-0">
        <hr class="divider" />
        <div class="stats mt-2">
          <div class="text-secondary fs-6">
            <small> <i :class="icon2" class="me-2"></i> {{ text }} </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "cant", "icon", "icon2", "text"]);
</script>

<style lang="scss" scoped></style>
