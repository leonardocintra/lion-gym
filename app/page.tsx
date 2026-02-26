import Image from 'next/image';
import Link from 'next/link';
import { Bell, ChevronLeft, ChevronRight, Dumbbell, Clock, List, Flame, Droplet, Weight, Play } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col pb-24">
      <header className="flex items-center justify-between px-6 pt-12 pb-4 bg-background-dark sticky top-0 z-20 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold tracking-tighter italic text-primary uppercase leading-none">
              LION <span className="text-white">GYM</span>
            </h1>
            <p className="text-[10px] text-text-muted font-medium tracking-widest uppercase">Beast Mode On</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-text-muted font-medium">Bem-vindo,</p>
            <p className="text-sm font-bold leading-tight text-white">Gabriel Silva</p>
          </div>
          <button className="relative p-2 rounded-full bg-surface-dark hover:bg-surface-highlight transition-colors border border-white/10">
            <Bell className="text-primary" size={24} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-600 rounded-full border border-surface-dark"></span>
          </button>
        </div>
      </header>

      <section className="px-4 py-2 mt-2">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-bold text-white uppercase tracking-wide">Outubro 2023</h2>
          <div className="flex gap-2">
            <button className="p-1 rounded-full hover:bg-surface-dark text-text-muted transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1 rounded-full hover:bg-surface-dark text-text-muted transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar px-1 pb-2">
          {[
            { day: 'SEG', date: '16', active: true },
            { day: 'TER', date: '17', active: false },
            { day: 'QUA', date: '18', active: false },
            { day: 'QUI', date: '19', active: false },
            { day: 'SEX', date: '20', active: false },
          ].map((item) => (
            <div key={item.date} className="flex flex-col items-center gap-2 min-w-[3.5rem]">
              <span className={`text-xs font-bold ${item.active ? 'text-primary' : 'text-text-muted'}`}>{item.day}</span>
              <button 
                className={`w-12 h-14 rounded-xl flex items-center justify-center transition-all ${
                  item.active 
                    ? 'bg-primary text-black shadow-[0_0_15px_rgba(255,215,0,0.4)] border-2 border-primary hover:scale-105' 
                    : 'bg-surface-dark text-white hover:bg-surface-highlight hover:border-primary/50 border border-transparent'
                }`}
              >
                <span className={`text-lg font-bold ${item.active ? 'text-xl' : 'font-medium'}`}>{item.date}</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 mt-6">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">Treino de Hoje</h2>
          <span className="text-primary text-xs font-bold bg-primary/10 border border-primary/20 px-3 py-1 rounded uppercase tracking-wider">Intenso</span>
        </div>

        <Link href="/workout" className="block relative w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10 mix-blend-overlay"></div>
          <div 
            className="h-[440px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] contrast-125" 
            style={{ backgroundImage: 'url("https://picsum.photos/800/1000?random=2")' }}
          ></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Dumbbell className="text-primary" size={20} />
                <span className="text-primary font-bold uppercase tracking-widest text-xs">Membros Inferiores</span>
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2 uppercase italic leading-none">
                Força nas <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Pernas</span>
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                Foco total em quadríceps e glúteos para construir massa muscular e resistência bruta.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 my-2">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 flex flex-col items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                <Clock className="text-primary mb-1" size={20} />
                <span className="text-white font-bold text-sm">45 min</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wide">Duração</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 flex flex-col items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                <List className="text-primary mb-1" size={20} />
                <span className="text-white font-bold text-sm">8 Exer.</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wide">Total</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 flex flex-col items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                <Flame className="text-primary mb-1" size={20} />
                <span className="text-white font-bold text-sm">320</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wide">Kcal</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-[0_4px_20px_rgba(255,215,0,0.25)] uppercase tracking-wide">
              <Play size={28} className="fill-current" />
              Começar Treino
            </button>
          </div>
        </Link>
      </section>

      <section className="px-6 mt-8 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Seu Progresso</h3>
          <Link href="/progress" className="text-primary text-sm font-bold hover:text-primary-dark transition-colors">Ver tudo</Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-dark p-5 rounded-2xl border border-white/5 flex flex-col gap-3 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Droplet size={60} className="text-white" />
            </div>
            <div className="flex items-center justify-between relative z-10">
              <div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Droplet size={20} />
              </div>
              <span className="text-xs text-text-muted font-medium">Meta: 2.5L</span>
            </div>
            <div className="relative z-10">
              <span className="text-2xl font-bold text-white">1.2 L</span>
              <p className="text-xs text-gray-500 uppercase font-medium">Água hoje</p>
            </div>
            <div className="w-full bg-black h-2 rounded-full mt-1 overflow-hidden border border-white/5 relative z-10">
              <div className="bg-blue-500 h-full rounded-full w-[48%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>

          <div className="bg-surface-dark p-5 rounded-2xl border border-white/5 flex flex-col gap-3 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Weight size={60} className="text-white" />
            </div>
            <div className="flex items-center justify-between relative z-10">
              <div className="w-10 h-10 rounded-lg bg-orange-900/30 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Weight size={20} />
              </div>
              <span className="text-xs text-text-muted font-medium">75kg</span>
            </div>
            <div className="relative z-10">
              <span className="text-2xl font-bold text-white">78.4 kg</span>
              <p className="text-xs text-gray-500 uppercase font-medium">Peso atual</p>
            </div>
            <div className="w-full bg-black h-2 rounded-full mt-1 overflow-hidden border border-white/5 relative z-10">
              <div className="bg-orange-500 h-full rounded-full w-[85%] shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            </div>
          </div>
        </div>
      </section>
      
      <BottomNav />
    </div>
  );
}
