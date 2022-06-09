/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Document, {
    Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                    <script src="https://kit.fontawesome.com/37bd7a10e2.js" crossOrigin="anonymous" />
                </body>
            </Html>
        );
    }
}
