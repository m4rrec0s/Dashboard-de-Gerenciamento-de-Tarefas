"use client";

import styled from "styled-components";

export const Input = styled.input`
  background-color: var(--card);
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid var(--border);
  width: 100%;
  min-width: 400px;
  &:focus {
    outline: none;
    border: 1px solid var(--card-foreground);
  }
`;