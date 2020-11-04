import React, { useCallback, useState } from "react";
import api_url from "../../services/apiUrl";

import { Container } from "../../style/Global";
import Button from "../Button/Button";
import Input from "../Input/Input";

import { Wrapper, Form, ModalWrapper } from "./style";

const NewFood = ({ setIsMenuOpen, isMenuOpen, ...props }) => {
  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodTime, setFoodTime] = useState("");
  const [loading, setLoading] = useState(false);

  const addNewFood = useCallback(
    async event => {
      event.preventDefault();
      setIsMenuOpen(false);
      setLoading(true);
      await fetch(`${api_url}/foods`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: foodName,
          description: foodDescription,
          price: foodPrice,
          time: foodTime,
        }),
      });
      setFoodName("");
      setFoodDescription("");
      setFoodPrice("");
      setFoodTime("");
      setLoading(false);
    },
    [foodName, foodTime, foodDescription, foodPrice, setIsMenuOpen]
  );

  return (
    <Container>
      <Wrapper>
        <ModalWrapper {...props}>
          <Form onSubmit={addNewFood} {...props}>
            <Input
              onChange={({ target }) => setFoodName(target.value)}
              value={foodName}
              type="text"
              id="nome"
              label="Nome"
              required
            />
            <Input
              onChange={({ target }) => setFoodDescription(target.value)}
              value={foodDescription}
              type="text"
              id="descricao"
              label="Descrição"
              required
            />
            <Input
              onChange={({ target }) => setFoodPrice(target.value)}
              value={foodPrice}
              type="number"
              id="preco"
              label="Preço (em real)."
              required
            />
            <Input
              onChange={({ target }) => setFoodTime(target.value)}
              value={foodTime}
              type="number"
              id="tempo"
              label="Tempo (em min)."
              required
            />
            <Button disabled={loading ? true : false}>
              {loading ? "Adicionando..." : "Adicionar"}
            </Button>
          </Form>
        </ModalWrapper>
      </Wrapper>
    </Container>
  );
};

export default NewFood;
