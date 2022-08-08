import axios from "axios";
import { useEffect, useState } from "react";
import { auth, URL_BASE } from "../service/api";

export default function useGetData(path, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${URL_BASE}/${path}`, auth)
      .then((response) => {
        setData(response.data.data);
      })

      .catch((error) => {
        alert(error);
      });
  }, [path]);

  return data;
}
