import { Button, Image, List } from "antd";
import _S from "../Profiler.module.css";
type ViewProps = {
  avatar: string;
  first_name: string;
  id: string | number;
  email: string;
  onClick?: ()=> void
};
export const ViewProfiler = ({ avatar, first_name, id, email, onClick }: ViewProps) => (
  <List.Item>
    <div className={_S["content-single"]}>
      <Image src={avatar} preview={false} />
      <div>
        <p>{first_name}</p>
        <div className={_S["email"]}>{email}</div>
      </div>
      <Button type="ghost" onClick={onClick}>Ver lista</Button>
    </div>
  </List.Item>
);
