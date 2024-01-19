import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  let data = [];
  let allData = [];
  let searchData = [];
  try {
    const querySnapshot1 = await getDocs(
      collection(db, "users", userId, "friends")
    );
    // console.log(querySnapshot);
    querySnapshot1.forEach((doc) => {
      searchData.push(doc.data());
    });

    const usersSnapshot = await getDocs(collection(db, "users"));
    usersSnapshot.forEach((doc) => {
      allData.push({ id: doc.id, ...doc.data() });
    });

    // const q = query(usersSnapshot, where(userId, "in", searchData[0].id));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   data.push(doc.data());
    // });

    return NextResponse.json({
      status: 200,
      postsData: allData,
      id: userId,
    });
  } catch (e) {
    return NextResponse.json({ status: 408, error: e.message, id: userId });
  }
};
