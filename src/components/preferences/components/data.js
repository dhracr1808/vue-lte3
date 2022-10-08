import { store } from "./../../../store";

export const imgs = [
  {
    id: 1,
    name: "teclado",
    img: "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "auto",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    name: "atardecer",
    img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    name: "pradera",
    img: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

/*  ======================================= */

const currentLocal = () => JSON.parse(localStorage.getItem("sidebar")) || [];

export const changeImg = (value) => {
  store().changeImg(value);
  localStorage.setItem(
    "sidebar",
    JSON.stringify({ ...currentLocal(), img: value })
  );
};

export const changeColor = function (e, value) {
  document
    .querySelectorAll(".select-color")
    .forEach((e) => e.classList.remove("active"));
  e.target.classList.add("active");
  let arr = [];
  const classAside = document.querySelector(".inicial");

  classAside.classList.forEach((e, i) => {
    if (e !== "inicial" && e !== "sidebar") arr.push(classAside.classList[i]);
  });
  if (arr[0]) classAside.classList.replace(arr, value);
  classAside.classList.add(value);
  localStorage.setItem(
    "sidebar",
    JSON.stringify({ ...currentLocal(), bg: value })
  );
};

export const colorActive = function () {
  document.querySelectorAll(".options-colors > .select-color")?.forEach((e) => {
    if (e.classList[1] === currentLocal().bg) {
      return e.classList.add("active");
    }
  });
};
