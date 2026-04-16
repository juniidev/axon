import { useEffect, useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { createLink, getLinksByUser, updateLinkOrder } from '../services/links';

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
    try {
      await deleteDoc(doc(db, 'links', id));

      setLinks((prev) => prev.filter((l) => l.id !== id));
    } catch (error) {
      console.error('Error deleting link:', error);
    }
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
