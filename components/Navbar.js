import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
    const [menu, setMenu] = useState(true)

    return (
        <div>
            <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
                <a>Garv</a>
                <div>
                    <Link href="/dashboard">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                            Dashboard
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                            Blog
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                            About
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                            Home
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
