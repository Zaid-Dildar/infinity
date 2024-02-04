import { NextResponse } from "next/server";
import { auth } from "@/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";

export const GET = async () => {
  try {
    const usersRef = collection(db, "users");

    const q = query(
      usersRef,
      where("id", "==", "iBaQNtYQXodMLM6cxQZRPrh1k222")
    );

    const querySnapshot = await getDoc(q);
    const data = querySnapshot.data();
    return NextResponse.json({ status: 200, userData: data });
  } catch (e) {
    return NextResponse.json({ status: 408, error: e.message });
  }
};

export const POST = async (request) => {
  const data = await request.json();
  const { email } = data;
  const { password } = data;
  let userData = {};
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // .then((userCredential) => {
    // Signed in

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("id", "==", userCredentials.user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      userData = { ...doc.data(), docId: doc.id };
    });
    const response = NextResponse.json({
      status: 200,
      isUser: true,
      error: false,
      user: userData,
    });
    response.cookies.set("isLoggedIn", "true");
    // response.cookies.set({ isLoggedIn: "true" });
    return response;
    // ...
  } catch (e) {
    // })
    // .catch((err) => {
    // console.log(err);
    // console.log(error.message);
    return NextResponse.json({
      status: 408,
      user: false,
      error: e.message,
    });
    // router.push("/admin");
    // throw new Error("Failed to fetch data!");
    // });
  }
};
