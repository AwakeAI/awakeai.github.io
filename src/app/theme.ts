import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "var(--font-inter), system-ui, -apple-system, 'Segoe UI', sans-serif",
    body: "var(--font-inter), system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  colors: {
    brand: {
      50: "#FFF7EB",
      100: "#FFEACC",
      200: "#FFD699",
      300: "#FFC266",
      400: "#FFAD33",
      500: "#FF9900",
      600: "#CC7A00",
      700: "#A36200",
      800: "#7A4900",
      900: "#523100",
    },
  },
  // Semantic tokens compile to CSS variables, so colors switch with the
  // `chakra-ui-dark` class set by ColorModeScript (no flash on first paint).
  semanticTokens: {
    colors: {
      "bg.canvas": { default: "white", _dark: "#0B0B0D" },
      "bg.subtle": { default: "#F7F7F8", _dark: "#121215" },
      "bg.surface": { default: "white", _dark: "#16161A" },
      "bg.header": { default: "rgba(255,255,255,0.78)", _dark: "rgba(11,11,13,0.72)" },
      "bg.glass": { default: "rgba(255,255,255,0.74)", _dark: "rgba(11,11,13,0.68)" },
      "fg.default": { default: "#111114", _dark: "#F4F4F5" },
      "fg.muted": { default: "#55555F", _dark: "#A1A1AA" },
      "border.subtle": { default: "blackAlpha.200", _dark: "whiteAlpha.200" },
      // Text-safe accent: deeper orange on light backgrounds for contrast.
      "accent.fg": { default: "brand.600", _dark: "brand.400" },
      "accent.link": { default: "brand.700", _dark: "brand.300" },
    },
    shadows: {
      card: {
        default: "0 1px 2px rgba(16,16,20,0.04), 0 8px 24px -8px rgba(16,16,20,0.10)",
        _dark: "0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -8px rgba(0,0,0,0.6)",
      },
      cardHover: {
        default: "0 2px 4px rgba(16,16,20,0.05), 0 18px 40px -12px rgba(16,16,20,0.18)",
        _dark: "0 2px 4px rgba(0,0,0,0.5), 0 18px 40px -12px rgba(0,0,0,0.8)",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "bg.canvas",
        color: "fg.default",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      "::selection": {
        bg: "brand.200",
        color: "#111114",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
      },
    },
    Button: {
      baseStyle: {
        rounded: "full",
        fontWeight: 600,
      },
      variants: {
        brand: {
          bg: "brand.500",
          color: "#111114",
          _hover: { bg: "brand.400", _disabled: { bg: "brand.500" } },
          _active: { bg: "brand.600" },
        },
        dark: {
          bg: "#111114",
          color: "white",
          _hover: { bg: "#26262B", _disabled: { bg: "#111114" } },
          _dark: { bg: "white", color: "#111114", _hover: { bg: "gray.200" } },
        },
      },
    },
    Input: {
      defaultProps: { focusBorderColor: "brand.500" },
      variants: { outline: { field: { bg: "bg.surface", borderColor: "border.subtle" } } },
    },
    Select: {
      defaultProps: { focusBorderColor: "brand.500" },
      variants: { outline: { field: { bg: "bg.surface", borderColor: "border.subtle" } } },
    },
    Textarea: {
      defaultProps: { focusBorderColor: "brand.500" },
      variants: { outline: { bg: "bg.surface", borderColor: "border.subtle" } },
    },
    Modal: {
      baseStyle: { dialog: { bg: "bg.canvas" } },
    },
    Drawer: {
      baseStyle: { dialog: { bg: "bg.canvas" } },
    },
  },
});
