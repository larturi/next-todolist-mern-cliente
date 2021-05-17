import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
        <Nav css={css`
            margin-right: 3rem;
        `}>
            <Link href="/">
                <a>
                    <span css={css`
                        color: #fff;
                        font-size: 15px;
                    `}>Pendientes</span>
                </a>
            </Link>
            <Link href="/completadas">
                <a>
                    <span css={css`
                        color: #fff;
                        font-size: 15px;
                    `}>Completadas</span>
                </a>
            </Link>
            
        </Nav>
     );
}
 
export default Navegacion;