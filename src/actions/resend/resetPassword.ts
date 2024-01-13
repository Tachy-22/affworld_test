"use server";

import { EmailTemplate } from "@/components/resend/EmailTemplate";
import resend from "@/resend/resend.config";

export default async function resetPassword(data?: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Jeff <onboarding@resend.dev>",
      to: "entekumejeffrey@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      console.log({ error });
    }

    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
}
