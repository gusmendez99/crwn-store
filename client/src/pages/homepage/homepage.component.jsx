import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  //if 'throw Error', we can see ErrorBoundary page...;

  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  ); 
}

export default HomePage;
