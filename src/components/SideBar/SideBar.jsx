import avatar from "../../assets/avatar.svg";
import "./SideBar.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function SideBar({ onEdit, onLogout }) {
  return (
    <div className="sidebar">
      <div className="sidebar__userinfo">
        <img className="sidebar__avatar" src={avatar} alt="Terrence Tegegene" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
      <button type="button" className="sidebar__edit-btn" onClick={onEdit}>
        Edit Profile
      </button>
      <button type="button" className="sidebar__logout-btn" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
