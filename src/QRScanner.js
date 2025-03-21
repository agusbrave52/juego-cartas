import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner({ onScanSuccess, onScanError }) {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "qr-reader", // ID del contenedor donde se renderizará el escáner
            {
                fps: 10, // Velocidad de escaneo (frames por segundo)
                qrbox: { width: 250, height: 250 }, // Tamaño del área de escaneo
            },
            false
        );

        scanner.render(
            (decodedText) => {
                console.log("Resultado del QR:", decodedText);
                onScanSuccess(decodedText); // Llama a la función de éxito
            },
            (error) => {
                console.error("Error al escanear el QR:", error);
                onScanError(error); // Llama a la función de error
            }
        );

        // Limpia el escáner al desmontar el componente
        return () => {
            scanner.clear().catch((error) => {
                console.error("Error al limpiar el escáner:", error);
            });
        };
    }, [onScanSuccess, onScanError]);

    return <div id="qr-reader" style={{ width: "100%" }}></div>;
}