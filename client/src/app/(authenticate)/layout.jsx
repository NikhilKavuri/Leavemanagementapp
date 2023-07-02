import Navbar from "../components/navbar";

export default function PagesLayout({ children }) {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
}
