import {useState} from 'react'
import { burgermenu, notifications, messages, search, profile, dropdown, wrong, dashboard, recruitment, calendar, employee, department, support, settings, tablogo} from '../assets'

const SearchBar =()=>

{
    return (
        <div className='px-4 py-[9px] bg-[#FAFAFA] space-x-2 flex grow items-center rounded-sm lg:ml-4 border border-gray-400 '>
            <input className='grow outline-none bg-transparent leading text-md text-white ' placeholder='Search'/>
            <img src ={search} alt="search-icon"/>
        </div>
    )
}


const Header = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const mainMenu = [
        { name: "Dashboard", icon: dashboard },
        { name: "Recruitment", icon: recruitment },
        { name: "Schedule", icon: calendar }, 
        { name: "Employee", icon: employee },
        { name: "Department", icon: department }
    ];
    
    const otherMenu = [
        { name: "Support", icon: support},
        { name: "Settings", icon: settings },
    ];

    // Function to handle the search submit for the toggleable search bar on small screens
    const handleSearchSubmitMobile = (e) => {
        e.preventDefault();
        setShowSearchInput(false);
    };


    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            {showSearchInput && (
                <form onSubmit={handleSearchSubmitMobile} className="fixed inset-x-0 top-0 p-2 z-20 flex items-center px-4 py-[9px] bg-[#FAFAFA] rounded-sm  ">
                    <input
                        name="search"
                        type="search"
                        className="w-full p-2 grow outline-gray-100 bg-transparent text-md   text-[#525252]  placeholder-gray-600 "
                        placeholder="Search"
                        autoFocus
                        onBlur={() => setShowSearchInput(false)}
                    />
                </form>
            )}
            
            
            <nav className={`bg-white border-b  flex w-full p-4 sticky top-0 z-10 flex-row justify-between items-center  ${showSearchInput ? 'hidden' : 'flex'}`} > 
                <div className='flex flex-row gap-3 items-center'>
                    <img src={burgermenu} className='w-6 h-6 lg:hidden ' alt="Menu" onClick={toggleNav} />
                    <img src={search} className="w-6 h-6 md:hidden " alt="Search" onClick={() => setShowSearchInput(true)} />
                    <div className="hidden md:block lg:block">
                        <SearchBar/>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <img src={notifications} className='w-8 h-8 hover:bg-gray-200 hover:rounded-full p-1' alt="Notifications"  />
                    <img src={messages} className='w-8 h-8 hover:bg-gray-200 hover:rounded-full p-1' alt="Messages" />
                    <img src={profile} className='w-8 h-8 rounded-full' alt="Profile" />
                    <span className='hidden lg:block text-[#161E54] text-md font-semibold dark:text-[#a688fa]'>Admira John</span>
                    <img src={dropdown} className='w-5 h-5' alt="Dropdown" />
                </div>

            </nav>
            
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40  transform  ${isNavOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="relative min-h-screen w-64 flex-col bg-white  p-5 items-center">
                    <img src={wrong} className='w-4 h-4 bg-gray-200 rounded-full p-1 mb-5' alt="Chevronwrong" onClick={() => setIsNavOpen(false)} />
                    <div className="flex items-center">
                    <img src={tablogo} alt="Vasitum" className="w-12 h-12 cursor-default"/>
                    <span className=" text-2xl px-3 font-bold text-[#0A337A] ">Vasitum</span>
                </div>
            <div className="mb-10 flex-col items-center">
                <p className="text-start text-[#818181] text-xs mt-10 mb-5 whitespace-nowrap overflow-hidden cursor-default">MAIN MENU</p>
                <ul>
                    {mainMenu.map((val, index) => (
                        <li key={index} className="mb-7 flex items-center cursor-pointer">
                            <img src={val.icon} alt={val.name} className="w-6 h-6"/>
                            <span className={`ml-3 hover:text-[#FF5151]   ${val.name === "Dashboard" ? "text-[#FF5151]" : ""}`}>{val.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-10">
                <p className="text-start text-[#818181] text-xs mt-10 mb-5 whitespace-nowrap overflow-hidden cursor-default">OTHER</p>
                <ul>
                    {otherMenu.map((val, index) => (
                        <li key={index} className="mb-7 flex items-center cursor-pointer">
                            <img src={val.icon} alt={val.name} className="w-6 h-6"/>
                            <span className="ml-2 hover:text-[#FF5151]  ">{val.name}</span>
                        </li>
                    ))}
                </ul>
            </div>   
            </div>
            </div>
        </>
    );
};


   

export default Header;
