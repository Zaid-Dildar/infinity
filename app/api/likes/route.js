import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  let data = [];
  let docId = "";

  const searchParams = request.nextUrl.searchParams;
  const postId = searchParams.get("postId");

  try {
    const querySnapshot = await getDocs(
      collection(db, "posts", postId, "likes")
    );

    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      data = doc.data().ids;
      docId = doc.id;
    });

    return NextResponse.json({
      status: 200,
      likesData: data,
      docId: docId,
      postId: postId,
    });
  } catch (e) {
    return NextResponse.json({
      status: 408,
      error: e.message,
    });
  }
};
export const POST = async (request) => {
  const data = await request.json();
  const { likesData } = data;
  console.log(likesData);
  if (likesData.docId === "") {
    await addDoc(collection(db, "posts", likesData.postId, "likes"), {
      ids: [likesData.userId],
    });
    return NextResponse.json({ status: 200, like: true, error: false });
  } else
    try {
      const documentRef = doc(
        db,
        "posts",
        likesData.postId,
        "likes",
        likesData.docId
      );
      await updateDoc(documentRef, {
        ids:
          likesData.action === "add"
            ? arrayUnion(likesData.userId)
            : arrayRemove(likesData.userId),
      });

      return NextResponse.json({ status: 200, like: true, error: false });
      // ...
    } catch (e) {
      // })
      // .catch((err) => {
      // console.log(e);
      // console.log(e.message);
      return NextResponse.json({ status: 408, like: false, error: e.message });
      // router.push("/admin");
      // throw new Error("Failed to fetch data!");
      // });
    }
};
