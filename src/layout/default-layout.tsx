import Styles from "./default-layout.module.css";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <div className={Styles.container}>{children}</div>;
};

export default DefaultLayout;
