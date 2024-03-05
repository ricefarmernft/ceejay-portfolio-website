import PortfolioNav from "./components/portfolioNav";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <PortfolioNav header />
      <div className="py-4 md:p-8">{children}</div>
      <PortfolioNav />
    </>
  );
}
