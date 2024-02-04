import { NextResponse } from "next/server";

export const GET = async () => {
  const response = NextResponse.json({
    loggedOut: true,
  });
  response.cookies.set("isLoggedIn", "false");
  return response;
};
