import { useEffect, useState } from "react";
import { getUserInfo } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (!token) return;

    const getUser = async () => {
      const data = await getUserInfo(token);

      console.log("data :>> ", data);
      setUser(data);
    };

    getUser();
  }, [token]);

  return (
    <header style={{ textAlign: "center" }}>
      <p>id: {user?.id}</p>
      <p>nickname: {user?.nickname}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </header>
  );
};

export default Header;
