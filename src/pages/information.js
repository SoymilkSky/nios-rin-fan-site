import React from 'react';
import PageHeader from '../components/header';
import PageFooter from '../components/footer';
import '../rinstyle.css';

const InformationPage = () => {
  return (
    <body>
      <div className="content">
        <PageHeader />

        <h3>basic information!</h3>

        <p>
          <b>Image Color:</b> Light Green (Light green or yellow in pvs)
          <br />
          <b>Age:</b> 15
          <br />
          <b>Birthday:</b> November 1 (Scorpio)
          <br />
          <b>Blood Type:</b> A<br />
          <b>Height:</b> 155cm
          <br />
          <b>Three Sizes:</b> B75/W58/H80
          <br />
          <b>Favorite Food:</b> Ramen
          <br />
          <b>Least Favorite Food:</b> Fish
          <br />
          <b>Units:</b> lily white, NicoRinPana
          <br />
          <b>Voiced by:</b> Riho Iida
          <br />
        </p>

        <h3>credits!</h3>
        <PageFooter />
      </div>
    </body>
  );
};

export default InformationPage;
