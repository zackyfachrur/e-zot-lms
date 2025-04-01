import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/global.css";
import "remixicon/fonts/remixicon.css";

// Smoothscroll
import SmoothScroll from "@services/components/LenisSmoothScroll.tsx";

// Swiper and modules styles
import "swiper/swiper-bundle.css";

// Pages
import LoginSection from "./pages/auth/LoginSection.tsx";
import RegisterSection from "./pages/auth/RegisterSection.tsx";
import HomePages from "./pages/home/index.tsx";
// import CreatePostingans from "./services/CreatePostingan.tsx";
// import EditPostingans from "./services/EditPostingan.tsx";
import ErrorPage from "./ErrorPages.tsx";
import KelasPages from "./pages/kelas/index.tsx";

// Redux
import { store } from "./store/Store.ts";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginSection />,
    errorElement:<ErrorPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterSection />,
    errorElement:<ErrorPage />,
  },
  {
    path: "/",
    element: <HomePages />,
    errorElement:<ErrorPage />,
  },
  {
    path: "/kumpulan-kelas",
    element: <KelasPages />,
    errorElement:<ErrorPage />,
  },
  // { path: "/edit-postingan", element: <EditPostingans /> },
  // {
  //   path: "/buat-postingan",
  //   element: <CreatePostingans />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SmoothScroll>
        <RouterProvider router={router} />
        </SmoothScroll>
    </Provider>
  </StrictMode>
);
