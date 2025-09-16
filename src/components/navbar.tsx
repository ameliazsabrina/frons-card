import PillNav from "@/components/ui/pillnav";

export default function Navbar() {
  const Image = "/headerlogo.svg";
  return (
    <header className="fixed top-0 w-full z-50 flex justify-center items-center">
      <div className="items-center">
        <PillNav
          logo={Image}
          logoAlt="Company Logo"
          items={[{ label: "Buy Now", href: "#order" }]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#ffffff"
          hoveredPillTextColor="#000000"
          pillTextColor="#000000"
        />
      </div>
    </header>
  );
}
