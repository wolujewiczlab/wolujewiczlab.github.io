---
layout: default
title: ""
permalink: /lab-news/
---

<style>
/* BLACK TOP NAVIGATION BAR */
.masthead {
    background-color: #000000 !important;
    position: relative;
}

.greedy-nav {
    background: #000000 !important;
}

/* Remove page title */
.page__title {
    display: none !important;
}

/* DNA NAV ANIMATION */
.nav-dna-container { position: absolute; right: 5%; top: 50%; transform: translateY(-50%); width: 33px; height: 50px; pointer-events: none; z-index: 100; }
.helix-nav { width: 100%; height: 100%; position: relative; }
.helix-nav .strand { position: absolute; width: 100%; height: 100%; }
.helix-nav .nucleotide { position: absolute; width: 7px; height: 7px; border-radius: 50%; left: 50%; }
.helix-nav .strand-left .nucleotide:nth-child(1) { top: 0%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: 0s, 0s; }
.helix-nav .strand-left .nucleotide:nth-child(2) { top: 14%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -0.7s, -0.75s; }
.helix-nav .strand-left .nucleotide:nth-child(3) { top: 28%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -1.4s, -1.5s; }
.helix-nav .strand-left .nucleotide:nth-child(4) { top: 42%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -2.1s, -2.25s; }
.helix-nav .strand-left .nucleotide:nth-child(5) { top: 56%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -2.8s, -3s; }
.helix-nav .strand-left .nucleotide:nth-child(6) { top: 70%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -3.5s, -3.75s; }
.helix-nav .strand-left .nucleotide:nth-child(7) { top: 84%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -4.2s, -4.5s; }
.helix-nav .strand-left .nucleotide:nth-child(8) { top: 98%; animation: sine-left-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -4.9s, -5.25s; }
.helix-nav .strand-right .nucleotide:nth-child(1) { top: 0%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: 0s, -3s; }
.helix-nav .strand-right .nucleotide:nth-child(2) { top: 14%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -0.7s, -3.75s; }
.helix-nav .strand-right .nucleotide:nth-child(3) { top: 28%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -1.4s, -4.5s; }
.helix-nav .strand-right .nucleotide:nth-child(4) { top: 42%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -2.1s, -5.25s; }
.helix-nav .strand-right .nucleotide:nth-child(5) { top: 56%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -2.8s, 0s; }
.helix-nav .strand-right .nucleotide:nth-child(6) { top: 70%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -3.5s, -0.75s; }
.helix-nav .strand-right .nucleotide:nth-child(7) { top: 84%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -4.2s, -1.5s; }
.helix-nav .strand-right .nucleotide:nth-child(8) { top: 98%; animation: sine-right-nav 5s ease-in-out infinite, color-chase 6s linear infinite; animation-delay: -4.9s, -2.25s; }

@keyframes color-chase {
    0%, 100% { background: radial-gradient(circle, #ec4899, #be185d); box-shadow: 0 0 20px rgba(236, 72, 153, 1); }
    16.66% { background: radial-gradient(circle, #3b82f6, #1e40af); box-shadow: 0 0 20px rgba(59, 130, 246, 1); }
    33.33% { background: radial-gradient(circle, #a855f7, #7c3aed); box-shadow: 0 0 20px rgba(168, 85, 247, 1); }
    50% { background: radial-gradient(circle, #06b6d4, #0891b2); box-shadow: 0 0 20px rgba(6, 182, 212, 1); }
    66.66% { background: radial-gradient(circle, #10b981, #059669); box-shadow: 0 0 20px rgba(16, 185, 129, 1); }
    83.33% { background: radial-gradient(circle, #f59e0b, #d97706); box-shadow: 0 0 20px rgba(245, 158, 11, 1); }
}

@keyframes sine-left-nav {
    0% { transform: translateX(-50%) translateX(-9px) scale(0.8); opacity: 0.6; }
    50% { transform: translateX(-50%) translateX(9px) scale(1.2); opacity: 1; }
    100% { transform: translateX(-50%) translateX(-9px) scale(0.8); opacity: 0.6; }
}

@keyframes sine-right-nav {
    0% { transform: translateX(-50%) translateX(9px) scale(1.2); opacity: 1; }
    50% { transform: translateX(-50%) translateX(-9px) scale(0.8); opacity: 0.6; }
    100% { transform: translateX(-50%) translateX(9px) scale(1.2); opacity: 1; }
}

/* PAGE CONTAINER WITH ANIMATED BACKGROUND */
.news-page {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
}

/* ANIMATED BACKGROUND ELEMENTS - Subtle Geometric Shapes */
.bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
}

.floating-shape {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(34, 168, 184, 0.03), transparent);
    animation: float 20s infinite ease-in-out;
}

.shape-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: -10%;
    animation-delay: 0s;
}

.shape-2 {
    width: 300px;
    height: 300px;
    top: 60%;
    right: -5%;
    animation-delay: -7s;
}

.shape-3 {
    width: 250px;
    height: 250px;
    bottom: 20%;
    left: 30%;
    animation-delay: -14s;
}

@keyframes float {
    0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.03;
    }
    50% {
        transform: translate(50px, -50px) scale(1.1);
        opacity: 0.06;
    }
}

/* GRADIENT LINES */
.gradient-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(34, 168, 184, 0.1), transparent);
    animation: slide 15s infinite linear;
}

.line-1 {
    width: 60%;
    top: 25%;
    left: -60%;
    animation-delay: 0s;
}

.line-2 {
    width: 50%;
    top: 65%;
    right: -50%;
    animation-delay: -5s;
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(200%);
    }
}

/* CONTENT CONTAINER */
.news-content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 40px 80px 40px;
}

/* PAGE HEADER */
.news-header {
    text-align: center;
    margin-bottom: 80px;
}

.news-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 64px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 20px 0;
    letter-spacing: -1px;
}

.news-header p {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter', sans-serif;
    margin: 0;
}

/* NEWS ITEMS CONTAINER */
.news-timeline {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

/* INDIVIDUAL NEWS ITEM */
.news-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 40px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.news-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(34, 168, 184, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(34, 168, 184, 0.1);
}

.news-date {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #22a8b8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
}

.news-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 20px 0;
    line-height: 1.3;
}

.news-description {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
}

.news-link {
    display: inline-block;
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #22a8b8;
    text-decoration: none;
    transition: color 0.3s ease;
}

.news-link:hover {
    color: #1a8a9a;
}

.news-link::after {
    content: " →";
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
    .news-header h1 {
        font-size: 42px;
    }
    
    .news-item {
        padding: 30px;
    }
    
    .news-title {
        font-size: 24px;
    }
    
    .news-content {
        padding: 60px 20px 40px 20px;
    }
}
</style>

<script>
// Inject DNA Helix into Navigation
(function() {
    'use strict';
    
    function addDNAToNav() {
        const masthead = document.querySelector('.masthead');
        if (!masthead || document.querySelector('.nav-dna-container')) return;
        
        const dnaContainer = document.createElement('div');
        dnaContainer.className = 'nav-dna-container';
        dnaContainer.innerHTML = `
            <div class="helix-nav">
                <div class="strand strand-left">
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                </div>
                <div class="strand strand-right">
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                    <div class="nucleotide"></div>
                </div>
            </div>
        `;
        
        masthead.appendChild(dnaContainer);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addDNAToNav);
    } else {
        addDNAToNav();
    }
    
    setTimeout(addDNAToNav, 100);
    setTimeout(addDNAToNav, 500);
})();
</script>

<div class="news-page">
    <!-- ANIMATED BACKGROUND -->
    <div class="bg-animation">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
        <div class="gradient-line line-1"></div>
        <div class="gradient-line line-2"></div>
    </div>
    
    <!-- CONTENT -->
    <div class="news-content">
        <!-- HEADER -->
        <div class="news-header">
            <h1>Latest News in the Wolujewicz Lab</h1>
            <p>Updates, achievements, and milestones from our research group</p>
        </div>
        
        <!-- NEWS TIMELINE -->
        <div class="news-timeline">
            
            <!-- NEWS ITEM TEMPLATE - Copy this block for each news item -->
            <div class="news-item">
                <div class="news-date">January 2026</div>
                <h2 class="news-title">Your News Title Here</h2>
                <p class="news-description">
                    Your news description goes here. This can be multiple paragraphs if needed. Describe the achievement, publication, grant, new lab member, or other milestone.
                </p>
                <!-- Optional: Add a link -->
                <!-- <a href="#" class="news-link" target="_blank">Read more</a> -->
            </div>
            
            <!-- ADD MORE NEWS ITEMS BELOW THIS LINE -->
            
        </div>
    </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
