import PropTypes from "prop-types";
import { Sparkle } from "lucide-react"; 

function QRForm({ text, setText, handleGenerate }) {
  function handleSubmit(e) {
    e.preventDefault();
    handleGenerate();
  }
  return (
    <div className="space-y-6 p-8 bg-white/70 rounded-2xl shadow-2xl font-mono backdrop-blur-lg border border-slate-200">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <Sparkle className="text-slate-500" size={24} />
          <span className="text-lg font-semibold text-slate-700">
            Generate QR Code
          </span>
        </div>
        <textarea
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL..."
          className="w-full p-3 border border-slate-300 rounded-xl resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
          rows={1}
          maxLength={252}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
        <div className="flex justify-between items-center">
          <h3 className="text-xs text-gray-500">Max 252 caracter</h3>
          <span className="text-xs text-slate-400">{text.length}/252</span>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-500 to-slate-700 text-white py-2 rounded-xl font-bold shadow hover:scale-105 hover:from-slate-600 transition"
          >
            Generate QR Code
          </button>
        </div>
      </form>
    </div>
  );
}

QRForm.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  handleGenerate: PropTypes.func.isRequired,
};

export default QRForm;
