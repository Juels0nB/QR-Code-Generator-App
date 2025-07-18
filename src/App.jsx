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
    <div className="w-screen h-screen bg-gray-400 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-4xl text-center text-slate-100 font-mono font bold drop-shadow-lg">
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
