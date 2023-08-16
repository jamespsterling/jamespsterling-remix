import { About } from '~/data/types';

export default function About({ about }: { about: About }) {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 text-center">
            <h2 className="heading">About Me</h2>
          </div>
          <div className="col-md-8">
            <p>{about.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
