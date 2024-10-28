import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from "@/components/theme-provider";
import nextConfig from '../../next.config';

const basePath = nextConfig.basePath;

export const metadata = {
  title: 'Cybers3cLab',
  description: '| Enhancing your security skills',
  icons: {
    icon: basePath+"/loghi/logo_scudo_white_squared.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='flex flex-col'>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
