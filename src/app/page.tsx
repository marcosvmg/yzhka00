import Inicio from "@/components/sections/Inicio";
import Artistas from "@/components/sections/Artistas";
import Footer from "@/components/Footer";
import ScrollController from "@/components/ScrollController";

export default function Home() {
  return (
    <main>
      <ScrollController>
        <Inicio />
        <Artistas />
        <Footer />
      </ScrollController>
    </main>
  );
}