import { QodeMLClient } from "email-sdk";
export async function onRequestPost({ request, env }: any) {
  const client = new QodeMLClient({
    host: "smtp.gmail.com",
    port: 587, 
    method: "PLAIN",
    username: env.EMAIL_FROM,
    password: env.PASS,
    useSsl: true,
    apiKey: env.QODEML_API,
}); 


  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ message: "Invalid content type" }), { status: 415 });
  }

const body = await request.json();
  try {

  } catch {
    return new Response(JSON.stringify({ message: "Invalid JSON body" }), { status: 400 });
  }


  try {
await client.sendMail({
        to: env.EMAIL_TO,
        from: "New Enquiry",
        subject: "New Sponsor Enquiry",
        body: `Hey ACM SSCBS, You have a new sponsor enquiry:
        Company: ${body.company}
        Name: ${body.name}
        Email: ${body.email}
        Phone:${body.phone}
        Message: ${body.message}
        `,
      isHtml: false,
    })

 return new Response(JSON.stringify({ message: "Email sent successfully" }))
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Failed to send email" }),
      { status: 500 }
    );
  }
}
