import { Phone, Bot, Repeat, Calendar, XCircle, Clock } from "lucide-react"

const DashboardOverview = () => {
  // ✅ JSON DATA
  const stats = [
    {
      title: "Total Calls Today",
      value: 127,
      percent: "+12%",
      icon: <Phone size={20} />,
      color: "bg-blue-500",
    },
    {
      title: "AI-Handled Calls",
      value: 98,
      percent: "+7%",
      icon: <Bot size={20} />,
      color: "bg-pink-500",
    },
    {
      title: "Warm Transfer",
      value: 23,
      percent: "+18%",
      icon: <Repeat size={20} />,
      color: "bg-orange-500",
    },
    {
      title: "Appointments Booked",
      value: 34,
      percent: "+8%",
      icon: <Calendar size={20} />,
      color: "bg-green-500",
    },
    {
      title: "Missed/Failed Calls",
      value: 6,
      percent: "-3%",
      icon: <XCircle size={20} />,
      color: "bg-red-500",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      percent: "+15%",
      icon: <Clock size={20} />,
      color: "bg-indigo-500",
    },
  ]

  const activities = [
    "AI booked appointment for iPhone 13 screen repair",
    "Warm transfer to technician - Software issue",
    "Quote provided for iPad battery replacement",
    "Call dropped after 12 seconds",
  ]

  const repairs = [
    { name: "Screen Repair", value: 156 },
    { name: "Battery Replacement", value: 89 },
    { name: "Back Glass Repair", value: 67 },
    { name: "Software Issues", value: 45 },
  ]

  return (
    <div className="p-6 space-y-6  min-h-screen text-white">

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex justify-between items-start"
          >
            <div>
              <p className="text-sm text-slate-400">{item.title}</p>
              <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
              <p className="text-green-400 text-sm mt-1">{item.percent}</p>
            </div>

            <div className={`p-3 rounded-lg ${item.color}`}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Chart*/}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-72 flex items-center justify-center">
        <p className="text-slate-400">Chart goes here</p>
      </div>

      
      <div className="grid grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {activities.map((act, i) => (
              <div
                key={i}
                className="bg-slate-800 p-3 rounded-lg text-sm text-slate-300"
              >
                {act}
              </div>
            ))}
          </div>
        </div>

        {/* Top Repairs */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="font-semibold mb-4">Top Repair Requests</h2>

          <div className="space-y-4">
            {repairs.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{r.name}</span>
                  <span>{r.value} requests</span>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${r.value / 2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardOverview