import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import { LinkCard } from "../components/molecules/LinkCard";
import { BentoLayout } from "../layouts/BentoLayout";

export const PublicProfile = () => {
  const { username } = useParams();
  const [links, setLinks] = useState<any[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      if (!username) return;

      const q = query(
        collection(db, "links"),
        where("userId", "==", username)
      );

      const snap = await getDocs(q);

      setLinks(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
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