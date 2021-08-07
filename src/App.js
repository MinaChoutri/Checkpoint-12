// import logo from "./source.png";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
//         <h1 class="title red">Your name here</h1>

//         <br />
//         <img src={logo} />
//         <br />

//         <img src="logoamp.png" alt />
//       </div>

//       <video width="320" height="240" controls>
//         <source src="myVideo.mp4" type="video/mp4" />
//       </video>
//     </div>
//   );
// }

// export default App;

import Profile from "./components/Profile/ProfilePhoto";
import Adresse from "./components/Profile/Adresse";
import FullName from "./components/Profile/FullName";

function App() {
  return (
    <div className="App">
      <Profile />
      <Adresse />
      <FullName />
    </div>
  );
}
export default App;
