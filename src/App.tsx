import { RouterProvider, useRouter } from './lib/router';
import { Layout } from './components/Layout';
import { GUIDE_MAP } from './data/guides';
import { BLOG_MAP } from './data/blogs';
import { HomePage } from './pages/HomePage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import {
  AboutPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsPage,
  DisclaimerPage,
} from './pages/InstitutionalPages';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';

function RouteView() {
  const { pathname } = useRouter();

  if (pathname === '/') {
    return <HomePage />;
  }

  // 7 Individual SEO Pages
  if (GUIDE_MAP[pathname]) {
    return <GuideDetailPage guide={GUIDE_MAP[pathname]} />;
  }

  // Blog Directory & 10 Blog Articles
  if (pathname === '/blog/') {
    return <BlogIndexPage />;
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
    const article = BLOG_MAP[slug];
    if (article) {
      return <BlogArticlePage article={article} />;
    }
    return <NotFoundPage />;
  }

  // Institutional, Legal & Sitemap Pages
  if (pathname === '/about/') return <AboutPage />;
  if (pathname === '/contact/') return <ContactPage />;
  if (pathname === '/privacy-policy/') return <PrivacyPolicyPage />;
  if (pathname === '/terms/') return <TermsPage />;
  if (pathname === '/disclaimer/') return <DisclaimerPage />;
  if (pathname === '/sitemap/') return <SitemapPage />;

  return <NotFoundPage />;
}

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <RouteView />
      </Layout>
    </RouterProvider>
  );
}
