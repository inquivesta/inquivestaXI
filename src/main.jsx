import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import Merch from "./pages/Merch";
import Register from "./pages/Register";
import EventLogin from "./pages/EventLogin";
import Registrations from "./pages/Registrations";
import Timeline from "./pages/Timeline";
import Pronites from "./pages/Pronites";
import QrScanner from "./pages/QrScanner";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
  {
    path: "/more",
    element: <Contact />,
  },
  {
    path: "/schedule",
    element: <Timeline />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/merch",
    element: <Merch />,
  },
  {
    path: "/register/*",
    element: <Register />,
  },
  {
    path: "/eventlogin",
    element: <EventLogin />
  },
  {
    path: "/registrations",
    element: <Registrations />
  },
  {
    path: "/timeline",
    element: <Timeline />
  },
  {
    path: "/pronites",
    element: <Pronites />,
  },
  {
    path: "/verify",
    element: <QrScanner />,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
