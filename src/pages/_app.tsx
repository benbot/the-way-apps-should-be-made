import { ApolloProvider } from "react-apollo";
import App from "next/app";
import client from "../apollo";

export default class AppWithApollo extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}
