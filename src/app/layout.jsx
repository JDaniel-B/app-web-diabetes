import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Control de Diabetes",
  description: "Sistema para control de pacientes con diabetes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="h-full w-full">
          {children}
          <Toaster
            richColors
            duration={3000}
            visibleToasts={1}
            position="top-center"
          />
        </main>
      </body>
    </html>
  );
}
