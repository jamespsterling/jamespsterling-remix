import * as articles from '../data/articles/index';

export default function Article({ component }: { component: string }) {
  const DynamicComponent = articles[component];

  return <DynamicComponent />;
}
