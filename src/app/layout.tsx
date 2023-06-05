import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spiral Cocktails',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <div className="layout-container">
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
