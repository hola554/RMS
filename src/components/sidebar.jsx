import { Link, useLocation } from "react-router-dom"
import { ArrowRight } from "./icons/ArrowRight"
import { Logo } from "./icons/Logo"
import { dashboardNavItems } from "./utils"


export const Sidebar = () => {
    const location = useLocation();
    const pathname = location.pathname
    
    return (
        <main className="bg-darkBlue text-white w-[256px] h-screen p-5">
            <div className="flex flex-col justify-center items-center">
                <Logo />
                <span className="capitalize flex pt-4 text-lightBlue">
                    <a href="">information system</a>
                    <ArrowRight />
                </span>
            </div>
            {/* Sidebar navigation */}
            {
                dashboardNavItems.map((navItems, i) => (
                    <div className={`flex items-center gap-2 my-5 ${pathname === navItems.link ? "bg-lightBlue" : ""} py-2 px-3 rounded-lg capitalize`} key={i}>
                        <i>
                            {navItems.icon}
                        </i>
                        <Link to={navItems.link} className="text-[15px]">{navItems.name}</Link>
                    </div>
                ))
            }
        </main>
    )
}
