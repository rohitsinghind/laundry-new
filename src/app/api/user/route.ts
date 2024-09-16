export const dynamic = "force-dynamic"
import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { User } from "@/models/user";
import { NextRequest } from "next/server";

connectDb();

interface FormData {
  phone: string;
  name: string;
  createdAt?: Date;
}

export async function GET(request: NextRequest) {
  try {
    const users = await User.find();
    return NextResponse.json({ users, success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, success: false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();
    const user = new User(data);
    await user.save();
    return NextResponse.json({ user, success: true, message: "Form has been successfully submitted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, success: false }, { status: 500 });
  }
}