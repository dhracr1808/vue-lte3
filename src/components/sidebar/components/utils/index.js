export const changeAcordion = (e) => {
  document
    .querySelectorAll(".router-link-active")
    .forEach((e) => e.classList.remove("router-link-active"));
  const valueToogle = e.target.parentElement.classList.contains("show");
  if (valueToogle) return e.target.parentElement.classList.remove("show");
  const acordion = document.querySelectorAll(".acordion");
  acordion.forEach((ele) => ele.classList.remove("show"));
  e.target.parentElement.classList.add("show");
};

export const showRemove = () => {
  document.querySelectorAll(".show").forEach((e) => e.classList.remove("show"));
};
