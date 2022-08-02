import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: 'bek', job: 'dev' });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      )}
      <code>{JSON.stringify(user)}</code>;
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </>
  );
};

export default Profile;
