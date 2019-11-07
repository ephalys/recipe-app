import React from 'react';
import AnimatedLoader from "react-native-animated-loader";

class LoadingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  };
  componentDidMount() {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={{ width: 250, height: 250 }}
        speed={1}
      />
    );
  };
}

export default LoadingView;