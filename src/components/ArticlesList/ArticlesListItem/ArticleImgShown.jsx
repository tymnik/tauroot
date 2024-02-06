import { useState, useEffect } from 'react';
import imgTab1x from '../../../images/Card/card-img-tablet.jpg';
import imgTab2x from '../../../images/Card/card-img-tablet-2x.jpg';
import imgDesk1x from '../../../images/Card/card-img-desktop.jpg';
import imgDesk2x from '../../../images/Card/card-img-desktop-2x.jpg';

export const ArticleImgShown = () => {
  const [imageToShow, setImageToShow] = useState(getImageBasedOnWindowSize);

  function getImageBasedOnWindowSize() {
    const windowWidth = window.innerWidth;
    const devicePixelRatio = window.devicePixelRatio;

    if (windowWidth <= 1279) {
      return devicePixelRatio > 1 ? imgTab2x : imgTab1x;
    } else {
      return devicePixelRatio > 1 ? imgDesk2x : imgDesk1x;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setImageToShow(getImageBasedOnWindowSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setImageToShow]);

  return (
    <div>
      {imageToShow && (
        <img src={imageToShow} alt="An article illustration" loading="lazy" style={{borderRadius:'20px'}}/>
      )}
    </div>
  );
};
