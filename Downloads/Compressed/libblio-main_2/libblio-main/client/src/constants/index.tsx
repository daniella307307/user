import {
  HomeOutlined,
  PeopleOutlineOutlined,
  FolderCopyOutlined,
  FeedOutlined,
  HistoryOutlined,
} from "@mui/icons-material";

interface ConstantsProps {
  sideBarNavigations: {
    id: string;
    title: string;
    icon: any;
  }[];
  categories: {
    id: string;
    title: string;
  }[];
}

export const sideBarNavigations: ConstantsProps["sideBarNavigations"] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: (
      <HomeOutlined
        sx={{ color: "#9ba3a9", marginRight: "2.5rem", fontSize: "2.5em" }}
      />
    ),
  },
  {
    id: "patron-activity",
    title: "Partron activity",
    icon: (
      <PeopleOutlineOutlined
        sx={{ color: "#9ba3a9", marginRight: "2.5rem", fontSize: "2.5em" }}
      />
    ),
  },
  {
    id: "categories",
    title: "Categories",
    icon: (
      <FolderCopyOutlined
        sx={{ color: "#9ba3a9", marginRight: "2.5rem", fontSize: "2.5em" }}
      />
    ),
  },
  {
    id: "reports",
    title: "Reports",
    icon: (
      <FeedOutlined
        sx={{ color: "#9ba3a9", marginRight: "2.5rem", fontSize: "2.5em" }}
      />
    ),
  },
  {
    id: "history",
    title: "History",
    icon: (
      <HistoryOutlined
        sx={{ color: "#9ba3a9", marginRight: "2.5rem", fontSize: "2.5em" }}
      />
    ),
  },
];

export const categories: ConstantsProps["categories"] = [
  {
    id: "computer_and_general-works",
    title: "(000) Computer & General works",
  },
  {
    id: "phsycology_and_philosophy",
    title: "(100) Phsycology & Philosophy",
  },
  {
    id: "religion",
    title: "(200) Religion",
  },
  {
    id: "social-sciences",
    title: "(300) Social Sciences",
  },
  {
    id: "languages",
    title: "(400) Languages",
  },
  {
    id: "natural-sciences_and_mathematics",
    title: "(500) Natural Sciences & Mathematics",
  },
  {
    id: "applied_sciences_and_technology",
    title: "(600) Applied Sciences & Technology",
  },
  {
    id: "art_fine_and_decorative_fine",
    title: "(700) Arts Fine & Decorative Fine",
  },
  {
    id: "literature_and_decoratives",
    title: "(800) Literature and Decoratives",
  },
  {
    id: "geography_and_history",
    title: "(900) Geography & History",
  },
  {
    id: "academics",
    title: " Academics",
  },
];
