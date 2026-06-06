import React from 'react';

const CulinarySection = () => {
  const steps = [
    {
      num: '૧',
      description: 'લસણ, હળવો મસાલો અને થોડું તેલ અથવા બટર સાથે સાંતળી શકાય છે.',
    },
    {
      num: '૨',
      description: 'સૂપ, સ્ટ્યૂ, ગ્રેવી, નૂડલ્સ અને પાસ્તામાં ઉત્તમ સ્વાદ આપે છે.',
    },
    {
      num: '૩',
      description: 'ચપાતી, ભાત અથવા રોટલી સાથે શાક તરીકે પીરસી શકાય છે.',
    },
    {
      num: '૪',
      description:
        'હળવા તીખા મસાલા અને કાળા મરી સાથે તેનો કુદરતી સ્વાદ વધુ સરસ લાગે છે.',
    },
  ];

  return (
    <section className="card" aria-labelledby="culinary-title">
      <div className="section-head">
        <h2 className="section-title" id="culinary-title">
          રસોઈમાં ઉપયોગ કેવી રીતે કરવો?
        </h2>
        <p className="section-text">
          ઓઇસ્ટર મશરૂમ્સ બહુવિધ વાનગીઓમાં સરળતાથી વાપરી શકાય છે. તેનો સ્વાદ હળવો અને બહુમુખી છે.
        </p>
      </div>

      <div className="culinary-box">
        <div className="culinary-image">
          <img src="./o2.png" alt="મશરૂમથી તૈયાર થયેલી સ્વાદિષ્ટ વાનગી" />
        </div>

        <div>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={index}>
                <div className="num">{step.num}</div>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;