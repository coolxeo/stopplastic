import React from "react";
import Section from "./../Section";
import WhyStopPlastic from "./../WhyStopPlastic";
import Contact from "./../Contact";
import "./styles.scss";

function ContactSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="ContactSection__container container">
        <WhyStopPlastic
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Contact
          parentColor={props.color}
          showNameField={props.showNameField}
          buttonText={props.buttonText}
        />
      </div>
    </Section>
  );
}

export default ContactSection;
