import React from 'react';

import styled from 'styled-components';

// import profile image
import profileImageUrl from '../../../Images/profile.jpeg';

// style
import { SlideUpAnimation } from '../../../Styles/Animation';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  transition: 20s;
`;
const Profile = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: url(${profileImageUrl});
  background-size: cover;
`;
const ProfileDesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 228, 156, 0.3);
`;
const ProfileDes = styled.span`
  font-size: 24px;
`;

export default function ProfileImage(props) {
  return (
    <React.Fragment>
      <SlideUpAnimation>
        <ProfileContainer>
          <Profile />
          <ProfileDesContainer>
            <ProfileDes>test</ProfileDes>
          </ProfileDesContainer>
        </ProfileContainer>
      </SlideUpAnimation>
    </React.Fragment>
  );
}
