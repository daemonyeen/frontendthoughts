import { NextPage } from 'next';
import TopBar from '../../components/TopBar';
import MainWrapper from '../../components/MainWrapper';

const About: NextPage = () => {
  return (
    <>
      <TopBar></TopBar>
      <MainWrapper>
        <div className="typography mt-8">
          <p>
            Привет, меня зовут Максим Мещеряков, и мне очень приятно, что ты посетил мой небольшой
            уголок мыслей на бескрайнем просторе всемирной сети.
          </p>
          <p>
            Я люблю разработку и самовыражение, и мой блог стал для меня возможностью совмещения
            первого и второго. Приятного чтения!
          </p>
        </div>
      </MainWrapper>
    </>
  );
};

export default About;
