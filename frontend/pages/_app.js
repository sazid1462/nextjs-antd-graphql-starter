import App, { Container } from 'next/app'
import React from 'react'
import nextCookie from 'next-cookies';
import { ClientContext } from 'graphql-hooks'
import withGraphQLClient from "../utils/withGraphQLClient";
import AuthContextProvider from "../contexts/AuthContextProvider";

class CMSApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const { token, user } = nextCookie(ctx);

        const pageProps =
            Component.getInitialProps &&
            (await Component.getInitialProps(ctx));

        return {pageProps, token, user: user ? JSON.parse(user) : null}
    }

    componentDidCatch(error, _errorInfo) {
        super.componentDidCatch(error, _errorInfo);
        console.error(error, _errorInfo);
        message.error(error.message);
    }

    render() {
        const { Component, pageProps, graphQLClient, user, token } = this.props;

        return (
          <Container>
            <ClientContext.Provider value={graphQLClient}>
              <AuthContextProvider {...{user, token}}>
                <Component {...pageProps} />
              </AuthContextProvider>
            </ClientContext.Provider>
          </Container>
        )
    }
}

export default withGraphQLClient(CMSApp);
