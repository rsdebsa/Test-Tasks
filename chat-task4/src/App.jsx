import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: "این یک پاسخ تستی از سیستم است." },
    ]);

    setInput("");
  };

  return (
    <div style={pageStyle} dir="rtl">
      <div style={chatBoxStyle}>
        <h3 style={headerStyle}>Task 4</h3>

        <div style={messagesStyle}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                ...messageStyle,
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor:
                  msg.sender === "user" ? "#2563eb" : "#e5e7eb",
                color: msg.sender === "user" ? "#fff" : "#000",
                textAlign: "right",
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div style={inputRowStyle}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="پیام خود را بنویسید..."
            style={inputStyle}
          />
          <button onClick={sendMessage} style={buttonStyle}>
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3f4f6",
  fontFamily: "Tahoma, sans-serif",
};

const chatBoxStyle = {
  width: "360px",
  background: "#fff",
  borderRadius: "10px",
  padding: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "12px",
};

const messagesStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "12px",
  overflowY: "auto",
};

const messageStyle = {
  maxWidth: "75%",
  padding: "8px 12px",
  borderRadius: "12px",
  fontSize: "14px",
  lineHeight: "1.6",
};

const inputRowStyle = {
  display: "flex",
  gap: "8px",
};

const inputStyle = {
  flex: 1,
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  textAlign: "right",
};

const buttonStyle = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  background: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};
