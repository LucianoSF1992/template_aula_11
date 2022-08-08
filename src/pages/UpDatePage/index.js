import axios from "axios";
import React, { useCallback, useState } from "react";
import useGetData from "../../hooks/useGetData";
import useInput from "../../hooks/useInput";
import { auth, URL_BASE } from "../../service/api";
import { ListaWrapper, MainContain } from "./style";

export default function UpDatePage() {
  const tagsList = useGetData("tags", []);
  const [idTag, setIdTag] = useInput("");
  const [value, setValue] = useInput("");

  const upDateTag = useCallback(
    (id) => {
      const body = {
        data: {
          name: `${value}`,
        },
      };
      axios
        .put(`${URL_BASE}/tags/${id}`, body, auth)
        .then((response) => {
          window.location.reload(true);
          console.log(response.data.data);
        })

        .catch((error) => {
          console.log(error);
        });
    },
    [value]
  );

  return (
    <MainContain>
      <div>
        <label>
          Qual tag você deseja atualizar?
          <input onChange={setIdTag} />
        </label>
        <label>
          Novo Nome
          <input onChange={setValue} />
        </label>

        <button onClick={() => upDateTag(idTag)}> Atualizar</button>
      </div>
      {tagsList &&
        tagsList.map((item) => {
          return (
            <ListaWrapper>
              <li>Nome da Tag: {item.name} </li>
              <li> Id da Tag: {item.gid}</li>
            </ListaWrapper>
          );
        })}
    </MainContain>
  );
}
