---
layout: default
title: Publications
permalink: /publications/
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

<style>
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

/* BLACK TOP NAVIGATION BAR - Same as Main Page */
.masthead {
    background-color: #000000 !important;
    position: relative;
}

.greedy-nav {
    background: #000000 !important;
}

/* ============ PUBLICATIONS — LAYOUT ============ */
.pub-page { background: #f7f7f5; margin: 0; padding: 0; min-height: 100vh; }
.pub-content { max-width: 1040px; margin: 0 auto; padding: 56px 40px 96px; }
.pub-page-title, .pub-year, .pub-title { font-variant-numeric: lining-nums; }
.pub-page-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 40px; font-weight: 600; color: #1a1a1a;
    letter-spacing: -0.3px; margin: 0 0 40px;
}
.pub-intro {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6;
    color: #666; margin: 0 0 40px; max-width: 680px;
}
.pub-intro a { color: #178896; text-decoration: none; border-bottom: 1px solid rgba(23,136,150,0.3); }
.pub-intro a:hover { border-bottom-color: #178896; }

.pub-year-block { display: grid; grid-template-columns: 120px 1fr; gap: 40px; margin-bottom: 56px; }
.pub-year {
    font-family: 'Playfair Display', Georgia, serif; font-size: 30px; font-weight: 600;
    color: #1a1a1a; margin: 0; padding-top: 26px; border-top: 2px solid #22a8b8;
    align-self: start; position: sticky; top: 24px;
}
.pub-entries { border-top: 2px solid #1a1a1a; }

.pub-item {
    display: grid; grid-template-columns: 1fr 200px; gap: 36px; align-items: start;
    padding: 30px 0; border-bottom: 1px solid #e2e2de;
}
.pub-title {
    font-family: 'Playfair Display', Georgia, serif; font-size: 21px; font-weight: 600;
    line-height: 1.35; color: #1a1a1a; margin: 0 0 10px;
}
.pub-authors { font-family: 'Inter', sans-serif; font-size: 14.5px; line-height: 1.6; color: #555; margin: 0 0 6px; }
.author-highlight { font-weight: 700; color: #1a1a1a; }
.pub-journal { font-family: 'Inter', sans-serif; font-size: 14.5px; color: #333; margin: 0 0 10px; }
.pub-tags {
    font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.04em;
    color: #8a8a8a; margin: 0 0 12px;
}
.pub-links { display: flex; gap: 20px; }
.pub-link {
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.04em;
    color: #178896; text-decoration: none; border-bottom: 1px solid rgba(23,136,150,0.3);
    transition: border-color 0.2s ease;
}
.pub-link:hover { border-bottom-color: #178896; }
.pub-link::after { content: " \2197"; font-size: 11px; }

.pub-figure {
    background: #ffffff; border: 1px solid #e2e2de; border-radius: 4px;
    padding: 10px; display: flex; align-items: center; justify-content: center;
}
.pub-figure img { display: block; max-width: 100%; max-height: 200px; width: auto; height: auto; }

@media (max-width: 860px) {
    .pub-content { padding: 40px 20px 64px; }
    .pub-page-title { font-size: 32px; margin-bottom: 28px; }
    .pub-year-block { grid-template-columns: 1fr; gap: 0; margin-bottom: 40px; }
    .pub-year { position: static; border-top: none; padding: 0 0 10px; font-size: 26px; }
    .pub-item { grid-template-columns: 1fr; gap: 16px; padding: 24px 0; }
    .pub-figure { order: -1; max-width: 260px; }
    .pub-title { font-size: 19px; }
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

<div class="pub-page">
<div class="pub-content">

    <h1 class="pub-page-title">Publications</h1>

<!--
  HOW TO ADD A PAPER
  - Copy any <article class="pub-item"> block into the right year (newest first).
  - Put the figure in /assets/images/publications/ and the PDF in /assets/pdfs/.
  - Wrap your name in <span class="author-highlight">...</span>.
  - New year: copy a whole <section class="pub-year-block"> and change the year.
-->

<!-- ============================== 2025 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2025</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Extracellular vesicle profiling reveals novel autism signatures in patient-derived forebrain organoids</h3>
                <p class="pub-authors">Stankovic I, Smit P, Cross J, Rai A, <span class="author-highlight">Wolujewicz P</span>, Greening D, Colak D</p>
                <p class="pub-journal"><em>Translational Psychiatry</em> (2025) 15(1):393</p>
                <p class="pub-tags">ASD &middot; Organoids &middot; Extracellular Vesicles</p>
                <div class="pub-links"><a href="https://doi.org/10.1038/s41398-025-03607-w" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/stankovic-2025.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/stankovic-2025.png" alt="EV profiling" loading="lazy"></div>
        </article>

    </div>
</section>

<!-- ============================== 2024 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2024</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Integrative computational analyses implicate regulatory genomic elements contributing to spina bifida</h3>
                <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Aguiar-Pulido V, Thareja G, Suhre K, Elemento O, Finnell RH, Ross ME</p>
                <p class="pub-journal"><em>Genetics in Medicine Open</em> (2024) 2:101894</p>
                <p class="pub-tags">Deep Learning &middot; Spina Bifida</p>
                <div class="pub-links"><a href="https://doi.org/10.1016/j.gimo.2024.101894" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/wolujewicz-2024.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/wolujewicz-2024.png" alt="Regulatory elements" loading="lazy"></div>
        </article>

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Schizophrenia endothelial cells exhibit higher permeability and altered angiogenesis patterns in patient-derived organoids</h3>
                <p class="pub-authors">Stankovic I, Notaras M, <span class="author-highlight">Wolujewicz P</span>, Lu T, Lis R, Ross ME, Colak D</p>
                <p class="pub-journal"><em>Translational Psychiatry</em> (2024) 14(1):53</p>
                <p class="pub-tags">Schizophrenia &middot; Blood-brain Barrier &middot; Organoids</p>
                <div class="pub-links"><a href="https://doi.org/10.1038/s41398-024-02740-2" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/stankovic-2024.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/stankovic-2024.png" alt="BBB permeability" loading="lazy"></div>
        </article>

    </div>
</section>

<!-- ============================== 2023 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2023</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">A non-coding insertional mutation of Grhl2 causes gene over-expression and multiple structural anomalies including cleft palate, spina bifida and encephalocele</h3>
                <p class="pub-authors">Crane-Smith Z, De Castro SCP, Nikolopoulou E, <span class="author-highlight">Wolujewicz P</span>, Smedley D, Lei Y, Mather E, Santos C, Hopkinson M, Pitsillides AA, Genomics England Research Consortium, Finnell RH, Ross ME, Copp AJ, Greene NDE</p>
                <p class="pub-journal"><em>Human Molecular Genetics</em> (2023) 32(17):2681–2692</p>
                <p class="pub-tags">GRHL2 &middot; Mouse Model &middot; Non-coding</p>
                <div class="pub-links"><a href="https://doi.org/10.1093/hmg/ddad094" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/crane-smith-2023.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/crane-smith-2023.png" alt="Grhl2 mutation" loading="lazy"></div>
        </article>

    </div>
</section>

<!-- ============================== 2022 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2022</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Astrocytes derived from ASD individuals alter behavior and destabilize neuronal activity through aberrant Ca<sup>2+</sup> signaling</h3>
                <p class="pub-authors">Allen M, Huang BS, Notaras MJ, Lodhi A, Barrio-Alonso E, Lituma PJ, <span class="author-highlight">Wolujewicz P</span>, Witztum J, Longo F, Chen M, Greening DW, Klann E, Ross ME, Liston C, Colak D</p>
                <p class="pub-journal"><em>Molecular Psychiatry</em> (2022) 27(5):2470–2484</p>
                <p class="pub-tags">Autism &middot; Astrocytes &middot; Calcium Signaling</p>
                <div class="pub-links"><a href="https://doi.org/10.1038/s41380-022-01486-x" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/allen-2022.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/allen-2022.png" alt="Astrocyte signaling" loading="lazy"></div>
        </article>

    </div>
</section>

<!-- ============================== 2021 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2021</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Systems biology analysis of human genomes points to key pathways conferring spina bifida risk</h3>
                <p class="pub-authors">Aguiar-Pulido V, <span class="author-highlight">Wolujewicz P</span>, Martinez-Fundichely A, Elhaik E, Thareja G, Abdel Aleem A, Chalhoub N, Cuykendall T, Al-Zamer J, Lei Y, El-Bashir H, Musser JM, Al-Kaabi A, Shaw GM, Khurana E, Suhre K, Mason CE, Elemento O, Finnell RH, Ross ME</p>
                <p class="pub-journal"><em>Proceedings of the National Academy of Sciences</em> (2021) 118(51):e2106844118</p>
                <p class="pub-tags">Systems Biology &middot; Spina Bifida</p>
                <div class="pub-links"><a href="https://doi.org/10.1073/pnas.2106844118" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/aguiar-pulido-2021.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/aguiar-pulido-2021.png" alt="Systems biology" loading="lazy"></div>
        </article>

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Unraveling the complex genetics of neural tube defects: From biological models to human genomics and back</h3>
                <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Steele JW, Kaltschmidt JA, Finnell RH, Ross ME</p>
                <p class="pub-journal"><em>Genesis</em> (2021) 59(11):e23459</p>
                <p class="pub-tags">Review &middot; Neural Tube Defects</p>
                <div class="pub-links"><a href="https://doi.org/10.1002/dvg.23459" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/wolujewicz-rev-2021.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/wolujewicz-rev-2021.png" alt="NTD genetics" loading="lazy"></div>
        </article>

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Genome-wide investigation identifies a rare copy-number variant burden associated with human spina bifida</h3>
                <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Aguiar-Pulido V, AbdelAleem A, Nair V, Thareja G, Suhre K, Shaw GM, Finnell RH, Elemento O, Ross ME</p>
                <p class="pub-journal"><em>Genetics in Medicine</em> (2021) 23(7):1211–1218</p>
                <p class="pub-tags">Copy Number Variants &middot; Spina Bifida</p>
                <div class="pub-links"><a href="https://doi.org/10.1038/s41436-021-01126-9" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/wolujewicz-2021.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/wolujewicz-2021.png" alt="CNV analysis" loading="lazy"></div>
        </article>

    </div>
</section>

<!-- ============================== 2020 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2020</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">A crowdsourced set of curated structural variants for the human genome</h3>
                <p class="pub-authors">Chapman LM, Spies N, Pai P, Lim CS, Carroll A, Narzisi G, Watson CM, Proukakis C, Clarke WE, Nariai N, Dawson E, Jones G, Blankenberg D, Brueffer C, Xiao C, Kolora SRR, Alexander N, <span class="author-highlight">Wolujewicz P</span>, Ahmed AE, Smith G, et al.</p>
                <p class="pub-journal"><em>PLoS Computational Biology</em> (2020) 16(6):e1007933</p>
                <p class="pub-tags">Structural Variants &middot; Crowdsourced &middot; Benchmarking</p>
                <div class="pub-links"><a href="https://doi.org/10.1371/journal.pcbi.1007933" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/chapman-2020.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/chapman-2020.png" alt="Structural variants" loading="lazy"></div>
        </article>

    </div>
</section>

<!-- ============================== 2019 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2019</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">The search for genetic determinants of human neural tube defects</h3>
                <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Ross ME</p>
                <p class="pub-journal"><em>Current Opinion in Pediatrics</em> (2019) 31(6):739–746</p>
                <p class="pub-tags">Review &middot; Neural Tube Defects</p>
                <div class="pub-links"><a href="https://doi.org/10.1097/MOP.0000000000000817" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/wolujewicz-2019.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/wolujewicz-2019.png" alt="NTD determinants" loading="lazy"></div>
        </article>

    </div>
</section>

<!-- ============================== 2016 ============================== -->
<section class="pub-year-block">
    <h2 class="pub-year">2016</h2>
    <div class="pub-entries">

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Astrocyte-produced leukemia inhibitory factor expands the neural stem/progenitor pool following perinatal hypoxia-ischemia</h3>
                <p class="pub-authors">Felling RJ, Covey MV, <span class="author-highlight">Wolujewicz P</span>, Batish M, Levison SW</p>
                <p class="pub-journal"><em>Journal of Neuroscience Research</em> (2016) 94(12):1531–1545</p>
                <p class="pub-tags">Astrocytes &middot; Neural Progenitors &middot; Hypoxia-ischemia</p>
                <div class="pub-links"><a href="https://doi.org/10.1002/jnr.23929" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/felling-2016.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/felling-2016.png" alt="LIF signaling" loading="lazy"></div>
        </article>

        <article class="pub-item">
            <div class="pub-text">
                <h3 class="pub-title">Profiling stem cell states in three-dimensional biomaterial niches using high content image informatics</h3>
                <p class="pub-authors">Dhaliwal A, Brenner M, <span class="author-highlight">Wolujewicz P</span>, Zhang Z, Mao Y, Batish M, Kohn J, Moghe PV</p>
                <p class="pub-journal"><em>Acta Biomaterialia</em> (2016) 45:98–109</p>
                <p class="pub-tags">Stem Cells &middot; Biomaterials &middot; Image Analysis</p>
                <div class="pub-links"><a href="https://doi.org/10.1016/j.actbio.2016.08.052" class="pub-link" target="_blank" rel="noopener">DOI</a><a href="/assets/pdfs/dhaliwal-2016.pdf" class="pub-link" target="_blank" rel="noopener">PDF</a></div>
            </div>
            <div class="pub-figure"><img src="/assets/images/publications/dhaliwal-2016.png" alt="Stem cell profiling" loading="lazy"></div>
        </article>

    </div>
</section>

</div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
