'use client'

import { ThemeProvider as NextThemeProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes";
import React from 'react'

type Props = ThemeProviderProps;

const ThemeProvider = (props: Props) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="theme"
    >
      {props.children}
    </NextThemeProvider>
  )
}

export default ThemeProvider;
