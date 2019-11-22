import React, {useState, useEffect} from "react";
import { StyledNotifications } from "./styled";

const Notification = ({ status }) => {
  const [message, setMessage] = useState("Enviando");

  useEffect(() => {
    status === "await"
      ? setMessage("Enviando")
      : status === "send"
      ? setMessage("Mensagem enviada com sucesso.")
      : status === "error" && setMessage("Mensagem não enviada, tente novamente.");
  }, []);

  return (
    <StyledNotifications>
      <h5>{message}</h5>
    </StyledNotifications>
  );
};

export default Notification;
