import { ArrowLeft, MoreVertical, Dumbbell, RotateCcw, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default async function ExercisePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="flex-1 flex flex-col pb-24 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <header className="flex items-center justify-between p-4 sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <Link href="/workout" className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <ArrowLeft className="text-text-light dark:text-text-dark" />
        </Link>
        <h2 className="text-lg font-bold tracking-tight text-center uppercase text-primary drop-shadow-sm">Lion Gym</h2>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <MoreVertical className="text-text-light dark:text-text-dark" />
        </button>
      </header>

      <main className="flex-1 flex flex-col px-4 pb-24 gap-6">
        <div className="flex flex-col items-center pt-2 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center leading-tight mb-1 text-slate-900 dark:text-slate-100">Supino Reto</h1>
          <p className="text-sm font-medium text-accent-text uppercase tracking-wide text-[#cbc690]">Peito • Barra</p>
        </div>

        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-sm font-medium text-accent-text text-[#cbc690]">Série 3 de 4</span>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          {/* Carga Card */}
          <div className="bg-white dark:bg-[#343218] rounded-xl p-6 shadow-lg shadow-black/5 border border-black/5 dark:border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <Dumbbell className="text-primary" />
                <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">Carga</span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded bg-primary/20 text-primary-dark dark:text-primary">KG</span>
            </div>
            
            <div className="flex items-center justify-between gap-4 relative z-10">
              <button className="w-14 h-14 rounded-full bg-slate-100 dark:bg-black/20 flex items-center justify-center text-slate-900 dark:text-slate-100 hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all active:scale-95 shadow-sm">
                <span className="text-3xl font-light">-</span>
              </button>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold tracking-tighter text-slate-900 dark:text-slate-100">60</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Total</span>
              </div>
              <button className="w-14 h-14 rounded-full bg-slate-100 dark:bg-black/20 flex items-center justify-center text-slate-900 dark:text-slate-100 hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all active:scale-95 shadow-sm">
                <span className="text-3xl font-light">+</span>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <button className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-black/20 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-black transition-colors">+1.25</button>
              <button className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-black/20 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-black transition-colors">+2.5</button>
              <button className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-black/20 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-black transition-colors">+5</button>
            </div>
          </div>

          {/* Repetições Card */}
          <div className="bg-white dark:bg-[#343218] rounded-xl p-6 shadow-lg shadow-black/5 border border-black/5 dark:border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <RotateCcw className="text-primary" />
                <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">Repetições</span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded bg-primary/20 text-primary-dark dark:text-primary">REPS</span>
            </div>
            
            <div className="flex items-center justify-between gap-4 relative z-10">
              <button className="w-14 h-14 rounded-full bg-slate-100 dark:bg-black/20 flex items-center justify-center text-slate-900 dark:text-slate-100 hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all active:scale-95 shadow-sm">
                <span className="text-3xl font-light">-</span>
              </button>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold tracking-tighter text-slate-900 dark:text-slate-100">12</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Meta: 10-12</span>
              </div>
              <button className="w-14 h-14 rounded-full bg-slate-100 dark:bg-black/20 flex items-center justify-center text-slate-900 dark:text-slate-100 hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all active:scale-95 shadow-sm">
                <span className="text-3xl font-light">+</span>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <button className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-black/20 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-black transition-colors">Falha</button>
              <button className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-black/20 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-black transition-colors">Parcial</button>
            </div>
          </div>
        </div>

        <div className="mt-4 px-2 max-w-md mx-auto w-full">
          <p className="text-xs font-medium text-accent-text text-[#cbc690] mb-2 uppercase tracking-wide">Último Treino</p>
          <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-400 border-b border-black/5 dark:border-white/5 pb-2">
            <span>15 Mai</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">58kg x 10 reps</span>
          </div>
        </div>
      </main>

      <div className="fixed bottom-[88px] left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pointer-events-none z-20">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button className="w-full bg-primary hover:bg-primary-dark text-background-dark text-lg font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] text-black">
            <CheckCircle className="font-bold" />
            Salvar Série
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
