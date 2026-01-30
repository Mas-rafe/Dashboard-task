import { useState } from "react";
import CallList from "./CallList";
import CallDetails from "./CallDetails";

const CallLogs = () => {
    const [selectedCall, setSelectedCall] = useState(null);

    const callData = [
        {
            id: 1,
            phone: "+1 (555) 345-6789",
            time: "2025-12-16 09:42 AM",
            duration: "5:23",
            outcome: "Quote Provided",
            status: "AI Resolved",
            type: "Screen",
        },
        {
            id: 2,
            phone: "+1 (555) 345-6789",
            time: "2025-12-16 09:42 AM",
            duration: "5:23",
            outcome: "Escalated to technician",
            status: "Warm Transfer",
            type: "Software",
        },
        {
            id: 3,
            phone: "+1 (555) 345-6788",
            time: "2025-12-16 09:32 AM",
            duration: "5:23",
            outcome: "Quote Provided",
            status: "AI Resolved",
            type: "Screen",
        },
        {
            id: 4,
            phone: "+1 (555) 345-6779",
            time: "2025-12-16 09:40 AM",
            duration: "5:23",
            outcome: "Escalated to technician",
            status: "Warm Transfer",
            type: "Software",
        },

    ];

    return (
        <div className="grid grid-cols-2 min-w-screen   text-white px-6 gap-6">

             <input
                    type="text"
                    placeholder="Search by phone number, issue type..."
                    className=" mt-2 ml-2 h-16 px-2 rounded-lg text-black border-blue-600 bg-[#0F172B80]"
                />

                   <div className="flex items-center justify-between mx-6 my-6 list-none">
                    <li className="p-4 w-44 text-center bg-[#0F172B80]">All types</li>
                    <li className="p-4  w-44 text-center bg-[#0F172B80]">All Issues</li>
                    <li className="p-4  w-44 text-center bg-[#0F172B80]">Today</li>
                </div>
            {/* Left */}
            <div className=" bg-[#0F172B80] rounded-lg p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Call List</h2>

               

                <div className="space-y-4">
                    {callData.map((call) => (
                        <CallList
                            key={call.id}
                            call={call}
                            onClick={() => setSelectedCall(call)}
                        />
                    ))}
                </div>
            </div>



            {/* Right */}
            <div className="">
             
                <div className=" bg-[#0F172B80] rounded-lg p-4 overflow-y-auto">


                    <CallDetails call={selectedCall} />
                </div>
            </div>
        </div>
    );
};

export default CallLogs;