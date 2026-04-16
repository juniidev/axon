import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
import { LinkCard } from '../components/molecules/LinkCard';
import { BentoLayout } from '../layouts/BentoLayout';

type Link = {
  id: string;
  title: string;
  url: string;
  userId: string;
  order?: number;
};

export const PublicProfile = () => {
  const { username } = useParams();
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      if (!username) return;

      const q = query(collection(db, 'links'), where('userId', '==', username));

      const snap = await getDocs(q);

      setLinks(
        snap.docs
          .map((doc) => {
            const data = doc.data() as Omit<Link, 'id'>;
            return { id: doc.id, ...data };
          })
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
      );
    };

    fetchLinks();
  }, [username]);

  return (
    <BentoLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-5">
        {links.map((link) => (
          <LinkCard
            key={link.id}
            id={link.id}
            title={link.title}
            url={link.url}
          />
        ))}
      </div>
    </BentoLayout>
  );
};
