export const handleIsWordRepeatCheck = (AInputContent, BInputContent) => {
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

export const handleLengthCheck = (inputContent, num) => {
  return inputContent.trim() === "" || inputContent.trim().length < num
    ? false
    : true;
};

export const handleValidEmailCheck = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
};
