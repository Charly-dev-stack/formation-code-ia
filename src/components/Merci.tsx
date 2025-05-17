import React from 'react';

const Merci = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-slate-900 text-white text-center px-4">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-6">🎉 Merci pour votre inscription !</h1>
        <p className="text-lg mb-4">Nous avons bien reçu votre demande. Un membre de notre équipe vous contactera dans moins de <strong>2 heures</strong>.</p>
        <p className="text-gray-400 text-sm">Restez disponible sur WhatsApp ou par email.</p>
      </div>
    </section>
  );
};

export default Merci;
