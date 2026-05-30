import { NextRequest, NextResponse } from "next/server";

// Shape of the incoming form submission
interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  businessType: string;
  problem: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // Basic validation — all required fields must be present
    const { name, businessName, email, businessType, problem } = body;
    if (!name || !businessName || !email || !businessType || !problem) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission clearly for now (visible in your terminal while running locally)
    console.log("\n========== NEW CONTACT FORM SUBMISSION ==========");
    console.log(`Name:          ${body.name}`);
    console.log(`Business:      ${body.businessName}`);
    console.log(`Email:         ${body.email}`);
    console.log(`Phone:         ${body.phone || "(not provided)"}`);
    console.log(`Website:       ${body.website || "(not provided)"}`);
    console.log(`Business Type: ${body.businessType}`);
    console.log(`Problem:       ${body.problem}`);
    console.log(`Submitted at:  ${new Date().toISOString()}`);
    console.log("=================================================\n");

    // ─────────────────────────────────────────────────────────────────
    // TODO: Send notification email to yourself via Resend
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Ward Consulting <noreply@yourdomain.com>",
    //   to: process.env.NOTIFICATION_EMAIL!,
    //   subject: `New lead: ${body.businessName}`,
    //   text: `Name: ${body.name}\nBusiness: ${body.businessName}\nEmail: ${body.email}\nPhone: ${body.phone}\nWebsite: ${body.website}\nType: ${body.businessType}\nProblem: ${body.problem}`,
    // });
    // ─────────────────────────────────────────────────────────────────

    // ─────────────────────────────────────────────────────────────────
    // TODO: Log submission to Google Sheets via a Zapier webhook
    //
    // await fetch(process.env.ZAPIER_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // ─────────────────────────────────────────────────────────────────

    // ─────────────────────────────────────────────────────────────────
    // TODO: Send auto-reply confirmation email to the customer via Resend
    //
    // await resend.emails.send({
    //   from: "Ward Consulting <noreply@yourdomain.com>",
    //   to: body.email,
    //   subject: "Got it — we'll be in touch soon",
    //   text: `Hi ${body.name},\n\nThanks for reaching out. We received your info and will follow up within one business day.\n\n- Ward Consulting`,
    // });
    // ─────────────────────────────────────────────────────────────────

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
