import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="code" />
      </CardIcon>
      <CardTitle>Software Development</CardTitle>
      <CardText>
        Full stack software developer majoring on both web, app and systems development. 
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="object-group" />
      </CardIcon>
      <CardTitle>System Design</CardTitle>
      <CardText>
        Proffesional software designer with eye catching software designs.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="cylinder" />
      </CardIcon>
      <CardTitle>Database Design, Deployment and management</CardTitle>
      <CardText>
        Well skilled in SQL, cassandra and MongoDB.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>NGUGI DAVID</h1>
          <p className="adjust">CREATIVE FULL STACK SOFTWARE DEVELOPER</p>
          {/* <p>SKILLED IN Python, C++, Java, Kotlin, PHP an</p> */}
          <div className="home__CTA">
            <Button className="cta" as="a" href="https://drive.google.com/file/d/1ZXPSAneThEN7QqcHXRJbBzlKe24R67vS/view?usp=sharing">
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="https://github.com/innovationnetworks-ke"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/davyvynes"
              />
              <IconLink
                label="Github 2"
                icon={['fab', 'github']}
                href="https://github.com/Drongo-1"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        My Fields <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
