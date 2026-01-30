import { useState } from "react";

const EditProfile = () => {
  // ===== Initial Profile Data (local JSON) =====
  const initialProfile = {
    image: "https://i.pravatar.cc/150?img=32",
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakifix Store",
    storeAddress: "123 Main Street, New York"
  };

  const [profile, setProfile] = useState(initialProfile);

  // ===== Handle Input Change =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // ===== Handle Image Change =====
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setProfile({ ...profile, image: imageURL });
  };

  // ===== Handle Save =====
  const handleSave = () => {
    console.log("Updated Profile:", profile);
    // later → API call
  };

  return (
    <div className="max-w-screen-xl space-y-8 mx-4 p-4">

      {/* ===== Tabs ===== */}
      <div className="flex gap-8 text-lg text-gray-400 border-b border-blue-900 pb-2 pt-4">
        <button className="text-white border-b-2 border-blue-500 pb-2">
          Profile
        </button>
        <button>Password Settings</button>
      </div>

      {/* ===== Profile Image ===== */}
      <div>
        <p className="text-sm text-gray-400 mb-3">Profile Image</p>
        <div className="relative w-fit">
          <img
            src={profile.image}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />

          <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
            ✎
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>

      {/* ===== Form ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Input
          label="Full Name"
          name="fullName"
          value={profile.fullName}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />

        <Input
          label="Store Name"
          name="storeName"
          value={profile.storeName}
          onChange={handleChange}
        />

        <Input
          label="Store Address"
          name="storeAddress"
          value={profile.storeAddress}
          onChange={handleChange}
        />
      </div>

      {/* ===== Save Button ===== */}
      <div className="flex justify-center pt-6">
        <button
          onClick={handleSave}
          className="w-64 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-sm text-gray-400">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 bg-[#0b1633] border border-blue-900 rounded-xl text-white outline-none focus:border-blue-500"
    />
  </div>
);

export default EditProfile;
