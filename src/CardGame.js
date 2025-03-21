import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "rpg-awesome/css/rpg-awesome.min.css";
import "./App.css";
import QRScanner from "./QRScanner.js";

const cardList = [
    {
        id: 1,
        name: "Dragón",
        vida: 10,
        ataque: 5,
        defensa: 2,
        energia: 1, // Cambiado a 1
        energiaMaxima: 5, // Nuevo campo
        habilidad: "Escupe Fuego",
    },
    {
        id: 2,
        name: "Guerrero",
        vida: 8,
        ataque: 4,
        defensa: 3,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 3,
        name: "Mago",
        vida: 6,
        ataque: 6,
        defensa: 1,
        energia: 1, // Cambiado a 1
        energiaMaxima: 5, // Nuevo campo
        habilidad: "Curacion",
    },
    {
        id: 4,
        name: "Arquero",
        vida: 7,
        ataque: 5,
        defensa: 2,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 5,
        name: "Caballero",
        vida: 9,
        ataque: 4,
        defensa: 4,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 6,
        name: "Orco",
        vida: 12,
        ataque: 3,
        defensa: 2,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 7,
        name: "Hechicero",
        vida: 5,
        ataque: 7,
        defensa: 1,
        energia: 1, // Cambiado a 1
        energiaMaxima: 10, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 8,
        name: "Gólem",
        vida: 15,
        ataque: 2,
        defensa: 5,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 9,
        name: "Ladrón",
        vida: 6,
        ataque: 4,
        defensa: 3,
        energia: 1, // Cambiado a 1
        energiaMaxima: 3, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 10,
        name: "Bestia",
        vida: 11,
        ataque: 6,
        defensa: 1,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 11,
        name: "Vampiro",
        vida: 8,
        ataque: 5,
        defensa: 3,
        energia: 1, // Cambiado a 1
        energiaMaxima: 4, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 12,
        name: "Esqueleto",
        vida: 5,
        ataque: 3,
        defensa: 2,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 13,
        name: "Hada",
        vida: 4,
        ataque: 2,
        defensa: 1,
        energia: 1, // Cambiado a 1
        energiaMaxima: 10, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 14,
        name: "Troll",
        vida: 13,
        ataque: 4,
        defensa: 3,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 15,
        name: "Fénix",
        vida: 9,
        ataque: 7,
        defensa: 2,
        energia: 1, // Cambiado a 1
        energiaMaxima: 5, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 16,
        name: "Hidra",
        vida: 12,
        ataque: 6,
        defensa: 3,
        energia: 1, // Cambiado a 1
        energiaMaxima: 4, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 17,
        name: "Minotauro",
        vida: 10,
        ataque: 7,
        defensa: 2,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 18,
        name: "Sirena",
        vida: 8,
        ataque: 5,
        defensa: 4,
        energia: 1, // Cambiado a 1
        energiaMaxima: 5, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 19,
        name: "Gárgola",
        vida: 11,
        ataque: 4,
        defensa: 5,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 20,
        name: "Espectro",
        vida: 7,
        ataque: 6,
        defensa: 1,
        energia: 1, // Cambiado a 1
        energiaMaxima: 6, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 21,
        name: "Quimera",
        vida: 13,
        ataque: 8,
        defensa: 3,
        energia: 1, // Cambiado a 1
        energiaMaxima: 5, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 22,
        name: "Lobo Fantasma",
        vida: 9,
        ataque: 5,
        defensa: 2,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 23,
        name: "Druida",
        vida: 6,
        ataque: 4,
        defensa: 3,
        energia: 1, // Cambiado a 1
        energiaMaxima: 10, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 24,
        name: "Elemental de Fuego",
        vida: 10,
        ataque: 7,
        defensa: 2,
        energia: 1, // Cambiado a 1
        energiaMaxima: 5, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 25,
        name: "Elemental de Hielo",
        vida: 12,
        ataque: 5,
        defensa: 4,
        energia: 1, // Cambiado a 1
        energiaMaxima: 5, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 26,
        name: "Nigromante",
        vida: 8,
        ataque: 6,
        defensa: 2,
        energia: 1, // Cambiado a 1
        energiaMaxima: 8, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 27,
        name: "Ángel Guardián",
        vida: 14,
        ataque: 5,
        defensa: 6,
        energia: 1, // Cambiado a 1
        energiaMaxima: 3, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 28,
        name: "Demonio",
        vida: 10,
        ataque: 8,
        defensa: 3,
        energia: 1, // Cambiado a 1
        energiaMaxima: 4, // Nuevo campo
        habilidad: "cura",
    },
    {
        id: 29,
        name: "Centauro",
        vida: 11,
        ataque: 6,
        defensa: 4,
        energia: 0, // No cambia
        energiaMaxima: 0, // Nuevo campo
        habilidad: null,
    },
    {
        id: 30,
        name: "Fénix Oscuro",
        vida: 9,
        ataque: 7,
        defensa: 2,
        energia: 1, // Cambiado a 1
        energiaMaxima: 10, // Nuevo campo
        habilidad: "cura",
    },
];

const habilidadCostos = {
    "Escupe Fuego": 3,
    "Curacion": 2,
    "Otra Habilidad": 3, // Ejemplo de otra habilidad
};


export default function CardGame() {
    const [player1Board, setPlayer1Board] = useState([]);
    const [player2Board, setPlayer2Board] = useState([]);
    const [graveyard, setGraveyard] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedForAbility, setSelectedForAbility] = useState([]); // Cartas seleccionadas para habilidades
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState(1);
    const [attacker, setAttacker] = useState(null);
    const [defender, setDefender] = useState(null);
    const [selectionOrder, setSelectionOrder] = useState([]); // Nuevo estado para el orden de selección
    const [showGraveyard, setShowGraveyard] = useState(false); // Estado para mostrar/ocultar el cementerio
    const [isUsingAbility, setIsUsingAbility] = useState(false); // Estado para cambiar el contexto
    const [abilityUsing, setAbilityUsing] = useState(""); // Estado para almacenar la habilidad en uso
    const [currentTurn, setCurrentTurn] = useState(1); // 1 para Jugador 1, 2 para Jugador 2
    const [cardUsingAbility, setCardUsingAbility] = useState(null); // Carta que activa la habilidad
    const [qrScannerVisible, setQrScannerVisible] = useState(false); // Estado para mostrar/ocultar el lector de QR

    const toggleGraveyard = () => {
        setShowGraveyard(!showGraveyard); // Alterna entre mostrar y ocultar el cementerio
    };

    const addCardToBoard = (player, card) => {
        if (player === 1 && player1Board.length < 5) {
            setPlayer1Board([...player1Board, { ...card, player: 1 }]);
        } else if (player === 2 && player2Board.length < 5) {
            setPlayer2Board([...player2Board, { ...card, player: 2 }]);
        }
    };

    const attackCard = () => {
        if (attacker && defender && attacker.player !== defender.player) {
            let newPlayer1Board = [...player1Board];
            let newPlayer2Board = [...player2Board];

            // Reducir la vida del defensor
            defender.vida -=
                attacker.ataque - defender.defensa > 0
                    ? attacker.ataque - defender.defensa
                    : 0;

            // Si el defensor muere, moverlo al cementerio
            if (defender.vida <= 0) {
                // Buscar la carta original en cardList
                const originalCard = cardList.find((card) => card.id === defender.id);
                setGraveyard([...graveyard, originalCard]); // Usar la carta original

                // Eliminar la carta del tablero correspondiente
                if (defender.player === 1) {
                    newPlayer1Board = newPlayer1Board.filter((c) => c !== defender);
                } else if (defender.player === 2) {
                    newPlayer2Board = newPlayer2Board.filter((c) => c !== defender);
                }
            }

            // Actualizar los tableros
            setPlayer1Board(newPlayer1Board);
            setPlayer2Board(newPlayer2Board);

            // Cancelar el ataque
            cancelAttack();
        }
    };

    const selectCard = (card) => {
        if (selectionOrder.length === 0) {
            setAttacker(card); // La primera carta seleccionada es el atacante
            setSelectionOrder([card]);
        } else if (selectionOrder.length === 1 && selectionOrder[0] !== card) {
            setDefender(card); // La segunda carta seleccionada es el defensor
            setSelectionOrder([...selectionOrder, card]);
        }
    };

    const cancelAttack = () => {
        setAttacker(null);
        setDefender(null);
        setSelectionOrder([]); // Reinicia el orden de selección
        setIsUsingAbility(false); // Reinicia el contexto
        setSelectedForAbility([]); // Reinicia la selección
        setAbilityUsing(""); // Limpia la habilidad en uso
    };

    const filteredCards = cardList.filter(
        (card) =>
            card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.id.toString().includes(searchTerm)
    );

    const selectCardForAbility = (card) => {
        let maxSelectable = 1;

        switch (abilityUsing) {
            case "Escupe Fuego":
                maxSelectable = 3;
                break;
            case "Curacion":
                maxSelectable = 1;
                break;
        }

        if (selectedForAbility.includes(card)) {
            // Si la carta ya está seleccionada, la deseleccionamos
            const updatedSelection = selectedForAbility.filter((c) => c !== card);
            setSelectedForAbility(updatedSelection);
        } else if (selectedForAbility.length < maxSelectable) {
            // Seleccionamos la carta si no está seleccionada y el límite es menor a 3
            const updatedSelection = [...selectedForAbility, card];
            setSelectedForAbility(updatedSelection);
        } else {
            alert(`Solo puedes seleccionar hasta ${maxSelectable} cartas para esta habilidad.`);
        }

    };

    const handleCardClick = (card) => {
        if (isUsingAbility) {
            selectCardForAbility(card); // Selección para habilidades
        } else {
            selectCard(card); // Selección para ataques normales
        }
    };

    const skipTurn = () => {
        if (currentTurn === 1) {
            // Incrementar energía de las cartas del Jugador 1
            const updatedPlayer1Board = player1Board.map((card) => {
                if (card.energia < card.energiaMaxima) {
                    return { ...card, energia: card.energia + 1 };
                }
                return card;
            });
            setPlayer1Board(updatedPlayer1Board);
            setCurrentTurn(2); // Cambiar turno al Jugador 2
        } else if (currentTurn === 2) {
            // Incrementar energía de las cartas del Jugador 2
            const updatedPlayer2Board = player2Board.map((card) => {
                if (card.energia < card.energiaMaxima) {
                    return { ...card, energia: card.energia + 1 };
                }
                return card;
            });
            setPlayer2Board(updatedPlayer2Board);
            setCurrentTurn(1); // Cambiar turno al Jugador 1
        }
    };

    const handleQrScanSuccess = (decodedText) => {
        console.log("Texto escaneado:", decodedText);
        // Aquí puedes manejar el texto del QR, por ejemplo, agregar una carta
        alert(`Código QR escaneado: ${decodedText}`);
        setQrScannerVisible(false); // Oculta el escáner después de escanear
    };

    const handleQrScanError = (error) => {
        console.error("Error al escanear el QR:", error);
    };

    const usarHabilidad = (habilidad) => {
        const costoEnergia = habilidadCostos[habilidad]; // Obtén el costo de la habilidad

        if (!cardUsingAbility || cardUsingAbility.energia < costoEnergia) {
            alert("No tienes suficiente energía para usar esta habilidad.");
            return;
        }

        switch (habilidad) {
            case "Escupe Fuego":
                if (selectedForAbility.length === 3) {
                    // Aplica daño a las 3 cartas seleccionadas
                    let newPlayer1Board = [...player1Board];
                    let newPlayer2Board = [...player2Board];
                    let newGraveyard = [...graveyard];

                    // Aplica el daño y verifica si las cartas mueren
                    newPlayer1Board = newPlayer1Board.filter((card) => {
                        if (selectedForAbility.includes(card)) {
                            card.vida -= 5; // Reduce la vida en 5
                            if (card.vida <= 0) {
                                const originalCard = cardList.find(
                                    (card2) => card2.id === card.id
                                );
                                newGraveyard.push(originalCard); // Mueve la carta original al cementerio
                                return false; // Elimina la carta del tablero
                            }
                        }
                        return true; // Mantiene la carta en el tablero
                    });

                    newPlayer2Board = newPlayer2Board.filter((card) => {
                        if (selectedForAbility.includes(card)) {
                            card.vida -= 5; // Reduce la vida en 5
                            if (card.vida <= 0) {
                                const originalCard = cardList.find(
                                    (card2) => card2.id === card.id
                                );
                                newGraveyard.push(originalCard); // Mueve la carta original al cementerio
                                return false; // Elimina la carta del tablero
                            }
                        }
                        return true; // Mantiene la carta en el tablero
                    });

                    // Resta el costo de energía a la carta que usó la habilidad
                    cardUsingAbility.energia -= costoEnergia;

                    // Actualiza los estados
                    setPlayer1Board(newPlayer1Board);
                    setPlayer2Board(newPlayer2Board);
                    setGraveyard(newGraveyard);
                    setSelectedForAbility([]); // Reinicia la selección
                    setIsUsingAbility(false); // Finaliza el uso de la habilidad
                    setAbilityUsing(""); // Limpia la habilidad en uso
                    setCardUsingAbility(null); // Limpia la carta que usó la habilidad
                    setAttacker(null); // Limpia el atacante
                    setDefender(null); // Limpia el defensor
                    setSelectionOrder([]); // Limpia el orden de selección
                } else {
                    alert("Selecciona exactamente 3 cartas para usar esta habilidad.");
                }
                break;

            case "Curacion":
                if (selectedForAbility.length === 1) {
                    // Aplica curación a la carta seleccionada
                    const cardToHeal = selectedForAbility[0];
                    cardToHeal.vida += 5; // Incrementa la vida en 5

                    // Resta el costo de energía a la carta que usó la habilidad
                    cardUsingAbility.energia -= costoEnergia;

                    // Actualiza los tableros
                    setPlayer1Board([...player1Board]);
                    setPlayer2Board([...player2Board]);
                    setSelectedForAbility([]); // Reinicia la selección
                    setIsUsingAbility(false); // Finaliza el uso de la habilidad
                    setAbilityUsing(""); // Limpia la habilidad en uso
                    setCardUsingAbility(null); // Limpia la carta que usó la habilidad
                    setAttacker(null); // Limpia el atacante
                    setDefender(null); // Limpia el defensor
                    setSelectionOrder([]); // Limpia el orden de selección
                } else {
                    alert("Selecciona exactamente 1 carta para usar esta habilidad.");
                }
                break;
        }
    };



    return (
        <div className="container text-center mt-4">
            <h2>Juego de Cartas</h2>
            <h3>Turno actual: Jugador {currentTurn}<i className={`ra ra-player-king ra-2x ${currentTurn === 1 ? "text-primary" : "text-danger"}`}></i></h3>
            <div className="row">
                <div className="col">
                    <h3>Jugador 1</h3>
                    <div className="d-flex flex-nowrap justify-content-center">
                        {player1Board.map((card, index) => (
                            <div
                                key={index}
                                className={`card card-fixed m-2 p-2 border border-primary bg-light ${!isUsingAbility && attacker === card ? "animate__animated animate__pulse border-3" : ""
                                    } ${!isUsingAbility && defender === card ? "animate__animated animate__flash border-3" : ""
                                    } ${isUsingAbility && selectedForAbility.includes(card) ? "animate__animated animate__tada border-3" : ""
                                    }`}
                                onClick={() => handleCardClick(card)} // Usa la nueva función handleCardClick
                            >
                                <h5>{card.name}</h5>
                                <p>
                                    Vida: {card.vida}
                                    <i className="ra ra-glass-heart ra-lg text-danger"></i>
                                </p>
                                <p>
                                    Ataque: {card.ataque}
                                    <i className="ra ra-sword ra-lg text-secondary"></i>
                                </p>
                                <p>
                                    Defensa: {card.defensa}
                                    <i className="ra ra-shield ra-lg text-black"></i>
                                </p>
                                {card.energiaMaxima > 0 && (
                                    <p>
                                        Energía: {card.energia}/{card.energiaMaxima}
                                        <i className="ra ra-lightning-bolt ra-lg text-primary"></i>
                                    </p>
                                )}{" "}
                                {/* Mostrar solo si energía > 0 */}
                                {card.habilidad !== null && (
                                    <p>
                                        <i className="ra ra-lightning-bolt text-warning"></i>{" "}
                                        Habilidad Especial{" "}
                                        <button
                                            className="btn border"
                                            value={card.habilidad}
                                            onClick={() => {
                                                if (!isUsingAbility) {
                                                    setIsUsingAbility(true); // Cambia el contexto
                                                    setAbilityUsing(card.habilidad); // Almacena la habilidad seleccionada
                                                    setSelectedForAbility([]); // Limpia cualquier selección previa
                                                    setCardUsingAbility(card); // Almacena la carta que activa la habilidad
                                                } else {
                                                    alert("Ya estás usando una habilidad.");
                                                }
                                            }}
                                            disabled={isUsingAbility}
                                        >
                                            🎇{card.habilidad}🎇
                                        </button>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col">
                    <h3>Jugador 2</h3>
                    <div className="d-flex flex-nowrap justify-content-center">
                        {player2Board.map((card, index) => (
                            <div
                                key={index}
                                className={`card card-fixed m-2 p-2 border border-danger bg-light ${!isUsingAbility && attacker === card ? "animate__animated animate__pulse border-3" : ""
                                    } ${!isUsingAbility && defender === card ? "animate__animated animate__flash border-3" : ""
                                    }
                ${isUsingAbility && selectedForAbility.includes(card) ? "animate__animated animate__tada border-3" : ""
                                    }`}
                                onClick={() => handleCardClick(card)} // Usa la nueva función selectCard
                            >
                                <h5>{card.name}</h5>
                                <p>
                                    Vida: {card.vida}
                                    <i className="ra ra-glass-heart ra-lg text-danger"></i>
                                </p>
                                <p>
                                    Ataque: {card.ataque}
                                    <i className="ra ra-sword ra-lg text-secondary"></i>
                                </p>
                                <p>
                                    Defensa: {card.defensa}
                                    <i className="ra ra-shield ra-lg text-black"></i>
                                </p>
                                {card.energiaMaxima > 0 && (
                                    <p>
                                        Energía: {card.energia}/{card.energiaMaxima}
                                        <i className="ra ra-lightning-bolt ra-lg text-primary"></i>
                                    </p>
                                )}{" "}
                                {/* Mostrar solo si energía > 0 */}
                                {card.habilidad !== null && (
                                    <p>
                                        <i className="ra ra-lightning-bolt text-warning"></i>{" "}
                                        Habilidad Especial{" "}
                                        <button
                                            className="btn border"
                                            value={card.habilidad}
                                            onClick={() => {
                                                if (!isUsingAbility) {
                                                    setIsUsingAbility(true); // Cambia el contexto
                                                    setAbilityUsing(card.habilidad); // Almacena la habilidad seleccionada
                                                    setSelectedForAbility([]); // Limpia cualquier selección previa
                                                    setCardUsingAbility(card); // Almacena la carta que activa la habilidad
                                                } else {
                                                    alert("Ya estás usando una habilidad.");
                                                }
                                            }}
                                            disabled={isUsingAbility}
                                        >
                                            🎇{card.habilidad}🎇
                                        </button>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h3>Selecciona una carta para agregar</h3>
            <button
                className="btn btn-secondary mt-3 mx-1"
                onClick={() => setQrScannerVisible(!qrScannerVisible)}
            >
                {qrScannerVisible ? "Cerrar Lector QR" : "Agregar Carta con QR"}
            </button>
            {qrScannerVisible && (
                <div className="qr-reader-container mt-3">
                    <p>Escanea el QR de la carta.</p>
                    <QRScanner
                        onScanSuccess={handleQrScanSuccess}
                        onScanError={handleQrScanError}
                    />
                </div>
            )}
            <input
                type="text"
                placeholder="Buscar carta"
                className="form-control mb-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                className="form-select mb-2"
                onChange={(e) =>
                    setSelectedCard(
                        cardList.find((card) => card.id === Number(e.target.value))
                    )
                }
            >
                <option value="">Selecciona una carta</option>
                {filteredCards.map((card) => (
                    <option key={card.id} value={card.id}>
                        {card.name}
                    </option>
                ))}
            </select>
            <select
                className="form-select mb-2"
                onChange={(e) => setSelectedPlayer(Number(e.target.value))}
            >
                <option value="1">Jugador 1</option>
                <option value="2">Jugador 2</option>
            </select>
            <button
                className="btn btn-primary mt-3 mx-1"
                onClick={() =>
                    selectedCard && addCardToBoard(selectedPlayer, selectedCard)
                }
                disabled={!selectedCard}
            >
                Agregar Carta a Jugador {selectedPlayer}
            </button>
            <button
                className="btn btn-danger mt-3 mx-1"
                onClick={attackCard}
                disabled={!attacker || !defender}
            >
                Atacar
            </button>
            <button
                className="btn btn-secondary mt-3 mx-1"
                onClick={cancelAttack}
                disabled={!attacker && !defender && !isUsingAbility}
            >
                Cancelar Ataque
            </button>

            {isUsingAbility && (
                <button
                    className="btn btn-success mt-3 mx-1"
                    onClick={() => {
                        if (
                            (abilityUsing === "Escupe Fuego" && selectedForAbility.length <= 3) ||
                            (abilityUsing === "Curacion" && selectedForAbility.length === 1)
                        ) {
                            usarHabilidad(abilityUsing); // Llama a la habilidad seleccionada
                        } else {
                            alert("No has seleccionado la cantidad correcta de cartas para esta habilidad.");
                        }
                    }}
                >
                    Confirmar Selección
                </button>
            )}

            <button className="btn btn-dark mt-3 mx-1" onClick={toggleGraveyard}>
                {showGraveyard ? "Ocultar Cementerio" : "Ver Cementerio"}
            </button>

            {showGraveyard && (
                <div className="mt-4">
                    <h3>Cementerio</h3>
                    <div className="d-flex flex-wrap justify-content-center">
                        {graveyard.map((card, index) => (
                            <div
                                key={index}
                                className="card m-2 p-2 border border-secondary bg-light"
                            >
                                <h5>{card.name}</h5>
                                <p>
                                    Vida: {card.vida}
                                    <i className="ra ra-glass-heart ra-lg text-danger"></i>
                                </p>
                                <p>
                                    Ataque: {card.ataque}
                                    <i className="ra ra-sword ra-lg text-secondary"></i>
                                </p>
                                <p>
                                    Defensa: {card.defensa}
                                    <i className="ra ra-shield ra-lg text-black"></i>
                                </p>
                                {card.energia > 0 && (
                                    <p>
                                        Energía: {card.energia}
                                        <i className="ra ra-lightning-bolt ra-lg text-primary"></i>
                                    </p>
                                )}{" "}
                                {/* Mostrar solo si energía > 0 */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button
                className="btn btn-info mt-3 mx-1"
                onClick={skipTurn}
            >
                Saltar Turno (Jugador {currentTurn})
            </button>
        </div>
    );
}
