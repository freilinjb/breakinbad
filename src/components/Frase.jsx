import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding:3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    /* media query */
    @media(min-width: 992px) {
        margin-top:10rem;
    }
    /* styled referenia a sus hijos */
    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        padding-left: 4rem;

        /* en sas se transforma al selector de h1 */
        &::before {
            content: open-quote; 
            font-size: 10rem;
            color:black;
            position:absolute;
            left: -1rem;
            top:-2rem;
        }
    }

    p{

    }
`;

const Frase = ({frase}) => {
    return ( 
    <ContenedorFrase>
        <div>
            <h1><strong>{frase.quote}</strong></h1>
            <p>{frase.author}</p>
        </div>
    </ContenedorFrase>
     );
}
 
export default Frase;