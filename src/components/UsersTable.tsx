import type { User } from "../types/dashboard";

type UsersTableProps = {
    users : User[];
    isLoading : boolean;
    onEdit: (user: User) => void;
    onDelete: (id: string) => void;
}

const UsersTable = ({ users, isLoading, onEdit, onDelete }: UsersTableProps) => {
    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (users.length === 0) {
        return (
            <p style={{ color: "#6b7280", marginTop: "16px" }}>
                No users yet. Click “Add User” to get started.
            </p>
        );
    }

    return (
        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "16px",
            }}
        >
            <thead>
                <tr>
                    <th align="left">Name</th>
                    <th align="left">Email</th>
                    <th align="left">Status</th>
                    <th align="left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td style={{ padding: "8px 0" }}>{user.name}</td>
                        <td style={{ padding: "8px 0" }}>{user.email}</td>
                        <td style={{
                                color: user.status === "active" ? "#16a34a" : "#dc2626",
                                fontWeight: 500,
                            }}
                        >
                            {user.status}
                        </td>
                        <td style={{ padding: "8px 0" }}>
                          <button onClick={() => onEdit(user)}>Edit</button>
                        </td>
                        <td style={{ padding: "8px 0" }}>
                            <button onClick={() => onEdit(user)}>Edit</button>
                            <button
                                style={{ marginLeft: "8px" }}
                                onClick={() => onDelete(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UsersTable;