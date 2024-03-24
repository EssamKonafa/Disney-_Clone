'use client'

import React from 'react'
import { Label } from './ui/label'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'

function Search() {

    const router = useRouter()

    const formSchema = z.object({
        input: z.string().min(2).max(50)
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        router.push(`/search/${values.input}`)
        form.reset()
    }

    return (
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <FormField
                    control={form.control}
                    name='input'
                    render={({field})=>(

                        <FormItem>

                            <FormControl>
                                <Input placeholder='search...' {...field}/>
                            </FormControl>

                        </FormItem>

                    )}
                    />
                    
                </form>

            </Form>
            
    )
}

export default Search