import React from 'react';

import { 
  Container, 
  Main, LeftSide, 
  RightSide, Repos, 
  CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />

      <span className="label">Repositories</span>
      <span className="number">37</span>
    </div>
  )

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

      <RightSide>
        <Tab className="mobile">
          <TabContent />

          <span className="line"></span>
        </Tab>

        <Repos>
          <h2>Random Repos</h2>

          <div>
            {[1,2,3,4,5,6].map(n => (
              <RepoCard
                key={n}
                username={'3liasallex'}
                reponame={'youtube-content'}
                description={'Conatain all of my Youtube lessons code'}
                language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                stars={234}
                forks={78}
              />
            ))}
          </div>
        </Repos>

        <CalendarHeading>
          Random calendar
        </CalendarHeading>

        <RandomCalendar />
      </RightSide>
    </Main>
  </Container>
  );
}

export default Profile;