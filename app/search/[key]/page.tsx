import { notFound } from 'next/navigation'
import React from 'react'

type Params = {
    params: {
        key: string
    }
}

function page({ params: { key } }: Params) {

    if(!key) notFound()

    const term = decodeURI(key)

    return (
        <div>
            
        </div>
    )
}

export default page