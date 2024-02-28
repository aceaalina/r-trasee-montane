import NavBarItem from "./NavBarItem";

function SideBar(props) {
  return (
    <div className="col-lg-1 col-md-6">
      <div className="container">
        <div className="sidebar">
          {props.headerList.map((headerItem) => {
            return (
              <div
                className={`row side-bar-row navigation-container ${headerItem.className} ${headerItem}`}
              >
                <NavBarItem item={headerItem}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SideBar;
