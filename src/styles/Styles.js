import React from "react";
import styled from "styled-components";

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 3% 5%;
    border: 2px solid #010203;
    border-radius: 3px;
    font-size: 2rem;
    background-color: #66CCAA;
    color: #010203;
    text-align: center;
    text-decoration: none;
`;

