import { Module } from "../core/module";

export class ClicksModule extends Module {
  #numberOfClicks;
  #numberOfDblClicks;

  constructor(type, text) {
    super(type, text);
    this.#numberOfClicks = 0;
    this.#numberOfDblClicks = 0;
    const elementHTMLClick = this.#selectHTMLElement("html");
    const elementHTMLDoubleClick = this.#selectHTMLElement("body");
    this.#calculateNumberOfClicks(elementHTMLClick);
    this.#calculateNumberOfDoubleClicks(elementHTMLDoubleClick);
  }
  trigger() {
    setTimeout(() => {
      alert(
        `Click count: ${this.#NumberOfSingleClicks()}, DoubleClick count: ${this.#NumberOfDoubleClicks()}`
      );
    }, 3000);
  }
  #NumberOfSingleClicks() {
    return this.#numberOfClicks;
  }

  #NumberOfDoubleClicks() {
    return this.#numberOfDblClicks;
  }

  #selectHTMLElement(elementDOM) {
    const elementHTML = document.querySelector(elementDOM);
    return elementHTML;
  }

  #calculateNumberOfClicks(elementHTML) {
    elementHTML.addEventListener("click", (event) => {
      event.target.nodeName === "LI"
        ? (this.#numberOfClicks += 0)
        : (this.#numberOfClicks += 1);
    });
  }

  #calculateNumberOfDoubleClicks(elementHTML) {
    elementHTML.addEventListener("dblclick", (event) => {
      event.stopPropagation
        ? event.stopPropagation()
        : (event.cancelBubble = true);
      this.#numberOfDblClicks += 1;
      this.#numberOfClicks =
        this.#numberOfClicks >= 2
          ? this.#numberOfClicks - 2
          : this.#numberOfClicks;
      //console.log(`Double Click count: ${this.#numberOfDblClicks}`);
    });
  }
  clear() {}
}