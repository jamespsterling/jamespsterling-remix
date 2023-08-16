import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { About, Education, Experience, Lead, Skills } from '~/components';
import { data } from '~/data/portfolio';

export const loader = async () => {
  return json(data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const darkMode = 'enabled';

  return (
    <>
      <Lead about={data.about} />
      <About about={data.about} />
      <Experience experience={data.experience} darkMode={darkMode === 'enabled'} />
      <Education education={data.education} />
      <Skills skills={data.skills} />
    </>
  );
}
