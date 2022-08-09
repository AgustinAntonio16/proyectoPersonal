import styled from "styled-components";

export const Section = styled.section`
position: relative;
display: flex;

@media screen and (max-width: 768px) {
  position: relative;
  flex-direction: column;
  }
  }
`;

export const SectionPie = styled.section`
position: relative;

display: flex;

@media screen and (max-width: 768px) {
  position: relative;
  flex-direction: column;
  }
  }
`;

export const SectionPortada = styled.section`
height: 55vh;
margin-bottom: 10px;

@media screen and (max-width: 1000px) {
height: 20vh;
margin-bottom: 10px;
  }
  }
`;

export const SectionAgua = styled.section`
    display:flex;
    width: 100%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;

@media screen and (max-width: 768px) {
  display:flex;
  flex-direction: column-reverse;
    margin: auto;
   
    
    
    
  }
  }
`;

export const SectionAgua1 = styled.section`
    display:flex;
    width: 100%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap; 

@media screen and (max-width: 768px) {
  position: relative;
  flex-direction: column;
  transition: 0.4s;
    
  }
  }
`;

export const Div = styled.div`
position: relative;
display: flex; 
    width: 45%;
    margin-bottom:50px;
  @media screen and (max-width: 768px) {
  flex-direction: column;
  width: 90%;
  margin-bottom:50px;
  margin: auto;
  }
  }
`;

export const DivMosaicos = styled.div`
position: relative;
display: flex; 
    width: 48vw;
    height: 50vh;
    margin-bottom: 10px;
    border-radius: 10vw;
@media screen and (max-width: 768px) {
  flex-direction: column;
  width: 70%;
  height:40vh;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 15vw;
  }
  }
`;

export const DivMaster = styled.div`
position: relative;
display: flex; 
    width: 90%;
   
    margin: auto;
    

@media screen and (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  }
  }
`;

export const DivFooter = styled.div`
position: relative;
display: flex; 
    width: 100%;
    height:auto;
    margin-bottom:0px;

@media screen and (max-width: 768px) {
  flex-direction: column;
  background-color: #F5F5F5
    width: 100%;
    height:10em;
    margin-bottom:0px;
  }
  }
`;

export const Img1 = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
  margin: auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    object-fit: cover;
    display: block;
    margin: auto;
    justify-content: center;
  }
`;

export const Img2 = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
  display: block;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Img3 = styled.img`
  width: 22%;
  display: block;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 25%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 30vh;
  margin-bottom: 0;
  background-color: #f5f5f5;
  display: block;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
  }
`;
