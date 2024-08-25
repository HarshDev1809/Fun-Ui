const invalidVariant = (variant, emoticons) => {
  console.log()
  if (variant > emoticons.length || variant <= 0) {
    throw new Error("Error: Invalid Variant");
  }
};

export {invalidVariant};