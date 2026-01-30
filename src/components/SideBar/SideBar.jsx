import "./SideBar.scss"
import { RiHome4Fill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { Link } from "react-router";


const SideBar = () => {
    return (
        <div className="sidebar ">
            <div className="top">
                <span className="logo">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14C0 6.26801 6.26801 0 14 0H42C49.732 0 56 6.26801 56 14V42C56 49.732 49.732 56 42 56H14C6.26801 56 0 49.732 0 42V14Z" fill="url(#paint0_linear_1_6793)" />
                        <path d="M17.3335 30.6667C17.0812 30.6675 16.8338 30.5968 16.6201 30.4626C16.4064 30.3285 16.2351 30.1365 16.1262 29.9089C16.0173 29.6813 15.9752 29.4274 16.0048 29.1769C16.0344 28.9263 16.1345 28.6893 16.2935 28.4933L29.4935 14.8933C29.5925 14.779 29.7274 14.7018 29.8761 14.6743C30.0248 14.6468 30.1785 14.6707 30.3118 14.742C30.4451 14.8133 30.5503 14.9278 30.6099 15.0668C30.6696 15.2057 30.6803 15.3608 30.6402 15.5067L28.0802 23.5333C28.0047 23.7353 27.9793 23.9527 28.0063 24.1667C28.0332 24.3806 28.1117 24.5849 28.2349 24.7619C28.3582 24.9389 28.5225 25.0833 28.7139 25.1829C28.9052 25.2824 29.1178 25.334 29.3335 25.3333H38.6668C38.9191 25.3325 39.1665 25.4032 39.3802 25.5373C39.5939 25.6715 39.7652 25.8635 39.8741 26.0911C39.983 26.3187 40.0251 26.5725 39.9955 26.8231C39.9659 27.0737 39.8658 27.3107 39.7068 27.5067L26.5068 41.1066C26.4078 41.2209 26.2729 41.2982 26.1242 41.3257C25.9755 41.3532 25.8219 41.3293 25.6885 41.258C25.5552 41.1867 25.45 41.0721 25.3904 40.9332C25.3307 40.7942 25.32 40.6391 25.3602 40.4933L27.9202 32.4667C27.9956 32.2646 28.021 32.0473 27.994 31.8333C27.9671 31.6193 27.8886 31.4151 27.7654 31.2381C27.6421 31.0611 27.4778 30.9166 27.2865 30.8171C27.0951 30.7176 26.8825 30.6659 26.6668 30.6667H17.3335Z" stroke="#0A0A0F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1_6793" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00FF88" />
                                <stop offset="1" stopColor="#00D4FF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </div>
            <section className="section text-[#FFFFFF] text-base text-start   ">

                <ul className=" space-x-12  ">
                    <Link to="/dashboard"> <li className="overview  ">  <span className="flex items-center gap-2"> <RiHome4Fill size={30} />  Dashboard Overview</span></li></Link>
                    <Link to="/calllogs"> <li className="logs "> <span className="flex items-center gap-2"> <IoCallOutline size={30} />  Call Logs</span></li></Link>
                    <Link to="/appointments"><li className="appointments"><span className="flex items-center gap-2"> <FiCalendar size={30} />  Appointments</span></li></Link>
                    <Link to="settings"><li className="Settings"><span className="flex items-center gap-2"> <LuSettings size={30} />  Settings</span></li></Link>
                </ul>
            </section>
        </div>
    )
}

export default SideBar 