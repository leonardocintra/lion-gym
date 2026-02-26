import type {Metadata} from 'next';
import { Lexend } from 'next/font/google';
import './globals.css'; // Global styles

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Lion Gym',
  description: 'Desperte sua força',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${lexend.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
