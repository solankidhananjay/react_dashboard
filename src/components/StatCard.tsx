import type { StatCardData } from "../types/dashboard";

type StatCardProps = {
    data: StatCardData
}

const StatCard = ({data}: StatCardProps) => {
    return (
        <div
            style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "16px",
                minWidth: "160px",
            }}
        >
            <p style={{ color: "#6b7280", marginBottom: "8px" }}>
                {data.label}
            </p>
            <h2>{data.value}</h2>
        </div>
    );
}

export default StatCard;