import React from "react";
import Section from "./../Section";
import WhyStopPlastic from "./../WhyStopPlastic";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function CtaSection2(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage="/adventure-camp-camper-2398220.jpg"
      backgroundImageOpacity={0.8}
    >
      <div className="container">
        <div className="columns is-vcentered has-text-centered-mobile is-centered is-variable is-8">
          <div className="column is-narrow">
            <WhyStopPlastic
              title={props.title}
              subtitle={props.subtitle}
              size={3}
            />
          </div>
          <div className="column is-narrow">
            <SectionButton
              parentColor={props.color}
              size="medium"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </SectionButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection2;
