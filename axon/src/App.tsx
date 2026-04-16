import { BentoLayout } from './layouts/BentoLayout';
import { BentoGrid } from './layouts/BentoGrid';
import { BentoCard } from './components/atoms/BentoCard';
import { LinkCard } from './components/molecules/LinkCard';

function App() {
  return (
    <BentoLayout>
      <BentoGrid>
        <BentoCard className="col-span-2 row-span-2">
          Perfil
        </BentoCard>

        <LinkCard title="GitHub" url="https://github.com" />
        <LinkCard title="Twitter" url="https://twitter.com" />

        <BentoCard className="col-span-2">
          Contenido destacado
        </BentoCard>
      </BentoGrid>
    </BentoLayout>
  );
}

export default App;