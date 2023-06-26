import "./globals.css";
import ProviderWrapper from "./ProviderWrapper";
export const metadata = {
  title: "Carbonops",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        {/* Google icons for dark mode button */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,1,-25" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
      </head>
      <body className="w-full bg-[#152023] font-sans text-white">
        <ProviderWrapper>
        {children}
         </ProviderWrapper>
      </body>
    </html>
  );
}
// bg-[#152023]