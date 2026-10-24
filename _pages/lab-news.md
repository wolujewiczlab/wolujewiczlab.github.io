---
layout: default
title: ""
permalink: /lab-news/
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

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

/* ============ LAB NEWS — LAYOUT ============ */
.news-page-title, .news-year, .news-title { font-variant-numeric: lining-nums; }
.news-page {
    background: #f7f7f5;
    margin: 0;
    padding: 0;
    min-height: 100vh;
}

.news-page-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 40px;
    font-weight: 600;
    color: #1a1a1a;
    letter-spacing: -0.3px;
    margin: 0 0 40px;
}

.news-content {
    max-width: 1040px;
    margin: 0 auto;
    padding: 56px 40px 96px;
}

/* Year block: year label on the left, entries on the right */
.news-year-block {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 40px;
    margin-bottom: 56px;
}
.news-year {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 30px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
    padding-top: 26px;
    border-top: 2px solid #22a8b8;
    align-self: start;
    position: sticky;
    top: 24px;
}
.news-entries { border-top: 2px solid #1a1a1a; }

/* Single entry */
.news-item {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 32px;
    align-items: start;
    padding: 28px 0;
    border-bottom: 1px solid #e2e2de;
}
.news-item--text { grid-template-columns: 1fr; }

.news-date {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #178896;
    margin-bottom: 8px;
}
.news-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 23px;
    font-weight: 600;
    line-height: 1.3;
    color: #1a1a1a;
    margin: 0 0 10px;
}
.news-description {
    font-family: 'Inter', sans-serif;
    font-size: 15.5px;
    line-height: 1.7;
    color: #474747;
    margin: 0;
    max-width: 640px;
}
.news-link {
    display: inline-block;
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #178896;
    text-decoration: none;
    border-bottom: 1px solid rgba(23, 136, 150, 0.3);
    transition: border-color 0.2s ease;
}
.news-link:hover { border-bottom-color: #178896; }
.news-link::after { content: " \2192"; }

.news-thumb {
    display: block;
    box-sizing: border-box;
    width: 220px;
    height: auto;
    border-radius: 4px;
}
.news-thumb--logo {
    background: #ffffff;
    border: 1px solid #e2e2de;
    padding: 16px 18px;
}

/* Short one-line entries (no title, no photo) */
.news-item--brief {
    grid-template-columns: 1fr;
    padding: 18px 0;
}
.news-item--brief .news-date { margin-bottom: 4px; }
.news-item--brief .news-description { color: #333; }

@media (max-width: 860px) {
    .news-content { padding: 40px 20px 64px; }
    .news-page-title { font-size: 32px; margin-bottom: 28px; }
    .news-year-block { grid-template-columns: 1fr; gap: 0; margin-bottom: 40px; }
    .news-year { position: static; border-top: none; padding: 0 0 10px; font-size: 26px; }
    .news-item { grid-template-columns: 1fr; gap: 16px; padding: 24px 0; }
    .news-thumb { width: 100%; order: -1; }
    .news-thumb--logo { width: auto; max-width: 260px; }
    .news-title { font-size: 21px; }
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
        right: 55px !important;  /* Top-right corner, left of hamburger */
        right: auto !important;
        transform: translateY(-50%) scale(0.65) !important;
        width: 25px !important;
        height: 40px !important;
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
        max-width: 180px !important;
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

    <div class="news-content">
        <h1 class="news-page-title">Lab News</h1>

<!--
  HOW TO ADD NEWS
  - Entry with photo: copy any <article class="news-item"> block; put the image in /assets/images/news/.
  - Entry without photo: use <article class="news-item news-item--text"> and leave out the <img>.
  - One-liners: use <article class="news-item news-item--brief"> with just a date and one sentence.
  - Newest first. Keep descriptions to 1-3 sentences.
-->

<!-- ============================== 2026 ============================== -->
<section class="news-year-block">
    <h2 class="news-year">2026</h2>
    <div class="news-entries">

        <article class="news-item">
            <div>
                <div class="news-date">September 2026</div>
                <h3 class="news-title">Joining the Frank H. Netter MD School of Medicine</h3>
                <p class="news-description">Dr. Wolujewicz joined the Department of Medical Sciences at the Frank H. Netter MD School of Medicine as Assistant Professor, teaching in the pre-clerkship neuroscience curriculum. He keeps a joint appointment in Biomedical Sciences in the School of Health Sciences, where the lab's graduate teaching and mentoring continue.</p>
            </div>
            <img class="news-thumb news-thumb--logo" style="padding: 20px 44px;" src="/assets/images/news/netter-som-seal.jpg" alt="Frank H. Netter MD School of Medicine seal">
        </article>

        <article class="news-item news-item--text">
            <div>
                <div class="news-date">August 2026</div>
                <h3 class="news-title">Faculty Fellow, User Experience and Behavioral Insights Lab</h3>
                <p class="news-description">Dr. Wolujewicz was named a 2026&ndash;27 Faculty Fellow of the School of Business's User Experience and Behavioral Insights (UXBI) Lab, representing medicine in its interdisciplinary Faculty Lab Fellows Program. He will present the lab's research in the UXBI Fall 2026 Research Series on November 12.</p>
                <a href="https://www.qu.edu/schools/business/facilities-and-resources/user-experience-and-behavioral-insights-lab/" class="news-link" target="_blank" rel="noopener">About the UXBI Lab</a>
            </div>
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">June 2026</div>
                <h3 class="news-title">Platform Presentation and Student Poster at BDRP 2026</h3>
                <!-- TODO: add talk/poster titles; swap the logo for a meeting photo if you have one -->
                <p class="news-description">At the 66th Annual Meeting of the Society for Birth Defects Research and Prevention in Washington, DC, Dr. Wolujewicz gave a platform presentation on tandem repeat expansions in myelomeningocele case-parent trios. Netter medical students Maya Puar and Katrina Etts (M4) co-presented a poster.</p>
            </div>
            <img class="news-thumb news-thumb--logo" src="/assets/images/bdrp-logo.png" alt="Society for Birth Defects Research and Prevention">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">April 2026</div>
                <h3 class="news-title">Outstanding Faculty Scholar Award</h3>
                <p class="news-description">Dr. Wolujewicz received the 2026 School of Health Sciences Outstanding Faculty Scholar Award at Quinnipiac University, recognizing excellence in research and scholarship.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/faculty-scholar-award-2026.jpg" alt="Dr. Wolujewicz receiving the 2026 Outstanding Faculty Scholar Award">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">April 2026</div>
                <h3 class="news-title">NEURON 2026: Workshop and Student Posters</h3>
                <p class="news-description">At the 39th NEURON conference (Quinnipiac/UConn), Dr. Wolujewicz led the workshop "AI and Systems Neuroscience." Natalie Grober presented her HNRNPU zebrafish thesis work, Audrey Chodkiewicz presented on early-life stress and the rat hippocampal transcriptome, and Reese Triana presented hippocampal volumetrics in RRMS, including a data blitz talk.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/neuron-conference-2026.jpg" alt="Wolujewicz Lab at NEURON 2026">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">March 2026</div>
                <h3 class="news-title">Krabbe Translational Research Network Meeting</h3>
                <p class="news-description">Invited by the Rosenau Family Research Foundation, Dr. Wolujewicz joined the KTRN2026 translational science roundtable in Minneapolis, focused on GALC variant characterization, biomarkers, and newborn screening for Krabbe disease.</p>
                <a href="https://www.rosenaufoundation.org" class="news-link" target="_blank" rel="noopener">Rosenau Family Research Foundation</a>
            </div>
            <img class="news-thumb" src="/assets/images/news/ktrn-2026.jpg" alt="Dr. Wolujewicz at KTRN2026 in Minneapolis">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">March 2026</div>
                <h3 class="news-title">CDC Vector Week 2026</h3>
                <p class="news-description">Dr. Wolujewicz presented the lab's tick-borne pathogen metagenomics work at CDC Vector Week in Fort Collins, CO, and took part in the CSTE/CDC Vector-Borne Disease Modeling Workshop.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/cdc-vector-week-2026.jpg" alt="CDC Vector Week 2026">
        </article>

    </div>
</section>

<!-- ============================== 2025 ============================== -->
<section class="news-year-block">
    <h2 class="news-year">2025</h2>
    <div class="news-entries">

        <article class="news-item">
            <div>
                <div class="news-date">December 2025</div>
                <h3 class="news-title">Brandon Assi Presents at NMCA 2025</h3>
                <p class="news-description">Brandon Assi presented his Master's thesis on Nanopore metagenomic sequencing for real-time vector-borne pathogen surveillance, done with the Connecticut Agricultural Experiment Station, at the 71st Northeastern Mosquito Control Association meeting.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/brandon-nemca-2025.jpg" alt="Brandon Assi at NMCA 2025">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">November 2025</div>
                <h3 class="news-title">Research Affiliate, Connecticut Agricultural Experiment Station</h3>
                <p class="news-description">Dr. Wolujewicz was appointed a Research Affiliate at CAES, formalizing the lab's collaborations on vector-borne pathogen genomics and public health surveillance.</p>
            </div>
            <img class="news-thumb news-thumb--logo" src="/assets/images/caes-logo.png" alt="Connecticut Agricultural Experiment Station">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">October 2025</div>
                <h3 class="news-title">Netter Students Present at ASHG 2025</h3>
                <p class="news-description">Phil Smit (M4) gave a platform talk on extracellular vesicle signatures in autism organoids (<em>Translational Psychiatry</em>). Alan Chai (M3) earned a Reviewers' Choice award (top 10%) for his poster on tandem repeat expansions in CNS birth defects, and Rachel Schlak and Katrina Etts (M3) presented a digenic inheritance model for neural tube defect risk.</p>
                <a href="https://www.qu.edu/quinnipiac-today/school-of-medicine-professor-students-presentcutting-edgeresearch-onneurogenomicswork-at-national-conference-2025-11-24/" class="news-link" target="_blank" rel="noopener">Quinnipiac Today article</a>
            </div>
            <img class="news-thumb" src="/assets/images/news/ashg-2025.jpg" alt="Lab members at ASHG 2025">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">October 2025</div>
                <h3 class="news-title">QUIP-RS Researchers Present at Bobcat Weekend</h3>
                <p class="news-description">Summer researchers Jenna Visich (RNA-seq in ADNP mutant zebrafish, co-mentored with Dr. Carter Takacs) and Jesse Matijevic (<em>Borrelia burgdorferi</em> genome assembly) presented their projects.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/quiprs-bobcat-weekend-2025.jpg" alt="QUIP-RS students at Bobcat Weekend 2025">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">August 2025</div>
                <h3 class="news-title">Regular Membership in BDRP</h3>
                <p class="news-description">Dr. Wolujewicz was approved for Regular Membership in the Society for Birth Defects Research and Prevention.</p>
            </div>
            <img class="news-thumb news-thumb--logo" src="/assets/images/bdrp-logo.png" alt="Society for Birth Defects Research and Prevention">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">July 2025</div>
                <h3 class="news-title">Invited Speaker at BDRP 2025, Denver</h3>
                <p class="news-description">Dr. Wolujewicz led a mini-course on Artificial Intelligence in Genomics at the 65th BDRP Annual Meeting, covering AI approaches to variant interpretation, multi-omic integration, and risk modeling.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/bdrp-denver-2025.jpg" alt="BDRP Annual Meeting, Denver 2025">
        </article>

        <article class="news-item news-item--brief">
            <div>
                <div class="news-date">April 2025</div>
                <p class="news-description">Dr. Wolujewicz chaired the "AI Tools in Neurobiology" session at the NEURON Conference.</p>
            </div>
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">March 2025</div>
                <h3 class="news-title">Outstanding Capstone Mentor Award</h3>
                <p class="news-description">Dr. Wolujewicz and Dr. James K. Soda were named 2025 Outstanding Capstone Mentors at Netter's Capstone Scholars Day, where their mentee John Gribbin (MD '25) received the Stephen Wikel, PhD Scientific Scholarship Award.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/capstone-awards-2025.jpg" alt="Capstone Scholars Day 2025 awards">
        </article>

    </div>
</section>

<!-- ============================== 2024 ============================== -->
<section class="news-year-block">
    <h2 class="news-year">2024</h2>
    <div class="news-entries">

        <article class="news-item">
            <div>
                <div class="news-date">October 2024</div>
                <h3 class="news-title">Kaylee Pettengill Presents at QUIP-RS Symposium</h3>
                <p class="news-description">Kaylee presented "Identifying Structural Variation in Spina Bifida Patient Genomes," applying trio whole-genome sequencing to detect CNVs and structural variants in neural tube defects.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/kaylee-quiprs-2024.jpg" alt="Kaylee Pettengill at QUIP-RS 2024">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">August 2024</div>
                <h3 class="news-title">Platform Talk at the 13th International Conference on Neural Tube Defects</h3>
                <p class="news-description">Dr. Wolujewicz presented "Evidence for Pathogenic Expansions in NTD Case-Parent Trios."</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/ntd-conference-2024.jpg" alt="13th International Conference on Neural Tube Defects">
        </article>

        <article class="news-item">
            <div>
                <div class="news-date">April 2024</div>
                <h3 class="news-title">John Gribbin Presents at AAN 2024</h3>
                <p class="news-description">John gave a platform talk on X chromosome analysis in multiple sclerosis to identify genes behind female-biased disease presentation.</p>
            </div>
            <img class="news-thumb" src="/assets/images/news/john-aan-2024.jpg" alt="John Gribbin at AAN 2024">
        </article>
    </div>
</section>

    </div>
</div>
