import React from "react";
import Section from "./../Section";
import WhyStopPlastic from "./../WhyStopPlastic";
import ChangePass from "./../ChangePass";
import "./styles.scss";

function ChangePassSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <WhyStopPlastic
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <ChangePass buttonText={props.buttonText} parentColor={props.color} />
      </div>
    </Section>
  );
}

export default ChangePassSection;
