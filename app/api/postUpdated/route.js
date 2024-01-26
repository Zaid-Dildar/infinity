import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  try {
    const post = doc(db, "posts", data.postId);
    await updateDoc(post, {
      likes: data.likes,
      comments: data.comments,
    });

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
