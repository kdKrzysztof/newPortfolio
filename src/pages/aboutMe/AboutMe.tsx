import { Typography } from '@mui/material';

import { Skills } from 'components';

import { AboutMeContent, AboutMeInnerContainer, AboutMeMainContainer } from './AboutMe.styles';

const AboutMe = () => {
  return (
    <AboutMeMainContainer>
      <AboutMeInnerContainer>
        <AboutMeContent>
          <Typography variant="h4" color="primary" mb={1}>
            About me
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos pariatur eum,
            recusandae labore odit, repellendus, quis veritatis et blanditiis doloremque? Rem
            expedita laboriosam cupiditate, quas a illum unde iusto! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odit delectus fugit blanditiis eius minus voluptas
            tempore. Voluptates sapiente provident, accusantium eaque quaerat deserunt modi sint
            fugit ea minus odio blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni, fuga sequi excepturi molestias provident sapiente blanditiis? Illum, magnam? Quod
            minus neque corrupti delectus earum sunt tenetur, ipsa temporibus aspernatur modi! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias quod, repellendus
            explicabo numquam recusandae distinctio aut ratione, nisi voluptatem officia. Magnam
            animi tenetur vero alias, dolorem corporis voluptatem qui?
          </Typography>
        </AboutMeContent>
        <Skills />
      </AboutMeInnerContainer>
    </AboutMeMainContainer>
  );
};

export default AboutMe;
