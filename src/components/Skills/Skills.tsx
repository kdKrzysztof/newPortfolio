import { Typography } from '@mui/material';

import TechStack from 'data/techStack';

import { ImageContainer, ImageContent, SkillsContent } from './Skills.styles';
import { useAppSelector } from 'src/hooks/reduxHooks';

const Skills = () => {
  const themeColor = useAppSelector((state) => state.theme);
  
  return (
    <SkillsContent>
      <Typography variant="h4" color="primary">
        My tech stack
      </Typography>
      <Typography variant="subtitle1" mb={2}>
        These are the technologies I've worked with:
      </Typography>
      <ImageContainer>
        {TechStack.map((el) => {
          return (
            <ImageContent key={el[0]} themeColor={themeColor}>
              <img src={el[1]}></img>
              <Typography variant="subtitle2">{el[0]}</Typography>
            </ImageContent>
          );
        })}
      </ImageContainer>
    </SkillsContent>
  );
};

export default Skills;
