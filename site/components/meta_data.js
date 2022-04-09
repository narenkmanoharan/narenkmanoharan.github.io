import DEFAULT_CONFIG from '../config/default_config';

export function MetaData() {
  const description = `${DEFAULT_CONFIG.author}`;
  const imageUrl = `${DEFAULT_CONFIG.baseUrl}${DEFAULT_CONFIG.siteImageUrl}`;

  return (
    <>
      <meta name="description" content={ description } />
      
      <meta property="og:title" content={ DEFAULT_CONFIG.author } />
      <meta property="og:description" content={ description } />
      <meta property="og:image" content={ imageUrl } />
      <meta property="og:url" content={ DEFAULT_CONFIG.baseUrl } />
      <meta property="og:site_name" content={ DEFAULT_CONFIG.author } />

      <meta name="twitter:creator" content={ `@${DEFAULT_CONFIG.authorTwitterHandle}` } />
    </>
  )
}

export function ArticleMeta({ article }) {
  const publishedDate = (new Date(article.date)).toDateString();
  const extendedTitle = `${article.title} by ${article.author} | ${publishedDate}`;
  const imageUrl = `${DEFAULT_CONFIG.baseUrl}${DEFAULT_CONFIG.siteImageUrl}`;

  return (
    <>  
      <title>{ extendedTitle }</title>
      <meta name="title" content={ extendedTitle } />
      <meta name="description" content={ article.description } />

      <meta property="og:title" content={ article.title } />
      <meta property="og:description" content={ article.description } />
      <meta property="og:image" content={ imageUrl } />
      <meta property="og:url" content={ `${DEFAULT_CONFIG.baseUrl}/blog/${ article.id }` } />
      <meta property="og:site_name" content={ DEFAULT_CONFIG.author } />

      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={ publishedDate } />
      <meta property="article:author" content={ article.author } />
      <meta property="article:tag" content={ article.tags } />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={ article.title } />
      <meta name="twitter:description" content={ article.description } />
      <meta name="twitter:creator" content={ `@${DEFAULT_CONFIG.authorTwitterHandle}` } />
      <meta name="twitter:image" content={ imageUrl } />
      <meta name="twitter:image:alt" content={ article.title } />
      <meta name="twitter:label1" value="Reading time" />
      <meta name="twitter:data1" value={ `${article.readingTime} min read` } />

      <meta name="robots" content="index,follow,max-image-preview:large" />
    </>
  );
}
