import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "@/components/header/Header";
import { Container, ThemeProvider } from "@mui/material";
import { materialUiTheme } from "@/themes/materialUiTheme";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import { SearchProvider } from "@/contexts/searchContext";
import DatePickerLocalizationProvider from "@/providers/DatePickerLocalizationProvider";
import { FeedProvider } from "@/contexts/feedContext";

export const metadata = {
  title: "News Aggregator",
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
      <body>
        <DatePickerLocalizationProvider>
          <ReactQueryProvider>
            <FeedProvider>
              <SearchProvider>
                <ThemeProvider theme={materialUiTheme}>
                  <Container maxWidth="lg" className="p-6">
                    <Header />
                    <main>{children}</main>
                  </Container>
                  <ToastContainer toastClassName="toastify-toast" />
                </ThemeProvider>
              </SearchProvider>
            </FeedProvider>
          </ReactQueryProvider>
        </DatePickerLocalizationProvider>
      </body>
    </html>
  );
}
