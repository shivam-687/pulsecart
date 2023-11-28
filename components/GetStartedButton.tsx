import { getAdminUrl } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Button from './ui/button'

const GetStartedButton = () => {
  return (
    <Link target='_blank' href={`${getAdminUrl()}`} title='create your dream online store'>
        <Button>GET STARTED</Button>
    </Link>
  )
}

export default GetStartedButton