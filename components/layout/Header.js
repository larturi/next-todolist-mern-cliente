import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Navegacion from './Navegacion';

const ContenedorHeader = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.a`
    font-size: 2rem;
    line-height: 0;
    margin-right: 2rem;
    margin-left: 2rem;
    font-weight: 700;
    text-transform: uppercase;
`;

const Header = () => {

    return ( 
        <header
            css={css`
                padding: 1rem 0;
                background: var(--gris2);
            `}
        >
            <ContenedorHeader css={css`
                margin-bottom: 0rem;
            `}>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo css={css`
                            cursor: pointer;
                        `}>TODOLIST</Logo>
                    </Link>
                    
                </div>

                <div>
                    <Navegacion />
                </div>

              
            </ContenedorHeader>
        </header>
     );
}
 
export default Header;