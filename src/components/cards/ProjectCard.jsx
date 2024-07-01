import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
width: 330px;
height: 490px;
background-color: ${({theme}) => theme.card};
cursor: pointer;
border-radius: 10px;
box-shadow: 0 0px 12px rgba(0, 0, 0, 0.4);
overflow: hidden;
padding:26px 20px;
display: flex;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;
& :hover{
transform: translateY(-10px);
box-shadow: 0 0px 50px 4px rgba(0, 0, 0, 0.6);
filter: brightness(1.1);
}
`;
const Image = styled.img`
width: 100%;
height: 180px;
backrgound-color: ${({theme}) => theme.white};
border-radius: 10px;
box-shadow: 0 0px 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
width: 100%;
display: flex;
gap: 8px;
flex-wrap: wrap;
margin-top: 4px;
`;
const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0px;
flex-wrap: wrap;
padding: 0px 2px;`;
const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${({theme}) => theme.text_secondary};
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;
const Date = styled.div`
font-size: 12px;
font-weight: 400;
margin-left: 2px;
color: ${({theme}) => theme.text_secondary+80};
@media only screen and (max-width: 768px) {
font-size: 10px;
}
`;
const Description = styled.div`
font-weight: 400;
color: ${({theme}) => theme.text_secondary+99};
overflow: hidden;
margin-top: 8px;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;
const Members = styled.div`
display: flex;
align-items: center;
padding-left: 10px;
`;
const Avatar = styled.img`
width: 38px;
height: 38px;
border-radius: 50%;
background-color: 2px solid ${({theme}) => theme.white};  
box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
border: 3px solid ${({theme}) => theme.card};
`;
const Button = styled.a`
color: ${({theme}) => theme.text_primary};
text-decoration: none;
font-weight: 600;
text-align: center;
`;



const ProjectCard = ({project}) => {
  return (
    <Card>
        <Image src={project.Image} />
        <Tags></Tags>
        <Details>
            <Title>{project.Title}</Title>
            <Date>{project.Date}  </Date>
            <Description>{project.Desc}</Description>
        </Details>
        <Members>
            {project.member?.map((member) => (
                <Avatar src={member.img} />
                ))}
        </Members>
        <Button href={project.github} target="_blank">
            View Code
        </Button>
    </Card>

  )
}

export default ProjectCard;