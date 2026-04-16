import { ProtectedRoute } from './components/ProtectedRoute';
import { BentoLayout } from './layouts/BentoLayout';
import { BentoCard } from './components/atoms/BentoCard';
import { LinkCard } from './components/molecules/LinkCard';
import { CreateLinkForm } from './components/molecules/CreateLinkForm';
import { useAuth } from './hooks/useAuth';
import { useLinks } from './hooks/useLinks';
import { SortableGrid } from './components/organisms/SortableGrid';

function App() {
  return (
    <ProtectedRoute>
      <MainApp />
    </ProtectedRoute>
  );
}

function MainApp() {
  const { user, loading } = useAuth();
  const { links, reorderLinks, addLink, removeLink } = useLinks(user?.uid);

  if (loading) return <div className="text-white p-6">Loading...</div>;

  return (
    <BentoLayout>
      <SortableGrid items={links} setItems={reorderLinks}>
        {/* PERFIL */}
        <BentoCard className="col-span-2 row-span-2">Perfil Usuario</BentoCard>

        {/* FORM (SOLO AQUÍ) */}
        <BentoCard>
          <CreateLinkForm onAdd={addLink} />
        </BentoCard>

        {/* LINKS */}
        {links.map((link) => (
          <LinkCard
            key={link.id}
            id={link.id}
            title={link.title}
            url={link.url}
            onDelete={() => removeLink(link.id)}
          />
        ))}

        {/* EXTRA */}
        <BentoCard className="col-span-2">Contenido destacado</BentoCard>
      </SortableGrid>
    </BentoLayout>
  );
}

export default App;
