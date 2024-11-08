import avatar from "../../assets/avatar.svg"
import "./SideBar.css"

function SideBar() {
    return (
      <div className="sidebar">
       <img className="sidebar__avatar"  src={avatar} alt="Terrence Tegegene" />
       <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    );
  }
  
  export default SideBar;