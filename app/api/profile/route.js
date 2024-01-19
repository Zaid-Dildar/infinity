import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  let data = [];
  try {
    const q = query(collection(db, "posts"), where("authorId", "==", userId));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({ postId: doc.id, ...doc.data() });
    });

    return NextResponse.json({ status: 200, postsData: data, id: userId });
  } catch (e) {
    return NextResponse.json({ status: 408, error: e.message, id: userId });
  }
};
