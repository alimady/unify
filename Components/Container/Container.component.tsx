import React, { ReactNode } from "react";
import { Layout } from "./Container.styles";
type Props = {
  children: ReactNode
};

const Container = ({ children }: Props) => {
  return <Layout>
    {children}
  </Layout>;
};

export default Container;
