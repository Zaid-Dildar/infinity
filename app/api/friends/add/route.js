import {
  collection,
  addDoc,
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
    await addDoc(collection(db, "users", data.userDocId, "friends"), {
      ids: [data.friendId],
    });
    await addDoc(collection(db, "users", data.friendDocId, "friends"), {
      ids: [data.userId],
    });
    return NextResponse.json({ status: 200, added: true, error: false });
    //   } else
    //       const documentRef = doc(db, "users", data.userDocId, "friends", " ");
    //       await updateDoc(documentRef, {
    //         ids:
    //           data.action === "add"
    //             ? arrayUnion(data.friendId)
    //             : arrayRemove(data.friendId),
    //       });

    //       return NextResponse.json({ status: 200, like: true, error: false });
    // ...
  } catch (e) {
    return NextResponse.json({
      status: 408,
      error: e.message,
      id: data.userId,
    });
  }
};
