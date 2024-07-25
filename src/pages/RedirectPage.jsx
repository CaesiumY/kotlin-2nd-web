import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { REDIRECT_URI } from "../constants";

const RedirectPage = () => {
  const countRef = useRef(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) return;
    if (countRef.current > 0) return;

    const getSocialLoginInfo = async () => {
      const response = await axios.post(import.meta.env.VITE_KAKAO_LOGIN_URL, {
        code,
        pathname: REDIRECT_URI,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/");
    };

    getSocialLoginInfo();
    countRef.current += 1;
  }, [code, navigate]);

  return <div>Code: {code}</div>;
};

export default RedirectPage;
