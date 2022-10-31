import { Button, Divider, Image, List, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useList } from "../../context/listProvider/userList";
import { ListUsers } from "./listUsers";
import _S from "./Profiler.module.css";
import { ViewProfiler } from "./viewProfiler";

export const Profiler = () => {
  const navigator = useNavigate();
  const params = useLocation();

  useEffect(() => {
    if (!params.state) navigator("/users");
  }, [params.state]);

  const _handleBackList = () => navigator("/users");

  return !params.state ? (
    <ListUsers />
  ) : (
    <ViewProfiler {...params.state} onClick={_handleBackList} />
  );
};
