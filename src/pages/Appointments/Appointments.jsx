
const Appointments = () => {
 
  const data = {
    stats: [
      { label: "Total Booked", value: 34, sub: "+8 this week" },
      { label: "AI Booked", value: 28 },
      { label: "Pending", value: 3, sub: "Awaiting confirmation" }
    ],
    bookingLink: "https://techstore.com/book?id=store123",
    appointments: [
      {
        name: "Jane D.",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple iPhone 13 Pro",
        repair: "Screen",
        date: "02/06/2026",
        slot: 1,
        time: "09:00"
      },
      {
        name: "Jane D.",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple iPhone 13 Pro",
        repair: "Screen",
        date: "02/06/2026",
        slot: 1,
        time: "10:00"
      },
      {
        name: "Jane D.",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple iPhone 13 Pro",
        repair: "Screen",
        date: "02/06/2026",
        slot: 1,
        time: "09:00"
      },
      {
        name: "Jane D.",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple iPhone 13 Pro",
        repair: "Screen",
        date: "02/06/2026",
        slot: 1,
        time: "10:00"
      },
      {
        name: "Jane D.",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple iPhone 13 Pro",
        repair: "Screen",
        date: "02/06/2026",
        slot: 1,
        time: "09:00"
      },
      {
        name: "Jane D.",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple iPhone 13 Pro",
        repair: "Screen",
        date: "02/06/2026",
        slot: 1,
        time: "10:00"
      }
    ]
  };

  return (
    <div className="space-y-6 min-h-screen">

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.stats.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-gradient-to-br from-[#0f1c3f] to-[#08142e] border border-blue-900"
          >
            <p className="text-sm text-gray-400">{item.label}</p>
            <h2 className="text-3xl font-semibold text-white">
              {item.value}
            </h2>
            {item.sub && (
              <p className="text-xs text-green-400 mt-1">
                {item.sub}
              </p>
            )}
          </div>
        ))}
      </div>

     
      <div className="flex items-center justify-between bg-[#0b1633] p-4 rounded-xl border border-blue-900">
        <div>
          <p className="text-sm text-gray-400">Booking Link</p>
          <p className="text-sm text-white">{data.bookingLink}</p>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(data.bookingLink)}
          className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Copy Link
        </button>
      </div>

      
      <div className="overflow-x-auto bg-[#0b1633] rounded-xl border border-blue-900">
        <table className="w-full text-sm text-gray-300">
          <thead className="border-b border-blue-900 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Device</th>
              <th className="px-4 py-3">Repair</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Slot</th>
              <th className="px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.appointments.map((item, index) => (
              <tr
                key={index}
                className="border-b border-blue-900 hover:bg-[#12204a]"
              >
                <td className="px-4 py-3 text-blue-400">{item.name}</td>
                <td className="px-4 py-3">{item.phone}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.device}</td>
                <td className="px-4 py-3">{item.repair}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.slot}</td>
                <td className="px-4 py-3">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="flex justify-center gap-3 text-sm text-gray-400">
        <button>Previous</button>
        <button className="text-blue-400">1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Appointments;
