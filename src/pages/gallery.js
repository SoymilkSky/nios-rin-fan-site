import React from "react";
import PageHeader from "../components/header";
import PageFooter from '../components/footer';
import HoshiHoshi from '../components/image';
import '../rinstyle.css';

const GalleryPage = () => {
  const [picRefs, setPicRefs] = React.useState([]);
  const picNumbers = [1, 2, 3, 4, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19 , 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 34, 36];

  const loadPicRefs = () => {
    picNumbers.forEach((number) =>
      setPicRefs(prev => [
        ...prev,
        {
          full: `galleryrin${number}full.png`,
          preview: `galleryrin${number}.png`
        },
      ])
    );
  }

  React.useEffect(() => {
    loadPicRefs()
  }, [])

  return (
    <body>
      <div className="content">
        <PageHeader />

        <h3>gallery!</h3>

        <p>
          Welcome to the <b>gallery</b> of Rin images! To view each image in
          full, click the preview and it will open in a new window.
        </p>

        <h3>Anime Screencaps</h3>

        <p className="centerimage">
          {picRefs.map((refs, index) =>
            <HoshiHoshi
              key={index}
              href={refs.full}
              hrefPreview={refs.preview}
            />
          )}
        </p>

        <h3>credits!</h3>
        <PageFooter />
      </div>
    </body>
  );
};

export default GalleryPage;
