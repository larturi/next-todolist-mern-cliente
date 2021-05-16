import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

const Layout = props => {
    return ( 
        <>
            <Global 
                styles={css`
                    :root {
                        --gris: #202020;
                        --gris2: #282828;
                        --gris3: #e1e1e1;
                        --naranja: #DA552F;
                        --white: #fff
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem; 
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                        background: var(--gris);
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                        color: var(--white);
                    }
                    h1, h2 {
                        font-family: 'Roboto Slab', serif;
                        font-weight: 700;
                        color: var(--white);
                    }
                    h3, h4 {
                        font-family: 'PT Sans', sans-serif;
                        color: var(--white);
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding:0;
                    }
                    a {
                        text-decoration: none;
                        color: var(--white);
                    }
                    img {
                        max-width: 100%;
                    }
                    .mt-4 {
                        margin-top: 4rem;
                    }
                    .ml-4 {
                        margin-left: 4rem;
                    }
                    .mr-4 {
                        margin-right: 4rem;
                    }
                    .text-white {
                        color: var(--white);
                    }
                `}
            />


            <Head>
                <title>Todolist Next.js</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap" rel="stylesheet" />
                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>

            <Header />

            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;