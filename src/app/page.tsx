'use client';

import React, { useEffect } from 'react';
import Template8018Layout from '@/components/Template8018Layout';

export default function Home() {
  useEffect(() => {
    // Initialize any JavaScript functionality here
    if (typeof window !== 'undefined') {
      // @ts-ignore
      if (window.WOW) {
        // @ts-ignore
        new window.WOW().init();
      }
    }
  }, []);

  return (
    <Template8018Layout title="AwakeAI - Home">
      <div className="page-wrapper">
        {/* Header */}
        <header className="header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="logo">
                  <a href="/">
                    <img src="/template8018/image/logo.png" alt="AwakeAI" />
                  </a>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-6">
                <div className="header-right">
                  <nav className="main-menu">
                    <ul>
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/portfolio">Portfolio</a></li>
                      <li><a href="/team">Team</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </nav>
                  <div className="header-btn">
                    <a href="/contact" className="btn">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay="0.2s">
                    Welcome to AwakeAI
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Empowering businesses with cutting-edge AI solutions
                  </p>
                  <div className="hero-btns wow fadeInUp" data-wow-delay="0.6s">
                    <a href="/contact" className="btn">Get Started</a>
                    <a href="/portfolio" className="btn btn-outline">Our Work</a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="hero-image wow fadeInRight" data-wow-delay="0.4s">
                  <img src="/template8018/image/hero-image.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="service-area">
          <div className="container">
            <div className="section-title text-center">
              <h2>Our Services</h2>
              <p>We provide comprehensive AI solutions for your business needs</p>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="flaticon-robot"></i>
                  </div>
                  <h3>AI Development</h3>
                  <p>Custom AI solutions tailored to your business requirements</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <i className="flaticon-brain"></i>
                  </div>
                  <h3>Machine Learning</h3>
                  <p>Advanced machine learning models for data analysis</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon">
                    <i className="flaticon-analytics"></i>
                  </div>
                  <h3>Data Analytics</h3>
                  <p>Comprehensive data analysis and visualization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4>About Us</h4>
                  <p>AwakeAI is dedicated to providing innovative AI solutions for businesses worldwide.</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/team">Our Team</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4>Contact Info</h4>
                  <ul className="contact-info">
                    <li><i className="fas fa-map-marker-alt"></i> 123 AI Street, Tech City</li>
                    <li><i className="fas fa-phone"></i> +1 234 567 890</li>
                    <li><i className="fas fa-envelope"></i> info@awakeai.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Template8018Layout>
  );
}
