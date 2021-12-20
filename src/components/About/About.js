import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="1.jpg" />
        </div>
        



        <p>
        Hello, I am Ngugidavid, Proffesional Sofware Developer skilled in Python,C++, Java, PHP, React and Angular Js, also skilled in SQL, cassandra and MongoDB databases
          {/* <a className="about__link" href="https://innovationnetworks.com">
            Innovation Networks
          </a> */}
          {/* {' '}  */}
          <br></br>
  
          { <br />}Am well equiped with latest trends and upcoming technologies in software development, Sharpening my skills regulary to enhance building best dynamic softwares with latest technologies intergrated <br /> 
         <br></br> I also have basic skills in Networking(Components installation, troubleshooting),Graphics design, Computer repair and maintenance,3D animation and production. <br></br>
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">

        <Quote>
          <p>
            “Sky is no limit, we made the moonlander software.“
          </p>
        </Quote>
        <Quote>
          <p>“Code runs the world“</p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
