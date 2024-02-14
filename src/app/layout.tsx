"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useMemo } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "@/utils/theme";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../state/api";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Finance Dashboard",
//   description: "Finance Dashboard",
// };

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

// Create a React Query client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "1rem 2rem 4rem 2rem",
                }}
              >
                <Navbar />
                {children}
              </Box>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
