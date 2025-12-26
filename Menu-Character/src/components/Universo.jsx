import './Universo.css';
import UniversoImage from '../assets/images/15.jpg';

export default function Universo() {
    return (
        <section className="Ochoku">
            <div className="Universo-content">
                <img src={UniversoImage} alt="UniverseCoraza"/>
                <div className="Universo-text">
                    <h2>Explora el Universo de Coraza</h2>
                </div>
            </div>  
        </section>
    );
}