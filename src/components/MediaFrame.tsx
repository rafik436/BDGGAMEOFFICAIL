import { useState } from 'react';
import { Shield } from 'lucide-react';
import type { MediaAsset } from '../data/media';

interface MediaFrameProps {
  media: MediaAsset;
  priority?: boolean;
  className?: string;
}

export function MediaFrame({ media, priority = false, className = '' }: MediaFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`overflow-hidden rounded-xl border border-white/10 bg-[#121318] ${className}`}>
      <div className={media.aspect === '16/9' ? 'aspect-video w-full' : 'aspect-[4/3] w-full'}>
        {!failed ? (
          <img
            src={media.src}
            alt={media.alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#14151B] via-[#0D0E12] to-[#1A180D] p-6 text-center">
            <Shield className="h-8 w-8 text-[#FACC15]" aria-hidden="true" />
            <p className="max-w-xs text-xs font-medium text-zinc-300">{media.alt}</p>
          </div>
        )}
      </div>
      <figcaption className="border-t border-white/10 bg-[#0E0F13] px-4 py-2.5 text-xs text-zinc-400">
        {media.caption}
      </figcaption>
    </figure>
  );
}
