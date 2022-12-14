import { useTheme } from '../context/ThemeContext';

const Button = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <div>Active Theme: {theme}</div>
      <button onClick={changeTheme}>Change Theme</button>
    </>
  );
};

export default Button;
