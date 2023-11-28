import GetStartedButton from '@/components/GetStartedButton'
import React from 'react'

const Home = () => {
    return (
        <>
            <section className='pt-48 flex items-center justify-center'>
                <div className="max-w-xl text-center space-y-5">
                    <h1 className='text-5xl md:text-6xl font-bold'>Build Your Online Store with Ease</h1>
                    <p className='text-gray-600 text-lg tracking-wider'>
                        Empower your business with our Next.js-powered e-commerce solution.
                    </p>
                    <div className="flex items-center justify-center">
                       <GetStartedButton/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home