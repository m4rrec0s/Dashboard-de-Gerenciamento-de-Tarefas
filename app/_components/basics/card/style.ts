"use client";

import styled from "styled-components";

export const CustomCard = styled.div`
  background-color: var(--card);
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid var(--border);
`;

export const CustomCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CustomCardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const CustomCardDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--chart-1);
`;

export const CustomCardContent = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
`;

export const CustomCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;