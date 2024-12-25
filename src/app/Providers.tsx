'use client';

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({children}: {children: React.ReactNode}): JSX.Element {
  const clientQuery = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });
  
  return (
    <NextUIProvider>
      <QueryClientProvider client={clientQuery}>
        {children}
      </QueryClientProvider>
    </NextUIProvider>
  );
}
