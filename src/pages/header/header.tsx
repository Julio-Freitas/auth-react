import { Button } from "antd";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { LogoutOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import _S from "./Header.module.css";
export const Header = () => {
  const { email, logout, loading } = useAuth();
  const navigator = useNavigate();
  const _hadleLogout = useCallback(() => {
    if (email) {
      logout();
      navigator("/login");
      return;
    }
    navigator("/login");
  }, [email]);

  const userEmail = useMemo(() => {
    if (email)
      return (
        <>
          {email} <UserOutlined />
        </>
      );
    return "";
  }, [email]);

  const iconButton = useMemo(
    () => (email ? <LogoutOutlined /> : <LoginOutlined />),
    [email]
  );
  return (
    <header className={_S["header"]}>
      <p>{userEmail}</p>
      <Button
        type="ghost"
        size="large"
        title="Sair"
        onClick={_hadleLogout}
        icon={iconButton}
      >
        {email ? "sair" : "Entrar"}
      </Button>
    </header>
  );
};
