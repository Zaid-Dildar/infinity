import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  let data = [];
  //   let allData = [];
  try {
    const querySnapshot1 = await getDocs(
      collection(db, "users", userId, "notifications")
    );
    // console.log(querySnapshot);
    querySnapshot1.forEach((doc) => {
      data.push({ docId: doc.id, ...doc.data() });
    });

    // const usersSnapshot = await getDocs(collection(db, "users"));
    // usersSnapshot.forEach((doc) => {
    //   allData.push({ id: doc.id, ...doc.data() });
    // });

    return NextResponse.json({
      status: 200,
      notificationsData: data,
      id: userId,
    });
  } catch (e) {
    return NextResponse.json({ status: 408, error: e.message, id: userId });
  }
};
export const POST = async (request) => {
  const data = await request.json();
  console.log(data);
  try {
    await addDoc(
      collection(db, "users", data.userId, "notifications"),
      data.notificationData
    );
    return NextResponse.json({ status: 200, notification: true, error: false });
    // ...
  } catch (e) {
    return NextResponse.json({
      status: 408,
      error: e.message,
      id: data.userId,
    });
  }
};
export const DELETE = async (request) => {
  const data = await request.json();
  console.log("Deleting", data);
  try {
    const deleteDocRef = doc(
      db,
      "users",
      data.notificationData.userDocId,
      "notifications",
      data.notificationData.notificatoinDocId
    );
    await deleteDoc(deleteDocRef);

    return NextResponse.json({ status: 200, deleted: true, error: false });
    // ...
  } catch (e) {
    return NextResponse.json({
      status: 408,
      deleted: false,
      error: e.message,
    });
  }
};
