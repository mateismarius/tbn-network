import { Exo_2, DM_Sans } from 'next/font/google'
import './globals.css'

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-exo2',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'TBN Network — DevOps & Networking | United Kingdom',
  description:
    'DevOps engineering and enterprise networking for UK businesses. CI/CD pipelines, cloud infrastructure, network architecture, and 24/7 managed services.',
  keywords: [
    'DevOps UK',
    'network engineering',
    'cloud infrastructure',
    'Kubernetes',
    'Terraform',
    'managed services UK',
    'SD-WAN',
    'IT infrastructure London',
  ],
  openGraph: {
    title: 'TBN Network — DevOps & Networking',
    description: 'Infrastructure that never sleeps. UK-based DevOps and enterprise networking.',
    url: 'https://tbnnetwork.co.uk',
    siteName: 'TBN Network',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TBN Network — DevOps & Networking',
    description: 'Infrastructure that never sleeps. UK-based DevOps and enterprise networking.',
  },
  metadataBase: new URL('https://tbnnetwork.co.uk'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${exo2.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
