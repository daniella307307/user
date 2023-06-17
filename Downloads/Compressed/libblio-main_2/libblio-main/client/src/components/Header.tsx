import { useContext, useState } from "react";
import styles from "../styles";
import { ThemeStyles } from "../App";
import { Button, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { setMode } from "../state";
import { useDispatch } from "react-redux";

interface HeaderProps {
  header: {
    title: string;
    entity: string;
  };
  isMenuOpen: boolean;
}

const Header = ({ title, entity }: HeaderProps["header"]) => {
  const theme: any = useContext(ThemeStyles);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] =
    useState<HeaderProps["isMenuOpen"]>(false);
  return (
    <div
      className={`${styles.flexBetween} bg-secondary ${theme.font1} w-[100%] py-[0.8%] px-[2%] relative`}
    >
      <h3 className={``}>{title}</h3>

      <div className={`${styles.flexBetween}`}>
        <h2 className={`text-white font-lexend`}>{entity}</h2>
        <Button onClick={() => setIsMenuOpen((prev) => !prev)}>
          <div className={`bg-darkGray rounded-full w-[20px] h-[20px]`}></div>

          {isMenuOpen ? (
            <ArrowDropUp sx={{ color: "#9ba3a9" }} />
          ) : (
            <ArrowDropDown sx={{ color: "#9ba3a9" }} />
          )}
        </Button>

        <Menu
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem
            onClick={() =>
              dispatch(
                setMode({ mode: theme.mode === "light" ? "dark" : "light" })
              )
            }
          >
            Switch to {theme.mode === "light" ? "dark" : "light"} mode
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)}>Log out</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
