import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = styled.nav`
    padding-left: 2rem;
    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;
        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const Navegacion = () => {

    return ( 
        <Nav>
            <Link href="/">
                <a>Pendientes</a>
            </Link>
            <Link href="/completadas">
                <a>Completadas</a>
            </Link>
        </Nav>
     );
}
 
export default Navegacion;