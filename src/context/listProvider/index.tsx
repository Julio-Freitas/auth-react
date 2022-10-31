import { createContext, useCallback, useEffect, useState } from "react";
import { IContext, IList, IListProvider } from "./type";
import { listRequest } from "./utils";

export const ListContext = createContext<IContext>({} as IContext);

export const ListProvider = ({ children }: IListProvider) => {
  const [response, setResponse] = useState<IList | null>(null);
  const [loading, setLoading] = useState(false);

  const getlistUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await listRequest();
      data && setResponse(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const changePagination = async (page: number = 1) => {
    try {

      setLoading(true);

      const totalPages = Number(response?.total_pages);
      if (page > totalPages) throw new Error("error");
      const data = await listRequest(page);
      data && setResponse(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getlistUsers();
  }, [listRequest]);
  return (
    <ListContext.Provider value={{ ...response, changePagination, loading }}>
      {children}
    </ListContext.Provider>
  );
};
