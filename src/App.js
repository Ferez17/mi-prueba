import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    const [mostrarModal, setMostrarModal] = useState(false);
  const brillos = Array.from({ length: 80 });
  return (
    <div className="contenedor">
      <div className="cielo">
        {brillos.map((_, i) => (
          <div
            key={i}
            className="brillo"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {!mostrarModal && (
        <div className="mensaje">
          <h1 className="titulo">Para Ti, Con Todo Mi Cariño 💜</h1>
          <p className="subtitulo">Eres la persona más especial para mí</p>
          <button className="boton" onClick={() => setMostrarModal(true)}>
            !MUAAAAAAK¡
          </button>
        </div>
      )}

      {mostrarModal && (
        <div className="modal" onClick={() => setMostrarModal(false)}>
          <h7 className="teQuiero">Te quiero</h7>
          <div className="corazon-con-estrellas">
            <div className="corazon">💜</div>
            {/* Estrellas siguiendo la forma del corazón */}
            {Array.from({ length: 40 }).map((_, i) => {
              const t = (i / 40) * Math.PI * 2; // ángulo paramétrico
              // Fórmula paramétrica del corazón
              const x = 16 * Math.pow(Math.sin(t), 3);
              const y =
                13 * Math.cos(t) -
                5 * Math.cos(2 * t) -
                2 * Math.cos(3 * t) -
                Math.cos(4 * t);

              return (
                <div
                  key={i}
                  className="estrella"
                  style={{
                    top: `${68 - y * 4.3}px`,   // 🔑 invertimos el eje Y
                    left: `${95 + x * 4.1}px`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              );
            })}
          </div>
          <p className="cerrar">(muak muak muak muak)</p>
        </div>
      )}
    </div>
  );
}

export default App;
