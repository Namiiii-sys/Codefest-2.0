import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { company, contactPerson, email, phone, sponsorshipType, message } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Number(process.env.EMAIL_PORT) === 465, 
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"CodeFest Sponsor Form" <${process.env.EMAIL_USER}>`,
            to: "acm-chapter@sscbs.du.ac.in",
            subject: `New Sponsorship Interest: ${company}`,
            text: `
        New Sponsorship Interest Received:
        
        Company Name: ${company}
        Contact Person: ${contactPerson}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Sponsorship Type: ${sponsorshipType}
        
        Message:
        ${message || "No additional message provided."}
      `,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #ca8a04;">New Sponsorship Interest Received</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Company Name</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Contact Person</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${contactPerson}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${phone || "N/A"}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Sponsorship Type</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${sponsorshipType}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px; color: #ca8a04;">Message</h3>
          <p style="padding: 15px; background-color: #f3f4f6; border-radius: 8px;">${message || "No additional message provided."}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
        );
    }
}
