import { Nunito } from 'next/font/google'

import Navbar from '@/src/components/navbar/Navbar';
import LoginModal from '@/src/components/modals/LoginModal';
import RegisterModal from '@/src/components/modals/RegisterModal';
import SearchModal from '@/src/components/modals/SearchModal';
import RentModal from '@/src/components/modals/RentModal';

import ToasterProvider from '@/src/providers/ToasterProvider';

import './globals.css'
import ClientOnly from '@/src/components/ClientOnly';
import getCurrentUser from '@/src/actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
