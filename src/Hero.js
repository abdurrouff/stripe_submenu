import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            iusto consequuntur officiis dolore neque non itaque. Possimus est
            nostrum in! Magnam porro ea quo in. Aperiam maiores molestiae
            similique animi.
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone-img' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
