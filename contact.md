---
layout: default
title: Contact
permalink: /contact/
---

<style>
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

/* Contact Cards - Fixed Height for Alignment */
.contact-card {
    background: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.contact-card h2 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: #1a1a1a;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #22a8b8;
    min-height: 75px;
    display: flex;
    align-items: center;
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

<!-- PAGE HEADER - Same Black Background as Other Pages -->
<div style="background: #000000; padding: 80px 40px 60px 40px; text-align: center;">
    <h1 style="font-family: 'Playfair Display', serif; font-size: 56px; color: #ffffff; margin-bottom: 20px;">Contact</h1>
    <p style="font-size: 20px; color: #b0b0b0; max-width: 700px; margin: 0 auto;">Get in touch with our laboratory or visit us at Quinnipiac University</p>
</div>

<!-- MAP SECTION - Correct Connecticut Location -->
<div style="width: 100%; height: 500px; position: relative; margin-bottom: 0;">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94551.06!2d-72.89!3d41.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9d7e3c1e1e1%3A0x1e1e1e1e1e1e1e1e!2sQuinnipiac%20University!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
        style="width: 100%; height: 100%; border: none; filter: grayscale(10%);"
        loading="lazy">
    </iframe>
</div>

<!-- CONTACT INFO SECTION -->
<div style="background: #f8f8f8; padding: 80px 40px;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 60px;">
        
        <!-- Mount Carmel Campus Card -->
        <div class="contact-card">
            <span style="display: inline-block; background: #dc2626; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 10px;">MOUNT CARMEL CAMPUS</span>
            <h2>Quinnipiac University - Hamden</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Principal Investigator</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Paul Wolujewicz, PhD, MPH<br>Assistant Professor</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Address</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Quinnipiac University<br>School of Health Sciences<br>275 Mount Carmel Avenue<br>Hamden, CT 06518</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Email</h3>
                <p style="font-size: 16px; margin: 0;"><a href="mailto:paul.wolujewicz@quinnipiac.edu" style="color: #22a8b8; text-decoration: none;">paul.wolujewicz@quinnipiac.edu</a></p>
            </div>
        </div>

        <!-- North Haven Campus Card -->
        <div class="contact-card">
            <span style="display: inline-block; background: #2563eb; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 10px;">NORTH HAVEN CAMPUS</span>
            <h2>Quinnipiac University - North Haven</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Joint Appointment</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Biomedical Sciences<br>School of Medicine</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Address</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Quinnipiac University<br>Frank H. Netter MD School of Medicine<br>370 Bassett Road<br>North Haven, CT 06473</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Additional Affiliation</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Weill Cornell Medicine<br>Brain and Mind Research Institute</p>
            </div>
        </div>

        <!-- Prospective Members Card -->
        <div class="contact-card">
            <h2>Join Our Lab</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Graduate Students</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">We welcome motivated graduate students interested in computational genomics, systems biology, and precision medicine.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Undergraduate Students</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Undergraduate research opportunities available for students interested in bioinformatics and genomics.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Collaborations</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Interested in collaboration? Contact us to discuss research partnerships.</p>
            </div>
        </div>

    </div>
</div>
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

/* Contact Cards - Fixed Height Header */
.contact-card h2 {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    color: #1a1a1a;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #22a8b8;
    min-height: 90px;
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

<!-- PAGE HEADER -->
<div style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); padding: 80px 40px 60px 40px; text-align: center;">
    <h1 style="font-family: 'Playfair Display', serif; font-size: 56px; color: #ffffff; margin-bottom: 20px;">Contact</h1>
    <p style="font-size: 20px; color: #b0b0b0; max-width: 700px; margin: 0 auto;">Get in touch with our laboratory or visit us at Quinnipiac University</p>
</div>

<!-- MAP SECTION - Full Width with Both Campuses and Custom Pins -->
<div style="width: 100%; height: 500px; position: relative; margin-bottom: 0;">
    <iframe 
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=41.407,72.879&zoom=12&maptype=roadmap"
        style="width: 100%; height: 100%; border: none;"
        loading="lazy">
    </iframe>
    
    <!-- Custom Map Markers Overlay -->
    <div style="position: absolute; top: 50%; left: 35%; transform: translate(-50%, -50%); pointer-events: none;">
        <div style="position: relative;">
            <!-- Main Campus Pin -->
            <div style="width: 40px; height: 50px; position: relative;">
                <svg viewBox="0 0 24 36" style="width: 100%; height: 100%; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">
                    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z" fill="#dc2626"/>
                    <circle cx="12" cy="12" r="6" fill="#ffffff"/>
                    <text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">M</text>
                </svg>
            </div>
            <div style="position: absolute; top: 52px; left: 50%; transform: translateX(-50%); white-space: nowrap; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">Main Campus</div>
        </div>
    </div>
    
    <div style="position: absolute; top: 58%; left: 55%; transform: translate(-50%, -50%); pointer-events: none;">
        <div style="position: relative;">
            <!-- North Haven Pin -->
            <div style="width: 40px; height: 50px; position: relative;">
                <svg viewBox="0 0 24 36" style="width: 100%; height: 100%; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">
                    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z" fill="#2563eb"/>
                    <circle cx="12" cy="12" r="6" fill="#ffffff"/>
                    <text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">N</text>
                </svg>
            </div>
            <div style="position: absolute; top: 52px; left: 50%; transform: translateX(-50%); white-space: nowrap; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">North Haven</div>
        </div>
    </div>
</div>

<!-- CONTACT INFO SECTION -->
<div style="background: #f8f8f8; padding: 80px 40px;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 60px;">
        
        <!-- Main Campus Card -->
        <div class="contact-card" style="background: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
            <span style="display: inline-block; background: #dc2626; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 10px;">MAIN CAMPUS</span>
            <h2>Hamden Campus</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Principal Investigator</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Paul Wolujewicz, PhD, MPH<br>Assistant Professor</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Address</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Quinnipiac University<br>School of Health Sciences<br>275 Mount Carmel Avenue<br>Hamden, CT 06518</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Email</h3>
                <p style="font-size: 16px; margin: 0;"><a href="mailto:paul.wolujewicz@quinnipiac.edu" style="color: #22a8b8; text-decoration: none;">paul.wolujewicz@quinnipiac.edu</a></p>
            </div>
        </div>

        <!-- North Haven Campus Card -->
        <div class="contact-card" style="background: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
            <span style="display: inline-block; background: #2563eb; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 10px;">NORTH HAVEN CAMPUS</span>
            <h2>Frank H. Netter MD School of Medicine</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Joint Appointment</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Biomedical Sciences</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Address</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Quinnipiac University<br>Frank H. Netter MD School of Medicine<br>370 Bassett Road<br>North Haven, CT 06473</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Additional Affiliation</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Weill Cornell Medicine<br>Brain and Mind Research Institute<br>(Adjunct Position)</p>
            </div>
        </div>

        <!-- Prospective Members Card -->
        <div class="contact-card" style="background: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
            <h2>Join Our Lab</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Graduate Students</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">We welcome motivated graduate students interested in computational genomics, systems biology, and precision medicine. Please email with your CV and research interests.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Undergraduate Students</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Undergraduate research opportunities available for students interested in bioinformatics, genomics, and data science.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Collaborations</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Interested in collaboration? Contact us to discuss potential research partnerships and projects.</p>
            </div>
        </div>

    </div>
</div>
