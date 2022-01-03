import { Product } from "@common/types/product";

type AvailableChoices = "color" | "size" | string;

export type Choices = {
  [P in AvailableChoices]: string;
};

// Choices are extracted for all Size-Color combination before, eatch with its own ID
// This functions gets the right ID with the FrontEnd button choices
export const getVariant = (product: Product, choices: Choices) =>
  // variant.name = "s / fffffff"
  product.variants.find((variant) => {
    // console.log(variant.options);
    // console.log("Should Match");
    // console.log(choices);

    return variant.options.every((variantOption) => {
      // Color => color, Size => size
      const optionName = variantOption.displayName.toLowerCase();

      if (optionName in choices) {
        if (choices[optionName] === variantOption.values[0].label) {
          return true;
        }
      }
      // find returns the condition until TRUE
      return false;
    });
  });
