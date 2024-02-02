import { collection, getDocs, query, where, and } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const searchValue = searchParams.get("searchValue");
  const userDocId = searchParams.get("userDocId");
  console.log(searchValue);
  console.log(userDocId);
  let data = [];
  //   let allData = [];
  let searchData = [];
  try {
    const querySnapshot1 = await getDocs(
      collection(db, "users", userDocId, "friends")
    );
    // console.log(querySnapshot);
    querySnapshot1.forEach((doc) => {
      searchData.push(doc.data().ids);
    });

    // const usersSnapshot = await getDocs(collection(db, "users"));
    // usersSnapshot.forEach((doc) => {
    //   allData.push({ id: doc.id, ...doc.data() });
    // });
    if (searchData.length !== 0) {
      console.log("S", searchData);
      const q = query(
        collection(db, "users"),
        where("id", "not-in", searchData)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        doc.data().city === searchValue &&
          data.push({ docId: doc.id, ...doc.data() });
      });
    } else {
      const q = query(
        collection(db, "users"),
        where("city", "==", searchValue)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push({ docId: doc.id, ...doc.data() });
      });
    }

    return NextResponse.json({
      status: 200,
      usersData: data,
      value: searchValue,
      id: userDocId,
    });
  } catch (e) {
    return NextResponse.json({ status: 408, error: e.message });
  }
};
