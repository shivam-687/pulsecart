

import getCategories from '@/actions/get-categories'
import { getStore } from '@/actions/get-store'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { notFound } from 'next/navigation'
import React, { PropsWithChildren, ReactNode } from 'react'


const StoreLayout = async ({
    children,
    params
}: {
    children: ReactNode,
    params: {
        slug: string
    }
}) => {
    const store = await getStore(params.slug);
    if (!store) {
        return notFound()
    }

    return (
        <>
            <Navbar store={store} />
            {children}
            <Footer />
        </>
    )
}

export default StoreLayout
