import React from "react";
import PageHeader from '../components/header';
import PageFooter from '../components/footer';
import '../rinstyle.css';

const CreditsPage = () => {
  return (
    <body>
      <div className="content">
        <PageHeader />
        <h3>layout credits!</h3>

        <p>
          <object>
            <ul>
              <li>
                <b>Rin extract</b> found on{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1TZPG9EMcIJR0gmTBrRLaQ74EKmiix9afCATfcReBZAQ/edit#gid=0"
                  onclick="window.open('https://docs.google.com/spreadsheets/d/1TZPG9EMcIJR0gmTBrRLaQ74EKmiix9afCATfcReBZAQ/edit#gid=0','new','');return false"
                >
                  this google doc
                </a>
                .
              </li>
              <li>
                <b>Background</b> from{" "}
                <a
                  href="http://-justinnyurr.tumblr.com/"
                  onclick="window.open('http://-justinnyurr.tumblr.com/','new','');return false"
                >
                  Littlewhiskers
                </a>
                .
              </li>
              <li>
                <b>Rin images</b> found on the{" "}
                <a
                  href="http://decaf.kouhi.me/lovelive/index.php?title=Hoshizora_Rin"
                  onclick="window.open('http://decaf.kouhi.me/lovelive/index.php?title=Hoshizora_Rin','new','');return false"
                >
                  Love Live SIF Wiki
                </a>
                .
              </li>
              <li>
                <b>Origin font</b> created by <i>TitanVex</i> and downloaded
                from{" "}
                <a
                  href="http://www.dafont.com/origin.font"
                  onclick="window.open('http://www.dafont.com/origin.font','new','');return false"
                >
                  Dafont
                </a>
                .
              </li>
              <li>
                <b>GrisaiaCustom</b> font by{" "}
                <a
                  href="http://tlwiki.org/index.php?title=Grisaia_no_Kajitsu"
                  onclick="window.open('http://tlwiki.org/index.php?title=Grisaia_no_Kajitsu','new','');return false"
                >
                  TLWiki
                </a>
                .
              </li>
            </ul>
          </object>
        </p>

        <h3>information sources!</h3>

        <p>
          <object>
            <ul>
              <li>
                <b>Basic information</b> on the information page from the{" "}
                <a
                  href="http://tvtropes.org/pmwiki/pmwiki.php/Characters/LoveLive"
                  onclick="window.open('http://tvtropes.org/pmwiki/pmwiki.php/Characters/LoveLive','new','');return false"
                >
                  tvtropes lovelive character sheet
                </a>
                .
              </li>
            </ul>
          </object>
        </p>

        <h3>gallery sources!</h3>

        <p>
          <object>
            <ul>
              <li>
                <b>Official art</b> found on{" "}
                <a
                  href="http://www.zerochan.net/Hoshizora+Rin,Official%20Art"
                  onclick="window.open('http://www.zerochan.net/Hoshizora+Rin,Official%20Art','new','');return false"
                >
                  Zerochan
                </a>
                .
              </li>
              <li>
                <b>Screencaps</b> taken by me from the Love Live anime.
              </li>
            </ul>
          </object>
        </p>

        <h3>coding references!</h3>

        <p>
          <object>
            <ul>
              <li>
                <b>Link Code</b> to make things open in new tabs from the{" "}
                <a
                  href="http://www.webdeveloper.com/forum/showthread.php?238990-Alternative-for-quot-target-quot-_blank-quot-in-xhtml-1-0-Strict"
                  onclick="window.open('http://www.webdeveloper.com/forum/showthread.php?238990-Alternative-for-quot-target-quot-_blank-quot-in-xhtml-1-0-Stric','new','');return false"
                >
                  Webdeveloper Forums
                </a>
                .{" "}
              </li>
            </ul>
          </object>
        </p>

        <h3>credits!</h3>
        <PageFooter />
      </div>
    </body>
  );
};

export default CreditsPage;
