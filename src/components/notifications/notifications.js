export const toaster = () => {
  const notification = document.querySelector(".toaster-notification");
  notification.classList.add("active");
  const idnotification = setTimeout(() => {
    notification.classList.remove("active");
    notification.addEventListener("mouseout", () => {
      console.log("salio del elemeento");
    });
  }, 3000);

  notification.addEventListener("mouseover", () => {
    clearTimeout(idnotification);
    console.log("se le dio click");
  });

  notification.addEventListener("mouseout", () => {
    notification.classList.add("active");
    setTimeout(() => {
      notification.classList.remove("active");
    }, 3000);
  });

  /*   console.log(idnotification); */
};

function Toaster() {}
