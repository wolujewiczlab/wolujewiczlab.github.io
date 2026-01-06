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




/* COURSES SECTION */
.courses-section {
    max-width: 1100px;
    margin: 0 auto;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 50px;
}

/* COURSE GRID */
.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

/* COURSE CARD - Biomedical Theme */
.course-card {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border-top: 4px solid #22a8b8;
}

.course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(34, 168, 184, 0.2);
}

.course-header {
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    padding: 25px;
}

.course-code {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #22a8b8;
    letter-spacing: 1px;
    margin-bottom: 8px;
}

.course-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.3;
    margin: 0;
}

.course-body {
    padding: 25px;
}

.course-meta {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.meta-badge {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    color: #666;
    background: #f0f0f0;
    padding: 5px 12px;
    border-radius: 4px;
    font-weight: 600;
}

.course-description {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #555;
}

.new-badge {
    display: inline-block;
    background: linear-gradient(135deg, #22a8b8 0%, #1a8a9a 100%);
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 4px;
    margin-left: 8px;
}





/* DIVIDER */
.section-divider {
    max-width: 1100px;
    margin: 80px auto;
    height: 2px;
    background: linear-gradient(to right, transparent, #22a8b8, transparent);
}

@media (max-width: 768px) {
    .course-grid {
        grid-template-columns: 1fr;
    }
    
    .stats-bar {
        grid-template-columns: 1fr;
    }
    
    .philosophy-section {
        padding: 40px 30px;
    }
}

/* RESPONSIVE DNA LAYOUT - All Screen Sizes */

/* Large screens (iMac, large desktop) */
@media (min-width: 1400px) {
    .nav-dna-container {
        right: 8% !important;
    }
}

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
    
    /* Force all nav links into hamburger menu */
    .greedy-nav .visible-links,
    .greedy-nav .visible-links li,
    .greedy-nav .visible-links a {
        display: none !important;
    }
    
    .greedy-nav__toggle {
        display: block !important;
    }
        max-width: 140px !important;
        font-size: 15px !important;
    }
    
    
    
    
}

/* Extra small phones */
@media (max-width: 380px) {
    .nav-dna-container {
        right: 50px !important;  /* Closer to edge on small screens */
        transform: translateY(-50%) scale(0.55) !important;
    }
    
    .site-title {
    
    .greedy-nav .visible-links {
        display: none !important;
    }
    
    .greedy-nav__toggle {
        display: block !important;
    }
        max-width: 120px !important;
        font-size: 14px !important;
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

<div class="teaching-container">
    
    <!-- CURRICULUM INNOVATION -->
    <div class="courses-section">
        <h2 class="section-title">Curriculum Innovation</h2>
        
        <div class="course-grid">
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BMS519 / MED700</div>
                    <h3 class="course-title">Computational Biomedicine</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2025</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Hands-on training in R programming and computational approaches for analyzing biomedical big data. Covers quantitative biology, genome-wide association studies, DNA/RNA sequencing workflows, and machine learning applications in precision medicine.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BMS622 / MED740</div>
                    <h3 class="course-title">Machine Learning in Medical Sciences</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2026</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Advanced training in machine learning and AI applications for biomedical research, covering supervised learning, neural networks, and practical genomic data analysis. Co-taught with Dr. Richard Feinn at the Frank H. Netter MD School of Medicine.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BMS312</div>
                    <h3 class="course-title">Biomedical Genomics</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2024, 2025</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Comprehensive exploration of genomic technologies and precision medicine applications, from sequencing platforms to clinical variant interpretation.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BIO500</div>
                    <h3 class="course-title">Neurogenetics</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Summer 2024</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Integration of genetics and neuroscience to understand inherited neurological disorders, bridging molecular mechanisms with clinical phenotypes.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BMS578</div>
                    <h3 class="course-title">Cellular Basis of Neurobiological Disorders</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2025</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Molecular and cellular mechanisms underlying neurological and psychiatric disorders.</p>
                </div>
            </div>
            
        </div>
        
        <div class="section-divider"></div>
        
        <!-- CORE COURSES -->
        <h2 class="section-title">Core Instruction</h2>
        
        <div class="course-grid">
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BMS472</div>
                    <h3 class="course-title">Biotechnology</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2024-26</span>
                        <span class="meta-badge">Undergraduate</span>
                    </div>
                    <p class="course-description">Applied molecular biology techniques and biotechnology applications in medicine and research.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BMS556</div>
                    <h3 class="course-title">Seminar in Healthcare Disparities</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2025-26</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Critical examination of health inequities and genomics in precision public health.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BIO282</div>
                    <h3 class="course-title">Genetics</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2023-25</span>
                        <span class="meta-badge">Undergraduate</span>
                    </div>
                    <p class="course-description">Foundational genetics covering inheritance, molecular mechanisms, and genomic technologies.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BMS522/L</div>
                    <h3 class="course-title">Immunology & Laboratory</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2023-24</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Immune system function with hands-on laboratory component.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-code">BIO329</div>
                    <h3 class="course-title">Neurobiology</h3>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2023-24</span>
                        <span class="meta-badge">Undergraduate</span>
                    </div>
                    <p class="course-description">Comprehensive study of nervous system structure, function, and cellular mechanisms.</p>
                </div>
            </div>
            
        </div>
    </div>
    
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
