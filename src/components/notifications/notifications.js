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
    line.style.animation = "3s line-animation ease-in forwards";
    div.appendChild(line);
    this.notification.appendChild(div);
    this.notification.classList.add("active");

    const time = setTimeout(() => div.remove(), 3000);

    div.addEventListener("mouseenter", () => {
      clearTimeout(time);
      line.style.animationPlayState = "paused";
    });

    div.addEventListener("mouseleave", () => {
      line.style.animationPlayState = "running";
      setTimeout(() => div.remove(), 2000);
    });
  }
};

export const toaster = new Toaster();
