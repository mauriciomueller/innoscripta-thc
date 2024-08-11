import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import { PROJECT_NAME } from "@/constants/global";
import { Container, ThemeProvider } from "@mui/material";
import { materialUiTheme } from "@/themes/materialUiTheme";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: PROJECT_NAME,
  description:
    "News Aggregator featuring the latest news from around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Provider>
          <ThemeProvider theme={materialUiTheme}>
            <Container maxWidth="lg" className="p-6">
              <Header />
              <main>{children}</main>
            </Container>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
