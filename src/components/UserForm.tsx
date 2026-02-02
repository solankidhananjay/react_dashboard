import { useState } from "react";
import type { User } from "../types/dashboard";

type UserFormProps = {
  initialData?: User;
  onSubmit: (user: User) => void;
};

const UserForm = ({ initialData, onSubmit }: UserFormProps) => {
  const [name, setName] = useState(initialData?.name ?? "");
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [status, setStatus] = useState<User["status"]>(
    initialData?.status ?? "active"
  );

  const handleSubmit = () => {
    onSubmit({
      id: initialData?.id ?? Date.now().toString(),
      name,
      email,
      status,
    });
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as User["status"])}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default UserForm;
