import { Module } from "../core/module";

export class CustomMessage extends Module {
  #block;
  #content;
  #text;
  #message;
  constructor(type, text) {
    super(type, text);
    this.#block = this.#createElement("div", "message-block");
    this.#text = this.#createElement("p", "message-text");
    this.#insertElement(document.body, this.#block);
    this.#insertElement(this.#block, this.#text);
    this.#message = {
      messages: [
        "Отличного дня!",
        "Удачи!",
        "Будьте здоровы!",
        "Всего вам самого лучшего!",
      ],
      text: function () {
        const index = Math.floor(Math.random() * this.messages.length);
        return this.messages[index];
      },
    };
    this.#text.textContent = this.#message.text();
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
    this.#block.classList.add("active-message");
    setTimeout(() => {
      this.#block.classList.remove("active-message");
      this.#block.remove();
    }, 4000);
  }
  clear() {}
}
