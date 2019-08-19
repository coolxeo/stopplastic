import React from "react";
import CenteredColumns from "./../CenteredColumns";
import "./styles.scss";
let MoneyButton = require('@moneybutton/react-money-button').default


const options = {
  headers:{'key': '1FVmmYXUCzFHq8RCa7epbk13aLapA2931i'}
};

class ContentCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.fillContentCards()
  }

  fillContentCards() {
    fetch("https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LnMyIjogInN0b3BwbGFzdGljLmFwcCIKICAgIH0sCiAgICAibGltaXQiOiAxMAogIH0KfQ==", options)
    .then(res => res.json())
    .then((json) => {
      const unconfirmed = json.u.map(item => {
        return this.processItem(item);
      });

      const confirmed = json.c.map(item => {
        return this.processItem(item);
      });

      const items = [...unconfirmed, ...confirmed];
      const filteredItems = items.filter((item) => {
        return (item.image && item.title && item.description)
      });

      this.setState({items: filteredItems})
    });
  }

  processItem = (item) => {
    const out = item.out[0];
    return {
      image: out.s3,
      title: out.s4,
      description: out.s5,
      url: out.s6,
      to: out.s7
    };
  }

  render() {
    console.log(this.state.items);
    
    return (
      <CenteredColumns>
        {this.state.items.map((item, index) => (
          <div
            className="column is-half-tablet is-one-quarter-desktop"
            key={index}
          >
            <div className="ContentCards__card card is-flex">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={item.image} alt={item.title} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="money-button"
                    data-to="coolxeo@gmail.com"
                    data-amount="0.05"
                    data-currency="USD"
                  ></div>
                  {item.url && <p><a className="" href={item.url} target="blank">Project Link</a></p> }
                  {item.to && <MoneyButton to={item.to} amount="0.01" currency="USD" /> }
                </div>
              </div>
            </div>
          </div>
        ))}
      </CenteredColumns>
    );
  ;}
}

export default ContentCards;
