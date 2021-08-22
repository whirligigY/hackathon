import { Module } from "../core/module";

export class TimerScore extends Module {
  #formcontainer;
  #form;
  #text;
  #input;
  #button;
  #timer;
  #time;
  constructor(type, text) {
    super(type, text);
    this.#formcontainer = this.#createElement("div", "form-container");
    this.#form = this.#createElement("form", "form-block");
    this.#text = this.#createElement("p", "form-text");
    this.#input = this.#createElement("input", "form-input");
    this.#button = this.#createElement("button", "form-button");
    this.#timer = this.#createElement("span", "form-timer");
    this.#insertElement(document.body, this.#formcontainer);
    this.#insertElement(this.#formcontainer, this.#form);
    this.#form.append(this.#text, this.#timer, this.#input, this.#button);
    this.#text.textContent =
      "Enter the time in seconds (max 60), and read interesting facts";
    this.#button.textContent = "Enter";
    this.#button.setAttribute("type", "submit");
    this.#time = 0;
  }
  #createElement(elem, style) {
    const el = document.createElement(elem);
    el.classList.add(style);
    return el;
  }
  #insertElement(container, elem) {
    container.append(elem);
  }
  trigger() {
    this.#formcontainer.classList.add("form-active");
    this.#form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(this.#input.value);
      if (this.#input.value && Number(this.#input.value) < 60) {
        this.#text.textContent =
          "Now you will see some interesting facts about numbers..";
        this.#timer.classList.add("active");
        this.#formcontainer.classList.add("form-message");
        this.#input.classList.add("elem-invisible");
        this.#button.classList.add("elem-invisible");
        this.#time = Number(this.#input.value);
        const clientTime = this.#time;

        const getResp = async () => {
          try {
            const response = await fetch(
              "http://numbersapi.com/random/math?json"
            );
            const data = await response.json();
            this.#text.textContent = data.text;
          } catch (error) {
            console.error(error);
          }
        };
        const interval = setInterval(() => {
          getResp();
        }, 5000);

        const intervalTime = setInterval(() => {
          this.#timer.textContent =
            this.#time > 9 ? `00:${this.#time}` : `00:0${this.#time}`;
          this.#time -= 1;
          if (this.#time === 0) this.#timer.textContent = `Time is over`;
        }, 1000);
        console.log(clientTime);
        setTimeout(() => {
          clearInterval(intervalTime);
          clearInterval(interval);
          this.#formcontainer.classList.remove("form-active");
          this.#formcontainer.classList.remove("form-message");
        }, (clientTime + 1) * 1000);
      } else {
        alert("Uncorrect enter");
      }
      //end submit
    });
    //end func
  }
  clear() {}
}
