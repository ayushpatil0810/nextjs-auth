import { connectToDatabase } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const reqBody = await request.json();
    const { email } = reqBody;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 },
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      // Return success even if user not found to prevent email enumeration
      return NextResponse.json({
        message:
          "If an account with that email exists, a reset link has been sent.",
        success: true,
      });
    }

    await sendEmail({ email, emailType: "RESET", userId: user._id });

    return NextResponse.json({
      message:
        "If an account with that email exists, a reset link has been sent.",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
