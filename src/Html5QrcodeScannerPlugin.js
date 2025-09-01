// import React, { useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// export default function QRScanner({ onScanSuccess, onScanError }) {
//     useEffect(() => {
//         let scanner;

//         // Limpia cualquier escáner existente antes de crear uno nuevo
//         const initializeScanner = () => {
//             if (scanner) {
//                 scanner.clear().catch((error) => {
//                     console.error("Error al limpiar el escáner existente:", error);
//                 });
//             }

//             scanner = new Html5QrcodeScanner(
//                 "qr-reader", // ID del contenedor donde se renderizará el escáner
//                 {
//                     fps: 10, // Velocidad de escaneo (frames por segundo)
//                     qrbox: { width: 250, height: 250 }, // Tamaño del área de escaneo
//                 },
//                 false
//             );

//             scanner.render(
//                 (decodedText) => {
//                     console.log("Resultado del QR:", decodedText);

//                     onScanSuccess(decodedText); // Llama a la función de éxito
//                 },
//                 (error) => {
//                     console.error("Error al escanear el QR:", error);
//                     onScanError(error); // Llama a la función de error
//                 }
//             );
//         };

//         initializeScanner();

//         // Limpia el escáner al desmontar el componente
//         return () => {
//             if (scanner) {
//                 scanner.clear().then(() => {
//                     console.log("Escáner limpiado correctamente.");
//                 }).catch((error) => {
//                     console.error("Error al limpiar el escáner:", error);
//                 });
//             }
//         };
//     }, [onScanSuccess, onScanError]);

//     return <div id="qr-reader" style={{ width: "100%" }}></div>;
// }
// file = Html5QrcodePlugin.jsx


import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div id={qrcodeRegionId} />
    );
};

export default Html5QrcodePlugin;