/* Using styled components in react */
import React from "react";
import styled from "styled-components"

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
`;
export const Image = styled.image`
    height: auto;
    width: 100%;
    border: 2px dashed darkgray;
`;
export const Button = styled.button`
    
`;
