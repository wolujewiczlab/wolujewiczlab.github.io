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
    background: #f5f5f5;  /* Light grey background like Publications */
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
    background: radial-gradient(circle, rgba(34, 168, 184, 0.02), transparent);
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
        opacity: 0.02;
    }
    50% {
        transform: translate(50px, -50px) scale(1.1);
        opacity: 0.04;
    }
}

/* GRADIENT LINES */
.gradient-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(34, 168, 184, 0.05), transparent);
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
    padding: 80px 40px;
}

/* PAGE HEADER */
.news-header {
    background: #2a2a2a;  /* Dark grey like Publications banner */
    text-align: center;
    padding: 80px 40px 60px 40px;
    margin: 0 0 0 0;
}

.news-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 56px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 15px 0;
    letter-spacing: -1px;
}

.news-header p {
    font-size: 18px;
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

/* INDIVIDUAL NEWS ITEM - White cards like Publications page */
.news-item {
    background: #ffffff;  /* Pure white background */
    border: 3px solid #22a8b8;  /* Turquoise border */
    border-radius: 8px;
    padding: 40px;
    margin-bottom: 40px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.news-item:hover {
    box-shadow: 0 8px 24px rgba(34, 168, 184, 0.2);
    transform: translateY(-2px);
}

.news-date {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #22a8b8;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
    display: inline-block;
    padding: 6px 12px;
    background: rgba(34, 168, 184, 0.1);
    border-radius: 4px;
}

.news-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 600;
    color: #1a1a1a;  /* Dark text on white */
    margin: 0 0 20px 0;
    line-height: 1.3;
}

.news-description {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.8;
    color: #333333;  /* Dark grey text */
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
    
    /* Stack layout on mobile */
    .news-item > div[style*="grid-template-columns"] {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
    }
}

/* RESPONSIVE DNA LAYOUT - All Screen Sizes */

/* Medium screens (laptop) - Keep default positioning */
@media (min-width: 769px) and (max-width: 1399px) {
    .nav-dna-container {
        right: 5% !important;
    }
}

/* Tablet and Mobile - Reposition DNA next to logo */
@media (max-width: 768px) {
    /* Position DNA right after the logo, not on top of it */
    .nav-dna-container {
        left: auto !important;
        right: 70px !important;  /* Position to left of hamburger menu */
        right: auto !important;
        transform: translateY(-50%) scale(0.65) !important;
        width: 25px !important;
        height: 40px !important;
        z-index: 50 !important;
    }
    
    .site-title {
        max-width: 180px !important;
        font-size: 15px !important;
    }
    
    .greedy-nav__toggle {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
        z-index: 200 !important;
        position: relative !important;
    }
    
    .greedy-nav .visible-links {
        display: none !important;
    }
    
    .greedy-nav .hidden-links {
        display: block !important;
        z-index: 300 !important;
    }
}

/* Extra small phones */
@media (max-width: 380px) {
    .nav-dna-container {
        right: 60px !important;  /* Closer to hamburger on small screens */
        transform: translateY(-50%) scale(0.55) !important;
    }
    
    .site-title {
        max-width: 110px !important;
        font-size: 14px !important;
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
    
    <!-- HEADER - Full Width Banner -->
    <div class="news-header">
        <h1>Latest News in the Wolujewicz Lab</h1>
        <p>Updates, achievements, and milestones from our research group</p>
    </div>
    
    <!-- CONTENT -->
    <div class="news-content">
        
        <!-- NEWS TIMELINE -->
        <div class="news-timeline">
            
            <!-- NEWS ITEM: Brandon NMCA Presentation -->
            <div class="news-item">
                <div class="news-date">December 2025</div>
                <h2 class="news-title">Brandon Assi Presents at 71st Annual NMCA Meeting</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            Brandon Assi presents his Master's thesis work at the 71st Annual Meeting Northeastern Mosquito Control Association Conference in Hyannis, MA. His research focuses on Nanopore metagenomic sequencing for real-time vector-borne pathogen surveillance in collaboration with the Connecticut Agricultural Experiment Station.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/brandon-nemca-2025.jpg" alt="Brandon Assi at NEMCA 2025" style="max-width: 300px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: CAES Research Affiliate -->
            <div class="news-item">
                <div class="news-date">November 2025</div>
                <h2 class="news-title">Dr. Wolujewicz Appointed as CAES Research Affiliate</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            Dr. Wolujewicz is appointed as a CAES Research Affiliate. This appointment formalizes ongoing collaborations with the Connecticut Agricultural Experiment Station and strengthens joint efforts in vector-borne pathogen genomics and public health surveillance.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/caes-logo.png" alt="Connecticut Agricultural Experiment Station" style="max-width: 280px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: ASHG Annual Meeting -->
            <div class="news-item">
                <div class="news-date">October 2025</div>
                <h2 class="news-title">Quinnipiac Netter Students Working in the Wolujewicz Lab Present at the 2025 ASHG Annual Meeting</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            Members of the Wolujewicz Lab had a strong presence at the American Society of Human Genetics (ASHG) Annual Meeting, highlighting multiple advances in neurogenetics research. Phil Smit (M4) co-authored a recently accepted manuscript in Translational Psychiatry entitled "Extracellular Vesicle Profiling Reveals Novel Autism Signatures in Patient-Derived Forebrain Organoids" and was selected to deliver a platform presentation at ASHG, an especially competitive and prestigious honor. Alan Chai (M3) presented a poster examining the contribution of short tandem repeat expansions to the genomic architecture of central nervous system structural birth defects, leveraging genome-wide computational detection methods and a novel machine-learning framework for pathogenicity prediction; his abstract received a Reviewers' Choice designation, placing it in the top 10% of accepted posters. In parallel, Rachel Schlak and Katrina Etts (M3) presented work exploring a digenic inheritance model for neural tube defect risk, introducing a prioritization strategy for maternally and paternally inherited variant combinations with potential clinical relevance for genetic counseling and family planning.
                        </p>
                        <a href="https://www.qu.edu/quinnipiac-today/school-of-medicine-professor-students-presentcutting-edgeresearch-onneurogenomicswork-at-national-conference-2025-11-24/" class="news-link" target="_blank">Read the Quinnipiac Today article</a>
                    </div>
                    <div>
                        <img src="/assets/images/news/ashg-2025.jpg" alt="Lab members at ASHG 2025" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: QUIP-RS Summer Research -->
            <div class="news-item">
                <div class="news-date">October 2025</div>
                <h2 class="news-title">QUIP-RS Undergraduate Researchers Present at Bobcat Weekend</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            During Quinnipiac University's 2025 QUIP-RS Summer Research Program, the Wolujewicz Lab co-mentored two undergraduate researchers, Jenna Visich and Jesse Matijevic, on independent genomics-focused projects spanning neurodevelopmental biology and infectious disease genomics. Jenna investigated brain development using RNA-seq analyses in ADNP mutant zebrafish models (co-mentored with Dr. Carter Takacs), while Jesse explored genome assembly strategies for <em>Borrelia burgdorferi</em> from both <em>Ixodes scapularis</em> vectors and cultured pathogen samples. Both students successfully presented their research during Bobcat Weekend, highlighting the lab's continued commitment to interdisciplinary, student-driven research and mentorship from project inception through public dissemination.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/quiprs-bobcat-weekend-2025.jpg" alt="QUIP-RS Students at Bobcat Weekend 2025" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: BDRP Regular Membership -->
            <div class="news-item">
                <div class="news-date">August 2025</div>
                <h2 class="news-title">Dr. Wolujewicz Approved for Regular Membership in BDRP</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            Dr. Wolujewicz was approved for Regular Membership in the Society for Birth Defects Research and Prevention (BDRP). This appointment reflects the lab's ongoing contributions to research on neural tube defects and other congenital disorders, and provides an important platform for scientific exchange, collaboration, and leadership within the birth defects research community.
                        </p>
                        <a href="https://birthdefectsresearch.org/" class="news-link" target="_blank">Visit BDRP website</a>
                    </div>
                    <div>
                        <img src="/assets/images/bdrp-logo.png" alt="Society for Birth Defects Research and Prevention" style="max-width: 280px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: BDRP Denver Conference -->
            <div class="news-item">
                <div class="news-date">July 2025</div>
                <h2 class="news-title">Invited Speaker at BDRP Annual Meeting in Denver</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            Dr. Wolujewicz served as an invited speaker and mini-course lead at the 65th Annual Meeting of the Society for Birth Defects Research and Prevention (BDRP) in Denver, Colorado. He led a focused mini-course on Artificial Intelligence in Genomics, highlighting emerging AI-driven approaches for variant interpretation, multi-omic integration, and disease risk modeling in the context of congenital disorders and neurodevelopmental disease.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/bdrp-denver-2025.jpg" alt="BDRP Annual Meeting Denver 2025" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: NEURON Conference Session Chair -->
            <div class="news-item">
                <div class="news-date">April 2025</div>
                <h2 class="news-title">Session Chair at NEURON Conference</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            Dr. Wolujewicz chaired the session "AI Tools in Neurobiology" at the annual NEURON Conference, co-hosted by Quinnipiac University and University of Connecticut. The session brought together researchers applying artificial intelligence and computational approaches to neurobiological questions spanning neurodevelopment, disease modeling, and data-intensive neuroscience.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/neuron-conference-2025.jpg" alt="NEURON Conference 2025" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: Outstanding Mentor Awards -->
            <div class="news-item">
                <div class="news-date">March 2025</div>
                <h2 class="news-title">Outstanding Mentor Awards and Gribbin Receives Wikel Scientific Scholarship Award</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            At the annual Capstone Scholars Day for the Frank H. Netter School of Medicine, John Gribbin (MD'25) was awarded the Stephen Wikel, PhD Scientific Scholarship Award for his outstanding capstone research. Dr. Paul Wolujewicz and Dr. James K. Soda were jointly recognized as Outstanding Capstone Mentors for 2025, honored for their exceptional mentorship and dedication to fostering student research careers. Their collaborative guidance helped shape John's project and exemplified the values of curiosity, perseverance, and ingenuity in pursuit of bettering the lives of others.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/capstone-awards-2025.jpg" alt="Capstone Scholars Day 2025 Awards" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: QUIP-RS 2024 Kaylee Presentation -->
            <div class="news-item">
                <div class="news-date">October 2024</div>
                <h2 class="news-title">Kaylee Pettengill Presents at QUIP-RS Research Symposium</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            As part of the 2024 QUIP-RS Research Symposium held during Bobcat Weekend, Kaylee Pettengill presented her undergraduate research project, "Identifying Structural Variation in Spina Bifida Patient Genomes," conducted in the Wolujewicz Lab. Her work applied whole-genome sequencing and case-parent trio analyses to identify copy number variants and other structural genomic alterations that may contribute to neural tube defect risk.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/kaylee-quiprs-2024.jpg" alt="Kaylee Pettengill at QUIP-RS 2024" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: NTD International Conference -->
            <div class="news-item">
                <div class="news-date">August 2024</div>
                <h2 class="news-title">Platform Presentation at 13th International Conference on Neural Tube Defects</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            Dr. Wolujewicz was accepted to deliver a platform presentation at the 13th International Conference on Neural Tube Defects, an international forum bringing together leading investigators in developmental biology, genetics, and birth defects research. The presentation entitled, "Evidence for Pathogenic Expansions in NTD Case-Parent Trios," highlights ongoing work from the Wolujewicz Lab focused on the genetic architecture of neural tube defects using family-based genomic analyses. The acceptance reflects the growing international recognition of the lab's contributions to neurogenetics and congenital disorder research.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/ntd-conference-2024.jpg" alt="13th International Conference on Neural Tube Defects 2024" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- NEWS ITEM: John Gribbin AAN Presentation -->
            <div class="news-item">
                <div class="news-date">April 2024</div>
                <h2 class="news-title">John Gribbin Presents at American Academy of Neurology Annual Meeting</h2>
                
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 35px; align-items: start; margin-top: 25px;">
                    <div>
                        <p class="news-description">
                            In April 2024, John Gribbin delivered a platform presentation at the American Academy of Neurology (AAN) Annual Meeting entitled "X Chromosome Analysis in Multiple Sclerosis for Identification of Genes Implicated in Female-biased Disease Presentation." His talk focused on computational analysis of X chromosome gene expression in multiple sclerosis, with the goal of identifying genes that may contribute to the well-recognized sex differences in MS prevalence and clinical course.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/news/john-aan-2024.jpg" alt="John Gribbin at AAN 2024" style="max-width: 450px; width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
                    </div>
                </div>
            </div>
            
            <!-- ADD MORE NEWS ITEMS BELOW THIS LINE -->
            
        </div>
    </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
