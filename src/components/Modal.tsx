type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{title}</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div style={{ marginTop: "16px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
