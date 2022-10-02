import styled from "styled-components";

export type InputProps = {
  inputColor?: string;
};

// Create an Input component that'll render an <input> tag with some styles
export const Input = styled.input<InputProps>`
  padding: 0.5em;
  color: ${({ inputColor }) => inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
