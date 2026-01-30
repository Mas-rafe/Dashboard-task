import { useState } from "react";
import CallListItem from "./CallList";
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
    <div className="flex min-h-screen  text-white p-6 gap-6">
      {/* Left */}
      <div className="flex-1 bg-[#1E293B] rounded-lg p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Call List</h2>

        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="w-full mb-4 p-2 rounded-lg text-black"
        />

        <div className="space-y-4">
          {callData.map((call) => (
            <CallListItem
              key={call.id}
              call={call}
              onClick={() => setSelectedCall(call)}
            />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 bg-[#1E293B] rounded-lg p-4 overflow-y-auto">
        <CallDetails call={selectedCall} />
      </div>
    </div>
  );
};

export default CallLogs;