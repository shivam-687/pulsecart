import GetStartedButton from '@/components/GetStartedButton'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const HomeLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <>
            <nav className='py-2'>
                <div className='container mx-auto w-full flex items-center justify-between'>
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">PulseStore</p>
                    </Link>
                    <GetStartedButton />
                </div>

            </nav>
            <main className='container mx-auto'>
                {children}
            </main>
        </>
    )
}

export default HomeLayout