import styled from "styled-components";

export type ButtonProps = {
  primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${({ theme, primary }) =>
    primary ? theme.colors.primary : "white"};

  color: ${({ theme, primary }) => (primary ? "white" : theme.colors.primary)};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;

  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;
