import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Tailwind,
} from "@react-email/components";

interface SupportEmailProps {
  email: string;
  subject: string;
  issueDescription: string;
}

const baseURL =
  process.env.NODE_ENV === "production" ? "https://www.waelfadlallh.com" : "";

export default function SupportEmailTemplate({
  email,
  subject,
  issueDescription,
}: SupportEmailProps) {
  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: { brand: "#F0F757", "brand-dark": "#2D2D2D" },
              fontSize: {
                xs: "12px",
                sm: "14px",
                base: "16px",
                lg: "18px",
                xl: "20px",
              },
              spacing: {
                "1": "4px",
                "2": "8px",
                "4": "16px",
                "6": "24px",
                "8": "32px",
                "10": "40px",
              },
              borderRadius: { DEFAULT: "4px", lg: "8px" },
            },
          },
        }}
      >
        <Head />
        <Preview>Support Request for Wakey Wakey</Preview>
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white max-w-xl mx-auto rounded-lg">
            <Section className="bg-brand-dark py-6 px-6 rounded-t-lg text-center">
              <Heading className="text-brand text-xl m-0 mt-4">
                Wakey Wakey Support
              </Heading>
            </Section>

            <Section className="px-10 py-8">
              <Text className="text-base text-gray-800 m-0 mb-4">
                Wakey Wakey Support Team,
              </Text>

              <Text className="text-base text-gray-800 m-0 mb-4">
                I am experiencing an issue with the Wakey Wakey app.
              </Text>

              <Section className="bg-gray-50 border-solid border-l-4 border-brand rounded p-4 border-t-0 border-r-0 border-b-0 my-4">
                <Text className="text-base text-gray-700 m-0 italic">
                  {`Email: ${email || "No email provided"}`}
                </Text>
                <Text className="text-base text-gray-700 m-0 italic">
                  {`Subject: ${subject || "No subject provided"}`}
                </Text>
                <Text className="text-base text-gray-700 m-0 italic">
                  {`Message: ${issueDescription || "No message provided"}`}
                </Text>
              </Section>

              <Hr className="border-solid border-gray-200 my-6" />

              <Text className="text-base text-gray-800 m-0 mb-4">
                Thank you for your assistance.
              </Text>

              <Text className="text-base text-gray-800 m-0 mb-1">
                Best regards,
              </Text>
              <Text className="text-base text-gray-800 font-semibold m-0">
                {email}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

SupportEmailTemplate.PreviewProps = {
  email: "John Doe",
  subject: "Alarm not working",
  issueDescription: "Please describe your issue here",
} satisfies SupportEmailProps;

export { SupportEmailTemplate };
