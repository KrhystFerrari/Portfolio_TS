import { motion } from "framer-motion";

interface TechnologyCardProps {
  name: string;
  version: string;
  description: string;
  color: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, version, description, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div
          className="w-16 h-16 rounded-full flex justify-center items-center"
          style={{ backgroundColor: color }}
        >
          <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
        </div>

        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>

        <p className="text-secondary text-[14px] text-center">v{version}</p>

        <p className="text-secondary text-[14px] text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const TechnologiesSection: React.FC = () => {
  const technologies = [
    {
      name: "Three.js",
      version: "0.178.0",
      description: "Biblioteca JavaScript 3D para criar gráficos impressionantes",
      color: "#000000",
    },
    {
      name: "React Three Fiber",
      version: "9.2.0",
      description: "Renderizador React para Three.js com hooks e componentes",
      color: "#61DAFB",
    },
    {
      name: "Tailwind CSS",
      version: "4.1.11",
      description: "Framework CSS utilitário para estilização rápida",
      color: "#06B6D4",
    },
    {
      name: "Framer Motion",
      version: "12.23.3",
      description: "Biblioteca de animações para React com API declarativa",
      color: "#0055FF",
    },
    {
      name: "React Three Drei",
      version: "10.5.0",
      description: "Helpers e componentes úteis para React Three Fiber",
      color: "#FFA500",
    },
    {
      name: "Maath",
      version: "0.10.8",
      description: "Biblioteca de matemática otimizada para aplicações 3D",
      color: "#FF6B6B",
    },
  ];

  return (
    <div className="bg-black-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Tecnologias Instaladas
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Stack Moderno.
          </h2>
        </motion.div>

        <div className="w-20 h-[4px] bg-[#915EFF] mt-5"></div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Seu projeto está configurado com as versões mais atuais das principais bibliotecas para
          desenvolvimento de portfólios interativos com Three.js. Todas as dependências estão
          instaladas e prontas para uso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-wrap gap-10"
        >
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              className="w-28 h-28"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <TechnologyCard {...technology} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
