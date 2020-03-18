import styled from 'styled-components';
import BackgroundImg from '../assets/img/Background.jpg';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: "#E8EEF1";
  color: black;
`;

//Header

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 0 20px;
  width: 100%;
  background-color: #057dcd;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

//Login Component

export const LoginWrapper = styled.div`
  background-color: "#E8EEF1";
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  border: 1px solid black;
  h1 {
    width: 100%;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  > div {
    margin: auto;
    width: 45%;
    display: flex;
    justify-content: center;
    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 5%;
      padding-bottom: 5%;
    }
    > div {
      > span {
        text-align: center;
        padding: 5%;
        display: flex;
      }
      > h1 {
        padding: 5%;
        margin: auto;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  h2 {
    width: 100%;
    text-align:center;
  }
  > div {
    > div {
      > input {
        margin:5% 0%;
       }
    }
    }
  }
`;

export const LoginRegisterButton = styled.button`
width: 100%;
  margin: 5% 0%;
  padding: 5% 0%;
  border: 1px solid white;
  }
`;

//Footer

export const FooterWrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background-color: rgba(0, 22, 46, 0.5);
  width: 100%;
  /* margin-top: 5%; */
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

export const ContactInfo = styled.div`
  width: 45%;
  margin: auto;
  > p {
    text-align: center;
  }
  @media (max-width: 600px) {
    width: auto;
  }
`;

export const SocialFollow = styled.div`
  width: 45%;
  margin: auto;
  display: flex;
  padding: 5%;
  flex-wrap: wrap;
  justify-content: space-around;
  > div {
    width: 100%;
  }
`;
export const SocialIcon = styled.a`
  padding: 3%;
  &:hover {
    color: aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

//Register

export const RegisterButton = styled.button`
  margin: 5% 0%;
  border: 1px solid white;
  }
`;

export const RegisterWrapper = styled.div`
  background-color: rgba(0, 22, 46, 0.5);
  color: white;
  min-height: 50vh;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  > div {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-content: center;
    > h1 {
      padding: 5%;
      margin: auto;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 5%;
      padding-bottom: 5%;
    }
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  > div {
    > div {
      > input {
        margin:1% 0%;
       }
    }
    }
  }
`;