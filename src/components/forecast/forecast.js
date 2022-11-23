import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = ['Segunda - feira', 'Terça - feira', 'Quarta - feira', 'Quinta - feira', 'Sexta - feira', 'Sábado', 'Domingo'];

const Forecast = ({ data }) => {
    const dayInaWeek = new Date().getDay();

    const forecastDays = WEEK_DAYS.slice(dayInaWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInaWeek));
    // console.log(forecastDays);
    var dataDays = [];
    dataDays.push(data.list[0]);

    for (var i = 0; i < data.list.length; i++) {
        var last = dataDays.length - 1;
        if (data.list[i].dt_txt.slice(0, 10) !== dataDays[last].dt_txt.slice(0, 10)) {
            dataDays.push(data.list[i]);
        }
    }

    console.log(dataDays)

    return (
        <>
            <label className="title">Daily</label>

            <Accordion allowZeroExpanded>
                {dataDays.map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                                <div className="dailyItem">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">
                                        {forecastDays[idx]} - {dataDays[idx].dt_txt.slice(0, 10)}
                                    </label>

                                    <label className="description">
                                        {item.weather[0].description}
                                    </label>

                                    <label className="min-max">
                                        {item.main.temp_max}ºC/ {item.main.temp_min}ºC
                                    </label>


                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressão atmosférica</label>
                                    <label>{Math.round(item.main.pressure)}</label>

                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Press</label>
                                    <label>{Math.round(item.main.pressure)}</label>

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