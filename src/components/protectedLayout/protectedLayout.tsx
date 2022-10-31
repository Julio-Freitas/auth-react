import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserLocalStorage } from "../../context/AuthProvider/util";

interface IProtectedLayout {
  children: JSX.Element;
}
export const ProtectedLayout = ({ children }: IProtectedLayout) => {
  const [counter, setCounter] = useState(5);
  const user = getUserLocalStorage();
  const navigate = useNavigate();

  const _handleRedirect = useCallback(() => {

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if(!counter) navigate('/login')
    return () => timer &&  counter<= 0 && clearInterval(timer);
  }, [counter]);



  useEffect(() => {
    if(user) return
    _handleRedirect();
  }, [_handleRedirect, user]);

  if (!user) return <h1>{counter} You don't have access!</h1>;

  return children;
};
