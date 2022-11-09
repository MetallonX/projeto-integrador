import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">

            {/* Aqui a criamos a parte de cima da box, onde informará a cidade, a descrição do tempo e o ícone do tempo*/}
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description.toUpperCase()}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>


            {/* Aqui a criamos a parte de baixo da box, onde informará em detalhe os dados climáticos */}

            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}ºC</p>

                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Detalhes</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Sensação térmica</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}ºC</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Máxima</span>
                        <span className="parameter-value">{Math.round(data.main.temp_max)}ºC</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Mínima</span>
                        <span className="parameter-value">{Math.round(data.main.temp_min)}ºC</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Ventos</span>
                        <span className="parameter-value">{Math.round(data.wind.speed)} km/h</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Umidade</span>
                        <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
                    </div>




                </div>
            </div>

        </div>
    );
};

export default CurrentWeather;