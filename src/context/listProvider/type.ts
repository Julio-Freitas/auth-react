type Data = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export interface IList {
  page?: number | undefined;
  per_page?: number | undefined;
  total?: number | undefined;
  total_pages?: number | undefined;
  data?: Data[] | undefined;
}

export interface IListProvider {
  children: JSX.Element;
}

export interface IContext extends IList {
  changePagination: (page?: number) => Promise<void>;
  loading?: boolean
}
