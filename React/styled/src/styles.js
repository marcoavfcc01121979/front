import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`;

export const Head = styled.header`
    width: 100%;
    height: 70px;
    background-color: #ff0000;
    justify-content: center;
    align-items: center;
    display: flex;

a{
    font-size: 45px;
    color: #FFF;
}

`;

export const BemVindo = styled.h1`
    font-size: 50px;
    color: ${props => `#${props.cor}`};
`;

