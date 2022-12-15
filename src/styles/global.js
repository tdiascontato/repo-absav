import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Fira Sans', sans-serif;
    }
`;

export const Container = styled.div`
    background-size: cover;
    background-color: #d6d9ff;
    background-attachment: fixed;
    display: flex;
    flex-direction: Column;
    align-items: center;
    
`;