import { useQuery } from "@tanstack/react-query";
import { api } from "./userApi";
import Axios from "axios";

function useData(url) {
  const { data, isLoading, isError, setLoading, setData, setError } = useQuery(
    ["products"],
    () => {
      setLoading(true);
      api.get(url).then((res) => setData(res.data));
    }
  )
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });

  return { data, isLoading, isError };
}

export default useData;
