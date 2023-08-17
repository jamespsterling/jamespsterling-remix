import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { data } from '~/data/portfolio';
import Loading from '~/components/icons/Loading';

export default function Image({ image }: { image: (typeof data.projects)[0]['image'] }) {
  const [loading, setLoading] = useState(true);
  const imageExtension = (src: string) => src.split('.').pop();

  return (
    <>
      {imageExtension(image.src) === 'svg' ? (
        <div className="svg-wrapper">
          <ReactSVG src={image.src} />
        </div>
      ) : (
        <>
          <img
            src={image.src}
            style={{
              height: loading ? 0 : 'auto',
              opacity: loading ? 0 : 1,
              transition: '0.5s all',
            }}
            alt={`${image.src} image`}
            onLoad={() => setLoading(false)}
            loading="lazy"
          />
          {loading && (
            <div className="loading">
              <Loading />
            </div>
          )}
        </>
      )}
    </>
  );
}
