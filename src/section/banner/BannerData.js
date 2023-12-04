const BannerIndexData = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Services",
    to: "/",
    subMenu: [
      {
        text: "Annuaires",
        to: "/pages/FunctionalPages/Annuaire",
      },
      {
        text: "Abecedaire des Formalites",
        to: "/pages/FunctionalPages/Formalites",
      },
      {
        text: "Annonces Légales",
        to: "",
      },
      {
        text: "Livres Légaux",
        to: "",
      },
    ],
  },
  {
    text: "Contact",
    to: "/pages/SitePages/ContactPage",
  },
  {
    text: "FAQ",
    to: "/pages/SitePages/FaqPage",
  },
  
];

const BannerIndexDataNoToken = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Services",
    to: "/",
    subMenu: [
      {
        text: "Annuaires",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Abecedaire des Formalites",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Annonces Légales",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Livres Légaux",
        to: "/pages/auths/auth-login",
      },
    ],
  },
  {
    text: "Contact",
    to: "/pages/SitePages/ContactPage",
  },
  {
    text: "FAQ",
    to: "/pages/SitePages/FaqPage",
  },
  
];

const TopBannerData = [
  {
    text: "Home",
    to: "#home",
  },
  {
    text: "A propos",
    to: "#apropos",
  },
  {
    text: "Pourquoi nous choisir",
    to: "#prq",
  },
  {
    text: "Contact",
    to: "/pages/SitePages/ContactPage",
  },
  {
    text: "FAQ",
    to: "/pages/SitePages/FaqPage",
  },
];

export { BannerIndexData, TopBannerData,BannerIndexDataNoToken };
