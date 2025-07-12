import { BrowserRouter } from "react-router-dom";
import { ThreeCanvas } from "./components/Canvas";
import FloatingCube from "./components/FloatingCube";
import TechnologiesSection from "./components/TechnologiesSection";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Navbar será adicionado aqui */}
          <div className="relative z-0">
            <ThreeCanvas>
              {/* Exemplo de modelo 3D - você pode substituir por seus próprios modelos */}
              <ambientLight intensity={0.15} />
              <directionalLight position={[10, 10, 5]} intensity={1} />

              {/* Cubo flutuante de exemplo */}
              <FloatingCube position={[2, 0, 0]} color="#915EFF" />
              <FloatingCube position={[-2, 0, 0]} color="#ff6b6b" />
              <FloatingCube position={[0, 2, 0]} color="#4ecdc4" />
            </ThreeCanvas>
          </div>
        </div>

        {/* Seções do portfólio */}
        <div className="relative z-0">
          {/* Seção de tecnologias mostrando as dependências instaladas */}
          <TechnologiesSection />

          {/* Outras seções serão adicionadas aqui */}
          {/* About */}
          {/* Experience */}
          {/* Works */}
          {/* Testimonials */}
          {/* Contact */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
