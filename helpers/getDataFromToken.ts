import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function getDataFromToken(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);

    return decodedToken.userId;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
