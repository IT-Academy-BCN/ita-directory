import styled from "styled-components"

/* 
320px — 480px: Mobile devices.
481px — 768px: iPads, Tablets.
769px — 1024px: Small screens, laptops.
1025px — 1200px: Desktops, large screens.
*/
/* @media only screen and (max-width: 1024px) {
    flex-direction: column;
}
 */
export const SearchStyled = styled.div`
    height: 100vh;
    padding: 0 1rem;
    
.search-body{
    display: grid;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 768px) {
        grid-template-columns: 0.6fr 0.4fr;
    }
}
.search-results{
    display: flex;
    flex-direction: column;
    width: 100%;
   
}
.search-results-list{
    display: grid ;
    grid-template-columns: 1fr;
    grid-gap: 0.4rem;
/*     display: flex;
    flex-wrap: wrap; */
    background-color: blueviolet;
    padding-right: .8rem;

    @media only screen and (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
 

    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr)    ;
    }
}
.search-more-button{
    display: flex;
    justify-content: center;
    
}
.search-map{
    background-color: orange;
    width: 100%;
    padding: 0 0 0 .8rem;

    @media only screen and (max-width: 768px) {
        display: none;
    }
}
.box{
    background-color: red;
    width: 100%;
    height: 10rem;
    border-radius: 8px;

}
.map{
    background-color: lightgreen;
    height: 100%;
    border-radius: 8px;
}

`;