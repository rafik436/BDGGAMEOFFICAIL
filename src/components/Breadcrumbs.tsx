import { ChevronRight } from 'lucide-react';
import { Link } from '../lib/router';
import type { BreadcrumbItem } from '../lib/seo';

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-zinc-400">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={item.path} className="inline-flex items-center gap-1.5">
            {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />}
            {isLast ? (
              <span aria-current="page" className="font-medium text-[#FACC15]">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="transition-colors hover:text-white">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
