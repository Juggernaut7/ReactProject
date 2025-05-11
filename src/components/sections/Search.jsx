import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

export const Search = ({ setSearchSection }) => {
    const navigate = useNavigate();
    const searchRef = useRef();

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchSection(false);
        navigate(`products?q=${searchRef.current.value}`);
    };

    return (
        <div className='mx-auto max-w-screen-xl p-2 my-5'>
            <form onSubmit={handleSearch} className='flex items-center'>
                <div className='relative w-full'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none'>
                        <IoSearch />
                    </span>
                    <input
                        type="text"
                        ref={searchRef}
                        className='block w-full pl-10 pr-3 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm rounded-md'
                        placeholder='Search'
                        autoComplete='off'
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='py-2.5 px-3 ml-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    <IoSearch />
                </button>
            </form>
        </div>
    );
};

