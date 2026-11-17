---
layout: default
title: ""
permalink: /teaching/
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

/* DNA NAV */
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

/* MAIN CONTAINER */
.teaching-container {
    max-width: 100%;
    background: #f5f5f5;
    padding: 80px 40px;
    margin-top: 0 !important;
}




/* ============ TEACHING ============ */
.tc-page { background: #f7f7f5; min-height: 100vh; }
.tc-content { max-width: 940px; margin: 0 auto; padding: 56px 40px 96px; }

.tc-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 40px; font-weight: 600; color: #1a1a1a;
    letter-spacing: -0.3px; margin: 0 0 16px;
}
.tc-intro {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.7;
    color: #666; margin: 0 0 48px; max-width: 640px;
}

.tc-heading {
    font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.14em; text-transform: uppercase; color: #8a8a84;
    margin: 0; padding-bottom: 14px; border-bottom: 2px solid #1a1a1a;
}

.tc-course { padding: 28px 0; border-bottom: 1px solid #e2e2de; }
.tc-code {
    font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 600;
    letter-spacing: 0.06em; color: #1e3a5f; margin: 0 0 6px;
}
.tc-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 21px; font-weight: 600; color: #1a1a1a; margin: 0 0 8px;
}
.tc-meta {
    font-family: 'Inter', sans-serif; font-size: 13px; color: #8a8a84;
    margin: 0 0 12px; letter-spacing: 0.02em;
}
.tc-blurb {
    font-family: 'Inter', sans-serif; font-size: 15.5px; line-height: 1.7;
    color: #333; margin: 0; max-width: 680px;
}

.tc-note {
    font-family: 'Inter', sans-serif; font-size: 15.5px; line-height: 1.7;
    color: #333; margin: 28px 0 0; max-width: 680px;
}

.tc-section-gap { margin-top: 64px; }

/* Previous teaching: compact rows, no blurbs */
.tc-past {
    padding: 16px 0; border-bottom: 1px solid #e2e2de;
    display: grid; grid-template-columns: 150px 1fr 200px; gap: 24px; align-items: baseline;
}
.tc-past .tc-code { margin: 0; }
.tc-past-name {
    font-family: 'Inter', sans-serif; font-size: 15.5px; color: #1a1a1a; margin: 0;
}
.tc-past-meta {
    font-family: 'Inter', sans-serif; font-size: 13px; color: #8a8a84; margin: 0; text-align: right;
}

@media (max-width: 860px) {
    .tc-content { padding: 40px 20px 64px; }
    .tc-title { font-size: 32px; }
    .tc-course { padding: 22px 0; }
    .tc-past { grid-template-columns: 1fr; gap: 4px; padding: 14px 0; }
    .tc-past-meta { text-align: left; }
}

/* RESPONSIVE DNA LAYOUT - All Screen Sizes */

/* Medium screens (laptop) */
@media (min-width: 769px) and (max-width: 1399px) {
    .nav-dna-container {
        right: 5% !important;
    }
}

/* Tablet and Mobile */
@media (max-width: 768px) {
    .nav-dna-container {
        left: auto !important;
        right: 55px !important;  /* Top-right corner, left of hamburger */
        right: auto !important;
        width: 25px !important;
        height: 40px !important;
        transform: translateY(-50%) scale(0.65) !important;
        z-index: 50 !important;
        display: none !important;  /* Hide DNA on mobile */
    }
    
    .site-title {
        max-width: 140px !important;
        font-size: 15px !important;
    }

    
    /* Force all nav links into hamburger menu */
    .greedy-nav .visible-links,
    .greedy-nav .visible-links li,
    .greedy-nav .visible-links a {
        display: none !important;
    }
    
    .greedy-nav__toggle {
        display: block !important;
    }
    
    
    
    
}

/* Extra small phones */
@media (max-width: 380px) {
    .nav-dna-container {
        right: 50px !important;  /* Closer to edge on small screens */
        transform: translateY(-50%) scale(0.55) !important;
    }
    
    .site-title {
        max-width: 120px !important;
        font-size: 14px !important;
    }

    
    .greedy-nav .visible-links {
        display: none !important;
    }
    
    .greedy-nav__toggle {
        display: block !important;
    }
}
</style>

<script>
(function() {
    'use strict';
    function addDNAToNav() {
        const masthead = document.querySelector('.masthead');
        if (!masthead || document.querySelector('.nav-dna-container')) return;
        const dnaContainer = document.createElement('div');
        dnaContainer.className = 'nav-dna-container';
        dnaContainer.innerHTML = '<div class="helix-nav"><div class="strand strand-left"><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div></div><div class="strand strand-right"><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div><div class="nucleotide"></div></div></div>';
        masthead.appendChild(dnaContainer);
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', addDNAToNav); } else { addDNAToNav(); }
    setTimeout(addDNAToNav, 100); setTimeout(addDNAToNav, 500);
})();
</script>

<div class="tc-page">
<div class="tc-content">

    <h1 class="tc-title">Teaching</h1>
    <p class="tc-intro">
        Courses taught at Quinnipiac University in the School of Health Sciences and the Frank H. Netter MD School of Medicine.
    </p>

    <p class="tc-heading">Current Courses</p>

    <div class="tc-course">
        <p class="tc-code">BMS 519 / MED 700</p>
        <p class="tc-name">Computational Biomedicine</p>
        <p class="tc-meta">Graduate</p>
        <p class="tc-blurb">
            Hands-on training in R programming and computational approaches for analyzing biomedical data. Covers quantitative biology, genome-wide association studies, DNA and RNA sequencing workflows, and machine learning applications in precision medicine.
        </p>
    </div>

    <div class="tc-course">
        <p class="tc-code">BMS 578</p>
        <p class="tc-name">Cellular Basis of Neurobiological Disorders</p>
        <p class="tc-meta">Graduate</p>
        <p class="tc-blurb">
            The cellular, molecular, and genetic mechanisms underlying neurodevelopmental and neurodegenerative disease, worked through the primary literature.
        </p>
    </div>

    <div class="tc-course">
        <p class="tc-code">BMS 312</p>
        <p class="tc-name">Biomedical Genomics</p>
        <p class="tc-meta">Undergraduate</p>
        <p class="tc-blurb">
            How genomic technologies are changing the diagnosis, risk assessment, and treatment of human disease. Students work with clinical case studies, population-scale sequencing data, and current research literature.
        </p>
    </div>

    <p class="tc-note">
        I also teach in the pre-clerkship neuroscience and neurology curriculum at the Frank H. Netter MD School of Medicine.
    </p>

    <div class="tc-section-gap"></div>
    <p class="tc-heading">Previous Teaching</p>

    <div class="tc-past">
        <p class="tc-code">BMS 622 / MED 740</p>
        <p class="tc-past-name">Machine Learning in Medical Sciences</p>
        <p class="tc-past-meta">Graduate &middot; Spring 2026</p>
    </div>

    <div class="tc-past">
        <p class="tc-code">BMS 556</p>
        <p class="tc-past-name">Seminar in Healthcare Disparities</p>
        <p class="tc-past-meta">Graduate &middot; Spring 2025&ndash;26</p>
    </div>

    <div class="tc-past">
        <p class="tc-code">BMS 472</p>
        <p class="tc-past-name">Biotechnology</p>
        <p class="tc-past-meta">Undergraduate &middot; Spring 2024&ndash;26</p>
    </div>

    <div class="tc-past">
        <p class="tc-code">BIO 282</p>
        <p class="tc-past-name">Genetics</p>
        <p class="tc-past-meta">Undergraduate &middot; Fall 2023&ndash;25</p>
    </div>

    <div class="tc-past">
        <p class="tc-code">BIO 500</p>
        <p class="tc-past-name">Neurogenetics</p>
        <p class="tc-past-meta">Graduate &middot; Summer 2024</p>
    </div>

    <div class="tc-past">
        <p class="tc-code">BMS 522/L</p>
        <p class="tc-past-name">Immunology &amp; Laboratory</p>
        <p class="tc-past-meta">Graduate &middot; Fall 2023&ndash;24</p>
    </div>

    <div class="tc-past">
        <p class="tc-code">BIO 329</p>
        <p class="tc-past-name">Neurobiology</p>
        <p class="tc-past-meta">Undergraduate &middot; Spring 2023&ndash;24</p>
    </div>

</div>
</div>
