import { createRoot } from "react-dom/client";
import AppRouter from "./Router.jsx";
import "./styles/index.scss";
import './styles/App.scss'

createRoot(document.getElementById("root")).render(
  <AppRouter />
);