import { Module } from "../core/module";

export class ClicksModule extends Module {

    #numberOfClicks
    #numberOfDblClicks

    constructor(type, text) {
        super(type, text);
        console.log('invoke character');
        this.#numberOfClicks = 0;
        this.#numberOfDblClicks = 0;
        const elementHTMLClick =this.#selectHTMLElement('html');
        const elementHTMLDoubleClick =this.#selectHTMLElement('body') 
        this.#calculateNumberOfClicks(elementHTMLClick);
        this.#calculateNumberOfDoubleClicks(elementHTMLDoubleClick);
        setTimeout(() => { 
            alert(
                `Click count: ${this.#NumberOfSingleClicks()}, DoubleClick count: ${this.#NumberOfDoubleClicks()}`
            );}, type(text));
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
        elementHTML.addEventListener('click', event => {
                this.#numberOfClicks += 1;
                console.log(`Click count: ${this.#numberOfClicks}`);

        });
    }

    #calculateNumberOfDoubleClicks(elementHTML) {
        elementHTML.addEventListener('dblclick', event => {
            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
            this.#numberOfDblClicks += 1;
            this.#numberOfClicks = this.#numberOfClicks >= 2 
                ? this.#numberOfClicks - 2 
                : this.#numberOfClicks;
            console.log(`Double Click count: ${this.#numberOfDblClicks}`);
        });
    }

 

}
