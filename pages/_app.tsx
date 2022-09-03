import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/query-client";

interface PageProps {
  dehydratedState: unknown;
}

function MyApp({ Component, pageProps }: AppProps) {
  const { dehydratedState } = pageProps as PageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
