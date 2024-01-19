import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase.config";
import { NextResponse } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const POST = async (request) => {
  const data = await request.json();
  const { email } = data;
  const { password } = data;
  const { userData } = data;
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    await addDoc(collection(db, "users"), { id: user.uid, ...userData });
    return NextResponse.json({ status: 200, user: true, error: false });
    // ...
  } catch (e) {
    // })
    // .catch((err) => {
    // console.log(e);
    // console.log(e.message);
    return NextResponse.json({ status: 408, user: false, error: e.message });
    // router.push("/admin");
    // throw new Error("Failed to fetch data!");
    // });
  }
};
