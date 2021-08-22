import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import { CustomMessage } from "./modules/message.module";
import { TimerScore } from "./modules/timer.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.content = "";
    this.module = {};
    this.type = "";
  }
  add(Module, type, text) {
    const module = new Module(type, text);
    this.module = { ...this.module, [type]: module };
    this.content += module.toHTML();
    this.el.innerHTML = this.content;
    this.type = "";
  }
  open(ev) {
    this.el.style.top = `${ev.clientY}px`;
    this.el.style.left = `${ev.clientX}px`;
    this.add(BackgroundModule, "font", "Change color");
    this.add(ClicksModule, "clicks", "Count clicks (for 3 seconds)");
    this.add(ShapeModule, "shape", "Create a shape");
    this.add(CustomMessage, "message", "Create message");
    this.add(TimerScore, "timer", "Timer");
    if (this.el.hasChildNodes()) this.el.classList.add("open");
    this.el.addEventListener("click", (event) => {
      const { target } = event;
      if (target.nodeName === "LI") {
        this.type = target.getAttribute("data-type");
        Object.keys(this.module).forEach((el) => this.module[el].clear());
      }
      this.module[this.type] && this.module[this.type].trigger();
      this.close();
    });
  }

  close() {
    this.el.classList.remove("open");
    this.content = "";
    this.module = {};
  }
}
