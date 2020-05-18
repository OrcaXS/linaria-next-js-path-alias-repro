import React from 'react';
import Head from 'next/head';
import { styled } from 'linaria/react';

import { colors } from '../colors'; // works
// import { colors } from 'colors'; // doesn't work
// import { colors } from '~/colors'; // doesn't work either

import Component from '../component'; // works
// import Component from 'component'; // works
// import Component from '~/component'; // works

const Box = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  color: ${colors.white};
`;

export default () => {
  return (
    <React.Fragment>
      <Head>
        <title>With Linaria</title>
      </Head>
      <Box>Zero runtime CSS in JS</Box>
      <Component></Component>
    </React.Fragment>
  );
}
