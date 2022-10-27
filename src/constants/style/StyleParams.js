const FONT = {
  family: {
    main: '"Source Sans Pro", Arial, sans-serif',
  },
  color: {
    white: "#fff",
    black: "#000",
    darkBlue: "#0d253f",
    lightBlue: "#01b4e4",
    lightGreen: "#90cea1",
    grayF1: "#212529",
    pumpkin: "#d2d531",
    veryLightBlack: "rgba(0, 0, 0, 0.5)",
    mediumLightGray: "#999",
  },
  weight: {
    bold: "bold",
    noraml: "noraml",
  },
};

const BACKGROUND = {
  color: {
    white: "#fff",
    black: "#000",
    veryLightBlack: "rgba(0, 0, 0, 0.1)",
    darkBlue: "#0d253f",
    darkBluePlus: "#081c22",
    lightBlue: "#01b4e4",
    lightGreen: "#90cea1",
    grayBG1_base: "#e4e7eb",
    grayBG1_hover: "#ced3db",
    veryLightBlack_Dot5: "rgba(0, 0, 0, 0.5)",
  },
  iconURL: {
    plus: "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg",
    search:
      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg",
    moreMenu:
      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg",
    closeArrow:
      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg",
    sideMenu:
      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-600-menu-7ef6e3f4266b4b216a8ef5920da43fc8c96e1ee805a219c5628fed5bfac854d5.svg",
    user: "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-7de7dfcae838579a18f4eebc5b8847230d154718e481c5cd01c477cfcbc85993.svg",
  },
};

const BORDER = {
  color: {
    lightGray: "#e3e3e3",
    veryLightGray: "#eee",
  },
  radius: {
    default: "8px",
    mobile: "6px",
  },
};

const IMAGE = {
  headerLogo:
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",
  footerLogo:
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
};

const MEDIA = {
  mobile: "max-width: 450px",
  renderOneCard: "max-width: 699px",
  renderTwoCards: "max-width: 899px",
  renderThreeCards: "max-width: 1039px",
  renderFourCards: "max-width: 1239px",
};

export { FONT, BACKGROUND, IMAGE, MEDIA, BORDER };
