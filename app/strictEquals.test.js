import strictEquals from "./strictEquals";

describe("Given a srictEquals function", () => {
  describe("When it recieves 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});

describe("Given a srictEquals function", () => {
  describe("When it recieves NaN and NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});

describe("Given a srictEquals function", () => {
  describe("When it recieves 0 and -0", () => {
    test("Then it should return true", () => {
      const valueA = 0;
      const valueB = -0;

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});

describe("Given a srictEquals function", () => {
  describe("When it recieves -0 and 0", () => {
    test("Then it should return true", () => {
      const valueA = -0;
      const valueB = 0;

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});

describe("Given a srictEquals function", () => {
  describe("When it recieves 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});

describe("Given a srictEquals function", () => {
  describe("When it recieves true and false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});

describe("Given a srictEquals function", () => {
  describe("When it recieves false and false", () => {
    test("Then it should return false", () => {
      const valueA = false;
      const valueB = false;

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});

describe("Given a srictEquals function", () => {
  describe("When it recieves 'Water' and 'oil'", () => {
    test("Then it should return false", () => {
      const valueA = "Water";
      const valueB = "oil";

      const isTestEquals = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(isTestEquals).toBe(expectedBoolean);
    });
  });
});
