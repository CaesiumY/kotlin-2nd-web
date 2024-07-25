import { useEffect, useState } from "react";
import { getUserInfo } from "../../api/auth";

const Header = () => {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");

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
    </header>
  );
};

export default Header;
