import Home from "pages/Home";
import RecommendCompany from "pages/RecommendCompany";
import RecommendShortlist from "pages/RecommendShortlist";
import ReferExtension from "pages/ReferExtension";

const routesConfig = [
  {
    path: "/",
    component: Home,
    private: false,
  },
  {
    path: "/recommend-by-shortlist",
    component: RecommendShortlist,
    private: false,
  },
  {
    path: "/recommend-specific-company",
    component: RecommendCompany,
    private: false,
  },
  {
    path: "/refer-extension",
    component: ReferExtension,
    private: false,
  },
];

export default routesConfig;
