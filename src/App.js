import './App.css';
import { useState } from "react";
import flores from "./img/Flores2.png";
import patronum from "./img/patronum1.png";

function App() {
  const [modalActivo, setModalActivo] = useState(null);
  const brillos = Array.from({ length: 500 });


  return (
    <div className="contenedor">
      {/* Fondo con brillos */}
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

      {/* Mensaje y botones */}
      {!modalActivo && (
        <div className="mensaje">
          <h1 className="titulo">Elige tu sorpresa ✨</h1>
          <p className="subtitulo">Con mucho cariño amor</p>
          <div className="botones">
            <button className="boton" onClick={() => setModalActivo("cinnamoroll")}>
              Muak 1
            </button>
            <button className="boton" onClick={() => setModalActivo("harry")}>
              Muak 2
            </button>
          </div>
        </div>
      )}

      {/* Modal Cinnamoroll */}
      {modalActivo === "cinnamoroll" && (
        <div className="modal" onClick={() => setModalActivo(null)}>
          <h2 className="teQuiero">Cinnamoroll 💙</h2>
          <p className="subtitulo">Nunca serán suficientes</p>
          <p className="subtitulo">Mereces todas las flores del mundo</p>
          <div className="imagenes">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVpeGFmZWtoaHp5azk2MGpnM2s5c2MweWN2Z2VxeTFxczBwbHE2cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/S9dN0rKztj3YyKxpr8/giphy.gif"
              alt="Cinnamoroll"
              className="gif"
            />
            <img src={flores} alt="Flores" className="FlowersCinnamoroll" />
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVpeGFmZWtoaHp5azk2MGpnM2s5c2MweWN2Z2VxeTFxczBwbHE2cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/S9dN0rKztj3YyKxpr8/giphy.gif"
            alt="Cinnamoroll"
            className="gifInvertido"
          />
          </div>
          <p className="cerrar">(muak siempre hay formas de regalar flores)</p>
        </div>
      )}

      {/* Modal Harry Potter */}
      {modalActivo === "harry" && (
        <div className="modal" onClick={() => setModalActivo(null)}>
          <h2 className="teQuiero">Harry Potter ✨</h2>
          <p className="subtitulo">Nunca serán suficientes</p>
          <p className="subtitulo">Mereces todas las flores del mundo</p>
          <div className="imagenes">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NuZG9vdmphcDE0anMyYjJtY3BveTRrNnpsYWttd2RqMXE0bDVzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lVBUOl3PAlN7i/giphy.gif"
              alt="Cinnamoroll"
              className="gif"
            />
            <img src={patronum} alt="Flores" className="FlowersCinnamoroll" />
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NuZG9vdmphcDE0anMyYjJtY3BveTRrNnpsYWttd2RqMXE0bDVzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lVBUOl3PAlN7i/giphy.gif"
            alt="Cinnamoroll"
            className="gifInvertido"
          />
          </div>
          <p className="cerrar">(muak siempre hay formas de regalar flores)</p>
        </div>
      )}
    </div>
  );
}

export default App;
