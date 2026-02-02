export type StatCardData = {
  id: string;
  label: string;
  value: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
};
