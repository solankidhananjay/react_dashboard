import StatCard from "../components/StatCard";
import type { StatCardData } from "../types/dashboard";

const stats: StatCardData[] = [
  { id: "1", label: "Users", value: 1200 },
  { id: "2", label: "Orders", value: 320 },
  { id: "3", label: "Revenue", value: 5400 },
];


const Dashboard = () => {
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
        </div>
    );
};

export default Dashboard;