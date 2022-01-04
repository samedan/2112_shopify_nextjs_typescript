import { createContext, ReactNode, useContext, useMemo } from "react";
import { ApiConfig, ApiProviderContext } from "@common/types/api";
import { ApiHooks } from "./types/api";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig;
  hooks: ApiHooks;
}

// Partial means Optional parameters
export const ApiContext = createContext<Partial<ApiProviderContext>>({});
export const ApiProvider = ({ children, config, hooks }: ApiProviderProps) => {
  const coreConfig = useMemo(() => {
    return {
      fetcher: config.fetch,
      hooks,
    };
  }, [config.fetch, hooks]);
  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => {
  return useContext(ApiContext) as ApiProviderContext;
};
