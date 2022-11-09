import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from "react-accessible-accordion";

const Forecast = ({ data }) => {


    return (
        <>
            <label className="title">Daily</label>

            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Hello
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );

};

export default Forecast;