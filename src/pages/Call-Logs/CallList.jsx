const CallList = ({ call, onClick }) => {
  const statusColors = {
    "AI Resolved": "bg-green-500",
    "Warm Transfer": "bg-orange-500",
    Dropped: "bg-red-500",
  };

  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center bg-[#0F172A] p-3 rounded-lg cursor-pointer hover:bg-[#334155]"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="material-icons text-blue-400">call</span>
          <p>{call.phone}</p>
          <span
            className={`ml-2 px-2 py-0.5 rounded-full text-sm ${statusColors[call.status]}`}
          >
            {call.status}
          </span>
        </div>
        <p className="text-sm text-gray-400">{call.time}</p>
        <p className="text-sm text-gray-400">{call.outcome}</p>
      </div>

      <span className="text-sm text-gray-400">{call.type}</span>
    </div>
  );
};

export default CallList;