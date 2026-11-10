import logo_sistema from '../assets/logo_sistema.png'

export default function PacienteForm() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 md:flex">
      <aside className="flex w-full shrink-0 items-center justify-between bg-slate-950 px-5 py-4 text-white md:min-h-screen md:w-64 md:flex-col md:items-stretch md:justify-start md:px-4 md:py-7">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo_sistema}
            className="size-10 rounded-xl bg-white object-contain p-1"
            alt="Logo do sistema"
          />
          <span className="text-lg font-bold tracking-tight">Gestão Clínica</span>
        </a>

        <nav aria-label="Navegação principal" className="flex items-center gap-2 md:mt-12 md:flex-col md:items-stretch">
          <a
            href="#dashboard"
            className="hidden rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white md:block"
          >
            Visão geral
          </a>
          <a
            href="#pacientes"
            aria-current="page"
            className="rounded-xl bg-cyan-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20"
          >
            Pacientes
          </a>
          <a
            href="#consultas"
            className="hidden rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white md:block"
          >
            Consultas
          </a>
        </nav>

        <div className="mt-auto hidden border-t border-slate-800 pt-5 text-xs leading-5 text-slate-500 md:block">
          Sistema de gestão clínica
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <p className="text-sm font-medium text-slate-500">Área de gestão</p>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-medium text-slate-600 sm:inline">Administrador</span>
            <div className="flex size-9 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800" aria-label="Perfil do administrador">
              A
            </div>
          </div>
        </header>

        <section id="pacientes" className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold text-cyan-700">Pacientes / Novo cadastro</p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Cadastrar paciente
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Preencha os dados abaixo para adicionar um paciente à clínica.
            </p>
          </div>

          <form className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-8">
              <h2 className="font-semibold text-slate-900">Dados do paciente</h2>
              <p className="mt-1 text-sm text-slate-500">Os campos marcados com * são obrigatórios.</p>
            </div>

            <div className="grid gap-x-6 gap-y-5 px-5 py-6 sm:grid-cols-2 sm:px-8 sm:py-8">
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="nome" className="text-sm font-semibold text-slate-700">
                  Nome completo <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  placeholder="Ex.: Maria Silva"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Email <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="nome@exemplo.com"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="senha" className="text-sm font-semibold text-slate-700">
                  Senha <span className="text-rose-600">*</span>
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  autoComplete="new-password"
                  placeholder="Mínimo de 8 caracteres"
                  minLength={8}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="confirmarSenha" className="text-sm font-semibold text-slate-700">
                  Confirmar senha <span className="text-rose-600">*</span>
                </label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  autoComplete="new-password"
                  placeholder="Repita a senha"
                  minLength={8}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="morada" className="text-sm font-semibold text-slate-700">
                  Morada <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="morada"
                  name="morada"
                  autoComplete="street-address"
                  placeholder="Rua, número, código postal e localidade"
                  rows={3}
                  required
                  className="w-full resize-y rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-5 py-5 sm:flex-row sm:justify-end sm:px-8">
              <button
                type="reset"
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
              >
                Limpar
              </button>
              <button
                type="submit"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
              >
                Cadastrar paciente
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}