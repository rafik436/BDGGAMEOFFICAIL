import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface RouterContextValue {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  navigate: () => {},
});

export function normalizePath(path: string): string {
  const [cleanPath] = path.split(/[?#]/);
  if (!cleanPath || cleanPath === '/') return '/';
  return cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      window.location.href = to;
      return;
    }

    const [pathPart, hashPart] = to.split('#');
    const targetPath = pathPart ? normalizePath(pathPart) : normalizePath(window.location.pathname);
    const fullUrl = hashPart ? `${targetPath}#${hashPart}` : targetPath;

    if (normalizePath(window.location.pathname) !== targetPath || hashPart) {
      window.history.pushState({}, '', fullUrl);
      setPathname(targetPath);
    }

    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      return;
    }
    // Let direct file endpoints like /sitemap.xml or /robots.txt load natively
    if (to === '/sitemap.xml' || to === '/robots.txt') {
      return;
    }
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
