import { MdOutlineNotificationsNone } from "react-icons/md";


const Navbar = ({ title }) => {
    return (
        <div className="h-20 bg-[#111B3C] flex items-center justify-between px-8 border-[#111B3C]">
            <h1 className="text-2xl text-white font-bold">{title}</h1>

            <div className="flex items-center gap-4">
                <MdOutlineNotificationsNone className="text-white" size={32}/>
                <img
                    src="https://i.pravatar.cc/40" alt="avatar"
                    className="w-10 h-10 rounded-full"
                />
                
            </div>
        </div>
    )
}

export default Navbar