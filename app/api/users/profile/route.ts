import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectToDatabase } from "@/dbConfig/dbConfig";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(userId).select("-password");
    return NextResponse.json(
      { message: "User profile fetched successfully", data: user },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching user profile" },
      { status: 500 },
    );
  }
}
