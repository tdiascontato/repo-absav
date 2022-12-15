import styled from "styled-components";

export const Container = styled.div`
    padding: 5px;
    position: relative;
    display: flex;
        
     .header{
        display: grid;
        place-items: center;
        padding-top: 1em;

        
        
        .Gif{
            width: auto;
            padding:10px;
        }

        .btn{
            width: 100px;
            height: 50px;
            position: flex;
            border :2px solid #FF4500;
            color:#FF4500;
            background: #000;
            cursor: pointer;
            text-decoration: none;
            border-radius: 5px;
                        
        }
     }
`;

