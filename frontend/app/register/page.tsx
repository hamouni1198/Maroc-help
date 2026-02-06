import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center mb-6">
          <span className="text-3xl">🇲🇦</span>
          <h1 className="ml-3 text-2xl font-bold text-gray-900">Maroqino</h1>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">
          Inscription
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Crée ton compte pour demander ou proposer de l&apos;aide.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ton nom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="ton.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Créer mon compte
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Tu as déjà un compte ?{' '}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Connecte-toi
          </Link>
        </p>

        <p className="mt-6 text-xs text-center text-gray-400">
          En créant un compte, tu acceptes nos conditions d&apos;utilisation.
        </p>
      </div>
    </div>
  );
}
