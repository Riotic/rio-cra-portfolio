import "./hero.scss"

const Hero = () => {
    return (
        <div className="hero">
            
            <h2>RIO CLEMENT</h2>
            <h1>Développeur Web fullstack</h1>
            <div className="buttons">
                <button>Voir mes derniers projets</button>
                <button>Contactez moi</button>
            </div>
            <img src="/scroll.png" alt=""/>
            <div className="imageContainer">
                <img src="/hero2.png" alt=""/>
            </div>
        </div>
        
    )
}

export default Hero