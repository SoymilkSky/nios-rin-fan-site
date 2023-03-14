import * as React from "react";
import PageHeader from '../components/header';
import PageFooter from '../components/footer';
import '../rinstyle.css';

const IndexPage = () => {
  return (
    <body>
      <div className="content">
        <PageHeader />

        <h3>welcome!</h3>

        <p>
          Welcome to{" "}
          <strong>
            <em>HOSHIZORA RIN</em>
          </strong>
          , a self-explanatory 3-page fansite for <strong>Rin Hoshizora</strong>{" "}
          done for Proph's CMPT165 assignment.
        </p>

        <p>
          Rin is a first year student (grade 10) at Otonokizaka High School, and
          became a member of u's with her friends Hanayo Koizumi and Maki
          Nishikino. A natural tomboy, she sports great athletic skills that
          have been put to use in various concerts. She has been Hanayo's best
          friend ever since childhood.
        </p>

        <p>
          For more information, please feel free to browse the other pages via
          the navigation above.
        </p>

        <h3>credits!</h3>
        <PageFooter />
      </div>
    </body>
  );
};

export default IndexPage;

export const Head = () => <title>Rin Hoshizora</title>;
