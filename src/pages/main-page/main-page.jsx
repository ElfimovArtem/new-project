import React from 'react';
import { Header } from '../../components/header';
import { MainMenu } from '../../components/main-menu';
import { CardsContainer } from '../../components/cards-container';
import { Footer } from '../../components/footer';
import './main-page-styles.scss';

export const MainPage = () => (
  <section className="main-page">
    <Header />
    <MainMenu />
    <CardsContainer />
    <Footer />
  </section>
);
