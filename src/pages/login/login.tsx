import { Button, Col, Form, Input, message, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { LoginOutlined, LoadingOutlined } from "@ant-design/icons";
export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
    if(!Object.values(values).every(item=> item)) throw new Error()
      await auth.authenticate(values.email, values.password);
      navigate("/users");
    } catch (error) {
      message.error("Invalid email or password!");
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col span={12}>
        <Form
          name="basic"
          onFinish={onFinish}
          layout="vertical"
          disabled={auth.loading}
        >
          <Form.Item label="E-mail" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Senha" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item name="password">
            <Button type="primary" htmlType="submit" icon={ auth.loading ?  <LoadingOutlined /> : <LoginOutlined />}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
