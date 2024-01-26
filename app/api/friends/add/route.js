import {
  collection,
  updateDoc,
  arrayUnion,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../../../../firebase.config";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  console.log(data);
  try {
    const friends = collection(db, "users", data.userId, "friends");
    const friendDocs = await getDocs(friends);

    friendDocs.forEach(async (document) => {
      const documentRef = doc(friends, document.userdcid);
      await updateDoc(documentRef, {
        id: arrayUnion(data.id),
      });
    });
    const friends1 = collection(db, "users", data.friendId, "friends");
    const friendDocs1 = await getDocs(friends1);

    friendDocs1.forEach(async (document) => {
      const documentRef = doc(friends1, document.id);
      await updateDoc(documentRef, {
        id: arrayUnion(data.userId),
      });
    });
    // const user = doc(db, "users", data.friendId, "friends");
    // await updateDoc(user, {
    //   id: arrayUnion(data.userId),
    // });

    return NextResponse.json({ status: 200, friend: true, error: false });
    // ...
  } catch (e) {
    return NextResponse.json({
      status: 408,
      error: e.message,
      id: data.userId,
    });
  }
};
