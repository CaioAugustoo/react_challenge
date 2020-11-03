import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: var(--primary-color);
  color: white;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.1875rem var(--third-color),
      0 0 0 0.25rem var(--primary-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
