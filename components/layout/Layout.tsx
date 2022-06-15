import React, { ReactNode } from 'react';

type Props = {
    classes?: {
        outside?: string,
        container?: string
    },
    children: ReactNode
}

const Layout = ({ children, classes }: Props) => (
    <div className={classes?.outside}>
        <section className={`${classes?.container} containerXl mx-auto`}>
            {children}
        </section>
    </div>
);

export default Layout;
