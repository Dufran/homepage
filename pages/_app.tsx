import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <meta name="description" content="Oleksandr Korol homepage" />
        <meta name="author" content="Oleksandr Korol" />
        <meta name="author" content="dufran" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Oleksandr Korol" />
        <meta name="og:title" content="Oleksandr Korol" />
        <meta property="og:type" content="website" />
        <title>Oleksandr Korol - Homepage</title>
        <title>Oleksandr Korol</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}