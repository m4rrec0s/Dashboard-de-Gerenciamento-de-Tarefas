"use client"

import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: var(--card);
    border-radius: 10px;
    width: 100%;
`

export const FormTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--foreground);	
`

export const FormFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`