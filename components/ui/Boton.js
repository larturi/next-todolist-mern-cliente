import styled from '@emotion/styled';

const Boton = styled.a`
    font-weight: 700;
    text-transform: uppercase;
    padding: .8rem 3rem;
    text-align: center;
    color: #fff;
    &:last-of-type {
        margin-right:0;
    }
    &:hover {
        cursor: pointer;
    }
`;

export default Boton;