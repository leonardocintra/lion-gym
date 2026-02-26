import Image from 'next/image';
import { Edit2, Calendar, Weight, ArrowUpDown, User, Save, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function ProfilePage() {
  return (
    <div className="flex-1 flex flex-col pb-24">
      <Header title="Perfil do Atleta" />

      <main className="px-4 py-6 flex flex-col gap-8 max-w-md mx-auto w-full">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full border-4 border-primary overflow-hidden relative">
              <Image src="https://picsum.photos/400/400?random=10" alt="Profile" fill className="object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform">
              <Edit2 size={16} />
            </button>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Seu Nome</h1>
          <p className="text-sm text-[#cbc690] font-medium mb-3">Membro Lion Gym</p>
          <span className="px-4 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest bg-primary/5">PREMIUM</span>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center p-4 rounded-full aspect-square border border-white/10 bg-surface-dark">
            <Calendar className="text-primary mb-2" size={20} />
            <span className="text-xs text-text-muted mb-1">Idade</span>
            <span className="text-lg font-bold text-white leading-none">28</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-full aspect-square border border-white/10 bg-surface-dark">
            <Weight className="text-primary mb-2" size={20} />
            <span className="text-xs text-text-muted mb-1">Peso</span>
            <span className="text-lg font-bold text-white leading-none">82kg</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-full aspect-square border border-white/10 bg-surface-dark">
            <ArrowUpDown className="text-primary mb-2" size={20} />
            <span className="text-xs text-text-muted mb-1">Altura</span>
            <span className="text-lg font-bold text-white leading-none">182cm</span>
          </div>
        </div>

        {/* Body Data */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Dados Corporais</h2>
            <button className="text-primary text-sm font-medium">Editar</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-white font-medium">Idade</label>
              <div className="flex items-center bg-surface-dark border border-white/10 rounded-xl px-4 py-3">
                <User size={18} className="text-text-muted mr-3" />
                <input type="number" defaultValue={28} className="bg-transparent border-none outline-none text-white w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-white font-medium">Sexo</label>
              <div className="flex items-center bg-surface-dark border border-white/10 rounded-xl px-4 py-3">
                <User size={18} className="text-text-muted mr-3" />
                <select className="bg-transparent border-none outline-none text-white w-full appearance-none">
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-white font-medium">Peso Atual (kg)</label>
              <div className="flex items-center bg-surface-dark border border-white/10 rounded-xl px-4 py-3">
                <Weight size={18} className="text-text-muted mr-3" />
                <input type="number" defaultValue={82.5} step={0.1} className="bg-transparent border-none outline-none text-white w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-white font-medium">Altura (cm)</label>
              <div className="flex items-center bg-surface-dark border border-white/10 rounded-xl px-4 py-3">
                <ArrowUpDown size={18} className="text-text-muted mr-3" />
                <input type="number" defaultValue={182} className="bg-transparent border-none outline-none text-white w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Goal */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Objetivo Principal</h2>
          
          <div className="flex flex-col gap-3">
            <label className="flex items-center justify-between p-4 rounded-xl border border-primary bg-surface-dark cursor-pointer">
              <div className="flex flex-col">
                <span className="text-primary font-bold">Hipertrofia</span>
                <span className="text-xs text-text-muted">Ganho de massa muscular magra</span>
              </div>
              <CheckCircle2 className="text-primary" size={24} />
            </label>
            
            <label className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-surface-dark cursor-pointer hover:border-white/30 transition-colors">
              <div className="flex flex-col">
                <span className="text-white font-bold">Emagrecimento</span>
                <span className="text-xs text-text-muted">Perda de gordura corporal</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-text-muted"></div>
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-surface-dark cursor-pointer hover:border-white/30 transition-colors">
              <div className="flex flex-col">
                <span className="text-white font-bold">Ganho de Força</span>
                <span className="text-xs text-text-muted">Aumento de força bruta</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-text-muted"></div>
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-surface-dark cursor-pointer hover:border-white/30 transition-colors">
              <div className="flex flex-col">
                <span className="text-white font-bold">Condicionamento Físico</span>
                <span className="text-xs text-text-muted">Melhora cardiovascular e resistência</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-text-muted"></div>
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-surface-dark cursor-pointer hover:border-white/30 transition-colors">
              <div className="flex flex-col">
                <span className="text-white font-bold">Definição Muscular</span>
                <span className="text-xs text-text-muted">Tonificação e definição</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-text-muted"></div>
            </label>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-[0_4px_20px_rgba(255,215,0,0.25)] mt-4">
          <Save size={20} />
          Salvar Alterações
        </button>
      </main>

      <BottomNav />
    </div>
  );
}
