import "./styles.css";
//const initiateClicksCalcs = new ClicksModule (Number, "30000");

import { ContextMenu } from "./menu";

document.body.addEventListener("contextmenu", (ev) => {
  ev.preventDefault();
  const contextmenu = new ContextMenu("#menu");
  contextmenu.open(ev);
});
