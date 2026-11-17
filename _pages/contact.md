---
layout: default
title: Contact
permalink: /contact/
---

<style>
/* BLACK TOP NAVIGATION BAR - Same as Other Pages */
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

/* DNA HELIX IN NAV BAR */
.nav-dna-container {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 33px;
    height: 50px;
    pointer-events: none;
    z-index: 100;
}

.helix-nav {
    width: 100%;
    height: 100%;
    position: relative;
}

.helix-nav .strand {
    position: absolute;
    width: 100%;
    height: 100%;
}

.helix-nav .nucleotide {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    left: 50%;
}

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

/* RESPONSIVE LAYOUT - All Screen Sizes */

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
        right: 55px !important;  /* Top-right corner, left of hamburger */  /* Position after "Wolujewicz Lab" text */
        right: auto !important;
        width: 25px !important;
        height: 40px !important;
        transform: translateY(-50%) scale(0.65) !important;
        z-index: 50 !important;
        display: none !important;  /* Hide DNA on mobile */
    }
    
    /* Ensure the site title has room */
    .site-title {
        max-width: 180px !important;
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
    
    
    
    /* Hide all visible nav links on mobile */
    
    /* Make sure hidden links list works */
}

/* Extra small phones */
@media (max-width: 380px) {
    .nav-dna-container {
        left: 140px !important;  /* Closer for small screens */
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

/* ============ CONTACT ============ */
.ct-page { background: #f7f7f5; min-height: 100vh; }
.ct-content { max-width: 1040px; margin: 0 auto; padding: 56px 40px 96px; }

.ct-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 40px; font-weight: 600; color: #1a1a1a;
    letter-spacing: -0.3px; margin: 0 0 40px;
}

.ct-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }

.ct-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 25px; font-weight: 600; color: #1a1a1a; margin: 0 0 8px;
}
.ct-role {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.65;
    color: #555; margin: 0 0 32px; max-width: 420px;
}
.ct-role a { color: #1e3a5f; text-decoration: none; border-bottom: 1px solid rgba(30, 58, 95, 0.3); }
.ct-role a:hover { border-bottom-color: #1e3a5f; }

.ct-block { border-top: 1px solid #ddddd8; padding: 20px 0 0; margin-bottom: 20px; }
.ct-block:first-of-type { border-top: 2px solid #1a1a1a; }
.ct-label {
    font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase; color: #8a8a84; margin: 0 0 8px;
}
.ct-value {
    font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.6;
    color: #1a1a1a; margin: 0;
}
.ct-value a { color: #1e3a5f; text-decoration: none; border-bottom: 1px solid rgba(30, 58, 95, 0.3); }
.ct-value a:hover { border-bottom-color: #1e3a5f; }

.ct-note {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.7;
    color: #555; margin: 32px 0 0; padding-top: 24px; border-top: 1px solid #ddddd8;
    max-width: 420px;
}

.ct-figure { margin: 0; }
.ct-figure img { width: 100%; height: auto; display: block; border-radius: 4px; }
.ct-caption {
    font-family: 'Inter', sans-serif; font-size: 12.5px; color: #8a8a84;
    margin: 10px 0 0; letter-spacing: 0.02em;
}

@media (max-width: 860px) {
    .ct-content { padding: 40px 20px 64px; }
    .ct-title { font-size: 32px; margin-bottom: 28px; }
    .ct-grid { grid-template-columns: 1fr; gap: 36px; }
    .ct-figure { order: -1; }
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

<div class="ct-page">
<div class="ct-content">

    <h1 class="ct-title">Contact</h1>

    <div class="ct-grid">

        <div class="ct-details">
            <p class="ct-name">Paul Wolujewicz, PhD, MPH</p>
            <p class="ct-role">
                Assistant Professor of Medical Sciences, <a href="https://medicine.qu.edu/" target="_blank" rel="noopener">Frank H. Netter MD School of Medicine</a>, Quinnipiac University. Joint appointment in Biomedical Sciences, <a href="https://www.qu.edu/schools/health-sciences/" target="_blank" rel="noopener">School of Health Sciences</a>.
            </p>

            <div class="ct-block">
                <p class="ct-label">Email</p>
                <p class="ct-value"><a href="mailto:paul.wolujewicz@quinnipiac.edu">paul.wolujewicz@quinnipiac.edu</a></p>
            </div>

            <div class="ct-block">
                <p class="ct-label">Office</p>
                <p class="ct-value">MNH-302H<br>North Haven Campus</p>
            </div>

            <div class="ct-block">
                <p class="ct-label">Mailing address</p>
                <p class="ct-value">
                    Quinnipiac University<br>
                    Frank H. Netter MD School of Medicine<br>
                    370 Bassett Road<br>
                    North Haven, CT 06473
                </p>
            </div>

            <p class="ct-note">
                Students interested in research with the lab, and colleagues interested in collaboration, are welcome to get in touch by email.
            </p>
        </div>

        <figure class="ct-figure">
            <img src="/assets/images/north-haven-campus.jpg" alt="Quinnipiac University North Haven Campus" loading="lazy">
            <p class="ct-caption">North Haven Campus, Quinnipiac University</p>
        </figure>

    </div>

</div>
</div>
