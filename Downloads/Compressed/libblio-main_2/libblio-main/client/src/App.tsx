import { createContext } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import { themeStyles } from "./theme";
import Categories from "./pages/Categories";
import CheckOut from "./pages/CheckOut";
import AddUser from "./pages/AddUser";
export const ThemeStyles = createContext([]);

const App = () => {
  const mode: string = useSelector((state: any) => state.global.mode);

  return (
    <div className={`app ${themeStyles(mode).background}`}>
      <BrowserRouter>
        <ThemeStyles.Provider value={themeStyles(mode)}>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to={"/dashboard"} replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/patrons-activity/checkOut" element={<CheckOut />} />
              <Route path="/categories/new" element={<AddUser/>}/>
            </Route>
          </Routes>
        </ThemeStyles.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
