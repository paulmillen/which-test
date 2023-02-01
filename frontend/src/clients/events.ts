import { QueryFunctionContext } from "react-query";
import axios from "axios";

export const generateQueryKey = (
  id: string | undefined
): ["getExample", string | undefined] => {
  return ["getExample", id];
};

export const getExample = async ({
  queryKey,
}: QueryFunctionContext<ReturnType<typeof generateQueryKey>>): Promise<any> => {
  const [, id] = queryKey;
  return id === undefined ? [] : (await axios.get(`/api/${id}`)).data;
};
