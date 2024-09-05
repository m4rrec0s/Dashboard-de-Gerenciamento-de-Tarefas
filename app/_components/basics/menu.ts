"use client";

import styled from "styled-components";

export const Menu = styled.section`
  display: flex;
  height: calc(100vh - 80px);
  flex-direction: column;
  items-align: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: var(--secondary);
  border-right: 1px solid var(--border);
  min-width: 200px;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuItem = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
`;
