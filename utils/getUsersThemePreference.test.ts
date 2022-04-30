import { getUsersThemePreference } from "./getUsersThemePreference";

let browserDarkModePreference = false;

Object.defineProperty(window, "matchMedia", {
  value: jest.fn().mockImplementation((query) => ({
    matches: browserDarkModePreference,
  })),
});
describe("getUsersThemePreference", () => {
  let appPreference = undefined;
  beforeAll(() => {
    browserDarkModePreference = true;
    Storage.prototype.getItem = jest.fn(() => appPreference);
  });
  describe("light theme browser preferences set", () => {
    beforeAll(() => {
      browserDarkModePreference = false;
    });
    it("user has no preferences set", () => {
      const result = getUsersThemePreference();
      expect(result).toBeFalsy();
    });
    it("user locally stored light theme preference", () => {
      appPreference = null;

      const result = getUsersThemePreference();
      expect(result).toBeFalsy();
    });

    it("user locally stored dark theme preference", () => {
      appPreference = "enabled";

      const result = getUsersThemePreference();
      expect(result).toBeTruthy();
    });
  });

  describe("dark theme browser preferences set", () => {
    beforeAll(() => {
      browserDarkModePreference = true;
    });
    it("user has no locally stored value for theme preference", () => {
      const result = getUsersThemePreference();
      expect(result).toBeTruthy();
    });
    it("user locally stored light theme preference", () => {
      appPreference = null;

      const result = getUsersThemePreference();
      expect(result).toBeFalsy();
    });

    it("user locally stored dark theme preference", () => {
      appPreference = "enabled";

      const result = getUsersThemePreference();
      expect(result).toBeTruthy();
    });
  });
});
