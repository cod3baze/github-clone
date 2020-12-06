import React from 'react';

import { Container, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, LocationIcon, EmailIcon, BlogIcon } from './styles';

interface Props {
  username: string;
  name: string;
  avatarURL: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarURL,
  followers,
  following,
  company,
  location,
  email,
  blog
}) => {
  return (
    <Container>
      <Flex>
        <Avatar source={avatarURL} alt={username}/>

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>

        <Row>
          <li>
            <PeopleIcon />

            <b>{followers}</b>
            <span>followers</span>
            <span>*</span>
          </li>
          <li>
            <b>{following}</b>
            <span>following</span>
          </li>
        </Row>

        <Column>
          {company && (
            <li>
              <CompanyIcon />
              <span>{company}</span>
            </li>
          )}
          {location && (
            <li>
              <LocationIcon />
              <span>{location}</span>
            </li>
          )}
          {email && (
            <li>
              <EmailIcon />
              <span>{email}</span>
            </li>
          )}
          {blog && (
            <li>
              <BlogIcon />
              <span>{blog}</span>
            </li>
          )}
        </Column>
      </Flex>
    </Container>
  );
}

export default ProfileData;