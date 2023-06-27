import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    {
      label: "¡Pedir Servicio!",
      route: "https://api.whatsapp.com/send?phone=573017400155&text=",
      special: true,
    },
    { label: "Iniciar Sesion", route: "/login" },
  ];

  return (
    <nav className="w-screen bg-slate-200 h-16">
      <div className="flex justify-between content-center">
        <Image src="/logo.svg" alt="Logo de mensajería" width={80} height={80}/>
        <ul className="flex h-16 [&>li]:px-4 mr-1 items-center">
          {links.map((link) => (
            <Link
              href={link.route}
              key={link.label}
              className="flex h-16 [&>li]:px-4 mr-1 items-center"
            >
              <li
                className={`h-16 flex justify-center items-center  ${
                  link.special
                    ? "bg-green-500 hover:bg-green-600"
                    : "hover:border-b-2 hover:border-black"
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
