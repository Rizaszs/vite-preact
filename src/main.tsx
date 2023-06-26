import { render } from "preact";
import Routes from "./routes";
import "./assets/global.css";

const appElement = document.getElementById("app");
if (appElement) {
  render(<Routes />, appElement);
} else {
  console.error("Element with ID 'app' not found.");
}
