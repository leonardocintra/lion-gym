'use client';

import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between p-4 sticky top-0 z-10 bg-background-dark/90 backdrop-blur-md">
      <button 
        onClick={() => router.back()}
        className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <ArrowLeft className="text-white" />
      </button>
      
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold tracking-tight text-center uppercase text-primary drop-shadow-sm">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs font-medium text-text-muted uppercase tracking-wide">
            {subtitle}
          </p>
        )}
      </div>

      <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
        <MoreVertical className="text-white" />
      </button>
    </header>
  );
}
