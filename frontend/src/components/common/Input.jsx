const Input = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label style={{ display: "block", marginBottom: "4px" }}>
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  )
}

export default Input
