import React from "react";

class TimelineJobEntry extends React.PureComponent {
  state = {
    dateToOneSite: false
  };
  handleResize = () => {
    if (window.innerWidth <= 700) this.setState({ dateToOneSite: true });
    else this.setState({ dateToOneSite: false });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    const reversed = this.state.dateToOneSite || this.props.reverseDate;
    const { projects, description, icon, title, where, dateRange } = this.props;
    let projectsList = null;
    if (projects)
      projectsList = projects.map(project => {
        return <li>{project}</li>;
      });

    return (
      <div icon={icon} className="time-container">
        <span className="time-header">
          {title}
          <span className="monkey">{` @ `}</span>
          {where}
        </span>
        {/* description */}
        <span className="time-text">{description}</span>
        {/* projects */}
        {projects ? (
          <span className="time-projects-header">
            Projects worth to mention :
          </span>
        ) : null}
        {projects ? <ul className="time-projects">{projectsList}</ul> : null}
        {/* date */}
        <span className={`${reversed ? "time-date-reversed" : "time-date"}`}>
          {dateRange}
        </span>
      </div>
    );
  }
}

export default TimelineJobEntry;
