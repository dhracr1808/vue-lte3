import { defineStore } from "pinia";

export const store = defineStore("img", {
  state: () => {
    return {
      img:
        JSON.parse(localStorage.getItem("sidebar"))?.img ||
        "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    };
  },
  actions: {
    changeImg(newImg) {
      this.img = newImg;
    },
  },
});
