import Nylas from "nylas";

export default async function handler(req, res) {
  try {
    Nylas.config({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });

    const nylas = Nylas.with(process.env.ACCESS_TOKEN);

    const { email, name, phone, comment } = req.body;

    const draft = nylas.drafts.build({
      subject: "Contact Us Submission",
      body: `Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Comment: ${comment}`,
      to: [{ email: "bmaggiano@gmail.com" }],
    });

    await draft.send();

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
}
