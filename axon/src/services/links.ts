import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

const linksRef = collection(db, 'links');

export const createLink = async (data: unknown) => {
  return await addDoc(linksRef, data);
};

export const getLinksByUser = async (userId: string) => {
  const q = query(linksRef, where('userId', '==', userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const deleteLink = async (id: string) => {
  await deleteDoc(doc(db, 'links', id));
};

export const updateLinkOrder = async (id: string, order: number) => {
  const ref = doc(db, 'links', id);

  await updateDoc(ref, {
    order,
  });
};
