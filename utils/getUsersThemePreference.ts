export const getUsersThemePreference = (): boolean => {
  const locallyStoredPreference = localStorage.getItem("themePreference");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log(prefersDark);
  console.log(locallyStoredPreference)

  return locallyStoredPreference
    ? locallyStoredPreference === "dark"
      ? true
      : false
    : prefersDark;
};
