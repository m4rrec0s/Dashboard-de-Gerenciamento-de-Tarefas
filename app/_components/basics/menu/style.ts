"use client";

import styled from "styled-components";

export const CustomMenu = styled.section`
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

export const CustomMenuHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const CustomMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CustomMenuItem = styled.a`
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
