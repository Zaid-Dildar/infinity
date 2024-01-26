import { NextResponse } from "next/server";
export const POST = async (request) => {
  const formData = await request.formData();
  const data = formData.get("file");
  console.log(data);
  try {
    const formData = new FormData();
    formData.append("file", data);
    formData.append("upload_preset", "sbq61tug");
    // formData.append("folder", "Infinity");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dmx66oic1/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const responseData = await response.json();
    const responseUrl = responseData.secure_url;

    return NextResponse.json({ status: 200, url: responseUrl });
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
