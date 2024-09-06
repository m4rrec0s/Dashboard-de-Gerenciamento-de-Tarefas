"use client";

import styled, { keyframes } from "styled-components";

const modalInAnimate = keyframes`
  0% {
    transform: translateX(-100%);
  }

  20% {
    transform: translateX(-95%);
  }

  30% {
    transform: translateX(-90%);
}

  40% {
    transform: translateX(-80%);
  }

  90% {
    transform: translateX(-20%);
  }

  95% {
    transform: translateX(-10%);
  }

  100% {
    transform: translateX(0%);
  }
`;

export const CustomMenuModal = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  justify-content: flex-start;
`;

export const CustomMenuModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: var(--secondary);
  border-radius: 10px;
  width: 50%;
  z-index: 101;
  transition: all 0.3s;
  animation: ${modalInAnimate} 0.2s ease-in;
`;

export const CustomMenuModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
`;

export const CustomMenuModalHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomMenuModalTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
`;

export const CustomMenuModalItem = styled.a`
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

export const CustomModalTrigger = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
`;
