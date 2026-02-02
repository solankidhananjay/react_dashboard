import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import type { StatCardData, User } from "../types/dashboard";
import UsersTable from "../components/UsersTable";
import Modal from "../components/Modal";
import UserForm from "../components/UserForm";

const stats: StatCardData[] = [
  { id: "1", label: "Users", value: 1200 },
  { id: "2", label: "Orders", value: 320 },
  { id: "3", label: "Revenue", value: 5400 },
];


const Dashboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    useEffect(() => {
        setTimeout(() => {
            setUsers([
            {
                id: "1",
                name: "John Doe",
                email: "john@example.com",
                status: "active",
            },
            {
                id: "2",
                name: "Jane Smith",
                email: "jane@example.com",
                status: "inactive",
            },
            ]);
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <h2>Overview</h2>

            <div 
                style={{
                    display: "flex",
                    gap: "16px",
                    marginTop: "16px",
                }}
            >
                {stats.map((stat) => (
                    <StatCard key={stat.id} data={stat}/>
                ))}
            </div>
            <h2 style={{ marginTop: "32px" }}>Users</h2>
            <UsersTable 
                users={users} 
                isLoading={isLoading} 
                onEdit={(user) => {
                        setSelectedUser(user);
                        setIsModalOpen(true);
                }}
            />
            <button onClick={() => setIsModalOpen(true)}>Add User</button>
            <Modal
                title={selectedUser ? "Edit User" : "Add User"}
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedUser(null);
                }}
            >
                <UserForm
                    initialData={selectedUser ?? undefined}
                    onSubmit={(user) => {
                        setUsers((prev) => {
                        const exists = prev.find((u) => u.id === user.id);
                        if (exists) {
                            return prev.map((u) => (u.id === user.id ? user : u));
                        }
                        return [...prev, user];
                        });
                        setIsModalOpen(false);
                        setSelectedUser(null);
                    }}
                />
            </Modal>
        </div>
    );
};

export default Dashboard;