"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #ffffff;
        --foreground: #0D0D0D;
        --card: #fafafa;
        --card-foreground: #0D0D0D;
        --popover: #fafafa;
        --popover-foreground: #0D0D0D;
        --primary: #00b3b3;
        --primary-foreground: #fafafa;
        --secondary: #0D0D0D;
        --secondary-foreground: #d9d9d9;
        --muted: #e6e6e6;
        --muted-foreground: #333333;
        --accent: #d9d9d9;
        --accent-foreground: #0D0D0D;
        --destructive: #e60000;
        --destructive-foreground: #fafafa;
        --border: #cccccc;
        --input: #d9d9d9;
        --ring: #212121;
        --radius: 0.5rem;
        --chart-1: #333333;
        --chart-2: #808080;
        --chart-3: #b3b3b3;
        --chart-4: #d9d9d9;
        --chart-5: #e6e6e6;
        --size-xs: 0.75rem;
        --size-sm: 0.875rem;
        --size-md: 1rem;
        --size-lg: 1.125rem;
        --size-xl: 1.25rem;
        --size-2xl: 1.5rem;
        --size-3xl: 1.875rem;
        --size-4xl: 2.25rem;
        }

    [data-theme="dark"] {
        --background: #0D0D0D;
        --foreground: #fafafa;
        --card: #262626;
        --card-foreground: #404040;
        --popover: #262626;
        --popover-foreground: #fafafa;
        --primary: #00b3b3;
        --primary-foreground: #fafafa;
        --secondary: #262626;
        --secondary-foreground: #fafafa;
        --muted: #333333;
        --muted-foreground: #fafafa;
        --accent: #404040;
        --accent-foreground: #fafafa;
        --destructive: #992626;
        --destructive-foreground: #fafafa;
        --border: #4d4d4d;
        --input: #404040;
        --ring: #b3b3b3;
        --chart-1: #595959;
        --chart-2: #808080;
        --chart-3: #a6a6a6;
        --chart-4: #bfbfbf;
        --chart-5: #cccccc;
        }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: var(--size-md);
        background-color: var(--background);
        color: var(--foreground);
    }
    
`;
