import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Geitodyu Henrique Crusoe",
  description: "Website Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link rel="icon" type="image/jpeg" href="./imgs/favicon.jpg" />
      </Head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
