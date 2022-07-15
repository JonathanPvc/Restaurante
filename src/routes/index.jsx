import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { Dashboard } from "../components/Layouts/Dashboard";
import { routeMap } from "./routes";

export const RouterProvider = () =>{
    return (
        <Router>
        <Routes>
          {routeMap.map(item => (
            <Route path={item.path} element={<Dashboard>{item.element}</Dashboard>} />
          ))}
  
        </Routes>
      </Router>
    )
}