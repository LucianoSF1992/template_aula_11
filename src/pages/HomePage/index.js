import { useState } from "react";
import CreatePage from "../CreatePage";
import UpDatePage from "../UpDatePage";
import { MainContain } from "./style";

export default function HomePage() {
  
  const [showPage, setShowPage] = useState("new");

  return (
    <MainContain>

      <button onClick={() => setShowPage("new")}>Criar nova tag</button>
      <button onClick={() => setShowPage("update")}>Atualizar tag</button>

      {showPage==="new" ? <CreatePage /> : <UpDatePage />}
      
    </MainContain>
  );
}
