import { ThemeStyles } from "../App";
import { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { IconButton, useMediaQuery } from "@mui/material";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

interface LayoutProps {
  isHideSideBar: boolean;
  isMobileScreen: boolean;
}

const Layout = () => {
  const theme: any = useContext(ThemeStyles);
  const [isHideSideBar, setIsHideSideBar] =
    useState<LayoutProps["isHideSideBar"]>(false);
  const isMobileScreen = useMediaQuery("(max-width:1300px)");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1300) {
        return setIsHideSideBar(true);
      }
      return setIsHideSideBar(false);
    });

    return window.removeEventListener("resize", () => {
      if (window.innerWidth <= 1300) {
        return setIsHideSideBar(true);
      }
      return setIsHideSideBar(false);
    });
  }, [isMobileScreen]);

  return (
    <div className={`w-[100%] h-[100%] lay flex ${theme.font} relative`}>
      {!isHideSideBar && (
        <div
          className={`basis-[19%] sidebar ${
            isMobileScreen &&
            "absolute top-0 left-0 h-[100%] drop-shadow-xl z-[80]"
          }`}
        >
          <SideBar
            isHideSideBar={isHideSideBar}
            setIsHideSideBar={setIsHideSideBar}
          />
        </div>
      )}

      {isHideSideBar && (
        <div
          className={`hide-side-bar ${theme.background3} drop-shadow-xl rounded-full z-[70] absolute top-[4.8%] left-[0.2%]`}
        >
          <IconButton
            onClick={() => setIsHideSideBar(false)}
            title="Unhide sidebar"
          >
            <ArrowForwardIosOutlined sx={{ color: theme.mode === "light" ? "#000" : "#d9d9d9" }} />
          </IconButton>
        </div>
      )}

      <div className={`basis-auto h-[100%] w-[100%]`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
