import heroPortalImg from '../assets/images/hero_gaming_portal_1794518723432.jpg';
import gameplayGridImg from '../assets/images/gameplay_tactical_grid_1794518724247.jpg';
import mobileSecurityImg from '../assets/images/mobile_security_device_1794518724070.jpg';
import paymentShieldImg from '../assets/images/payment_verification_shield_1794518724504.jpg';
import editorialDeskImg from '../assets/images/editorial_gaming_desk_1794518724891.jpg';

export interface MediaAsset {
  src: string;
  alt: string;
  caption: string;
  aspect: '16/9' | '4/3';
}

export const MEDIA: Record<
  'hero' | 'gameplay' | 'security' | 'payment' | 'editorial',
  MediaAsset
> = {
  hero: {
    src: heroPortalImg,
    alt: 'BDG Game Official dark command desk displaying geometric grid analytics in amber gold and obsidian',
    caption: 'Independent technical and educational reference portal for BDG Game users.',
    aspect: '16/9',
  },
  gameplay: {
    src: gameplayGridImg,
    alt: 'Matte black game tokens and gold polyhedral dice on a dark tactical probability grid',
    caption: 'Round-based probability mechanics and rule fundamentals.',
    aspect: '4/3',
  },
  security: {
    src: mobileSecurityImg,
    alt: 'Matte black smartphone alongside a brass and obsidian hardware security key on slate',
    caption: 'Account verification, login hygiene, and APK source inspection.',
    aspect: '4/3',
  },
  payment: {
    src: paymentShieldImg,
    alt: 'Anodized black vault module with gold geometric verification lock lines',
    caption: 'Transaction verification, ledger matching, and withdrawal compliance.',
    aspect: '4/3',
  },
  editorial: {
    src: editorialDeskImg,
    alt: 'Overhead view of a black hardcover notebook, brass pen, and dark glass tablet with yellow graphs',
    caption: 'Independent educational documentation and user safety guides.',
    aspect: '4/3',
  },
};
