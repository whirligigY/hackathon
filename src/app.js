import "./styles.css";
//const initiateClicksCalcs = new ClicksModule (Number, "30000");
//import {ShapeModule} from './modules/shape.module'
//const shape = new ShapeModule('canvas', 'shape')
//shape.trigger()
import { ContextMenu } from "./menu";

document.body.addEventListener("contextmenu", (ev) => {
  ev.preventDefault();
  const contextmenu = new ContextMenu("#menu");
  contextmenu.open(ev);
});

