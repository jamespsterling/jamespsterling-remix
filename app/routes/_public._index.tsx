import { About, Education, Experience, Lead, Skills } from '~/components';

export default function Index() {
  const darkMode = 'enabled';

  return (
    <>
      <Lead />
      <About />
      <Experience darkMode={darkMode === 'enabled'} />
      <Education />
      <Skills />
    </>
  );
}
