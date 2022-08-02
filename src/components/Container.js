import { useTheme } from '../context/ThemeContext';

import Button from './Button';
import Header from './Header';
import Profile from './Profile';
import '../App.css';

const Container = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? theme : 'light'}`}>
      <Button />
      <Header />
      <Profile />
    </div>
  );
};

export default Container;
