import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { name, businessName, email, businessType, problem } = body;
    if (!name || !businessName || !email || !businessType || !problem) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log to terminal (always useful for debugging)
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

    // Send notification email to Ward Consulting
    await resend.emails.send({
      from: "Ward Consulting <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New lead: ${body.businessName} (${body.businessType})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e293b; margin-bottom: 4px;">New Lead Submission</h2>
          <p style="color: #64748b; margin-top: 0;">Submitted at ${new Date().toLocaleString()}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Name</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${body.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Business</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${body.businessName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Business Type</td><td style="padding: 8px 0; color: #1e293b;">${body.businessType}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${body.email}" style="color: #2563eb;">${body.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0; color: #1e293b;">${body.phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Website</td><td style="padding: 8px 0;"><a href="${body.website}" style="color: #2563eb;">${body.website || "—"}</a></td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="color: #64748b; margin-bottom: 4px;">Problem they're trying to solve:</p>
          <p style="color: #1e293b; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb; margin-top: 8px;">${body.problem}</p>
        </div>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Ward Consulting <onboarding@resend.dev>",
      to: body.email,
      subject: "Got it — we'll be in touch soon",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e293b;">Thanks for reaching out, ${body.name}.</h2>
          <p style="color: #475569; line-height: 1.6;">
            We received your info and will follow up within one business day to schedule a quick call.
          </p>
          <p style="color: #475569; line-height: 1.6;">
            In the meantime, if you have any questions feel free to reply directly to this email.
          </p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #1e293b; font-weight: 600; margin-bottom: 4px;">Ward Consulting</p>
          <p style="color: #64748b; margin-top: 0; font-size: 14px;">Lead Response &amp; Google Review Automation for Local Service Businesses</p>
        </div>
      `,
    });

    // Log submission to Google Sheets via Apps Script webhook
    await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
