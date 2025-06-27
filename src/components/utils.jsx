import { DashboardIcon } from "./icons/DashboardIcon";
import { ManageUsersIcon } from "./icons/ManageUsersIcon"
import { ReportIcon } from "./icons/ReportIcon"
import { ResultsIcon } from "./icons/ResultsIcon"
import { CurriculumIcon } from "./icons/CurriculumIcon"
import { GroupIcon } from "./icons/GroupIcon"
import { HomeIcon } from "./icons/HomeIcon"

export const dashboardNavItems = [
    {
        name: "dashboard",
        icon: <DashboardIcon />,
        link: "/",
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