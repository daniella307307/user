import { useContext, useState } from "react";
import { ThemeStyles } from "../App";
import styles from "../styles";
import {
  FormControl,
  IconButton,
  input,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import { categories } from "../constants";
import {
  Add,
  SearchOutlined,
  DeleteOutlineOutlined,
  EditOutlined,
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

interface CategoryComponentProps {
  category: {
    category: string;
    setCategory: Function;
  };
  search: string;
  isSearchMobile: boolean;
}

const CategoryComponent = ({
  category,
  setCategory,
}: CategoryComponentProps["category"]) => {
  const theme: any = useContext(ThemeStyles);
  const [search, setSearch] = useState<CategoryComponentProps["search"]>("");
  const isMobileScreen = useMediaQuery("(max-width:1200px");
  const isMobile1 = useMediaQuery("(max-width:700px)")
  const [isSearchMobile,setIsSearchMobile] =
    useState<CategoryComponentProps["isSearchMobile"]>(false);

  return (
    <div
      className={`${theme.background2} ${theme.font} ${styles.flexColBetween} w-[100%] h-[100%]`}
    >
      <div className={`${styles.flexBetween} w-[100%] py-[1.8em] px-[3%]`}>
        <div className={`${isMobileScreen && "w-[65%]"}`}>
          <FormControl
            sx={{ color: theme.mode === "light" ? "#9ba3a9" : "#ffffffe5" }}
          >
            <Select
              value={category}
              className={`${theme.font1}`}
              sx={{
                fontFamily: "Poppins",
                color: "#9ba3a9",
                width: isMobileScreen ? "65%" : "100%"
              }}
            >
              <MenuItem
                value={category}
                sx={{
                  fontFamily: "Poppins",
                  color: "#080808",
                }}
              >
                {category}
              </MenuItem>

              {categories.map((category: any, index: any) => (
                <MenuItem
                  key={`${category.id}-${index}`}
                  onClick={() => setCategory(category.title)}
                  sx={{
                    color: "#080808",
                  }}
                >
                  {category.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className={`${styles.flexColBetween}`}>
          {category === "Select Category" ? (
            <h2 className={`${theme.font} font-lexend font-bold text-[1.5em] ${isMobile1 && "hidden"}`}>
              All books
            </h2>
          ) : (
            <h2
              className={`${theme.font} flex font-lexend font-bold font-lexend text-[1.3em] ${isMobile1 && "hidden"}`}
            >
              <p
                className={`${theme.font} font-lexend font-medium font-lexend text-[1.1em] lg:hidden`}
              >
                Books for "
              </p>{" "}
              {category.split(" ")[1]}{" "}
              {category.split(" ")[2] !== undefined && category.split(" ")[2]}{" "}
              {category.split(" ")[3] !== undefined && category.split(" ")[3]}{" "}
              {category.split(" ")[4] !== undefined && category.split(" ")[4]}{" "}
              {category.split(" ")[5] !== undefined && category.split(" ")[5]}{" "}
              <p
                className={`${theme.font} font-lexend font-medium font-lexend text-[1.1em] lg:hidden`}
              >
                {" "}
                "
              </p>
            </h2>
          )}

          <h4 className={`${theme.font}`}>(---)</h4>
        </div>

        <div
          className={`${theme.font} ${styles.flexBetween} ${
            !isMobileScreen && "search"
          } px-[0.9%] py-[0.1%]`}
        >
          {isMobileScreen ? (
            <IconButton onClick={() => setIsSearchMobile(true)}>
              <SearchOutlined sx={{ color: "#b4b4b4" }} />
            </IconButton>
          ) : (
            <SearchOutlined sx={{ color: "#b4b4b4" }} />
          )}
          {!isMobileScreen && (
            <input
              placeholder="Search a book ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                width: "100%",
                fontFamily: "Poppins",
                marginLeft: "0.4rem",
                color: theme.mode === "light" ? "#9ba3a9" : "#9ba3a9",
              }}
            />
          )}
        </div>
      </div>

      <div className={`${styles.flexColBetween} px-[3.4%] w-[100%]`}>
        <div className={`h-[73.8vh]`}>
          {/* Area for table representation */}
        </div>

        <div className={`${styles.flexBetween} w-[100%] mb-[1em]`}>
          <div className={`${styles.flexBetween} gap-[1rem]`}>
            <button
              className={`bg-moderateBlue ${styles.flexBetween} px-[0.7em] py-[0.2em]`}
              title="New"
            >
              <Add sx={{ color: "#fbfbfb" }} />
              <p className={`text-white font-poppins text-[1.1em] sm:hidden`}>
                New
               </p>
            </button>

            <button
              className={`bg-lightRed ${styles.flexBetween} px-[0.7em] py-[0.2em]`}
              title="Delete"
            >
              <DeleteOutlineOutlined sx={{ color: "#fbfbfb" }} />
              <p className={`text-white font-poppins sm:hidden`}>Delete</p>
            </button>

            <button
              className={`bg-lightGreen ${styles.flexBetween} px-[0.7em] py-[0.2em]`}
              title="Edit"
            >
              <EditOutlined sx={{ color: "#fbfbfb" }} />
              <p className={`text-white font-poppins sm:hidden`}>Edit</p>
            </button>
          </div>

          <div className={`${theme.font} ${styles.flexBetween} gap-[1rem]`}>
            <h3 className={`font-lexend sm:hidden`}>showing</h3>{" "}
            <h3 className={`font-lexend`}>--of--</h3>
          </div>

          <div className={`${styles.flexBetween} gap-[1rem]`}>
            <button
              className={`bg-moderateGray ${styles.flexBetween} px-[2.7em] py-[0.2em] sm:px-[0.7em]`}
            >
              <p className={`text-[#00000099] font-poppins sm:hidden`}>
                Previous
              </p>
              <div className="hidden sm:flex">
                <ArrowBackIosOutlined sx={{color: "#00000099"}} titleAccess="Previous"/>
              </div>
            </button>
            <button
              className={`bg-moderateGray ${styles.flexCenter} px-[2.7em] py-[0.2em] sm:px-[0.7em]`}
            >
              <p className={`text-[#00000099] font-poppins sm:hidden`}>Next</p>

              <div className="hidden sm:flex">
                <ArrowForwardIosOutlined sx={{color: "#00000099"}} titleAccess="Next"/>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
