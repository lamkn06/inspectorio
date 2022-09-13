import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { ReactNode } from "react";
import "./index.scss";

interface Props {
  renderContent(): ReactNode;
}
export const PageWrapper = (props: Props) => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px", maxWidth: "1280px" }}>
        <div className="site-layout-content">{props.renderContent()}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};
