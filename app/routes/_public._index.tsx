import { json } from '@remix-run/cloudflare';
import { useLoaderData, useMatches } from '@remix-run/react';
import { About, Education, Experience, Lead, Skills } from '~/components';
import { data } from '~/data/portfolio';

export const loader = async () => {
  const { about, experience, education, skills } = data;
  return json({
    about,
    experience,
    education,
    technologies: skills
      ?.map((skillId) => data.technologies.find((technology) => skillId === technology.id) ?? null)
      .filter((f) => f !== null),
  });
};

export default function Index() {
  const { about, experience, education, technologies } = useLoaderData<typeof loader>();
  const [{ data: rootData }] = useMatches();
  const darkMode = rootData.darkMode;

  return (
    <>
      <Lead about={about} />
      <About about={about} />
      <Experience experience={experience} darkMode={darkMode === 'enabled'} />
      <Education education={education} />
      <Skills technologies={technologies} />
    </>
  );
}
