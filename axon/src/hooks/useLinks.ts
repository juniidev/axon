import { useEffect, useState } from 'react';
import {
  createLink,
  getLinksByUser,
  deleteLink,
  updateLinkOrder,
} from '../services/links';

type Link = {
  id: string;
  title: string;
  url: string;
  userId: string;
  createdAt: number;
  order: number;
};

export const useLinks = (userId: string | undefined) => {
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    if (!userId) return; // ⬅️ clave

    const fetch = async () => {
      const data = await getLinksByUser(userId);
      setLinks((data as Link[]).sort((a, b) => a.order - b.order));
    };

    fetch();
  }, [userId]);

  const addLink = async (title: string, url: string) => {
    if (!userId) return;

    await createLink({
      title,
      url,
      userId,
      createdAt: Date.now(),
      order: Date.now(), // simple inicial
    });

    const updated = await getLinksByUser(userId);
    setLinks(updated as Link[]);
  };

  const removeLink = async (id: string) => {
    await deleteLink(id);

    if (!userId) return;
    const updated = await getLinksByUser(userId);
    setLinks(updated as Link[]);
  };

  const reorderLinks = async (newLinks: Link[]) => {
    setLinks(newLinks);

    // persistir en Firestore
    await Promise.all(
      newLinks.map((link, index) => updateLinkOrder(link.id, index)),
    );
  };

  return {
    links,
    reorderLinks,
    addLink,
    removeLink,
  };
};
