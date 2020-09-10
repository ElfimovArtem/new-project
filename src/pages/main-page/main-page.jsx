import React from 'react';
import { Header } from '../../components/header';
import { ContentContainer } from '../../components/content-container';
import { Footer } from '../../components/footer';
import './main-page-styles.scss';

export const MainPage = () => (
  <section className="main-page">
    <Header />
    <ContentContainer />
    <Footer />
  </section>
);
