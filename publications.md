---
layout: default
title: Publications
permalink: /publications/
---

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

/* HEADER - Just title */
.publications-header { background: #000000; padding: 80px 40px 60px 40px; text-align: center; }
.publications-header h1 { font-family: 'Playfair Display', serif; font-size: 56px; color: #ffffff; margin: 0; }

/* CONTAINER */
.publications-container { max-width: 1100px; margin: 0 auto; padding: 80px 40px; background: #ffffff; }

/* PUB CARD - Smaller visual column */
.pub-card { display: grid; grid-template-columns: 1fr 320px; gap: 40px; margin-bottom: 50px; padding: 40px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 12px; border-left: 5px solid #22a8b8; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); transition: all 0.3s ease; }
.pub-card:hover { box-shadow: 0 8px 30px rgba(34, 168, 184, 0.2); transform: translateY(-3px); }
.pub-content { display: flex; flex-direction: column; }
.pub-title { font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #1a1a1a; line-height: 1.4; margin-bottom: 15px; transition: color 0.3s; }
.pub-card:hover .pub-title { color: #22a8b8; }
.pub-authors { font-family: 'Inter', sans-serif; font-size: 15px; color: #666; line-height: 1.6; margin-bottom: 12px; }
.author-highlight { font-weight: 600; color: #1a1a1a; text-decoration: underline; }
.pub-journal { font-family: 'Inter', sans-serif; font-size: 14px; font-style: italic; color: #888; margin-bottom: 15px; }
.pub-meta { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 15px; }
.meta-tag { font-family: 'Courier New', monospace; font-size: 11px; color: #22a8b8; background: rgba(34, 168, 184, 0.1); padding: 5px 12px; border-radius: 4px; border: 1px solid rgba(34, 168, 184, 0.3); }
.pub-links { display: flex; gap: 15px; margin-top: auto; }
.pub-link { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: #22a8b8; text-decoration: none; padding: 8px 16px; border: 2px solid #22a8b8; border-radius: 6px; transition: all 0.3s; display: inline-flex; align-items: center; gap: 6px; }
.pub-link:hover { background: #22a8b8; color: #ffffff; }

/* VISUAL - Smaller, optimized for high-res images */
.pub-visual { display: flex; align-items: center; justify-content: center; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; padding: 15px; }
.pub-visual img { max-width: 100%; max-height: 280px; height: auto; object-fit: contain; }

.under-review-badge { display: inline-block; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; color: #ffffff; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 6px 14px; border-radius: 20px; margin-left: 10px; animation: pulse-badge 2s ease-in-out infinite; }
@keyframes pulse-badge { 0%, 100% { box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); } 50% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.7); } }

@media (max-width: 1024px) { .pub-card { grid-template-columns: 1fr; } .pub-visual { order: -1; max-height: 300px; } }
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
</div>

<div class="publications-container">
    
    <!-- UNDER REVIEW -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Nanopore Sequencing Enables Broad Detection and Surveillance of Tick-Borne Pathogens in Ixodes scapularis<span class="under-review-badge">UNDER REVIEW</span></h3>
            <p class="pub-authors">Brandon Assi, Noelle Khalil, Jesse Matijevic, Evan Rogers, Christian H. Eggers, Goudarz Molaei, <span class="author-highlight">Paul Wolujewicz</span></p>
            <p class="pub-journal">iScience (submitted)</p>
            <div class="pub-meta"><span class="meta-tag">METAGENOMICS</span><span class="meta-tag">NANOPORE</span><span class="meta-tag">PUBLIC HEALTH</span></div>
            <div class="pub-links"><a href="/assets/pdfs/assi-nanopore.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/assi-nanopore.png" alt="Tick surveillance"></div>
    </div>
    
    <!-- 2025 -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Extracellular vesicle profiling reveals novel autism signatures in patient-derived forebrain organoids</h3>
            <p class="pub-authors">Stankovic I, Smit P, Cross J, Rai A, <span class="author-highlight">Wolujewicz P</span>, Greening D, Colak D</p>
            <p class="pub-journal">Translational Psychiatry (2025) 15(1):393</p>
            <div class="pub-meta"><span class="meta-tag">ASD</span><span class="meta-tag">ORGANOIDS</span><span class="meta-tag">EXTRACELLULAR VESICLES</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1038/s41398-025-03607-w" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/stankovic-2025.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/stankovic-2025.png" alt="EV profiling"></div>
    </div>
    
    <!-- 2024 - Wolujewicz FIRST AUTHOR -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Integrative computational analyses implicate regulatory genomic elements contributing to spina bifida</h3>
            <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Aguiar-Pulido V, Thareja G, Suhre K, Elemento O, Finnell RH, Ross ME</p>
            <p class="pub-journal">Genetics in Medicine Open (2024) 2:101894</p>
            <div class="pub-meta"><span class="meta-tag">FIRST AUTHOR</span><span class="meta-tag">DEEP LEARNING</span><span class="meta-tag">SPINA BIFIDA</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1016/j.gimo.2024.101894" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/wolujewicz-2024.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/wolujewicz-2024.png" alt="Regulatory elements"></div>
    </div>
    
    <!-- 2024 - Stankovic -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Schizophrenia endothelial cells exhibit higher permeability and altered angiogenesis patterns in patient-derived organoids</h3>
            <p class="pub-authors">Stankovic I, Notaras M, <span class="author-highlight">Wolujewicz P</span>, Lu T, Lis R, Ross ME, Colak D</p>
            <p class="pub-journal">Translational Psychiatry (2024) 14(1):53</p>
            <div class="pub-meta"><span class="meta-tag">SCHIZOPHRENIA</span><span class="meta-tag">BLOOD-BRAIN BARRIER</span><span class="meta-tag">ORGANOIDS</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1038/s41398-024-02740-2" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/stankovic-2024.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/stankovic-2024.png" alt="BBB permeability"></div>
    </div>
    
    <!-- 2023 -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">A non-coding insertional mutation of Grhl2 causes gene over-expression and multiple structural anomalies including cleft palate, spina bifida and encephalocele</h3>
            <p class="pub-authors">Crane-Smith Z, De Castro SCP, Nikolopoulou E, <span class="author-highlight">Wolujewicz P</span>, Smedley D, Lei Y, Mather E, Santos C, Hopkinson M, Pitsillides AA, Genomics England Research Consortium, Finnell RH, Ross ME, Copp AJ, Greene NDE</p>
            <p class="pub-journal">Human Molecular Genetics (2023) 32(17):2681–2692</p>
            <div class="pub-meta"><span class="meta-tag">GRHL2</span><span class="meta-tag">MOUSE MODEL</span><span class="meta-tag">NON-CODING</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1093/hmg/ddad094" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/crane-smith-2023.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/crane-smith-2023.png" alt="Grhl2 mutation"></div>
    </div>
    
    <!-- 2022 -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Astrocytes derived from ASD individuals alter behavior and destabilize neuronal activity through aberrant Ca<sup>2+</sup> signaling</h3>
            <p class="pub-authors">Allen M, Huang BS, Notaras MJ, Lodhi A, Barrio-Alonso E, Lituma PJ, <span class="author-highlight">Wolujewicz P</span>, Witztum J, Longo F, Chen M, Greening DW, Klann E, Ross ME, Liston C, Colak D</p>
            <p class="pub-journal">Molecular Psychiatry (2022) 27(5):2470–2484</p>
            <div class="pub-meta"><span class="meta-tag">AUTISM</span><span class="meta-tag">ASTROCYTES</span><span class="meta-tag">CALCIUM SIGNALING</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1038/s41380-022-01486-x" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/allen-2022.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/allen-2022.png" alt="Astrocyte signaling"></div>
    </div>
    
    <!-- 2021 - Aguiar-Pulido PNAS -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Systems biology analysis of human genomes points to key pathways conferring spina bifida risk</h3>
            <p class="pub-authors">Aguiar-Pulido V, <span class="author-highlight">Wolujewicz P</span>, Martinez-Fundichely A, Elhaik E, Thareja G, Abdel Aleem A, Chalhoub N, Cuykendall T, Al-Zamer J, Lei Y, El-Bashir H, Musser JM, Al-Kaabi A, Shaw GM, Khurana E, Suhre K, Mason CE, Elemento O, Finnell RH, Ross ME</p>
            <p class="pub-journal">Proceedings of the National Academy of Sciences (2021) 118(51):e2106844118</p>
            <div class="pub-meta"><span class="meta-tag">SYSTEMS BIOLOGY</span><span class="meta-tag">SPINA BIFIDA</span><span class="meta-tag">PNAS</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1073/pnas.2106844118" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/aguiar-pulido-2021.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/aguiar-pulido-2021.png" alt="Systems biology"></div>
    </div>
    
    <!-- 2021 - Wolujewicz REVIEW -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Unraveling the complex genetics of neural tube defects: From biological models to human genomics and back</h3>
            <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Steele JW, Kaltschmidt JA, Finnell RH, Ross ME</p>
            <p class="pub-journal">Genesis (2021) 59(11):e23459</p>
            <div class="pub-meta"><span class="meta-tag">FIRST AUTHOR</span><span class="meta-tag">REVIEW</span><span class="meta-tag">NEURAL TUBE DEFECTS</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1002/dvg.23459" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/wolujewicz-rev-2021.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/wolujewicz-rev-2021.png" alt="NTD genetics"></div>
    </div>
    
    <!-- 2021 - Wolujewicz CNV -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Genome-wide investigation identifies a rare copy-number variant burden associated with human spina bifida</h3>
            <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Aguiar-Pulido V, AbdelAleem A, Nair V, Thareja G, Suhre K, Shaw GM, Finnell RH, Elemento O, Ross ME</p>
            <p class="pub-journal">Genetics in Medicine (2021) 23(7):1211–1218</p>
            <div class="pub-meta"><span class="meta-tag">FIRST AUTHOR</span><span class="meta-tag">COPY NUMBER VARIANTS</span><span class="meta-tag">SPINA BIFIDA</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1038/s41436-021-01126-9" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/wolujewicz-2021.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/wolujewicz-2021.png" alt="CNV analysis"></div>
    </div>
    
    <!-- 2020 -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">A crowdsourced set of curated structural variants for the human genome</h3>
            <p class="pub-authors">Chapman LM, Spies N, Pai P, Lim CS, Carroll A, Narzisi G, Watson CM, Proukakis C, Clarke WE, Nariai N, Dawson E, Jones G, Blankenberg D, Brueffer C, Xiao C, Kolora SRR, Alexander N, <span class="author-highlight">Wolujewicz P</span>, Ahmed AE, Smith G, et al.</p>
            <p class="pub-journal">PLoS Computational Biology (2020) 16(6):e1007933</p>
            <div class="pub-meta"><span class="meta-tag">STRUCTURAL VARIANTS</span><span class="meta-tag">CROWDSOURCED</span><span class="meta-tag">BENCHMARKING</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1371/journal.pcbi.1007933" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/chapman-2020.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/chapman-2020.png" alt="Structural variants"></div>
    </div>
    
    <!-- 2019 - Wolujewicz FIRST AUTHOR -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">The search for genetic determinants of human neural tube defects</h3>
            <p class="pub-authors"><span class="author-highlight">Wolujewicz P</span>, Ross ME</p>
            <p class="pub-journal">Current Opinion in Pediatrics (2019) 31(6):739–746</p>
            <div class="pub-meta"><span class="meta-tag">FIRST AUTHOR</span><span class="meta-tag">REVIEW</span><span class="meta-tag">NEURAL TUBE DEFECTS</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1097/MOP.0000000000000817" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/wolujewicz-2019.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/wolujewicz-2019.png" alt="NTD determinants"></div>
    </div>
    
    <!-- 2016 - Felling -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Astrocyte-produced leukemia inhibitory factor expands the neural stem/progenitor pool following perinatal hypoxia-ischemia</h3>
            <p class="pub-authors">Felling RJ, Covey MV, <span class="author-highlight">Wolujewicz P</span>, Batish M, Levison SW</p>
            <p class="pub-journal">Journal of Neuroscience Research (2016) 94(12):1531–1545</p>
            <div class="pub-meta"><span class="meta-tag">ASTROCYTES</span><span class="meta-tag">NEURAL PROGENITORS</span><span class="meta-tag">HYPOXIA-ISCHEMIA</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1002/jnr.23929" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/felling-2016.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/felling-2016.png" alt="LIF signaling"></div>
    </div>
    
    <!-- 2016 - Dhaliwal -->
    <div class="pub-card">
        <div class="pub-content">
            <h3 class="pub-title">Profiling stem cell states in three-dimensional biomaterial niches using high content image informatics</h3>
            <p class="pub-authors">Dhaliwal A, Brenner M, <span class="author-highlight">Wolujewicz P</span>, Zhang Z, Mao Y, Batish M, Kohn J, Moghe PV</p>
            <p class="pub-journal">Acta Biomaterialia (2016) 45:98–109</p>
            <div class="pub-meta"><span class="meta-tag">STEM CELLS</span><span class="meta-tag">BIOMATERIALS</span><span class="meta-tag">IMAGE ANALYSIS</span></div>
            <div class="pub-links"><a href="https://doi.org/10.1016/j.actbio.2016.08.052" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a><a href="/assets/pdfs/dhaliwal-2016.pdf" class="pub-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a></div>
        </div>
        <div class="pub-visual"><img src="/assets/images/publications/dhaliwal-2016.png" alt="Stem cell profiling"></div>
    </div>
    
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
