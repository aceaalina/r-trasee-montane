import NavBarItem from "./NavBarItem";

function SideBar(props) {
  return (
    <div className="col-lg-1 col-md-6">
      <div className="container">
        <div className="sidebar">
          {props.headerList.map((headerItem) => {
            return (
              <div className={`row side-bar-row navigation-container ${headerItem}`}>
                <NavBarItem title={headerItem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// function SideBar(props){
//   console.log(props);
//   return (
//     <div className="col-lg-1  col-md-6">
//       <div className="container">
//         <div className="sidebar">
//           <div className="row side-bar-row navigation-container giumalau">
//             <NavBarItem title=''/>
//           </div>
//           <div className="row side-bar-row navigation-container omu">
//             <NavBarItem title=''/>
//           </div>
//           <div className="row side-bar-row navigation-container pietrosu-rodnei">
//             <NavBarItem title='' />
//           </div>
//           <div className="row side-bar-row navigation-container pietrosu-calimani">
//             <NavBarItem title=''/>
//           </div>
//           <div className="row side-bar-row navigation-container hasmasu-mare">
//             <NavBarItem title=''/>
//           </div>
//           <div className="row side-bar-row navigation-container toaca">
//             <NavBarItem title=''/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default SideBar;
