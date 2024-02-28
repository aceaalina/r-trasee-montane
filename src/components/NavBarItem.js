function NavBarItem(props) {
    return (
        <div className="col-lg-12 col-sm-6 side-bar">
             <a href={props.item.path} className="top-left-link">{props.item.title}</a>
        </div>
    
    );
  }
  
  export default NavBarItem;