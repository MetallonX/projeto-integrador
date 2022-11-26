import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = ['Segunda - feira', 'Terça - feira', 'Quarta - feira', 'Quinta - feira', 'Sexta - feira', 'Sábado', 'Domingo'];

const Forecast = ({ data }) => {
    const dayInaWeek = new Date().getDay();
    const todayDate = new Date().getDate();
    const forecastDays = WEEK_DAYS.slice(dayInaWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInaWeek));
    // console.log(forecastDays);
    var dataDays = [];

    dataDays.push(data.list[0]);
    for (var i = 0; i < data.list.length; i++) {
        var last = dataDays.length - 1;
        if (data.list[i].dt_txt.slice(0, 10) !== dataDays[last].dt_txt.slice(0, 10)) {
            dataDays.push(data.list[i]);
        }

        // if (data.list[i].dt_txt.slice(8, 10) !== todayDate) {
        //     dataDays.push(data.list[i]);
        // }
    }

    if (dataDays[0].dt_txt.slice(8, 10) == todayDate) {
        dataDays.shift();
    }

    return (
        <>
            <div className="title">Previsão</div>

            <Accordion allowZeroExpanded>
                {dataDays.map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                                <div className="dailyItem">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">
                                        {forecastDays[idx]} | {`${dataDays[idx].dt_txt.slice(8, 10)}`} / {`${dataDays[idx].dt_txt.slice(5, 7)}`} / {`${dataDays[idx].dt_txt.slice(0, 4)}`}
                                    </label>

                                    <label className="description">
                                        {item.weather[0].description.toUpperCase()}
                                    </label>

                                    <label className="min-max">
                                        {Math.round((item.main.temp_max + item.main.temp_min) / 2)}ºC
                                    </label>


                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">

                                <div className="daily-details-grid-item">
                                    <label>Temperatura máxima</label>
                                    <label>{Math.round(item.main.temp_max)}ºC</label>

                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Temperatura mínima</label>
                                    <label>{Math.round(item.main.temp_min)}ºC</label>

                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sensação Térmica</label>
                                    <label>{Math.round(item.main.feels_like)}ºC</label>

                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Pressão atmosférica</label>
                                    <label>{Math.round(item.main.pressure)} hPa</label>

                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Humidade do ar</label>
                                    <label>{Math.round(item.main.humidity)}%</label>

                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Velocidade dos ventos</label>
                                    <label>{Math.round(item.wind.speed)} m/s</label>

                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Nuvens</label>
                                    <label>{Math.round(item.clouds.all)}</label>

                                </div>


                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );

};

export default Forecast;
