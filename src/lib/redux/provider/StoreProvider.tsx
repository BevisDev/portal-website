"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
