<template>
  <div class="col-xl-3 col-md-6 mb-2">
    <div class="shadow-sm border rounded">
      <div style="border-bottom: 1px solid #44444430">
        <div class="p-2 rounded" :class="clase">
          <div style="padding: 0.4rem">
            <div class="d-flex justify-content-between">
              <span> Direct Chat </span>
              <div class="d-flex align-items-center gap-2 icons">
                <span
                  class="rounded text-white d-flex align-it0ems-center"
                  :class="bgNumber"
                >
                  <small style="font-size: 0.7rem; padding: 0.1rem 0.3rem"
                    >3</small
                  >
                </span>
                <i class="fa-solid fa-minus"></i>
                <i class="fa-solid fa-comments"></i>
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-2 bg-white">
        <h4 class="p-0 fs-6 fw-bold d-flex justify-content-between">
          <small style="font-size: 0.8rem">Alexander Pierce</small>
          <small class="text-muted" style="font-size: 0.8rem">
            23 Jan 2:00 pm
          </small>
        </h4>
        <div class="d-flex gap-2">
          <div class="chat_img">
            <img
              src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
              alt="chat"
            />
          </div>
          <div class="content-message">
            <p class="m-0 p-0">
              Is this template really for free? That's unbelievable!
            </p>
          </div>
        </div>
        <h4 class="p-0 mt-3 fs-6 fw-bold d-flex justify-content-between">
          <small class="text-muted" style="font-size: 0.8rem">
            23 Jan 2:05 pm
          </small>
          <small style="font-size: 0.8rem">Sarah Bullock</small>
        </h4>

        <div class="d-flex gap-1 justify-content-between align-items-center">
          <div class="content-message2 text-white rounded" :class="bgNumber">
            <p class="m-0 p-2">You better believe it!</p>
            <div class="comment" :class="bgNumber"></div>
          </div>
          <div class="chat_img">
            <img
              src="https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
              alt="chat"
            />
          </div>
        </div>
      </div>

      <div class="px-2 mt-3 bg-light">
        <form class="d-flex" @submit.prevent="">
          <div class="input-group input-group mb-3">
            <input
              type="text"
              placeholder="Type Message ..."
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              class="input-group-text text-white"
              id="inputGroup-sizing-sm"
              :class="bgNumber"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
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
  return `bg-${props.outline?.slice(7)} `;
}
</script>

<style lang="scss" scoped>
.icons i {
  opacity: 0.5;
  cursor: pointer;
  transition: 0.5s ease;
}

.icons i:hover {
  opacity: 1;
}

.chat_img {
  width: 50px;
  height: 50px;
  flex-shrink: 1;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.content-message {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgb(212, 212, 212);
  flex-shrink: 10;
  position: relative;
}

.content-message p {
  position: relative;
  z-index: 10;
}

.content-message::before {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: rgb(212, 212, 212);
  left: -2px;
  top: 15px;
  transform: rotate(45deg);
}
.content-message2 {
  position: relative;
}
.content-message2 p {
  position: relative;
  z-index: 20;
}

.content-message2 .comment {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 10px;
  right: -5px;
  transform: rotate(45deg);
  z-index: 10;
}
.input-group input::placeholder {
  font-size: 0.8rem;
}
.input-group input:focus {
  box-shadow: none;
}
</style>
