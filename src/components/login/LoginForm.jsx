import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const id = formData.get("id");
    const password = formData.get("password");

    const data = await login(id, password);

    console.log("data :>> ", data);

    localStorage.setItem("token", data.accessToken);

    navigate("/");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput label="ID" placeholder="ID를 입력하세요" name="id" />
        <PasswordInput
          label="Password"
          placeholder="비밀번호를 입력하세요"
          name="password"
        />
        <Button fullWidth type="submit">
          로그인
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
