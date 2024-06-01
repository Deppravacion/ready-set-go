import { useAppProvider } from "../providers/AppContext";

export const ThemeToggler = () => {
  const { userTheme, setUserTheme } = useAppProvider();
  const themeToggler = () => {
    userTheme === "business"
      ? setUserTheme("winter")
      : setUserTheme("business");
  };
  return (
    <>
      <input
        type='checkbox'
        className='toggle toggle-info'
        checked={userTheme === "winter"}
        onChange={themeToggler}
      />
    </>
  );
};
