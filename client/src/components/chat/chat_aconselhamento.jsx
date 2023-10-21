import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Container } from "@material-ui/core";
import "./chat_aconselhamento.css";
import { Link } from "react-router-dom";
import Messages from "./Messages";
import InputMsg from "./InputMsg";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9bcac5",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  scroll: {
    height: "89vh",
    overflowY: "scroll",
  },
}));

const socket = io("http://localhost:3001");

const ChatAconselhamento = () => {
  const location = useLocation();
  const classes = useStyles();
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name } = queryString.parse(location.search);

    setNickname(name);

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(name);
    });

    //when user disconnects
  }, ["http://localhost:3001", nickname]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
  };
  console.log(messages);
  return (
    <Container className={classes.wrapper}>
      <Container className={classes.container}>
        <div className={classes.scroll}>
          <Messages messages={messages} nickname={nickname} />
        </div>
        <InputMsg
          message={message}
          setMessage={setMessage}
          sendMessage={handleMessageSubmit}
        />
      </Container>
    </Container>
  );
};

export default ChatAconselhamento;
