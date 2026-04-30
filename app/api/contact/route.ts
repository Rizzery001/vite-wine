import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  role?: "buyer" | "grower";
  name?: string;
  email?: string;
  company?: string;
  country?: string;
  volume?: string;
  hectares?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const subject = `[vite.wine] New ${data.role === "grower" ? "grower" : "buyer"} enquiry — ${data.name}`;

    const lines = [
      `Role: ${data.role}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company ?? "—"}`,
      `Country / region: ${data.country ?? "—"}`,
      data.volume ? `Volume: ${data.volume}` : null,
      data.hectares ? `Hectares: ${data.hectares}` : null,
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (apiKey && to && from) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: data.email,
        subject,
        text: lines,
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Email service failed." },
          { status: 502 }
        );
      }
    } else {
      // Fallback for local dev — just log it.
      console.log("---- vite.wine enquiry ----");
      console.log(subject);
      console.log(lines);
      console.log("---------------------------");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Bad request." },
      { status: 400 }
    );
  }
}
