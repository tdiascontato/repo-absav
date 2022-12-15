import styled from "styled-components"

export const Cartão = styled.div`
               
        align-items: center;
        background-color: #fffdd6;
        border-radius: 20%;
        color: black;
        border: 1px solid #edffd6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        //Sintaxe errada no React?
        :hover {
        background-color: brown;
        color: gold;      
        }

        button:hover{
        
        background-color: grey;

        }
`;