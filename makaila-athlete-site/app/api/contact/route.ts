export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpUser, pass: smtpPass },
    });

    const toAddress = "schneidermakaila@gmail.com";
    const bccAddress = "schneiderham@gmail.com";

    await transporter.sendMail({
      from: smtpUser,
      to: toAddress,
      bcc: bccAddress,
      replyTo: email,
      subject: `Recruiting Contact: ${name}`,
      text: `From: ${name} <${email}>

${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}


