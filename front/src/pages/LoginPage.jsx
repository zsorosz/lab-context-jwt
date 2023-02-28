import { Box, Button, PasswordInput, Text, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(SessionContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5005/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const parsed = await response.json();
    setToken(parsed.token);
    navigate("/profile");
  };

  return (
    <>
      <h1>Login</h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        isLogin
      />
    </>
  );
};

export default LoginPage;
