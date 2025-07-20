import { useState } from "react";
import "./App.css";
import QRForm from "./components/QRForm.jsx";
import QRDisplay from "./components/QRDisplay.jsx";
function App() {
  const [text, setText] = useState('');
  const [qrUrl, setQrUrl] = useState("");

  function generateQRCode() {
    if (!text.trim()) return;
    {
      const baseUrl = "https://api.qrserver.com/v1/create-qr-code/";
      const FulUrl = `${baseUrl}?data=${encodeURIComponent(text)}&size=200x200`;

      setQrUrl(FulUrl);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700 p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl text-center text-white font-mono font-bold drop-shadow-lg mb-4">
          QR Code Generator
        </h1>
        <QRForm
          text={text}
          setText={setText}
          handleGenerate={generateQRCode}
        />
        <QRDisplay qrUrl={qrUrl} />
      </div>
    </div>
  );
}

export default App;
