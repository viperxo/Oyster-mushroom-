import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🍃',
      title: 'રોગપ્રતિકારક શક્તિમાં સહાય',
      description:
        'કુદરતી પોષક તત્ત્વો શરીરની રક્ષણાત્મક ક્ષમતાને ટેકો આપે છે અને સાધારણ બીમારીમાંથી બચાવે છે.',
    },
    {
      icon: '❤️',
      title: 'હૃદય માટે અનુકૂળ',
      description:
        'ઓછું ચરબીયુક્ત બંધારણ અને પોટેશિયમની હાજરી તેને હૃદયમૈત્રીભર્યુ આહારનો સારો ઉમેરો બનાવે છે.',
    },
    {
      icon: '🌾',
      title: 'પાચનમાં સરળ',
      description:
        'હળવા સ્વાદ અને નરમ બંધારણને કારણે તે વધુ ભારે લાગતું નથી અને સહેલાઈથી પચાય છે.',
    },
    {
      icon: '⚡',
      title: 'ઊર્જા માટે મદદરૂપ',
      description:
        'બી-વિટામિન ખોરાકને ઊર્જામાં ફેરવવામાં મદદ કરે છે, જેથી દૈનિક સ્ફૂર્તિ જળવાય છે.',
    },
  ];

  return (
    <section className="card" aria-labelledby="benefits-title">
      <div className="section-head">
        <h2 className="section-title" id="benefits-title">
          ટોપ આરોગ્યલાભ
        </h2>
        <p className="section-text">
          સંતુલિત આહારના ભાગરૂપે ઓઇસ્ટર મશરૂમ્સ અનેક રીતે લાભદાયક બની શકે છે.
        </p>
      </div>

      <ul className="benefit-list">
        {benefits.map((benefit, index) => (
          <li key={index}>
            <div className="icon" aria-hidden="true">
              {benefit.icon}
            </div>
            <div>
              <strong>{benefit.title}</strong>
              <span>{benefit.description}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="note">
        <strong>નોંધ:</strong> ઓઇસ્ટર મશરૂમ્સને યોગ્ય રીતે સાફ કરીને અને પૂરતા પ્રમાણમાં રાંધીને ખાવું ચાહીએ.
        આલર્જી અથવા વૈશ્ટિક સમસ્યા હોય તો ડોક્ટરની સલાહ લેવી જરૂરી છે.
      </div>
    </section>
  );
};

export default BenefitsSection;
