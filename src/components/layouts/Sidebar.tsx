const Sidebar = () => {
    return (
        <aside 
            style={{
                width: "220px",
                backgroundColor: "#1f2937",
                color: "#fff",
                padding: "16px"
            }}
        >
            <h2>Admin</h2>
            <ul style={{listStyle: "none", padding: 0}}>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
}

export default Sidebar;