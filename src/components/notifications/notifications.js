function Toaster() {
  this.notification = document.querySelector(".toaster-notification");
}

Toaster.prototype.message = function (message) {
  if (typeof message === "function") {
    const div = document.createElement("div");
    div.classList.add("new-message");
    div.innerHTML = message();

    const line = document.createElement("div");
    line.classList.add("line");
    line.style.animation = "3.5s line-animation ease-in forwards";
    div.appendChild(line);
    this.notification.appendChild(div);
    this.notification.classList.add("active");

    const time = setTimeout(() => div.remove(), 4010);
    div.addEventListener("mouseenter", () => {
      clearTimeout(time);
      line.style.animationPlayState = "paused";
      div.style.animationPlayState = "paused";
    });

    div.addEventListener("mouseleave", () => {
      line.style.animationPlayState = "running";
      div.style.animationPlayState = "running";
      setTimeout(() => div.remove(), 3000);
    });
  }
};

export const toaster = new Toaster();
