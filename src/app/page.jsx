import Navbar from "@/components/navbar";
import Image from "next/image";
{
  /* <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
  <p>Hola mundo</p>
</div>
</main> */
}
export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="relative w-screen h-screen">
          <Image src="/image_home.png" alt="Imagen" fill />
        </section>
      </main>
    </>
  );
}
