import { getConfig } from "./api/config";
import { ReactNode } from "react";
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from "@common";
import { shopifyHooks } from "./hooks";

const config = getConfig();

interface ShopifyProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: ShopifyProviderProps) => {
  return (
    <CoreApiProvider hooks={shopifyHooks} config={{ ...config }}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useCoreApiProvider();
