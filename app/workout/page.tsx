import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Dumbbell, Check } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function WorkoutPage() {
  return (
    <div className="flex-1 flex flex-col pb-24">
      <Header title="TREINO DE PERNAS" />

      <main className="px-4 py-2 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tighter italic text-primary uppercase leading-none mb-2">
            LION <span className="text-white">GYM</span>
          </h1>
          <h2 className="text-xl font-bold text-white">Exercícios do Dia</h2>
          <p className="text-sm text-text-muted">Sexta-feira, 24 de Novembro</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface-dark rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-white/5">
            <Clock className="text-primary" size={24} />
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-white">45</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Minutos</span>
            </div>
          </div>
          <div className="bg-surface-dark rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-white/5">
            <Flame className="text-primary" size={24} />
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-white">600</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Calorias</span>
            </div>
          </div>
          <div className="bg-surface-dark rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-white/5">
            <Dumbbell className="text-primary" size={24} />
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-white">8</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Exercícios</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Sequência</h3>
          
          <div className="flex flex-col gap-3">
            <ExerciseCard 
              id="1"
              name="Leg Press 45º"
              weight="120kg"
              sets="3 Séries"
              reps="12 REPETIÇÕES"
              image="https://picsum.photos/200/200?random=3"
              completed={false}
            />
            <ExerciseCard 
              id="2"
              name="Agachamento Livre"
              weight="60kg"
              sets="4 Séries"
              reps="10 REPETIÇÕES"
              image="https://picsum.photos/200/200?random=4"
              completed={false}
            />
            <ExerciseCard 
              id="3"
              name="Cadeira Extensora"
              weight="45kg"
              sets="3 Séries"
              reps="15 REPETIÇÕES"
              image="https://picsum.photos/200/200?random=5"
              completed={false}
            />
            <ExerciseCard 
              id="4"
              name="Panturrilha Sentado"
              weight="40kg"
              sets="4 Séries"
              reps="15 REPETIÇÕES"
              image="https://picsum.photos/200/200?random=6"
              completed={true}
            />
            <ExerciseCard 
              id="5"
              name="Afundo com Halteres"
              weight="20kg"
              sets="3 Séries"
              reps="12 REPETIÇÕES (CADA LADO)"
              image="https://picsum.photos/200/200?random=7"
              completed={false}
            />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

function ExerciseCard({ id, name, weight, sets, reps, image, completed }: { id: string, name: string, weight: string, sets: string, reps: string, image: string, completed: boolean }) {
  return (
    <Link href={`/exercise/${id}`} className={`bg-surface-dark rounded-xl p-3 flex items-center gap-4 border ${completed ? 'border-primary/20 opacity-60' : 'border-white/5'} transition-colors hover:bg-surface-highlight`}>
      <div className="w-16 h-16 rounded-lg overflow-hidden relative shrink-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h4 className={`font-bold text-base mb-1 ${completed ? 'text-text-muted line-through' : 'text-white'}`}>{name}</h4>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded text-xs text-text-muted">
            <Dumbbell size={12} className="text-primary" />
            <span>{weight}</span>
          </div>
          <span className="text-xs text-text-muted bg-black/40 px-2 py-0.5 rounded">{sets}</span>
        </div>
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{reps}</span>
      </div>

      <div className="shrink-0 px-2">
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${completed ? 'bg-primary border-primary text-black' : 'border-text-muted text-transparent'}`}>
          <Check size={14} className={completed ? 'opacity-100' : 'opacity-0'} />
        </div>
      </div>
    </Link>
  );
}
