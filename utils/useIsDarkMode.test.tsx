import React from "react";
import { render } from "@testing-library/react";
import { useIsDarkMode } from "./useIsDarkMode";

const TestComponent = () => {
  const { isDarkMode } = useIsDarkMode();
  console.log(isDarkMode);
  return <div>{isDarkMode ? "DARK MODE" : "LIGHT MODE"}</div>;
};

describe("useIsDarkMode", () => {

  const renderWrapper = (darkBrowserPreference, storedPreference) => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn().mockImplementation((query) => ({
        matches: darkBrowserPreference,
      })),
    })

    Storage.prototype.getItem = jest.fn(() => storedPreference);

    console.log(darkBrowserPreference)
    return render(<TestComponent />);
  };

  afterEach(()=>{
    global.jsdom.reconfigure({
      url: "https://www.example.com/"
    });
    jest.resetAllMocks()
    console.log(localStorage.getItem("themePreference"))
  })

  it("user has no preferences set", () => {
    const wrapper = renderWrapper(undefined, undefined);
    const lightMode = wrapper.getByText("LIGHT MODE");
    expect(lightMode).toBeTruthy();
  });

  it("browser preference light, stored preference light", () => {
    const wrapper = renderWrapper(false, "light");

    const lightMode = wrapper.getByText("LIGHT MODE");
    expect(lightMode).toBeTruthy();
  });
})

  // it("browser preference light, stored preference dark", () => {
  //   darkBrowserPreference = false;
  //   storedPreference = "dark";

  //   const darkMode = screen.getByText("DARK MODE");
  //   expect(darkMode).toBeTruthy();
  // });

  // it("browser preference dark, stored preference light", () => {
  //   darkBrowserPreference = true;
  //   storedPreference = "light";

  //   const lightMode = screen.getByText("LIGHT MODE");
  //   expect(lightMode).toBeTruthy();
  // });

  // it("browser preference dark, stored preference dark", () => {
  //   darkBrowserPreference = true;
  //   storedPreference = "dark";

  //   const darkMode = screen.getByText("DARK MODE");
  //   expect(darkMode).toBeTruthy();
  // });

