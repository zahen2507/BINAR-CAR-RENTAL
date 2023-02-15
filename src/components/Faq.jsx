import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "../assets/css/Faq.css";

const Faq = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="faq-head">
              <h3>Frequently Asked Question</h3>
              <h4>Temukan jawaban dari pertanyaan yang sering ditanyakan!</h4>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <Accordion open={open} toggle={toggle} className="accordion">
              <div className="accordion-border">
                <AccordionItem className="accordion-item">
                  <AccordionHeader targetId="1">
                    Apa saja syarat yang dibutuhkan?
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    error accusamus, exercitationem tempora itaque sunt
                    doloribus nihil officiis dolores fugiat.
                  </AccordionBody>
                </AccordionItem>
              </div>
              <div className="accordion-border">
                <AccordionItem className="accordion-item">
                  <AccordionHeader targetId="2">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    error accusamus, exercitationem tempora itaque sunt
                    doloribus nihil officiis dolores fugiat.
                  </AccordionBody>
                </AccordionItem>
              </div>
              <div className="accordion-border">
                <AccordionItem className="accordion-item">
                  <AccordionHeader targetId="3">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    error accusamus, exercitationem tempora itaque sunt
                    doloribus nihil officiis dolores fugiat.
                  </AccordionBody>
                </AccordionItem>
              </div>
              <div className="accordion-border">
                <AccordionItem className="accordion-item">
                  <AccordionHeader targetId="4">
                    Apakah Ada biaya antar-jemput?
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    error accusamus, exercitationem tempora itaque sunt
                    doloribus nihil officiis dolores fugiat.
                  </AccordionBody>
                </AccordionItem>
              </div>
              <div className="accordion-border">
                <AccordionItem className="accordion-item">
                  <AccordionHeader targetId="5">
                    Bagaimana jika terjadi kecelakaan?
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    error accusamus, exercitationem tempora itaque sunt
                    doloribus nihil officiis dolores fugiat.
                  </AccordionBody>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
