export const getUsersThemePreference = (): boolean => {
  const locallyStoredPreference = localStorage.getItem("darkMode");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


  return locallyStoredPreference !== undefined
    ? locallyStoredPreference !== "enabled"
      ? false
      : true
    : prefersDark;
};
