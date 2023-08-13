import { useNavigate, useParams } from '@remix-run/react';
import { Lead, Project } from '~/components';

export default function Index() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  if (!projectId) {
    navigate('/projects');
    return null;
  }

  return (
    <>
      <Lead bgOnly={true} />
      <Project id={projectId} />
    </>
  );
}
