import React from 'react'

const Navbar = ({ title }) => {
    return (
        <div className="h-16 flex items-center justify-between px-6 border-b">
            <h1 className="text-xl font-semibold">{title}</h1>

            <div className="flex items-center gap-4">
                🔔
                <img
                    src="https://i.pravatar.cc/40"
                    className="w-10 h-10 rounded-full"
                />
                
            </div>
        </div>
    )
}

export default Navbar