import React, { useState, useEffect } from 'react';

export default function CalculateurEpargne() {
  const [objectif, setObjectif] = useState(10000);
  const [epargneActuelle, setEpargneActuelle] = useState(1000);
  const [epargneParMois, setEpargneParMois] = useState(200);
  const [tauxInteret, setTauxInteret] = useState(3);
  const [resultat, setResultat] = useState(null);

  const calculerEpargne = () => {
    const tauxMensuel = tauxInteret / 100 / 12;
    let mois = 0;
    let epargneSimulee = epargneActuelle;
    
    while (epargneSimulee < objectif && mois < 600) {
      epargneSimulee += epargneParMois;
      epargneSimulee += epargneSimulee * tauxMensuel;
      mois++;
    }

    const annees = Math.floor(mois / 12);
    const moisRestants = mois % 12;
    const montantFinal = epargneSimulee;
    const interetsGagnes = montantFinal - epargneActuelle - (epargneParMois * mois);

    setResultat({
      mois,
      annees,
      moisRestants,
      montantFinal,
      interetsGagnes
    });
  };

  useEffect(() => {
    calculerEpargne();
  }, [objectif, epargneActuelle, epargneParMois, tauxInteret]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🎯 Calculateur d'Objectif Épargne
      </h2>

      <div className="space-y-6">
        {/* Objectif d'épargne */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Objectif d'épargne : {objectif.toLocaleString()}€
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={objectif}
            onChange={(e) => setObjectif(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Épargne actuelle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Épargne actuelle : {epargneActuelle.toLocaleString()}€
          </label>
          <input
            type="range"
            min="0"
            max={objectif}
            step="100"
            value={epargneActuelle}
            onChange={(e) => setEpargneActuelle(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Épargne mensuelle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Épargne mensuelle : {epargneParMois.toLocaleString()}€
          </label>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={epargneParMois}
            onChange={(e) => setEpargneParMois(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Taux d'intérêt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Taux d'intérêt annuel : {tauxInteret}% (ex: 3% Livret A)
          </label>
          <input
            type="range"
            min="0"
            max="6"
            step="0.1"
            value={tauxInteret}
            onChange={(e) => setTauxInteret(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Résultats */}
        {resultat && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              📊 Résultats de la simulation
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-medium">⏱️ Temps nécessaire :</span>{' '}
                {resultat.annees > 0 && `${resultat.annees} an(s)`}
                {resultat.moisRestants > 0 && ` ${resultat.moisRestants} mois`}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">💰 Montant final :</span>{' '}
                {Math.round(resultat.montantFinal).toLocaleString()}€
              </p>
              <p className="text-gray-700">
                <span className="font-medium">✨ Intérêts gagnés :</span>{' '}
                {Math.round(resultat.interetsGagnes).toLocaleString()}€
              </p>
            </div>
          </div>
        )}

        {/* Conseils */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <h4 className="font-medium mb-2">💡 Conseils :</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Définissez un objectif réaliste et atteignable</li>
            <li>Mettez en place des virements automatiques</li>
            <li>Augmentez progressivement votre épargne mensuelle</li>
            <li>Pensez à diversifier vos placements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
