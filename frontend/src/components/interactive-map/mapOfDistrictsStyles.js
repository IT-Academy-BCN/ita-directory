import styled from "styled-components";

export const ContainerExterior = styled.div` 
    display: flex ;
    justify-content:center;
`;

export const Container = styled.div` 
    max-width: 1070px;
    height: auto ;
    display: grid;
    gap: 1.2rem;
    margin-top: 3rem;
    
    @media screen and (max-width: 425px){
        gap: .8rem;
    }
`;

export const GridItem = styled.div`

    @media screen and (max-width: 1024px){
        width:8rem ;
    }    
    @media screen and (max-width: 768px){
        width:12rem ;
    }   
    @media screen and (max-width: 578px){
        width: 8rem ;
        margin-top: -1.2rem ;
    } 
    @media screen and (max-width: 425px){
        width: 8rem;
        margin-top: -.8rem ;
    } 
    @media screen and (max-width: 375px){
        width: 7rem;
    }
    @media screen and (max-width:320px){
        margin-top:-2.2rem;
    }
`;

export const GridItemA = styled.div`
    grid-column: 1 ;
    grid-row: 1 / span 2;

    @media screen and (max-width: 768px){
        grid-column: 1 ;
        grid-row: 1 / span 1;
    }
    @media screen and (max-width: 578px){
        grid-column: 1 ;
        grid-row: 1 / span 3;
    }
`;

export const GridItemB = styled.div`
    grid-column: 4;
    grid-row: 1 / span 2;
    
    @media screen and (max-width: 768px){
        grid-column: 2;
        grid-row: 1 / span 1;
    }
    @media screen and (max-width: 578px){
        grid-column: 2;
        grid-row: 3 / span 0;
    }
`;

export const GridItemC = styled.div`
    grid-column: 2 / span 2;
    grid-row: 2;
    
    @media screen and (max-width: 768px){
        grid-column: 1 / span 2;
        grid-row: 3;
    }
    @media screen and (max-width: 578px){
        grid-column: 1 / span 2;
        grid-row: 4;
    }
`;