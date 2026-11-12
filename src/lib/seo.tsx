import { useEffect } from 'react';

export const SITE_ORIGIN = 'https://bdggameofficial.net';
export const SITE_NAME = 'BDG Game Official';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqEntry[];
  article?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    imageUrl?: string;
  };
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageSeo(config: SeoConfig) {
  useEffect(() => {
    const canonicalUrl = `${SITE_ORIGIN}${config.canonicalPath}`;
    document.title = config.title;

    upsertMeta('name', 'description', config.description);
    upsertMeta('name', 'robots', config.noindex ? 'noindex, follow' : 'index, follow');
    upsertCanonical(canonicalUrl);

    upsertMeta('property', 'og:type', config.ogType ?? 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', config.title);
    upsertMeta('property', 'og:description', config.description);
    upsertMeta('property', 'og:url', canonicalUrl);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', config.title);
    upsertMeta('name', 'twitter:description', config.description);

    // Build Schema.org structured data graph
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#organization`,
        name: SITE_NAME,
        url: `${SITE_ORIGIN}/`,
        description:
          'Independent informational and educational resource covering BDG Game navigation, gameplay mechanics, and digital platform safety.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: config.title,
        description: config.description,
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      },
    ];

    if (config.breadcrumbs && config.breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: config.breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: `${SITE_ORIGIN}${item.path}`,
        })),
      });
    }

    if (config.article) {
      graph.push({
        '@type': 'Article',
        headline: config.article.headline,
        description: config.description,
        datePublished: config.article.datePublished,
        dateModified: config.article.dateModified,
        mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
        author: {
          '@type': 'Organization',
          name: config.article.authorName,
        },
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      });
    }

    if (config.faqs && config.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: config.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    let script = document.getElementById('bdg-seo-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'bdg-seo-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [
    config.title,
    config.description,
    config.canonicalPath,
    config.ogType,
    config.noindex,
    config.breadcrumbs,
    config.faqs,
    config.article,
  ]);
}
