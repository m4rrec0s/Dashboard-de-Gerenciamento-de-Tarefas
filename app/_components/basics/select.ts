"use client";

import styled from "styled-components";

export const Select = styled.select`
    background-color: var(--card);
    border-radius: 10px;
    padding: 10px 20px 10px 35px;
    border: 1px solid var(--border);
    width: 100%;
    &:focus {
        outline: none;
        border: 1px solid var(--card-foreground);
    }
`;

export const Option = styled.option`
    background-color: var(--card);
    border-radius: 10px;
    padding: 10px 20px;
    width: 100%;

    &:hover {
        background-color: var(--card-foreground);
        cursor: pointer;
    }
`;
