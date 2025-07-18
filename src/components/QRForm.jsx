import PropTypes from 'prop-types';
function QRForm({text, setText, handleGenerate}) {
    function handleSubmit(e) {
        e.preventDefault(); 
        handleGenerate();
    }
  return (
    <div className="space-y-4 p-6 bg-gray-200 bg-opacity-70 rounded-xl shadow-lg font-mono backdrop-blur">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <textarea
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text Or URL"
        className="w-full p-2 border border-gray-300 rounded-md resize-none overflow-hidden"
        rows={1}
        maxLength={252}
        onInput={e => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
        }}
        />
        <div className="flex justify-end">
         <h3 className="text-xs text-gray-500" >
            Max 252 characters
        </h3>   
        </div>
        <div className="flex justify-center">
       
        <button
          type="submit"
          className="w-50 bg-slate-500 text-white p-2 rounded-xl hover:bg-slate-600"
        >
            Generate QR Code
        </button> </div>
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
