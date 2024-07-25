import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nickname = formData.get("nickname");
    const id = formData.get("id");
    const password = formData.get("password");
    const passwordConfirm = formData.get("passwordConfirm");

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const data = await register(id, password, nickname);

    alert(data.message);
    navigate("/login");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          label="Nickname"
          placeholder="닉네임을 입력하세요"
          name="nickname"
        />
        <TextInput label="ID" placeholder="ID를 입력하세요" name="id" />
        <PasswordInput
          label="Password"
          placeholder="비밀번호를 입력하세요"
          name="password"
        />
        <PasswordInput
          label="PasswordConfirm"
          placeholder="비밀번호 확인을 입력하세요"
          name="passwordConfirm"
        />
        <Button fullWidth type="submit">
          회원가입
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterForm;
