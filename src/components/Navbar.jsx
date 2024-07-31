import React, { useEffect, useRef, useState } from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiMoon } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLocationSearching } from 'react-icons/md';
import { TbCurrentLocation } from 'react-icons/tb';
import { VscGithub } from 'react-icons/vsc';

const Navbar = ({ fetchWeatherData, data, error }) => {

    const [inputValue, setInputValue] = useState('');
    const [suggestion, setSuggestions] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const suggestionBoxRef = useRef(null);

    const handleClickOutside = (e) => {
        if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(e.target)) {
            setSuggestions([]);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setHighlightedIndex((prevIndex) => (prevIndex + 1) % suggestion.length);
        } else if (e.key === 'ArrowUp') {
            setHighlightedIndex((prevIndex) => (prevIndex - 1 + suggestion.length) % suggestion.length);
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            const selectedLocation = suggestion[highlightedIndex];
            setInputValue(selectedLocation.url);
            setSuggestions([]);
            fetchWeatherData(selectedLocation.url);
            setInputValue('');
            setHighlightedIndex(-1);
        }
    };

    const fetchSuggestions = async (query) => {
        try {
            const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            const response = await fetch(url, options);
            const suggestData = await response.json();
            setSuggestions(suggestData);
        }
        catch (error) {
            console.error("error in fetch suggestions: ", error);
        }
    }

    useEffect(() => {
        if (inputValue) {
            fetchSuggestions(inputValue);
        } else {
            setSuggestions([])
        }
    }, [inputValue])

    const city = data?.location.name;
    const country = data?.location.country;

    console.log('testing suggestions ', suggestion);

    return (
        <div className=''>
            <div className=' bg-[#eceefa] border-2 border-white rounded-3xl h-[5rem] py-5 px-10 flex mt-3 items-center justify-between'>

                <div className='flex items-center'>
                    <h2 className='font-bold text-2xl text-blue-500 '>SkyCast</h2>
                </div>

                {/* location */}
                <div className='flex items-center gap-2'>
                    <CiLocationOn size={25} />
                    <p className=''>{city || 'Mumbai'}, {country || 'India'}</p>
                </div>

                {/* Search */}
                <form className='relative' onSubmit={(e) => e.preventDefault()}>
                    <CiSearch size={25} color='gray' className='absolute bottom-2 left-3' />
                    <input
                        className='border bg-transparent border-gray-400 rounded-xl py-2 pl-10  pr-14 w-[25rem] outline-none focus:bg-white'
                        placeholder='Search Location'
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown} />
                    {suggestion.length > 0 && (
                        <ul ref={suggestionBoxRef} className='absolute bg-white text-sm rounded-xl w-[25rem] p-3 z-10 shadow-md'>
                            {suggestion.map((location, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        // setLocation(location.url)
                                        setSuggestions([])
                                        // handleSubmit() 
                                        fetchWeatherData(location.url);
                                        setInputValue('')
                                        setHighlightedIndex(-1);
                                    }}
                                    className={`cursor-pointer hover:bg-purple-50 p-2 rounded-xl ${highlightedIndex === index ? 'bg-purple-50' :''}` }>{location.name}, {location.region}, {location.country}
                                </li>
                            ))}

                        </ul>
                    )}
                </form>

                <div>
                    <button className=' p-2 bg-zinc-900 rounded-xl text-white flex items-center gap-2'>
                        <FiMoon size={22} />
                        Dark
                    </button>
                </div>

                <div>
                    <VscGithub size={25} />
                </div>

                <div>
                    <IoSettingsOutline size={25} />
                </div>
            </div>
        </div>
    )
}

export default Navbar