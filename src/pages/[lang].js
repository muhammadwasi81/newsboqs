// pages/[lang].js (Dynamic homepage)
import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import { MainMenu } from '../../data';

async function fetchContent(language) {
  const content = {
    en: {
      welcomeMessage: 'Welcome to the English Homepage',
    },
    es: {
      welcomeMessage: 'Bienvenido a la página de inicio en español',
    },

    '${language}': {
      welcomeMessage: `${language}`,
    },
  };

  return language || content['en']; // Default to English
}

export async function getServerSideProps({ params }) {
  const language = params.lang || 'en'; // Default to English
  const content = await fetchContent(language);

  return {
    props: {
      content,
    },
  };
}

export default function HomePage({ content }) {
  return (
    <>
      <Header fixedHeight={true} menuData={MainMenu} showAdSpace={false} />
      <h1>{content}</h1>
      {/* Add more content using content object */}
      <Footer />
    </>
  );
}
