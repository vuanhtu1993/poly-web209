import { Carousel } from 'antd';
import React from 'react';
import styles from './style.module.css'

import banner1 from '../../assets/images/banner.jpg'

const Banner: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <img className={styles.banner} src={banner1}/>
      </div>
      <div>
        <h3 className={styles.banner}>2</h3>
      </div>
      <div>
        <h3 className={styles.banner}>3</h3>
      </div>
      <div>
        <h3 className={styles.banner}>4</h3>
      </div>
    </Carousel>
  );
};

export default Banner;