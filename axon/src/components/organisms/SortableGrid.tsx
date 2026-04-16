import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { type ReactNode } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';

type Item = {
  id: string;
  order: number;
};

type Props<T extends Item> = {
  items: T[];
  setItems: (items: T[]) => void;
  children: ReactNode;
};

export const SortableGrid = <T extends Item>({
  items,
  setItems,
  children,
}: Props<T>) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);

    const newArray = arrayMove(items, oldIndex, newIndex).map(
      (item, index) => ({
        ...item,
        order: index,
      }),
    );

    setItems(newArray);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((i) => i.id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-5">
          {children}
        </div>
      </SortableContext>
    </DndContext>
  );
};
