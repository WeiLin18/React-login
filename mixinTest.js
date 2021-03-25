const handleIsWordRepeatCheck = (AInputContent, BInputContent) => {
  let isInclude = false;
  for (let i = 0; i + 5 < AInputContent.length; i++) {
    for (let j = 0; j + 5 < BInputContent.length; j++) {
      if (AInputContent.slice(i, i + 6) === BInputContent.slice(j, j + 6)) {
        isInclude = true;
      }
    }
  }
  return isInclude;
};

module.exports = handleIsWordRepeatCheck;
