import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from '@/src/providers';
import { Navbar } from '@/src/components/Navbar';
import { AuthorInfo } from '@/src/components/AuthorInfo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PsycheAcademic | Nghiên cứu Tâm lý học Khoa học',
  description:
    'PsycheAcademic – Nền tảng nghiên cứu tâm lý học chuyên sâu dựa trên bằng chứng khoa học. Khám phá hội chứng tâm lý, phương pháp thao túng, phân tích hành vi và tư duy phê phán.',
  keywords: ['tâm lý học', 'psychology', 'hội chứng tâm lý', 'thao túng tâm lý', 'PsycheAcademic'],
  authors: [{ name: 'PsycheAcademic' }],
  openGraph: {
    title: 'PsycheAcademic | Nghiên cứu Tâm lý học Khoa học',
    description:
      'Nền tảng nghiên cứu tâm lý học chuyên sâu. Khám phá hội chứng tâm lý, phương pháp thao túng và phân tích hành vi dựa trên bằng chứng khoa học.',
    url: 'https://psyche-academic.vercel.app/',
    siteName: 'PsycheAcademic',
    images: [{ url: 'https://psyche-academic.vercel.app/og-image.png', width: 1200, height: 630 }],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PsycheAcademic | Nghiên cứu Tâm lý học Khoa học',
    description: 'Nền tảng nghiên cứu tâm lý học chuyên sâu dựa trên bằng chứng khoa học.',
    images: ['https://psyche-academic.vercel.app/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: { icon: '/logo.svg', apple: '/logo.svg' },
};

export const viewport: Viewport = {
  themeColor: '#4F46E5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Providers>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <Navbar />
            <main>{children}</main>
            <AuthorInfo />
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
