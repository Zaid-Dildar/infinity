import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../firebase.config";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  console.log("Deleting", data);
  try {
    const q = query(
      collection(db, "users", data.userDocId, "friends"),
      where("ids", "==", data.friendId)
    );
    const querySnapshot1 = await getDocs(q);
    querySnapshot1.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    const q1 = query(
      collection(db, "users", data.friendDocId, "friends"),
      where("ids", "==", data.userId)
    );
    const querySnapshot2 = await getDocs(q1);
    querySnapshot2.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    // const deleteDocRef = doc(
    //   db,
    //   "users",
    //   data.userDocId,
    //   "friends",
    //   data.notificationData.notificatoinDocId
    // );
    // console.log(deleteDocRef);
    // await deleteDoc(deleteDocRef);

    return NextResponse.json({ status: 200, removed: true, error: false });
    // ...
  } catch (e) {
    return NextResponse.json({
      status: 408,
      removed: false,
      error: e.message,
    });
  }
};
