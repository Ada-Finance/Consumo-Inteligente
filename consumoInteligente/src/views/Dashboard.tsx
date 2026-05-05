import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg-color) text-(--text-primary)">
      <Navbar />

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold bg-red-500">Dashboard</h1>
          <p className="opacity-60 text-sm">
            Bem-vinda de volta ao seu portal para gerenciamento financeiro,
            VISITANTE! Aqui você pode acompanhar seus gastos, analisar gráficos
            de consumo e receber insights personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-80 rounded-2xl border border-slate-700 flex items-center justify-center italic opacity-40">
              Gastos recentes
            </div>

            <div className="h-80 rounded-2xl border border-slate-700 flex items-center justify-center italic opacity-40">
              Gráficos Principais (Chart.js)
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 flex items-center justify-center italic opacity-40">
            Coluna de Insights
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
