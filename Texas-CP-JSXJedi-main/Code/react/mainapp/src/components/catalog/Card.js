import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "blue.50",
    borderColor: "blue.200",
    height: "14rem",
    gap: "0.7rem",
    border: "none"
  },
});

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: "0"
    }
  }),
  // define custom styles for xl size
  xl: definePartsStyle({
    container: {
      borderRadius: "12px",
      padding: "18px",
      boxShadow: "0 0 10px 0 rgba(6, 62, 114,0.25)"
    }
  })
};


// define custom variant
const variants = {
  funky: definePartsStyle({
    container: {
      color: "chakra-body-text"
    }
  })
};

// export the component theme
export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    // define which size and variant is applied by default
    size: "xl",
    variant: "funky"
  },
});