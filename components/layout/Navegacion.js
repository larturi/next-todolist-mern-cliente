import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Boton from '../ui/Boton';

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
                <a>
                    <span css={css`
                        color: #fff;
                    `}>Pendientes</span>
                </a>
            </Link>
            <Link href="/completadas">
                <a>
                    <span css={css`
                        color: #fff;
                    `}>Completadas</span>
                </a>
            </Link>
            <Link href="">
                <Boton bgColor="true">
                    <span css={css`
                        color: #fff;
                    `}>+ Add task</span>
                </Boton>
            </Link>
        </Nav>
     );
}
 
export default Navegacion;