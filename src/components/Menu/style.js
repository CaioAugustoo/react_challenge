import styled, { keyframes } from "styled-components";

const openModal = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  } to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FoodsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1.875rem 0rem 4.375rem 0;
`;

export const Food = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  margin: 40px 20px;
  background-size: cover;
  background-position: center;
  border-radius: 0.9375rem;
  flex-direction: column;
`;

export const FoodDescription = styled.div`
  max-width: 15.625rem;
  text-align: center;
  margin: 0.625rem 0rem;
  min-height: 5rem;
`;

export const FoodInfos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    margin: 0px 0.625rem;

    &:last-child {
      cursor: pointer;
    }
  }
  p {
    margin-left: 0.3125rem;
  }
`;

export const Close = styled.span`
  position: fixed;
  top: 9.375rem;
  color: white;
  z-index: 1;
  right: 5rem;
  font-size: 2rem;
  cursor: pointer;
  animation: ${openModal} 0.3s ease;

  @media (max-width: 40rem) {
    top: 7.5rem;
    color: var(--text-color);
    right: 1.875rem;
    font-size: 1.5rem;
  }
`;

export const Align = styled.div`
  text-align: center;

  button {
    margin-bottom: 2rem;
  }
`;
