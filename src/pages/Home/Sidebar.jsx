function Sidebar({ notifications }) {
    return (
      <div className="sidebar flex flex-col items-start">
        <div className="notification-item mt-12 flex items-start">
          <span>{notifications}</span> 
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  