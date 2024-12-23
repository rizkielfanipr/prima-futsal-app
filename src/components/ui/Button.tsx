// components/AuthButton.tsx
import Link from 'next/link';

interface ButtonProps {
  text: string;    // Teks tombol (Login / Register)
  href: string;    // URL tujuan
  className: string; // Kelas CSS untuk styling
}

export default function Button({ text, href, className }: ButtonProps) {
  return (
    <li>
      <Link href={href} className={`btn ${className}`}>
        {text}
      </Link>
    </li>
  );
}
