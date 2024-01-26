import { collection, getDocs, query, where, or } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const searchValue = searchParams.get("searchValue");
  let data = [];
  //   let allData = [];
  //   let searchData = [];
  try {
    // const querySnapshot1 = await getDocs(
    //   collection(db, "users", userId, "friends")
    // );
    // // console.log(querySnapshot);
    // querySnapshot1.forEach((doc) => {
    //   searchData.push(doc.data());
    // });

    // const usersSnapshot = await getDocs(collection(db, "users"));
    // usersSnapshot.forEach((doc) => {
    //   allData.push({ id: doc.id, ...doc.data() });
    // });

    // console.log(searchData[0].id);
    const q = query(
      collection(db, "users"),
      where("city", "in", [searchValue])
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
    });

    return NextResponse.json({
      status: 200,
      usersData: data,
      value: searchValue,
    });
  } catch (e) {
    return NextResponse.json({ status: 408, error: e.message });
  }
};
