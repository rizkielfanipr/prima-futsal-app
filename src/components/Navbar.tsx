// pages/index.tsx (Home)
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button'; // Import komponen AuthButton

export default function Home() {
  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        {/* Logo dan Teks */}
        <div className="flex-1 flex items-center">
          <Link href="/" passHref>
            {/* Gunakan Image component dari next/image untuk optimasi gambar */}
            <Image 
              src="/logo-prima.png" 
              alt="Logo" 
              width={40} // Lebar logo
              height={40} // Tinggi logo
              className="object-contain"
            />
          </Link>
          {/* Teks di samping logo */}
          <span className="ml-2 text-xl font-bold mx-24">PRIMA FUTSAL</span>
        </div>

        {/* Daftar tombol login dan register */}
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <Button 
              text="Login" 
              href="/login" 
              className="btn btn-sm btn-ghost font-normal text-sm"
            />
            <Button 
              text="Register" 
              href="/register" 
              className="btn btn-sm bg-[#c62e2e] text-white text-sm font-normal"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
