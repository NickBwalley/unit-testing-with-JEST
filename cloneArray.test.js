const cloneArray = require("./cloneArray");

test("properly clones Array", () => {
  const array = [2, 4, 6, 9, 10, 11, 92];
  expect(cloneArray(array)).not.toBe(array);
});
