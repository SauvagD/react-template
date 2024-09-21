import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          loading
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={() => <>error</>}>
        <HelmetProvider>{children}</HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
