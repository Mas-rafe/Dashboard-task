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

        container</div>
      <Outlet />
    </div>


  )
}

export default Home