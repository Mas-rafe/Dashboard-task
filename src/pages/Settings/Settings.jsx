
import { Link } from "react-router";

const Settings = () => {
 
  const data = {
    profile: {
      image: "https://i.pravatar.cc/150?img=32",
      name: "Jane D.",
      email: "jane@gmail.com",
      storeName: "Ubreakifix Store",
      storeAddress: "123 Main Street, New York, NY 10001"
    }
  };

  return (
    <div className=" max-w-screen-md space-y-6 mx-4 p-4">

     
      <div className="flex gap-6 text-lg text-gray-400">
        <button className="text-white border-b-2 border-blue-500 pb-1">
          Profile
        </button>
        <button>Password Settings</button>
       
      </div>

    
      <div className=" p-6 ">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={data.profile.image}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <Link to="edit-profile">
          <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Edit Profile
          </button>
          </Link>
        </div>

        <div className="space-y-4 text-sm">
          <ProfileRow label="Full Name" value={data.profile.name} />
          <ProfileRow label="Email" value={data.profile.email} />
          <ProfileRow label="Store Name" value={data.profile.storeName} />
          <ProfileRow label="Store Address" value={data.profile.storeAddress} />
        </div>
      </div>
    </div>
  );
};

const ProfileRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-blue-900 pb-2">
    <span className="text-gray-400">{label}</span>
    <span className="text-white">{value}</span>
  </div>
);

export default Settings;
