import React, { useEffect, useState } from "react";

import { Container } from "../../style/Global";

import { ReactComponent as Time } from "../../assets/svg/time.svg";
import { ReactComponent as Price } from "../../assets/svg/price.svg";
import { ReactComponent as Delete } from "../../assets/svg/delete.svg";

import Button from "../Button/Button";
import NewFood from "../NewFood/NewFood";

import {
  Wrapper,
  FoodsList,
  Food,
  FoodDescription,
  FoodInfos,
  Close,
  Align,
} from "./style";

import api_url from "../../services/apiUrl";

const Menu = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastProduct, setLastProduct] = useState([]);
  const [stock, setStock] = useState(0);
  const [time, setTime] = useState(0);

  const deleteFood = async (id, foodName) => {
    const { name } = lastProduct;
    const isNotDeletable = foodName === name;
    if (isNotDeletable) {
      alert("Não pode deletar um pedido que está sendo preparado.");
    } else {
      const confirm = window.confirm("Tem certeza que deseja deletar?");
      if (!isNotDeletable && confirm) {
        await fetch(`${api_url}/foods/${id}`, {
          method: "DELETE",
        });
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchFoods = async () => {
      const response = await fetch(`${api_url}/foods`);
      const json = await response.json();
      setData(json);
    };
    fetchFoods();
    setLoading(false);
  }, [loading, isMenuOpen, stock]);

  useEffect(() => {
    if (data === null) return null;
    for (let item = 0; item < data.length; item++) {
      if (data[item] === data[data.length - 1]) {
        const lastFood = data[item];
        setTime(lastFood.time);
        setLastProduct(lastFood);
      }
    }
    setStock(
      data.reduce((total, valor) => Number(total) + Number(valor.price), 0)
    );
  }, [data, time, loading, isMenuOpen]);

  useEffect(() => {
    if (stock >= 100) {
      alert(
        "O valor do seu carrinho é maior ou igual a 100 reais. O excedente foi depositado em um armazém definitivo."
      );
      alert(`O valor do seu armazém atual é de: R$${stock},00`);
    }
  }, [stock]);

  if (data === null) return null;
  return (
    <Container>
      {data !== null && (
        <>
          <p>{`O seu ultimo pedido, de nome "${lastProduct.name}" está sendo preparado.`}</p>
          <p>{`O tempo de preparo é de: ${time} min.`}</p>
          {stock !== null && <p>O valor da sua sacola é de: R${stock},00</p>}
        </>
      )}
      <Wrapper>
        {isMenuOpen && (
          <Close onClick={() => setIsMenuOpen(false)}>&#x2716;</Close>
        )}

        {loading && <p>Carregando...</p>}
        {data.length === 0 && <p>Sem produtos até então.</p>}
        {data.map(food => (
          <FoodsList key={food.id}>
            <Food
              style={{
                backgroundImage: `url(${food.image})`,
              }}
            />
            <h2>{food.name}</h2>
            <FoodDescription>
              <p>{food.description}</p>
            </FoodDescription>

            <FoodInfos>
              {/* We create a div for each info just to set display as 'flex' and better organization*/}
              <div>
                <Time /> <p>{`${food.time}min.`}</p>
              </div>
              <div>
                <Price /> <p>{`${food.price},00`}</p>
              </div>
              <div onClick={() => deleteFood(food.id, food.name)}>
                <Delete /> <p>Deletar</p>
              </div>
            </FoodInfos>
          </FoodsList>
        ))}
      </Wrapper>
      <Align>
        <Button onClick={() => setIsMenuOpen(true)}>Adicionar novo item</Button>
      </Align>
      <NewFood
        className={isMenuOpen ? "food__modal" : ""}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Container>
  );
};

export default Menu;
