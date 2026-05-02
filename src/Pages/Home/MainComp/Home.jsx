import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../../features/auth/Auth";
import { fetchUser } from "../../../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
      name: "Adib",
      email: "examp@gmail.com",
    };
    const token = "abcS4Fjk5";
    dispatch(login({ user: userData, token: token }));
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const loc = JSON.parse(localStorage.getItem("user"));
  const { data, loading, error } = useSelector((state) => state.allUsers);
  console.log(data[0]?.name);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>লোড হচ্ছে...</p>;
  if (error) return <p>এরর: {error}</p>;

  return (
    <section>
      <button
        className="bg-purple-500 rounded-md border-2 p-1 mx-5"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="bg-red-400 rounded-md border-2 p-1 mb-3"
        onClick={handleLogout}
      >
        Logout
      </button>

      <div className="text-2xl text-purple-700">
        <p>name: {loc?.user?.name}</p>
        <p>email: {loc?.user?.email}</p>
      </div>
    </section>
  );
};

export default Home;
