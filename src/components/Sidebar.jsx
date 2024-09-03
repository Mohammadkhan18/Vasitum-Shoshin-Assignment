import {dashboard, recruitment, calendar, employee, department, support, settings, tablogo} from '../assets';

export default function Sidebar() {

    const mainMenuItems = [
        { title: "Dashboard", icon: dashboard },
        { title: "Recruitment", icon: recruitment },
        { title: "Schedule", icon: calendar }, 
        { title: "Employee", icon: employee },
        { title: "Department", icon: department }
    ];
    
    const otherMenuItems = [
        { title: "Support", icon: support},
        { title: "Settings", icon: settings },
    ];

    return( 
    <div className="hidden md:w-20 lg:w-64 border-r border-gray-200 bg-[#FAFAFA]  p-5 px-6 md:block ">
            <div className="flex items-center">
                <img src={tablogo} alt="Vasitum" className="w-12 h-12 cursor-default"/>
                <span className="hidden lg:block text-2xl px-3 font-bold text-[#0A337A]">Vasitum</span>
            </div>
            <div className="mb-10">
                <p className="lg:block text-start text-[#818181] text-xs mt-10 mb-5 whitespace-nowrap overflow-hidden cursor-default">MAIN MENU</p>
                <ul>
                    {mainMenuItems.map((e, i) => (
                        <li key={i} className="mb-7 flex items-center cursor-pointer">
                            <img src={e.icon} alt={e.title} className="w-6 h-6"/>
                            <span className={`hidden md:hidden lg:block ml-3 hover:text-[#FF5151] ${e.title === "Dashboard" ? "text-[#FF5151]" : ""}`}>{e.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-10">
                <p className="lg:block text-start text-[#818181] text-xs mt-10 mb-5 whitespace-nowrap overflow-hidden cursor-default">OTHER</p>
                <ul>
                    {otherMenuItems.map((e, i) => (
                        <li key={i} className="mb-7 flex items-center cursor-pointer">
                            <img src={e.icon} alt={e.title} className="w-6 h-6"/>
                            <span className="hidden md:hidden lg:block ml-2 hover:text-[#FF5151]">{e.title}</span>
                        </li>
                    ))}
                </ul>
            </div>   
        </div>
    );
}







