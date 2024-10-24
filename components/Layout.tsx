

import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;