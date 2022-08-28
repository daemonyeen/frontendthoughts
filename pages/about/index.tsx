import { NextPage } from 'next';
import TopBar from '../../components/TopBar';

const About: NextPage = () => {
  return (
    <>
      <TopBar></TopBar>
      <div className="typography mt-8">
        <h1>Привет, я Максим!</h1>

        <p>asdf</p>
      </div>
    </>
  );
};

export default About;
