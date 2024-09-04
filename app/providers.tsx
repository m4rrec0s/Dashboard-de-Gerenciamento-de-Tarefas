"use client"

import { ThemeProvider } from "next-themes"
import StyledComponentsRegistry from "./_lib/registry"
import GlobalStyle from "./styles/global"

function Providers(props: React.PropsWithChildren) {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider>
                <GlobalStyle />
                {props.children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    )
}

export default Providers