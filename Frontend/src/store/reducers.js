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
      posts: [
        {
          description:
            "🌟 Exciting news! Just attended an inspiring seminar on personal growth and empowerment. Loved connecting with like-minded individuals and learning valuable life lessons. Big thanks to our sponsor @EmpowermentHub for making this happen! #PersonalGrowth #Empowerment #Seminar",
          hashtags: ["PersonalGrowth", "Empowerment", "Seminar"],
          image:'https://cdn.stablediffusionapi.com/generations/a2639d5c-df3c-4745-9663-ae0cb1bf51e0-0.png'
        },
        {
          description: "🎨 Spent the day exploring a mesmerizing art exhibition downtown. The creativity and talent on display were truly breathtaking! Shoutout to our sponsor @ArtUniverse for supporting the arts and making this event possible. #ArtExhibition #Creativity #ArtLovers",
          hashtags: ["ArtExhibition", "Creativity", "ArtLovers"],
          image:'https://cdn.stablediffusionapi.com/generations/6c407b46-95ee-4653-8d40-b9c8096a9233-0.png'
        },
        {
          description: "🍔 Foodie adventure alert! Just tried a new burger joint in town and my taste buds are dancing with joy. The flavors are out of this world! Major props to @TastyBites for treating our palates to this amazing experience. #FoodieAdventure #BurgerLove #TastyBites",
          hashtags: ["FoodieAdventure", "BurgerLove", "TastyBites"],
          image:'https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/e5cd86d3-7305-47fc-82c1-7d1a3b130fa4-0.png'
        },
        {
          description: "📚 Bookworm delight! Finished reading an incredible fantasy novel that transported me to a magical realm. Highly recommend this enchanting journey. Thanks to @BookHaven for keeping my reading list spellbinding! #BookRecommendation #FantasyFiction #BookHaven",
          hashtags: ["BookRecommendation", "FantasyFiction", "BookHaven"],
          image:'https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/e5cd86d3-7305-47fc-82c1-7d1a3b130fa4-0.png'
        }
      ],
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
