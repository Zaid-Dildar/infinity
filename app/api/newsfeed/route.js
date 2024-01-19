import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const GET = async () => {
  let data = [];
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      data.push({ postId: doc.id, ...doc.data() });
    });

    return NextResponse.json({ status: 200, postsData: data });
  } catch (e) {
    return NextResponse.json({ status: 408 });
  }
};
export const POST = async (request) => {
  const data = await request.json();
  const { postData } = data;
  try {
    await addDoc(collection(db, "posts"), postData);
    return NextResponse.json({ status: 200, post: true, error: false });
    // ...
  } catch (e) {
    // })
    // .catch((err) => {
    // console.log(e);
    // console.log(e.message);
    return NextResponse.json({ status: 408, post: false, error: e.message });
    // router.push("/admin");
    // throw new Error("Failed to fetch data!");
    // });
  }
};
