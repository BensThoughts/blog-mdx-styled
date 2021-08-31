import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';

type LayoutProps = {
  children: React.ReactChild;
};

export default function Layout({
  children
}: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="z-0 my-8">{children}</main>
      <Footer />
    </>
  )
}