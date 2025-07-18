import PropTypes from 'prop-types';
function QRDisplay({ qrUrl}){
    if (!qrUrl) {
        return null; // Don't render anything if qrUrl is empty
    }
    return (
        <div className=" w-50 flex justify-center bg-slate-200 p-2 rounded-xl">
            <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
        </div>
    );
}
QRDisplay.propTypes = {
    qrUrl: PropTypes.string.isRequired,
};
export default QRDisplay;