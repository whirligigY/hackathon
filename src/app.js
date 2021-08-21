import "./styles.css";
import { ContextMenu } from "./menu";

document.body.addEventListener("contextmenu", (ev) => {
  ev.preventDefault();
  const contextmenu = new ContextMenu("#menu");
  contextmenu.open(ev);
});
