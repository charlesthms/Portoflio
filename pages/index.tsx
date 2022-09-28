import type { GetStaticProps } from 'next';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../components/header/Header';
import WorkC from '../components/work/WorkC';
import ProjectsC from '../components/projects/Projects';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import Skills from '../components/skills/Skills';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { HeaderInfos, Project, Work, Skill } from '../typepings';
import { fetchHeader } from '../utils/fetchHeader';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchWorks } from '../utils/fetWorks';
import { fetchProjects } from '../utils/fetProjects';


type Props = {
  headerInfos: HeaderInfos;
  projects: Project[];
  works: Work[];
  skills: Skill[];
}

const Home = ({ headerInfos, projects, works, skills }: Props) => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <div>
      <ProgressBar />
      <Header headerInfos={ headerInfos }/>
      <WorkC works={ works } />
      <ProjectsC projects={ projects }/>
      <Skills skills={ skills }/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {

  const headerInfos: HeaderInfos = await fetchHeader();
  const projects: Project[] = await fetchProjects();
  const works: Work[] = await fetchWorks();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      headerInfos,
      projects,
      works,
      skills,
    },
    revalidate: 100,
  };
};