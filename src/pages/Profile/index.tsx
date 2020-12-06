import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
  return (
  <Container>
    <Main>
      <LeftSide>
        <ProfileData
          username={'3liasallex'}
          name={'Elias Alexandre'}
          avatarURL={'https://avatars0.githubusercontent.com/u/35645590?v=4'}
          followers={333}
          following={103}
          company={'Genesys system'}
          location={'São paulo, Brazil'}
          email={'elias.garcia.alexandr@gmail.com'}
          blog={'linkedin.com/in/eliasallex'}
        />
      </LeftSide>

      <RightSide></RightSide>
    </Main>
  </Container>
  );
}

export default Profile;