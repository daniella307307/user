import { useContext, useState } from "react";
import { ThemeStyles } from "../App";
import styles from "../styles";
import {
  ArrowBackIosOutlined,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  HelpOutlineOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  PeopleOutlineOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { sideBarNavigations } from "../constants";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  sidebar: {
    isHideSideBar: boolean;
    setIsHideSideBar: Function;
  };
  isPatronsOpen: boolean;
}

const SideBar = ({
  isHideSideBar,
  setIsHideSideBar,
}: SideBarProps["sidebar"]) => {
  const theme: any = useContext(ThemeStyles);
  const [isPatronsOpen, setIsPatronsOpen] =
    useState<SideBarProps["isPatronsOpen"]>(false);
  const navigate = useNavigate();

  return (
    <div
      className={`w-[100%] h-[100%] mx-auto ${theme.font} bg-primary py-[1rem]`}
    >
      <div className={`${styles.flexColBetween} w-[100%] h-[100%]`}>
        <div className={`${styles.flexColBetween} gap-[4em] w-[100%]`}>
          <div className={`${styles.flexCenter}`}>
            <img src="../../LibblioLogo.svg" className={`w-[80%]`} />
            <IconButton
              onClick={() => setIsHideSideBar(true)}
              title="Hide sidebar"
            >
              <ArrowBackIosOutlined
                sx={{ color: theme.mode === "light" ? "#dcdcdc" : "#9ba3a9" }}
              />
            </IconButton>
          </div>

          <div className={`w-[100%] relative`}>
            {sideBarNavigations.map((item: any, index: any) => (
              <div
                key={`${item.id}-${index}`}
                className={`w-[100%] py-[5%] mb-[4%] hover:bg-modDarkBlue px-[10%] cursor-pointer ${
                  item.id === "patron-activity" ? "relative" : undefined
                }`}
                onClick={() =>
                  item.id === "patron-activity"
                    ? setIsPatronsOpen((prev) => !prev)
                    : navigate(item.id)
                }
              >
                <div className={`w-[100%] ${styles.flexStart}`}>
                  {item.icon}
                  <h3 className={`text-darkGray`}>
                    {item.title}{" "}
                    {item.id === "patron-activity" && (
                      <div>
                        {isPatronsOpen ? (
                          <KeyboardArrowUpOutlined sx={{ color: "#9ba3a9" }} />
                        ) : (
                          <KeyboardArrowDownOutlined
                            sx={{ color: "#9ba3a9" }}
                          />
                        )}
                      </div>
                    )}
                  </h3>
                </div>

                {isPatronsOpen && item.id === "patron-activity" && (
                  <div
                    className={`patrons absolute w-[60%] top-[1rem] right-1 z-[80] py-[1rem] bg-secondary drop-shadow-xl rounded-[0.55rem]`}
                  >
                    <ul
                      className={`${styles.flexColStart} gap-[1rem] text-darkGray z-[60]`}
                    >
                      <li
                        className={`w-[100%] hover:bg-modDarkBlue px-[1%] py-[0.5rem]`}
                      >
                        <PeopleOutlineOutlined sx={{ marginRight: "8%" }} />{" "}
                        Patrons
                      </li>
                      <li
                        className={`w-[100%] hover:bg-modDarkBlue px-[1%] py-[0.5rem]`}
                      >
                        <CheckBoxOutlined sx={{ marginRight: "8%" }} /> Check in
                      </li>
                      <li
                        className={`w-[100%] hover:bg-modDarkBlue px-[1%] py-[0.5rem]`}
                      >
                        <CheckBoxOutlineBlank sx={{ marginRight: "8%" }} />{" "}
                        Check out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.flexBetween}`}>
          <h4 className="text-darkGray mr-[5px]">Support</h4>
          <HelpOutlineOutlined sx={{ color: "#9ba3a9" }} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
