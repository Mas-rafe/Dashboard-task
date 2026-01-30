const CallDetails = ({ call }) => {
  if (!call) {
    return <p className="text-gray-400">Select a call to see details</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Call Details</h2>
      <div className="space-y-2">
        <p><strong>Phone Number:</strong> {call.phone}</p>
        <p><strong>Date & Time:</strong> {call.time}</p>
        <p><strong>Duration:</strong> {call.duration || "N/A"}</p>
        <p><strong>Issue Type:</strong> {call.type}</p>
        <p><strong>Call Type:</strong> {call.status}</p>
        <p><strong>Outcome:</strong> {call.outcome}</p>
      </div>

      <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg">
        Play Audio Recording
      </button>

      <div className="bg-[#0F172A] p-3 rounded-lg">
        <h3 className="font-semibold">Conversation Transcript</h3>
        <p className="text-green-400">AI Assistant: Thank you for calling...</p>
        <p className="text-white">Customer: Hi, my iPhone 13 screen is cracked...</p>
       
      </div>
    </div>
  );
};

export default CallDetails;