import { Outlet, useMatches } from "react-router";
import Navbar from "../../components/Navbar/Navbar"
import SideBar from "../../components/SideBar/SideBar"
import "../Home/home.scss"

const Home = () => {
  const matches = useMatches();
  const title =
    matches[matches.length - 1]?.handle?.title || "Dashboard";
  return (
    <div className="home">
      <SideBar />
      <div className="homecontainer">
        <Navbar title={title} />
        <div className="bg-gradient-to-tl from-[#020618] via-[#162456] to-[#0F172B] min-h-screen">
          <Outlet />
        </div>
        
        </div>

    </div>


  )
}

export default Home