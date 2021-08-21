import { Module } from "../core/module";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  triggle() {
    //пишем логику действия при клике на кнопку
    this.randomColor = ["#c4e046", "#cc855c", "#7223d8", "#23c3d8", "#290404"]; //создаем масив цветов
    this.clickOnButton = document.querySelector("button"); // получаем доступ к кнопке button
    this.clickOnButton.addEventListener("click", () => {
      document.body.style.backgroundColor =
        this.randomColor[Math.floor(Math.random() * this.randomColor.length)];
      //создаем анимацию для цвета фона
      if (
        this.randomColor[Math.floor(Math.random() * this.randomColor.length)]
      ) {
        document.body.style.transitionDuration = "1.5s";
      }
    });
  }
}
const newChanger = new Changer();
newChanger.triggle();
