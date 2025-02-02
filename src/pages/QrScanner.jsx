import React, { useState } from "react";
import { Scanner } from '@yudiel/react-qr-scanner';

const QrScanner = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [qrCode, setQrCode] = useState(null);

    const changeScan = () => {
        setIsScanning(!isScanning);
    }

    return (
    <div className="scanner">
        <button onClick={changeScan}>Scan</button>
     {isScanning && <Scanner onScan={(result) => {console.log(result); setQrCode(result)}} allowMultiple={true} />}
        {qrCode && <p>{qrCode[0].rawValue}</p>}
    </div>
    )
};

export default QrScanner