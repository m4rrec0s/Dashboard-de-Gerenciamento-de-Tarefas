"use client";

import { ThemeProvider } from "next-themes";
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./_context/auth-context";

function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <GlobalStyle />
        <AuthProvider>{props.children}</AuthProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default Providers;