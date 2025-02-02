"use client"; // Ensure this runs only on the client

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode;
    attribute?: "class" | "data-theme"; // Explicitly define allowed values for `attribute`
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
    children,
    attribute = "class", // Default to "class"
    defaultTheme = "system",
    enableSystem = true,
    disableTransitionOnChange = true,
}: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensures theme only updates after mount
    }, []);

    if (!mounted) {
        return <>{children}</>; // Avoids mismatches during hydration
    }

    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
        >
            {children}
        </NextThemesProvider>
    );
}