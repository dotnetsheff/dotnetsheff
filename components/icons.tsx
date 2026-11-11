type IconProps = {
  className?: string;
};

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M13.9 10.5 21.3 2h-1.8l-6.4 7.4L8 2H2l7.8 11.3L2 22h1.8l6.8-7.8L16 22h6l-8.1-11.5Zm-2.4 2.8-.8-1.1L4.5 3.3h2.6l5 7.2.8 1.1 6.5 9.2h-2.6l-5.3-7.5Z" />
    </svg>
  );
}

export function BlueskyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M5.2 4.1C7.9 6.1 10.8 10 12 12.2c1.2-2.2 4.1-6.1 6.8-8.1 2-1.5 5.2-2.6 5.2 1 0 .7-.4 6- .7 6.9-.9 3.2-4.3 4-7.3 3.5 5.2.9 6.6 3.9 3.7 6.9-5.5 5.7-7.9-1.4-8.5-3.2-.1-.3-.2-.5-.2-.5s-.1.2-.2.5c-.6 1.8-3 8.9-8.5 3.2-2.9-3-1.5-6 3.7-6.9-3 .5-6.4-.3-7.3-3.5C.4 11.1 0 5.8 0 5.1c0-3.6 3.2-2.5 5.2-1Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.9 2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.75H3V9.75Zm6.25 0h3.83v1.47h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.67 4.8 6.14v5.09h-4v-4.51c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.39v4.59h-4V9.75Z" />
    </svg>
  );
}

export function CommunityIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M22 30a8 8 0 1 0-7.99-8A8 8 0 0 0 22 30Zm20 0a8 8 0 1 0-7.99-8A8 8 0 0 0 42 30ZM22 35c-8.4 0-15 4.5-15 10.3V50h30v-4.7C37 39.5 30.4 35 22 35Zm20 0c-2.1 0-4.1.3-5.9 1 3.9 2.3 6.4 5.6 6.4 9.3V50H57v-4.7C57 39.5 50.4 35 42 35Z" />
    </svg>
  );
}

export function PoundIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M21 55v-8h7V34h-7v-8h7v-6.3C28 11.6 33.8 7 42.1 7c4.3 0 8 1.1 10.9 3.1l-3.4 7.3a13 13 0 0 0-7.2-2.1c-3.8 0-5.9 1.9-5.9 5.4V26h12.6v8H36.5v13h17v8H21Z" />
    </svg>
  );
}

export function PizzaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M8 8c18.5 1.1 34.9 9.7 48 25.2L25.3 56 8 8Zm13.4 13.9 3.8 10.5 8.1-7.6a49.7 49.7 0 0 0-11.9-2.9Zm8.1 22.5 14-10.4c-1.3-1.2-2.6-2.4-4-3.4l-9.2 8.6-.8 5.2Z" />
      <circle cx="24" cy="42" r="3" fill="#fff" />
      <circle cx="36" cy="33" r="3" fill="#fff" />
      <circle cx="20" cy="26" r="2.5" fill="#fff" />
    </svg>
  );
}
