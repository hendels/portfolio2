import React from "react";
class Logo extends React.Component {
  state = {
    lastYpos: 0,
    minified: true
  };
  checkScroll = () => {
    if (window.pageYOffset > this.state.lastYpos)
      this.setState({ lastYpos: window.pageYOffset, minified: false });
    if (window.pageYOffset < this.state.lastYpos)
      this.setState({ lastYpos: window.pageYOffset, minified: true });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.checkScroll);
  }
  render() {
    return (
      <div className="logo">
        {this.state.minified ? <h1>H.</h1> : <h1>HRDZ</h1>}
      </div>
    );
  }
}
export default Logo;
