import React from 'react';

import styled from 'styled-components';

// import profile image
import profileImageUrl from '../../../Images/profile.jpeg';

// style
import { SlideUpAnimation, MarginLeftAnimation } from '../../../Styles/Animation';

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
  margin-right: 20px;
  background-image: url(${profileImageUrl});
  background-size: cover;
`;

// Contact
const ContactMe = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
`;

// description
const ProfileDesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  /* background-color: rgba(255, 228, 156, 0.3); */
`;
const ProfileDes = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 20px;
`;

export default function ProfileImage(props) {
  return (
    <React.Fragment>
      <SlideUpAnimation style={{ animationDelay: '0.3s' }}>
        <ProfileContainer>
          <Profile />
          <ProfileDesContainer>
            <ContactMe>Contact ME</ContactMe>
            <ProfileDes>Name : Kim HyunJae</ProfileDes>
            <ProfileDes>E-mail : loma1016@gmail.com</ProfileDes>
          </ProfileDesContainer>
        </ProfileContainer>
      </SlideUpAnimation>
    </React.Fragment>
  );
}
