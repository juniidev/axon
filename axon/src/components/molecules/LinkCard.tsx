import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BentoCard } from "../atoms/BentoCard";

type Props = {
  id: string;
  title: string;
  url: string;
  onDelete?: () => void;
};

export const LinkCard = ({ id, title, url, onDelete }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <BentoCard className="cursor-grab active:cursor-grabbing">
        <div className="flex flex-col justify-between h-full gap-3">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-neutral-400 break-all">{url}</p>
          </div>

          {onDelete && (
            <button
              onClick={onDelete}
              className="text-red-400 text-sm"
            >
              Eliminar
            </button>
          )}
        </div>
      </BentoCard>
    </div>
  );
};