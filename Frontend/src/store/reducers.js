import { combineReducers } from "redux";
const initialState = {
  theme: {
    active: "dark",
    dark: {
      mainbg: "",
      navbg: "",
      bg: "#1A1D24",
      textCol: "white",
    },
    light: {
      mainbg: "",
      navbg: "",
      bg: "Background",
      textCol: "black",
    },
  },
  Navbar: {
    activeComponent: "home",
  },
  blog: {
    Enhancer: {
      content: `here is where you should past in you'r aricle`,
      params: {
        expand: false,
        grammer: false,
        tone: "normal",
        restruct: true,
        fancyVocabulair: false,
        SEO: [],
        Translate: "",
        writing: "",
      },
    },
  },
  social: {
    socialMedia: {
      params: {
        subject: "",
        tone: "normal",
        language: "",
        writing: "",
        sponsor: false,
        sponsorText: "",
        emojis: true,
      },
      posts: [],
    },
  },
};

const themReducer = (state = initialState.theme, action) => {
  switch (action.type) {
    case "dark":
      state.active = "dark";
      return state;
    case "light":
      state.active = "light";
      return state;
    default:
      return state;
  }
};

const EnhancerReducer = (state = initialState.blog.Enhancer, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        content: action.payload,
      };
    case "SET_PARAMS":
      state.params = action.payload;
      return state;
    default:
      return state;
  }
};

const socialMediaReducer = (
  state = initialState.social.socialMedia,
  action
) => {
  switch (action.type) {
    case "SET_POSTS":
      state.posts = action.payload;
      return posts;
    case "SET_PARAMS":
      state.params = action.payload;
      return state;
    default:
      return state;
  }
};

const NavbarReducer = (state = initialState.Navbar, action) => {
  switch (action.type) {
    case "SET_COMP":
      return {
        ...state,
        activeComponent: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  theme: themReducer,
  Enhancer: EnhancerReducer,
  navbar: NavbarReducer,
  socialMedia: socialMediaReducer,
});
export default rootReducer;
