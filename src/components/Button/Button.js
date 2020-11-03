import React from "react";
import { ButtonStyled } from "./style";

const Button = ({ children, disabled, ...props }) => {
  return (
    <ButtonStyled disabled={disabled} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
