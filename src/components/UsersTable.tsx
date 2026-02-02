import type { User } from "../types/dashboard";

type UsersTableProps = {
    users : User[];
    isLoading : boolean;
    onEdit: (user: User) => void;
}

const UsersTable = ({ users, isLoading, onEdit }: UsersTableProps) => {
    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (users.length === 0) {
        return <p>No Users found!!</p>
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
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.status}</td>
                        <td>
                          <button onClick={() => onEdit(user)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UsersTable;