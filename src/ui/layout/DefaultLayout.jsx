import React from 'react';
import Footer from '../organisms/footer/Footer';
import NavBar from '../organisms/navBar/NavBar';
import './index.scss';

export default function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <NavBar />
      <div className="default-layout__content">{children}</div>
      <Footer />
    </div>
  );
}
