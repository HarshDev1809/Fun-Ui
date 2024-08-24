const invalidVariant = (variant, emoticons) => {
  if (variant >= emoticons.length || variant < 0) {
    throw new Error("Error: Invalid Variant");
  }
};

export {invalidVariant};