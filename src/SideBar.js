import { BsPlus, BsFillLightiningFill, BsGearFill } from 'react-icons/fa';
import { FarFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FarFire size="28" />} />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightiningFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
        </div>
    )
}

const SideBarIcon = ({ icon }) => (
    <div className="Sidebar-icon">
        {icon}
    </div>
)

export default SideBar;