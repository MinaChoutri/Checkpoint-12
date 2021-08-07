import ProfileP from "./profilephoto.jpg";
import "./ProfilePhoto.css";
const Profile = () => {
  const photoClick = (e) => {
    e.preventDefault();
    alert("Congrats ! The photo has been successfully clicked");
  };
  return (
    <div>
      <img onClick={photoClick} className="pp" src={ProfileP} />
    </div>
  );
};

export default Profile;
