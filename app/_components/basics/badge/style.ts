"use client";

import styled from "styled-components";

export const Badge = styled.span<{ $outline?: boolean }>`
  background-color: ${({ $outline }) => ($outline ? "transparent" : "var(--muted)")};
  color: var(--muted-foreground);
  border: ${({ $outline }) => ($outline ? "1px solid var(--muted-foreground);)" : "none")};
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: normal;
`;
