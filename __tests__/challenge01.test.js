const solution = require("../challenge01/challenge01");

test("keys house HOUSE house keys -> keys2house3", () => {
  expect(solution("keys house HOUSE house keys")).toBe("keys2house3");
});
test("cup te a cup -> cup2te1a1", () => {
  expect(solution("cup te a cup")).toBe("cup2te1a1");
});
test("houses house housess -> houses1house1housess1", () => {
  expect(solution("houses house housess")).toBe("houses1house1housess1");
});
