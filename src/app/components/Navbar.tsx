import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="mx-auto mt-12 mb-8 max-w-xl fade-in md:mt-16">
      <div className="grid gap-2">
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <div
              className="font-['Departure_Mono'] font-black text-blue text-4xl md:text-5xl tracking-tight leading-none transform hover:scale-105 transition-transform duration-200"
              style={{ textShadow: "0.5px 0.5px 0px #0043ff" }}
            >
              TOFARA MUSUSA
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
