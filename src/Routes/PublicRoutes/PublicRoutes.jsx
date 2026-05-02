import Home from "../../Pages/Public/Home/MainComp/Home";
import Contact from "../../Pages/Public/Contact/MainComp/Contact";
import About from "../../Pages/Public/About/MainComp/About";

export const PublicRoutes = [
  { index: true, element: <Home /> },
  { path: "contact", element: <Contact /> },
  { path: "about", element: <About /> },
];
