import { Link } from "react-router-dom"
import { ArrowRight } from "./icons/ArrowRight"
import { CurriculumIcon } from "./icons/CurriculumIcon"
import { DashboardIcon } from "./icons/DashboardIcon"
import { GroupIcon } from "./icons/GroupIcon"
import { HomeIcon } from "./icons/HomeIcon"
import { Logo } from "./icons/Logo"
import { ManageUsersIcon } from "./icons/ManageUsersIcon"
import { ReportIcon } from "./icons/ReportIcon"
import { ResultsIcon } from "./icons/ResultsIcon"

export const Sidebar = () => {
    const dashboardNavItems = [
        {
            name: "dashboard",
            icon: <DashboardIcon />,
            link: "",
        },
        {
            name: "manage users",
            icon: <ManageUsersIcon />,
            link: "",
        },
        {
            name: "student record",
            icon: <GroupIcon />,
            link: "",
        },
        {
            name: "curriculum",
            icon: <CurriculumIcon />,
            link: "",
        },
        {
            name: "result",
            icon: <ResultsIcon />,
            link: "",
        },
        {
            name: "report",
            icon: <ReportIcon />,
            link: "",
        },
        {
            name: "faculty info",
            icon: <HomeIcon />,
            link: "",
        },
    ]
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
                    <div className="flex items-center gap-2 my-5 bg-lightBlue py-2 px-3 rounded-lg capitalize" key={i}>
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
