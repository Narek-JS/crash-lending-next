import { Articles } from '@/components/home/Articles';
import { Services } from '@/components/home/Services';
import { Sosiale } from '@/components/home/Sosiale';
import { AboutCompany } from '@/components/home/aboutCompany';
import { AboutTransport } from '@/components/home/aboutTransport';
import { CalculateFee } from '@/components/home/calculateFee';
import { Hero } from '@/components/home/hero';
import { Review } from '@/components/home/review';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Hero />
      <Review />
      <CalculateFee />
      <AboutTransport />
      <AboutCompany />
      <Sosiale />
      <Services />
      <Articles />
    </>
  );
};
