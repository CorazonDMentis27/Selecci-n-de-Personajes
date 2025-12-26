import videoFondo from "../assets//media/portadaseccion.mp4";
import "./SeccionPrincipal.css";


export default function SeccionPrincipal() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={videoFondo}  // <-- cambia por tu video
        autoPlay
        muted
        loop
      ></video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>CORAZA DE GUERRA</h1>
      </div>
    </section>
  );
}
