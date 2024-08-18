import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import { RouterProvider } from "react-router-dom"
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";

// todo: Implement star animation
import Star from "./components/Star";
import Blob from "./components/Blob";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    }
  ]
)

export default function App() {

  return (
    <div className="relative overflow-hidden isolate bg-primary min-h-screen text-primary">
      <Blob />
      {/* <div className="absolute inset-0 -z-10">
        <Star />
      </div> */}
      <div className="w-[90%] max-w-[1200px] mx-auto p-5">
        <ScrollToTop />

        <RouterProvider router={router} />
      </div>
    </div>
  )
}

