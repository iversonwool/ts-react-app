import React from "react";
import Header from "./Header";

interface ILoading {
  loading: boolean;
}

function LoadingHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<P & ILoading> {
    render() {
      const { loading, ...rest } = this.props;
      return loading ? (
        <div>Loading...</div>
      ) : (
        <WrappedComponent {...(rest as unknown as P)} />
      );
    }
  };
}

export default LoadingHOC(Header);
