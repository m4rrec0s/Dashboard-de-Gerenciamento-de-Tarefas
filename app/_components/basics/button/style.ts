"use client";

import styled from "styled-components";

export const ButtonContainer = styled.button<{ $outline?: boolean; $ghost?: boolean }>`
  padding: 10px 20px;
  font-size: var(--size-xs);
  font-weight: 700;
  background-color: ${({ $outline, $ghost }) =>
    $outline || $ghost ? "transparent" : "var(--foreground)"};
  color: ${({ $outline, $ghost }) =>
    $outline || $ghost ? "var(--foreground)" : "var(--background)"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ $outline }) =>
    $outline ? "1px solid var(--foreground)" : "none"};
  gap: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ $outline, $ghost }) =>
      $outline
        ? "var(--muted)"
        : $ghost
        ? "transparent"
        : "var(--muted-foreground)"};
  }
  }
`;
