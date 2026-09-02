import './App.css';
import { useState } from "react";
import flores from "./img/Flores2.png";
import patronum from "./img/patronum2.png";

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

      {!modalActivo && (
        <div className="mensaje">
          <h1 className="titulo">Elige tu sorpresa ✨</h1>
          <p className="subtitulo">Haz clic en un regalo</p>
          <div className="botones">
            <button className="boton" onClick={() => setModalActivo("flores")}>
              <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVpeGFmZWtoaHp5azk2MGpnM2s5c2MweWN2Z2VxeTFxczBwbHE2cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/S9dN0rKztj3YyKxpr8/giphy.gif"
              alt="Cinnamoroll"
              className="gif"
            />
            </button>
            <button className="boton" onClick={() => setModalActivo("video")}>
              <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVpeGFmZWtoaHp5azk2MGpnM2s5c2MweWN2Z2VxeTFxczBwbHE2cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/S9dN0rKztj3YyKxpr8/giphy.gif"
              alt="Cinnamoroll"
              className="gif"
            />
            </button>
            <button className="boton" onClick={() => setModalActivo("video_amor")}>
              <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVpeGFmZWtoaHp5azk2MGpnM2s5c2MweWN2Z2VxeTFxczBwbHE2cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/S9dN0rKztj3YyKxpr8/giphy.gif"
              alt="Cinnamoroll"
              className="gif"
            />
            </button>
            <button className="boton" onClick={() => setModalActivo("textoImagen")}>
              <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVpeGFmZWtoaHp5azk2MGpnM2s5c2MweWN2Z2VxeTFxczBwbHE2cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/S9dN0rKztj3YyKxpr8/giphy.gif"
              alt="Cinnamoroll"
              className="gif"
            />
            </button>
          </div>
        </div>
      )}

      {/* Modal Flores */}
      {modalActivo === "flores" && (
        <div className="modal" onClick={() => setModalActivo(null)}>
          <h2 className="teQuiero">🌸 Te amo 🌸</h2>
          <p className="subtitulo">Te amo Yess, te amo a ti, completa con lo bueno y lo malo. quieo conocerte completamente espero ser digno de acompañarte cuando estas mal, que pienses en mi cuando quieras desahogarte cuando necesites a alguien, se que te estoy pidiendo mucho pero es la verdad. te quiero a ti completa, con tu fuerza y debilidad, con tus alegrias y tristezas, con tu paz y tus problemas. Te amo espero que algún día me abras tu corazón sinceramente.</p>
          <div className="imagenes2">
            <img src={flores} alt="Flores" className="gif2" />
          </div>
          <p className="cerrar">(Te amo)</p>
        </div>
      )}

      {/* Modal Video YouTube */}
      {modalActivo === "video" && (
        <div className="modal" onClick={() => setModalActivo(null)}>
          <h2 className="teQuiero">El segundo día 🎥</h2>
          <p className="subtitulo">Esta canción me recuerda a ti, no solo por la letra sino porque la cantaste en el karaoke
            cuando me dijiste que te gustaba ha ash. Te respondí "Si escoges una cancion la canto contigo" y en ese momento el tiempo se detuvo, las demas personas presentes desaparecierón. Solo cantamos y vivimos el momento sin saber lo que pasaria despues.
          </p>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://youtube.com/embed/Qx7M4J7z3Pk"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="subtitulo">
            Agradezco a todas esas pequeñas coincidencias de la vida que me llevaron a conocerte y te agradezco por elegirme. te amo mucho.
          </p>
          <p className="cerrar">(Te amo)</p>
        </div>
      )}

      {/* Modal Segundo video*/}
      {modalActivo === "video_amor" && (
        <div className="modal" onClick={() => setModalActivo(null)}>
          <h2 className="teQuiero">Para ti amor</h2>
          <p className="subtitulo">Te dedico esta canción amor.
          </p>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://youtube.com/embed/gxHJjLq7C2U"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="cerrar">(Te amo)</p>
        </div>
      )}

      {/* Modal Texto + Imagen */}
      {modalActivo === "textoImagen" && (
        <div className="modal" onClick={() => setModalActivo(null)}>
          <h2 className="teQuiero">Perdón amor ✨</h2>
          <p className="subtitulo">
            Quiero decirte algo con calma, porque siento que el lunes mi ansiedad habló más fuerte que yo.

            Perdón por cómo manejé todo eso. No quiero que cargues con una culpa que no te corresponde. Mi ansiedad es algo que estoy aprendiendo a entender y a manejar, y sé que ese día no lo hice bien. Hubo cosas que me removieron y reaccioné desde el miedo, no desde el cariño que te tengo.

            También quiero que sepas algo muy importante: no creo que hayas hecho algo "mal". Hubo momentos que me dolieron, sí, pero eso no borra todo lo bueno que eres ni cambia lo que siento por ti.

            Quiero estar a tu lado de una forma distinta. He notado que hay días en que no estás bien, aunque no lo digas, y quiero que sepas que está bien no estar bien. No espero que siempre tengas una sonrisa, ni que siempre puedas explicar lo que sientes.

            Sé que hay un muro que a veces levantas antes de contar lo que pasa por tu cabeza. No voy a intentar romperlo. Voy a esperar con paciencia el día en que tú quieras abrir esa puerta. Y cuando llegue ese momento, no quiero prometerte soluciones ni arreglarte la vida; solo quiero escucharte, acompañarte y que sientas que no estás sola con todo eso.

            Nunca dudes de que me gustas. Me gustas de una forma que a veces ni siquiera sé explicar con palabras. Hay cosas tuyas que descubro cada día y que hacen que te admire y te quiera más: tu fuerza, tu forma de ser, tu ternura, incluso esas partes que intentas esconder cuando estás pasando un mal momento.

            No te escribo esto para que cargues con mis sentimientos, ni para pedirte nada a cambio. Solo quería que supieras que lamento cómo actué cuando mi ansiedad me ganó, y que quiero aprender a quererte de una manera que te haga sentir segura, no responsable de mis miedos.

            Te quiero mucho. Y gracias por seguir aquí.
          </p>
          <div className="imagenes">
            <img src={flores} alt="Flores" className="gif" />
          </div>
          <p className="subtitulo">
            PD: Perdón por mis celos
          </p>
          <p className="cerrar">(Te amo)</p>
        </div>
      )}
    </div>
  );
}

export default App;
