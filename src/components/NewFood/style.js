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
  width: 100%;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  flex-direction: column;
  width: 100%;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;

  &.food__modal {
    opacity: 1;
    pointer-events: initial;
  }
`;

export const Form = styled.form`
  opacity: 0;
  pointer-events: none;
  background: white;
  padding: 3.125rem 5rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 40rem) {
    height: 100vh;
    width: 100%;
  }

  button {
    margin-top: 1.875rem;
  }

  &.food__modal {
    animation: ${openModal} 0.3s ease;
    pointer-events: initial;
    opacity: 1 !important;
    z-index: 100;
  }
`;
