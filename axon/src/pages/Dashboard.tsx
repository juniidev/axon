import { BentoLayout } from '../layouts/BentoLayout';
import { BentoCard } from '../components/atoms/BentoCard';
import { LinkCard } from '../components/molecules/LinkCard';
import { CreateLinkForm } from '../components/molecules/CreateLinkForm';
import { useAuth } from '../hooks/useAuth';
import { useLinks } from '../hooks/useLinks';
import { SortableGrid } from '../components/organisms/SortableGrid';

export const Dashboard = () => {
  const { user, loading } = useAuth();
  const { links, reorderLinks, addLink, removeLink } = useLinks(
    loading ? undefined : user?.uid,
  );

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <BentoLayout>
      <SortableGrid items={links} setItems={reorderLinks}>
        <BentoCard className="col-span-2 row-span-2">Perfil Usuario</BentoCard>

        <BentoCard>
          <CreateLinkForm onAdd={addLink} />
        </BentoCard>

        {links.map((link) => (
          <LinkCard
            key={link.id}
            id={link.id}
            title={link.title}
            url={link.url}
            onDelete={() => removeLink(link.id)}
          />
        ))}

        <BentoCard className="col-span-2">Contenido destacado</BentoCard>
      </SortableGrid>
    </BentoLayout>
  );
};
