<template>
  <div class="col-xl-3 col-md-6 mb-3" :class="textColor">
    <div class="rounded border" :class="shadow || bg" v-if="cardState">
      <div class="position-relative" :class="cardSize">
        <div class="w-100 rounded-top" :class="clase">
          <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)">
            <div style="padding: 0.8rem 1rem">
              <span class="d-flex justify-content-between align-center">
                {{ title }}
                <div class="icon d-flex gap-3 align-items-center">
                  <div v-if="refresh">
                    <i
                      class="fa-solid fa-arrows-rotate"
                      @click="changeRefresh"
                    ></i>
                    <div class="refresh" v-show="refreshCard">
                      <i class="fa-solid fa-arrows-rotate text-dark"></i>
                    </div>
                  </div>
                  <div v-if="collap" @click="chaneStateIcon">
                    <i :class="stateIcon"></i>
                  </div>
                  <div v-if="times" @click="changeCardState">
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                  <div v-if="expand">
                    <i class="fa-solid fa-expand" @click="changeExpand"></i>
                    <div class="card-expand bg-light" v-show="expandCard">
                      <div class="px-4 py-2" :class="class">
                        <div class="d-flex justify-content-between">
                          <h3 class="m-0 fs-5">Maximizable</h3>
                          <div class="p-1" @click="changeExpand">
                            <i
                              class="fa-solid fa-compress"
                              style="cursor: pointer"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 text-dark">
                        <p class="p-0 m-0">The body of the card</p>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="px-3 text-dark">
          <p class="m-0 mt-2 p-0">
            The body of the card {{ refresh && "refresh" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  title: String,
  text: String,
  icon: String,
  class: String,
  times: Boolean,
  collap: Boolean,
  expand: Boolean,
  refresh: Boolean,
  shadow: String,
  outline: String,
  bg: String,
});

const textColor = computed(() => {
  let bg1 = "bg-warning";
  let bg2 = `${bg1} bg-gradient`;
  if (props.bg) {
    return "text-" + (props.bg === bg1 || props.bg === bg2 ? "dark" : "white");
  }
  if (!props.class) return "text-dark";
  return "text-" + (props.class === "bg-warning" ? "dark" : "white");
});

const iconCollapce = ref(false);
const cardState = ref(true);
const expandCard = ref(false);
const refreshCard = ref(false);

const stateIcon = computed(() =>
  iconCollapce.value ? "fa-solid fa-plus" : "fa-solid fa-minus"
);

const bg = props.bg;
const shadow = props.shadow;
const times = props.times;
const collap = props.collap;
const expand = props.expand;
const refresh = props.refresh;
const clase = props.bg || props.class || props.outline + " border-top border-3";

const cardSize = computed(() => (iconCollapce.value ? "desactive" : "active"));
const chaneStateIcon = () => (iconCollapce.value = !iconCollapce.value);

const changeCardState = () => (cardState.value = !cardState.value);
const changeExpand = () => (expandCard.value = !expandCard.value);

const changeRefresh = () => {
  refreshCard.value = !refreshCard.value;
  setTimeout(() => (refreshCard.value = !refreshCard.value), 100);
};
</script>

<style lang="scss" scoped>
.text-content-center {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
}

.icon {
  cursor: pointer;
}
.icon div i {
  opacity: 0.7;
  transition: all 0.2s ease;
}

.icon div i:hover {
  opacity: 1;
}
.active {
  height: 100px;
  transition: all 0.5s ease;
  overflow-y: hidden;
  overflow-x: auto;
}
.desactive {
  height: 50px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.card-expand {
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  cursor: initial;
}
.refresh {
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  z-index: 5;
}
.refresh i {
  font-size: 2rem;
}
.refresh i:hover {
  color: #555 !important;
}
p {
  font-size: 0.89rem;
}
.bg-info div .text-dark p,
.bg-danger div .text-dark p,
.bg-primary div .text-dark p,
.bg-success div .text-dark p {
  color: #fff;
}
</style>
