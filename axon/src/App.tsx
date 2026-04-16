import { BentoLayout } from './layouts/BentoLayout';
import { BentoGrid } from './layouts/BentoGrid';
import { BentoCard } from './components/atoms/BentoCard';

function App() {
  return (
    <BentoLayout>
      <BentoGrid>
        <BentoCard className="col-span-2 row-span-2">
          Perfil
        </BentoCard>

        <BentoCard>Link 1</BentoCard>
        <BentoCard>Link 2</BentoCard>

        <BentoCard className="col-span-2">
          Contenido destacado
        </BentoCard>
      </BentoGrid>
    </BentoLayout>
  );
}

export default App;