import './Universo.css';
import UniversoImage from '../assets/images/15.jpg';
import { use } from 'react';

export default function Universo() {
    
    
    return (
        <section className="Ochoku">
            <div className="Universo-content">
                <img src={UniversoImage} alt="UniverseCoraza"/>
                <div className="Universo-text">
                    <h2>Coraza de Guerra</h2>
                    <p>EXPLORA EL UNIVERSO</p>
                </div>
            </div>  
        </section>
    );
}