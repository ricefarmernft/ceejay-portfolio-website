import PortfolioNav from "./components/portfolioNav";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <PortfolioNav header />
      <div className="p-4 md:p-8">{children}</div>
      <PortfolioNav />
    </>
  );
}
