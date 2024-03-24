import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ThemeToggler'
import Search from './SearchInput'
import Genre from './GenreDropDown'

function header() {
    return (
        <header className='flex justify-between items-center p-5 bg-gradient-to-t dark:from-gray-200/0 dark:via-gray-900/25 dark:to-gray-900 fixed z-20 w-full top-0'>

            <Link href='/'>
                <Image
                    src='https://www.cdnlogo.com/logos/d/58/disney.svg'
                    alt='logo'
                    width={100}
                    height={100}
                    className='cursor invert dark:invert-0'
                />
            </Link>

            <div className='flex items-center gap-2'>

                <div>
                    <Genre />
                </div>

                <div>
                    <Search />
                </div>

                <div>
                    <ModeToggle />
                </div>

            </div>

        </header>
    )
}

export default header