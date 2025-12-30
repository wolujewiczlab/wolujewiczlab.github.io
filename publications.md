---
layout: default
title: Publications
permalink: /publications/
---

<style>
/* DNA NAV - Same as other pages */
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

/* HEADER */
.publications-header { background: #000000; padding: 80px 40px 60px 40px; text-align: center; }
.publications-header h1 { font-family: 'Playfair Display', serif; font-size: 56px; color: #ffffff; margin-bottom: 20px; }
.publications-header p { font-size: 18px; color: #b0b0b0; max-width: 800px; margin: 0 auto; }

/* CONTAINER */
.publications-container { max-width: 1100px; margin: 0 auto; padding: 80px 40px; background: #ffffff; }

/* YEAR SECTION */
.year-section { margin-bottom: 80px; }
.year-divider { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; color: #22a8b8; margin-bottom: 40px; padding-bottom: 15px; border-bottom: 3px solid #22a8b8; }

/* PUB CARD */
.pub-card { display: grid; grid-template-columns: 1fr 400px; gap: 40px; margin-bottom: 60px; padding: 40px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 12px; border-left: 5px solid #22a8b8; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); transition: all 0.3s ease; }
.pub-card:hover { box-shadow: 0 8px 30px rgba(34, 168, 184, 0.2); transform: translateY(-3px); }
.pub-content { display: flex; flex-direction: column; }
.pub-title { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 600; color: #1a1a1a; line-height: 1.4; margin-bottom: 15px; transition: color 0.3s; }
.pub-card:hover .pub-title { color: #22a8b8; }
.pub-authors { font-family: 'Inter', sans-serif; font-size: 15px; color: #666; line-height: 1.6; margin-bottom: 12px; }
.author-highlight { font-weight: 600; color: #1a1a1a; text-decoration: underline; }
.pub-journal { font-family: 'Inter', sans-serif; font-size: 14px; font-style: italic; color: #888; margin-bottom: 15px; }
.pub-meta { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 15px; }
.meta-tag { font-family: 'Courier New', monospace; font-size: 11px; color: #22a8b8; background: rgba(34, 168, 184, 0.1); padding: 5px 12px; border-radius: 4px; border: 1px solid rgba(34, 168, 184, 0.3); }
.pub-links { display: flex; gap: 15px; margin-top: auto; }
.pub-link { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: #22a8b8; text-decoration: none; padding: 8px 16px; border: 2px solid #22a8b8; border-radius: 6px; transition: all 0.3s; display: inline-flex; align-items: center; gap: 6px; }
.pub-link:hover { background: #22a8b8; color: #ffffff; }
.pub-visual { display: flex; align-items: center; justify-content: center; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; padding: 20px; }
.pub-visual img { max-width: 100%; max-height: 350px; height: auto; object-fit: contain; }
.under-review-badge { display: inline-block; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; color: #ffffff; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 6px 14px; border-radius: 20px; margin-left: 10px; animation: pulse-badge 2s ease-in-out infinite; }
@keyframes pulse-badge { 0%, 100% { box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); } 50% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.7); } }

/* STATS */
.pub-stats { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 50px 40px; text-align: center; }
.stats-grid { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.stat-item { color: #ffffff; }
.stat-number { font-family: 'Courier New', monospace; font-size: 48px; font-weight: 700; color: #22a8b8; line-height: 1; margin-bottom: 10px; }
.stat-label { font-family: 'Inter', sans-serif; font-size: 14px; color: #d0d0d0; text-transform: uppercase; letter-spacing: 1px; }

@media (max-width: 1024px) { .pub-card { grid-template-columns: 1fr; } .pub-visual { order: -1; } .stats-grid { grid-template-columns: 1fr; gap: 30px; } }
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

<div class="publications-header">
    <h1>Publications</h1>
    <p>Peer-reviewed research advancing our understanding of neural tube defects, neurogenetic disorders, and public health genomics</p>
</div>

<div class="pub-stats">
    <div class="stats-grid">
        <div class="stat-item"><div class="stat-number">14</div><div class="stat-label">Publications</div></div>
        <div class="stat-item"><div class="stat-number">191+</div><div class="stat-label">Citations</div></div>
        <div class="stat-item"><div class="stat-number">5</div><div class="stat-label">First Author</div></div>
    </div>
</div>

<div class="publications-container">
    
    <div class="year-section">
        <h2 class="year-divider">Under Review</h2>
        <div class="pub-card">
            <div class="pub-content">
                <h3 class="pub-title">Nanopore Sequencing Enables Broad Detection and Surveillance of Tick-Borne Pathogens in Ixodes scapularis<span class="under-review-badge">UNDER REVIEW</span></h3>
                <p class="pub-authors"><span class="author-highlight">Brandon Assi</span>, Noelle Khalil, Jesse Matijevic, Evan Rogers, Christian H. Eggers, Goudarz Molaei, <span class="author-highlight">Paul Wolujewicz</span></p>
                <p class="pub-journal">iScience (submitted)</p>
                <div class="pub-meta"><span class="meta-tag">METAGENOMICS</span><span class="meta-tag">NANOPORE</span><span class="meta-tag">PUBLIC HEALTH</span></div>
                <div class="pub-links"><a href="/assets/pdfs/assi-nanopore.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
            </div>
            <div class="pub-visual"><img src="/assets/images/publications/tick-nanopore.png" alt="Tick surveillance"></div>
        </div>
    </div>
    
    <div class="year-section">
        <h2 class="year-divider">2025</h2>
        <div class="pub-card">
            <div class="pub-content">
                <h3 class="pub-title">Extracellular vesicle profiling reveals novel autism signatures in patient-derived forebrain organoids</h3>
                <p class="pub-authors">Stankovic I, Smit P, Cross J, Rai A, <span class="author-highlight">Wolujewicz P</span>, Greening D, Colak D</p>
                <p class="pub-journal">Translational Psychiatry 15(1):393</p>
                <div class="pub-meta"><span class="meta-tag">ASD</span><span class="meta-tag">ORGANOIDS</span></div>
                <div class="pub-links"><a href="https://doi.org/10.1038/s41398-025-03607-w" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/stankovic-2025.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
            </div>
            <div class="pub-visual"><img src="/assets/images/publications/stankovic-2025.png" alt="EV profiling"></div>
        </div>
    </div>
    
    <div class="year-section">
        <h2 class="year-divider">2024</h2>
        <div class="pub-card">
            <div class="pub-content">
                <h3 class="pub-title">Integrative computational analyses implicate regulatory genomic elements contributing to spina bifida</h3>
                <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Aguiar-Pulido V, Thareja G, Suhre K, Elemento O, Finnell RH, Ross ME</p>
                <p class="pub-journal">Genetics in Medicine Open 2:101894</p>
                <div class="pub-meta"><span class="meta-tag">FIRST AUTHOR</span><span class="meta-tag">DEEP LEARNING</span><span class="meta-tag">SPINA BIFIDA</span></div>
                <div class="pub-links"><a href="https://doi.org/10.1016/j.gimo.2024.101894" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/wolujewicz-2024.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
            </div>
            <div class="pub-visual"><img src="/assets/images/publications/wolujewicz-2024.png" alt="Regulatory elements"></div>
        </div>
    </div>
    
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
