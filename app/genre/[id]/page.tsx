import { notFound } from 'next/navigation'
import React from 'react'

type Params = {
    params: {
        id: string
    },
    searchParams:{
        genre:string
    }
}

function page({ params: { id }, searchParams:{genre} }: Params) {

    if(!id) notFound()

    const term = decodeURI(id)

    return (
        <div>
            
        </div>
    )
}

export default page