import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", calls: 45 },
  { day: "Tue", calls: 62 },
  { day: "Wed", calls: 58 },
  { day: "Thu", calls: 72 },
  { day: "Fri", calls: 90 },
  { day: "Sat", calls: 98 },
  { day: "Sun", calls: 60 },
];

const CallTrendChart = () => {
  return (
    <div className="bg-[#0F172B80] rounded-xl p-6 w-full h-[350px] text-white">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">
            Call Trends - This Week
          </h2>
          <p className="text-sm text-gray-400">
            Total: 472 calls
          </p>
        </div>

        <button className="bg-[#162456] px-4 py-2 rounded-lg text-sm">
          This Week ▾
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />
          <XAxis dataKey="day" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="calls"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#colorCalls)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CallTrendChart;