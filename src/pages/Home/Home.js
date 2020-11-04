import React, { useState } from "react";

import { Wrapper, Welcome, Instruction, Form } from "./style";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Error } from "../../components/Input/style";
import Head from "../../components/Helper/Head/Head";

import { Container } from "../../style/Global";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [wasSent, setWasSent] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    if (userName.value !== 0 && userName !== "") {
      setWasSent(true);
      setError(null);
      setLoading(false);
    } else {
      setLoading(false);
      setError("Por gentileza informe seu nome.");
      setWasSent(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Head title="Boas vindas" />
        <Welcome>{wasSent ? `Bem-vindo, ${userName}` : "Olá"}!</Welcome>
        {!wasSent && <Instruction>Insira seu nome:</Instruction>}
        {!wasSent && (
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={({ target }) => setUserName(target.value)}
              value={userName}
              type="text"
              id="userName"
              name="userName"
              label="Nome"
              Required
            />
            {error && <Error>{error}</Error>}
            <Button>{loading ? "Enviando" : "Enviar"}</Button>
          </Form>
        )}
        {wasSent && !loading && (
          <Button onClick={() => navigate("/menu")}>Menu</Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
