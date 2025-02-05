import { route } from "@react-router/dev/routes";

export default [
  route("/", "./pages/homePage.jsx"),
  route("/pokemon/:id", "./pages/pokemon.jsx"),
  route("/more", "./pages/more.jsx"),
];
