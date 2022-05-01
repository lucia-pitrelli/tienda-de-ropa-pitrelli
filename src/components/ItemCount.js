import { useState } from "react";

const Contador = () => {
  const [suma, setSuma] = useState(0);

  const onClickHandler = () => {
    console.log("click");
    setSuma(suma + 1);
  };
  return (
    <div style={{ padding: "20px", color: "grey" }}>
      <button onClick={onClickHandler} className="btn">
        Agregá ítem
      </button>
      {suma}
    </div>
  );
};
export default Contador;
