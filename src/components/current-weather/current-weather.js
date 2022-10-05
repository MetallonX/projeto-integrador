import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">

            {/* Aqui a criamos a parte de cima da box, onde informará a cidade, a descrição do tempo e o ícone do tempo*/}
            <div className="top">
                <div>
                    <p className="city">Brazil</p>
                    <p className="weather-description">Raining</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>


            {/* Aqui a criamos a parte de baixo da box, onde informará em detalhe os dados climáticos */}

            <div className="bottom">
                <p className="temperature">18ºC</p>

                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">16ºC</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 km/h</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Humity</span>
                        <span className="parameter-value">15%</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default CurrentWeather;