import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Next js practice app created for understanding the basics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-3 font-bold text-2xl">
            <li>
              <Link href={"/"}>Home</Link>
            </li>{" "}
            <li>
              <Link href={"/contact-info"}>contact</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer>This is footer</footer>
      </body>
    </html>
  );
}

