import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import PageLayout from '@/app/component/sections/page-layout';


export const metadata: Metadata = {
  title: 'path tracker',
  description: ' draw path ; track path',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <PageLayout>{children}</PageLayout>
    </html>
  );
}
