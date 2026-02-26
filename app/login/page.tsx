import Image from 'next/image';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-dark shadow-2xl mx-auto">
      <div className="p-4">
        <div 
          className="bg-cover bg-top flex flex-col justify-end overflow-hidden rounded-xl min-h-[360px] relative shadow-lg shadow-black/50"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.4) 50%, rgba(18, 18, 18, 0.95) 100%), url("https://picsum.photos/800/600?random=1")'
          }}
        >
          <div className="flex flex-col p-6 z-10">
            <div className="flex items-center gap-2 mb-2">
              <Dumbbell className="text-primary drop-shadow-md" size={32} />
              <span className="text-primary font-bold text-lg tracking-wider uppercase drop-shadow-md">Lion Gym</span>
            </div>
            <p className="text-white tracking-tight text-3xl font-bold leading-tight drop-shadow-md">Desperte sua força</p>
            <p className="text-slate-200 text-sm font-medium mt-1 drop-shadow-sm">Treine como um rei. Conquiste seus objetivos.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-4">
        <h2 className="text-white tracking-tight text-2xl font-bold leading-tight px-2 pb-2 pt-2">Acesse sua conta</h2>

        <div className="flex flex-col items-center w-full px-2 py-8">
          <Link 
            href="/"
            className="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full h-14 px-5 bg-surface-dark border border-white/10 hover:bg-zinc-800 text-white text-lg font-bold leading-normal tracking-wide shadow-lg transition-all duration-300 active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            <span>Entrar com Google</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
