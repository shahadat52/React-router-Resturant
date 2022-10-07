import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Terms from "./components/Terms/Terms";
import More from "./components/More/More";
import Privacy from "./components/Privacy/Privacy";
import Pages from "./components/Layout/Pages";
import Meals from "./components/MealDB/Meals";
import Error from "./components/Error/Error";
import MealDetails from "./components/MealDetails/MealDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pages></Pages>,
      children: [
        { path: "home", element: <Home></Home> },
        {
          path: "mealdb",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s="
            );
          },
          element: <Meals></Meals>,
        },
        { path: "about", element: <About></About> },
        { path: "terms", element: <Terms></Terms> },
        { path: "more", element: <More></More> },
        { path: "privacy", element: <Privacy></Privacy> },
        {
          path: "/meal/:mealID",
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}
              `);
          },
          element: <MealDetails></MealDetails>,
        },
      ],
    },
    { path: "*", element: <Error></Error> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
