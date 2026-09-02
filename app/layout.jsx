import "./globals.css";

export const metadata = {
  title: "Aluminum Windows & Doors",
  description:
    "Premium aluminum window and door systems for residential and commercial projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}