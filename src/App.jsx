import { Children, useState, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Utils/Loader";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import "./assets/fonts/PixeloidMono.ttf";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import AfterCreationTest from "./components/Game/AfterCreationTest";
import Village from "./components/Game/Village/Village";
import UserProfile from "./components/Game/UserProfile/UserProfile";
import AdminDashboard from "/src/components/Game/AdminDashboard/AdminDashboard.jsx";
import Events from "./components/Game/Events/Events";
import PageNotFound from "./components/WelcomePage/PageNotFound/PageNotFound";

//all the pages of Welcome Pages other than home
const welcomepages = ["about", "contact", "credits"];

function App() {
  const [count, setCount] = useState(0);

  const welcomePageOther = welcomepages.map((page) => {
    return { path: page, element: <WelcomePage page={page} /> };
  });

  const router = createBrowserRouter([
    { path: "/", element: <WelcomePage /> },
    { path: "/about", element: <WelcomePage page="about" /> },
    { path: "/contact", element: <WelcomePage page="contact" /> },
    { path: "/credits", element: <WelcomePage page="credits" /> },
    { path: "/creationtest", element: <AfterCreationTest /> },
    { path: "/admin", element: <AdminDashboard /> },
    {
      path: "/game/village",
      element: (
        <Suspense fallback={<Loader />}>
          <Village />
        </Suspense>
      ),
    },
    { path: "/game/dungeon", element: <Events /> },
    { path: "/userprofile", element: <UserProfile /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <RouterProvider router={router} />

    /* <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} /> */

    /* { The different welcome pages route are generated here }*/
    /* {welcomepages.map((page) => {
          return (
            <Route
              key={page}
              path={`/${page}`}
              element={<WelcomePage page={page} />}
            />
          );
        })}
        <Route path="/creationtest" element={<AfterCreationTest />} />
        <Route path="/villagedev" element={<Village />} />
      </Routes>
    </BrowserRouter> */
  );
}

export default App;
