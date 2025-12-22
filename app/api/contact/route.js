import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req) {
  try {
    const {
      name,
      company,
      phone,
      email,
      subject,
      message
    } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email and Message are required" },
        { status: 400 }
      );
    }

    const { error } = await supabaseServer
      .from("contact_messages")
      .insert([
        { name, company, phone, email, subject, message }
      ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
     console.error("SUPABASE ERROR:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
