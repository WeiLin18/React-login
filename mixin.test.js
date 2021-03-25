const handleIsWordRepeatCheck = require("./mixinTest");

test("A和B內容重複", () => {
  const Acontent = "abc12345";
  const Bcontent = "xxabc123wer";

  expect(handleIsWordRepeatCheck(Acontent, Bcontent)).toBe(true);
});

test("A和B內容中間重複", () => {
  const Acontent = "abc12345";
  const Bcontent = "c12345er12fda";

  expect(handleIsWordRepeatCheck(Acontent, Bcontent)).toBe(true);
});

test("A和B內容沒有重複", () => {
  const Acontent = "abc12345";
  const Bcontent = "c124345ksfh";

  expect(handleIsWordRepeatCheck(Acontent, Bcontent)).toBe(false);
});
