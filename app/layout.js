import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/next"
import ChatAssistant from "@/components/chat/ChatAssistant";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};



export default function RootLayout({ children }) {


  return (
    <ClerkProvider  // this was for clerk authentication
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={inter.className}>
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <Header />

    <main className="min-h-screen">
      {children}
    </main>

    {/* Global Floating UI */}

    
      <ChatAssistant />

    <Toaster richColors />

    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 text-center text-gray-200">
        <p>Made with 💗 by Hrithik</p>
      </div>
    </footer>
  </ThemeProvider>
</body>

      </html>
    </ClerkProvider>
  );
}
