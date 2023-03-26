import Head from 'next/head'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import CTASection from '@/components/CTASection'
import CompanyLogos from '@/components/CompanyLogos'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BridgeCart - Your Social Commerce</title>
        <meta name="description" content="Social Commerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <CompanyLogos />
      <Footer />
    </>
  )
}
