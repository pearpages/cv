import type { SVGProps } from 'react';
import type { LinkKind } from '../../data/types';

/**
 * Inline SVG, tree-shaken, `currentColor` throughout. This replaces
 * FontAwesome and its v4 shim layer — the old build shipped four webfont
 * files to draw about a dozen glyphs.
 *
 * Brand marks are filled because that is how the logos are drawn; utility
 * icons are stroked.
 */

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const brand = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
} as const;

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...brand} aria-hidden="true" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58l-.01-2.23c-3.34.72-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.003 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...brand} aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function StackOverflowIcon(props: IconProps) {
  return (
    <svg {...brand} aria-hidden="true" {...props}>
      <path d="M17.36 20.2v-5.38h1.79V22H3.15v-7.18h1.8v5.38h12.41ZM6.77 14.32l.35-1.75 8.78 1.85-.37 1.75-8.76-1.85Zm1.16-4.2.74-1.6 8.14 3.78-.75 1.62-8.13-3.8Zm2.26-3.98 1.12-1.34 6.9 5.75-1.12 1.34-6.9-5.75Zm4.44-4.24L19.9 9.2l-1.44 1.07-5.47-7.3 1.44-1.07ZM6.6 18.55v-1.8h8.9v1.8H6.6Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...props}>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.5" r="2.6" />
    </svg>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...props}>
      <path d="M4 20h4L20.5 7.5a2.12 2.12 0 0 0-3-3L5 17v3Z" />
      <path d="M15 6l3 3" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const LINK_ICONS: Record<LinkKind, (props: IconProps) => React.JSX.Element> = {
  email: MailIcon,
  location: PinIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  stackoverflow: StackOverflowIcon,
  blog: PenIcon,
};

export function LinkIcon({ kind, ...props }: IconProps & { kind: LinkKind }) {
  const Icon = LINK_ICONS[kind];
  return <Icon {...props} />;
}
