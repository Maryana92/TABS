import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const tabs = props.children.map(element => {
      return {
        title: element.props.title,
        text: element.props.children
      };
    });
    this.state = {
      tabs,
      currentTab: tabs[0]
    };
  }
  onHandleChange(currentTab) {
    this.setState({ currentTab: currentTab });
    console.log(currentTab.title, currentTab.text);
  }

  render() {
    return (
      <div>
        <div className="tab">
          {this.state.tabs.map(tab => {
            return (
              <button
                className="tablinks"
                key={tab.title}
                onClick={() => this.onHandleChange(tab)}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        <p className="tabcontent">{this.state.currentTab.text}</p>
      </div>
    );
  }
}
export default Tabs;
