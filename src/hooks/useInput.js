import { useState } from "react";

export default function useInput(initialState) {

  const [value, setValue] = useState(initialState);

  const handleValue = (evento) => {
    setValue(evento.target.value);
  };

  return [value, handleValue];
}
