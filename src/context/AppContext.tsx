"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store/store";
import { ReactNode } from "react";

const AppContext = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </section>
  );
};

export default AppContext;
