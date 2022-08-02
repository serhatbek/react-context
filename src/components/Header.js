import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <p>Header Theme: {theme}</p>
      {/* <button onClick={changeTheme}>Change Theme</button> */}
    </>
  );
};

export default Header;
