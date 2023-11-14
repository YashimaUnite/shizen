import { useState, useEffect } from "react";

const useKeyboardMovement = () => {
    const [position, setDPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowUp":
                    setDPosition((prev) => ({ ...prev, y: prev.y - 1 }));
                    break;
                case "ArrowDown":
                    setDPosition((prev) => ({ ...prev, y: prev.y + 1 }));
                    break;
                case "ArrowLeft":
                    setDPosition((prev) => ({ ...prev, x: prev.x - 1 }));
                    break;
                case "ArrowRight":
                    setDPosition((prev) => ({ ...prev, x: prev.x + 1 }));
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return position;
}

export default useKeyboardMovement;