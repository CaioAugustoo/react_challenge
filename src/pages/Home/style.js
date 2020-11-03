import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  input {
    margin-bottom: 1.25rem;
  }

  button {
    margin-top: 1.25rem;
  }
`;

export const Welcome = styled.h1`
  color: var(--text-color);
  margin: 10px;
`;

export const Instruction = styled.h2`
  color: var(--text-color);
  margin-bottom: 1.875rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
