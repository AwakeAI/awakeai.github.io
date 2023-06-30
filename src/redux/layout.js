// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// ** ThemeConfig Import
import themeConfig from "@configs/themeConfig";

const initialMenuCollapsed = () => {
  const item = window.localStorage.getItem("menuCollapsed");
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : themeConfig.layout.menu.isCollapsed;
};

const initialDirection = () => {
  const item = window.localStorage.getItem("direction");
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : themeConfig.layout.isRTL;
};

const initialSkin = () => {
  const item = window.localStorage.getItem("skin");
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : themeConfig.layout.skin;
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    skin: initialSkin(),
    isRTL: initialDirection(),
    layout: themeConfig.layout.type,
    lastLayout: themeConfig.layout.type,
    menuCollapsed: initialMenuCollapsed(),
    footerType: themeConfig.layout.footer.type,
    navbarType: themeConfig.layout.navbar.type,
    menuHidden: themeConfig.layout.menu.isHidden,
    contentWidth: themeConfig.layout.contentWidth,
    navbarColor: themeConfig.layout.navbar.backgroundColor,
  },
  reducers: {
    handleSkin: (state, action) => {
      state.skin = action.payload;
      window.localStorage.setItem("skin", JSON.stringify(action.payload));
    },
    handleRTL: (state, action) => {
      state.isRTL = action.payload;
      window.localStorage.setItem("direction", JSON.stringify(action.payload));
    },
  },
});

export const { handleSkin, handleRTL } = layoutSlice.actions;

export default layoutSlice.reducer;
