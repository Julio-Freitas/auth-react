import { Image, List, Pagination } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useList } from "../../../context/listProvider/userList";

import _S from "../Profiler.module.css";

export const ListUsers = () => {
  const { changePagination, loading, ...list } = useList();
const navigator = useNavigate();
const params = useLocation();

  return (
    <div className={_S["wrapper-list"]}>
      <h1>List of Users</h1>
      <Pagination
        total={list.total}
        current={list.page}
        onChange={changePagination}
      />
      <List
        itemLayout="vertical"
        bordered
        loading={loading}
        className={_S["container-list"]}
      >
        {list?.data?.map((user) => (
          <List.Item key={user.id} onClick={()=> navigator('profiler', {state: user})}>
            <div className={_S["content"]} >
              <Image
                src={user.avatar}
                radioGroup={"10"}
                width={30}
                height={30}
                className={_S["image"]}
              />
              <p>{user.first_name}</p>
            </div>
            <div className={_S["email"]}>{user.email}</div>
          </List.Item>
        ))}
      </List>
    </div>
  );
};
