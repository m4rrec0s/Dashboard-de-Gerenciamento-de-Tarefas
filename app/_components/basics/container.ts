"use client"

import styled from "styled-components";

export const Container = styled.div`
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary);
    border-bottom: 1px solid var(--border);
    height: 80px;

    @media (max-width: 640px) {
        padding: 0 10px;
    }
`

export const ContainerTitle = styled.h1`
    font-size: var(--size-xl);
    font-weight: bold;
    color: #fff;
`