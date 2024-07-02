import Banner from "./components/Banner";
import SessionProducts from "./components/SessionProducts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full py-10">
      <section className="w-full flex justify-center mx-auto">
        <Banner />
      </section>

      <section className="w-full h-full mt-20">
        <SessionProducts />
      </section>
    </main>
  );
}
