import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suvira Facilities Pvt Ltd | Security Services in Hyderabad",
  description:
    "Professional Security Services, Manpower Recruitment & Facility Management Solutions in Hyderabad and Telangana.",
  keywords: [
    "Security services Hyderabad",
    "Manpower services Telangana",
    "Facility management Hyderabad",
    "Security guards company Hyderabad",
  ],
  openGraph: {
    title: "Suvira Facilities Pvt Ltd",
    description:
      "Trusted Security & Manpower Solutions across Telangana.",
    url: "https://suvirafacilities.com",
    siteName: "Suvira Facilities",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-gray-800">
        {children}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Suvira Facilities Pvt Ltd",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "6/146, Anish Residency, Flat No.102, KTR Colony",
                addressLocality: "Hyderabad",
                postalCode: "500090",
                addressCountry: "IN",
              },
              telephone: "+91-9290934388",
              email: "sfacilities5@gmail.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
