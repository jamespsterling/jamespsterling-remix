// https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
export const loader = () => {
  const robotText = `User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: https://jamespsterling.com/sitemap.xml`;

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
