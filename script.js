const e=React.createElement;

function CalculateurEpargne() {
  const [objectif, setObjectif] = React.useState(10000);
  const [epargneActuelle, setEpargneActuelle] = React.useState(1000);
  const [epargneParMois, setEpargneParMois] = React.useState(200);
  const [tauxInteret, setTauxInteret] = React.useState(3);
  const [resultat, setResultat] = React.useState(null);

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

  React.useEffect(() => {
    calculerEpargne();
  }, [objectif, epargneActuelle, epargneParMois, tauxInteret]);

  return e('div', {className: 'max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg'},
    e('h2', {className: 'text-2xl font-bold mb-6 text-center text-gray-800'}, '🎯 Calculateur d\'Objectif Épargne'),
    
    e('div', {className: 'space-y-6'},
      // Objectif d'épargne
      e('div', null,
        e('label', {className: 'block text-sm font-medium text-gray-700 mb-2'}, 
          `Objectif d'épargne : ${objectif.toLocaleString()}€`
        ),
        e('input', {
          type: 'range',
          min: '1000',
          max: '100000',
          step: '1000',
          value: objectif,
          onChange: (e) => setObjectif(Number(e.target.value)),
          className: 'w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer'
        })
      ),

      // Épargne actuelle
      e('div', null,
        e('label', {className: 'block text-sm font-medium text-gray-700 mb-2'}, 
          `Épargne actuelle : ${epargneActuelle.toLocaleString()}€`
        ),
        e('input', {
          type: 'range',
          min: '0',
          max: objectif,
          step: '100',
          value: epargneActuelle,
          onChange: (e) => setEpargneActuelle(Number(e.target.value)),
          className: 'w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer'
        })
      ),

      // Épargne mensuelle
      e('div', null,
        e('label', {className: 'block text-sm font-medium text-gray-700 mb-2'}, 
          `Épargne mensuelle : ${epargneParMois.toLocaleString()}€`
        ),
        e('input', {
          type: 'range',
          min: '0',
          max: '2000',
          step: '50',
          value: epargneParMois,
          onChange: (e) => setEpargneParMois(Number(e.target.value)),
          className: 'w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer'
        })
      ),

      // Taux d'intérêt
      e('div', null,
        e('label', {className: 'block text-sm font-medium text-gray-700 mb-2'}, 
          `Taux d'intérêt annuel : ${tauxInteret}% (ex: 3% Livret A)`
        ),
        e('input', {
          type: 'range',
          min: '0',
          max: '6',
          step: '0.1',
          value: tauxInteret,
          onChange: (e) => setTauxInteret(Number(e.target.value)),
          className: 'w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer'
        })
      ),

      // Résultats
      resultat && e('div', {className: 'mt-8 p-6 bg-blue-50 rounded-lg'},
        e('h3', {className: 'text-xl font-semibold mb-4 text-gray-800'}, '📊 Résultats de la simulation'),
        e('div', {className: 'space-y-3'},
          e('p', {className: 'text-gray-700'},
            e('span', {className: 'font-medium'}, '⏱️ Temps nécessaire : '),
            `${resultat.annees > 0 ? `${resultat.annees} an(s)` : ''} ${resultat.moisRestants > 0 ? `${resultat.moisRestants} mois` : ''}`
          ),
          e('p', {className: 'text-gray-700'},
            e('span', {className: 'font-medium'}, '💰 Montant final : '),
            `${Math.round(resultat.montantFinal).toLocaleString()}€`
          ),
          e('p', {className: 'text-gray-700'},
            e('span', {className: 'font-medium'}, '✨ Intérêts gagnés : '),
            `${Math.round(resultat.interetsGagnes).toLocaleString()}€`
          )
        )
      ),

      // Conseils
      e('div', {className: 'mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600'},
        e('h4', {className: 'font-medium mb-2'}, '💡 Conseils :'),
        e('ul', {className: 'list-disc pl-5 space-y-1'},
          e('li', null, 'Définissez un objectif réaliste et atteignable'),
          e('li', null, 'Mettez en place des virements automatiques'),
          e('li', null, 'Augmentez progressivement votre épargne mensuelle'),
          e('li', null, 'Pensez à diversifier vos placements')
        )
      )
    )
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(CalculateurEpargne), domContainer);
