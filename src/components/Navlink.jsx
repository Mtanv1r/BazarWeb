import Link from 'next/link';
import React from 'react';

const Navlink = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data = await res.json();

    return (
        <nav className="w-full bg-white border-b border-gray-200 ">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
                <ul className="flex flex-wrap items-center gap-2 py-3 sm:gap-3 lg:gap-4">
                    {data.map((elm, idx) => (
                        <li key={idx}>
                            <Link
                                href={`/${elm.slug}`}
                                className="block rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700
                                           transition-colors duration-200
                                           hover:bg-green-600 hover:text-white
                                           sm:px-4 sm:py-2 sm:text-base"
                            >
                                {elm.nameBn}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navlink;
