import PropTypes from 'prop-types';
function QRDisplay({ qrUrl }) {
    if (!qrUrl) {
        return null;
    }
    return (
        <div className="flex justify-center bg-white/80 p-4 rounded-2xl shadow-xl border border-slate-200 animate-fade-in">
            <img src={qrUrl} alt="QR Code" className="w-48 h-48 rounded-xl shadow-lg border border-slate-300" />
        </div>
    );
}
QRDisplay.propTypes = {
    qrUrl: PropTypes.string.isRequired,
};
export default QRDisplay;