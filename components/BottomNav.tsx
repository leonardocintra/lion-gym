'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Plus, BarChart2, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 pb-safe pt-2 z-50">
      <div className="flex justify-around items-center px-2 pb-5 pt-3">
        <NavItem href="/" icon={<Home size={28} />} label="Início" active={pathname === '/'} />
        <NavItem href="/explore" icon={<Search size={28} />} label="Explorar" active={pathname === '/explore'} />
        
        <div className="-mt-10">
          <button className="w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)] border-4 border-background-dark transform transition-transform hover:scale-110 active:scale-95">
            <Plus size={36} />
          </button>
        </div>

        <NavItem href="/progress" icon={<BarChart2 size={28} />} label="Progresso" active={pathname === '/progress'} />
        <NavItem href="/profile" icon={<User size={28} />} label="Perfil" active={pathname === '/profile'} />
      </div>
    </nav>
  );
}

function NavItem({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1 group w-16">
      <div className="p-1 rounded-xl transition-colors">
        <div className={`${active ? 'text-primary' : 'text-text-muted group-hover:text-white'} transition-colors`}>
          {icon}
        </div>
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${active ? 'text-white' : 'text-text-muted group-hover:text-white'}`}>
        {label}
      </span>
    </Link>
  );
}
