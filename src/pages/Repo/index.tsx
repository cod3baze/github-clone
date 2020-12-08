import React from 'react';
import { Link } from 'react-router-dom'

import { 
  Container, Breadcrumb, 
  RepoIcon, Stats, StartIcon, 
  ForkIcon, LinkButton, GithubIcon 
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={`/3liasallex`}>
          eliasallex
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/3liasallex/youtube-content`}>
          youtube-content
        </Link>
      </Breadcrumb>

      <p>Contains all of my Youtube lessons code.</p>

      <Stats>
        <li>
          <StartIcon />
          <b>7</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>fork</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/eliasallex'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;