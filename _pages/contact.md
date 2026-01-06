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
    }
    
    /* Ensure the site title has room */
    .site-title {
    
    /* Force all nav links into hamburger menu */
    .greedy-nav .visible-links {
        display: none !important;
    }
    
    .greedy-nav__toggle {
        display: block !important;
    }
        max-width: 180px !important;
        font-size: 15px !important;
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

/* Responsive styles */
@media (max-width: 768px) {
    .contact-form-grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
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
        }
    });
                
                // Handle toggle click
                toggle.addEventListener("click", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isHidden = hiddenLinks.classList.contains("hidden");
                    
                    if (isHidden) {
                        hiddenLinks.classList.remove("hidden");
                        hiddenLinks.style.display = "block";
                        hiddenLinks.style.position = "absolute";
                        hiddenLinks.style.top = "100%";
                        hiddenLinks.style.right = "0";
                        hiddenLinks.style.background = "#000";
                        hiddenLinks.style.padding = "10px 0";
                        hiddenLinks.style.minWidth = "200px";
                        hiddenLinks.style.zIndex = "1000";
                    } else {
                        hiddenLinks.classList.add("hidden");
                        hiddenLinks.style.display = "none";
                    }
                });
            }
        }
        
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initMobileMenu);
        } else {
            initMobileMenu();
        }
        
        setTimeout(initMobileMenu, 500);
    })();
</script>

<!-- PAGE HEADER - Grey Background with Subtitle Only -->
<div style="background: #2a2a2a; padding: 50px 40px 40px 40px; text-align: center;">
    <p style="font-size: 20px; color: #d0d0d0; max-width: 700px; margin: 0 auto;">Get in touch with our laboratory or visit us at Quinnipiac University</p>
</div>

<!-- TWO-COLUMN SECTION: Contact Form + QU Image -->
<div style="background: #ffffff; padding: 80px 40px;">
    <div class="contact-form-grid" style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        
        <!-- LEFT: Contact Form -->
        <div>
            <h2 style="font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; color: #1a1a1a; margin: 0 0 10px 0;">Get In Touch</h2>
            <p style="font-size: 16px; color: #666; line-height: 1.6; margin: 0 0 30px 0;">Have questions about our research or interested in joining the lab? We'd love to hear from you.</p>
            
            <form id="contactForm" style="display: flex; flex-direction: column; gap: 20px;">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY">
                <input type="hidden" name="subject" value="New Contact from Wolujewicz Lab Website">
                <input type="hidden" name="redirect" value="https://wolujewiczlab.github.io/contact">
                <input type="checkbox" name="botcheck" style="display: none;">
                
                <div>
                    <label style="display: block; font-size: 14px; font-weight: 600; color: #999999; margin-bottom: 6px;">Name</label>
                    <input type="text" name="name" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: inherit; transition: border-color 0.3s;" onfocus="this.style.borderColor='#22a8b8'" onblur="this.style.borderColor='#e0e0e0'">
                </div>
                
                <div>
                    <label style="display: block; font-size: 14px; font-weight: 600; color: #999999; margin-bottom: 6px;">Email</label>
                    <input type="email" name="email" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: inherit; transition: border-color 0.3s;" onfocus="this.style.borderColor='#22a8b8'" onblur="this.style.borderColor='#e0e0e0'">
                </div>
                
                <div>
                    <label style="display: block; font-size: 14px; font-weight: 600; color: #999999; margin-bottom: 6px;">Message</label>
                    <textarea name="message" rows="6" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: inherit; resize: vertical; transition: border-color 0.3s;" onfocus="this.style.borderColor='#22a8b8'" onblur="this.style.borderColor='#e0e0e0'"></textarea>
                </div>
                
                <button type="submit" id="submitBtn" style="background: #22a8b8; color: #ffffff; padding: 14px 32px; border: none; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.3s; font-family: inherit;" onmouseover="this.style.background='#1a8a9a'" onmouseout="this.style.background='#22a8b8'">Send Message</button>
                
                <div id="formStatus" style="display: none; padding: 12px; border-radius: 6px; text-align: center; font-size: 15px; font-weight: 500;"></div>
            </form>
            
            <p style="font-size: 14px; color: #999; margin-top: 20px;">Or email directly: <a href="mailto:paul.wolujewicz@quinnipiac.edu" style="color: #22a8b8; text-decoration: none;">paul.wolujewicz@quinnipiac.edu</a></p>
        </div>
        
        <script>
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const statusDiv = document.getElementById('formStatus');

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = '#999';
            
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Success
                    statusDiv.style.display = 'block';
                    statusDiv.style.background = '#d4edda';
                    statusDiv.style.color = '#155724';
                    statusDiv.style.border = '1px solid #c3e6cb';
                    statusDiv.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
                    form.reset();
                    
                    // Reset button
                    submitBtn.textContent = 'Send Message';
                    submitBtn.style.background = '#22a8b8';
                    submitBtn.disabled = false;
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        statusDiv.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            } catch (error) {
                // Error
                statusDiv.style.display = 'block';
                statusDiv.style.background = '#f8d7da';
                statusDiv.style.color = '#721c24';
                statusDiv.style.border = '1px solid #f5c6cb';
                statusDiv.textContent = '✗ Error sending message. Please email directly at paul.wolujewicz@quinnipiac.edu';
                
                // Reset button
                submitBtn.textContent = 'Send Message';
                submitBtn.style.background = '#22a8b8';
                submitBtn.disabled = false;
            }
        });
                
                // Handle toggle click
                toggle.addEventListener("click", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isHidden = hiddenLinks.classList.contains("hidden");
                    
                    if (isHidden) {
                        hiddenLinks.classList.remove("hidden");
                        hiddenLinks.style.display = "block";
                        hiddenLinks.style.position = "absolute";
                        hiddenLinks.style.top = "100%";
                        hiddenLinks.style.right = "0";
                        hiddenLinks.style.background = "#000";
                        hiddenLinks.style.padding = "10px 0";
                        hiddenLinks.style.minWidth = "200px";
                        hiddenLinks.style.zIndex = "1000";
                    } else {
                        hiddenLinks.classList.add("hidden");
                        hiddenLinks.style.display = "none";
                    }
                });
            }
        }
        
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initMobileMenu);
        } else {
            initMobileMenu();
        }
        
        setTimeout(initMobileMenu, 500);
    })();
        </script>
        
        <!-- RIGHT: QU Image -->
        <div>
            <img src="/assets/images/qu-contact.png" alt="Quinnipiac University" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
        </div>
        
    </div>
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
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Office Location</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">SITE-271</p>
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
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Dry Lab Location</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">MNH-141B</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Address</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Quinnipiac University<br>370 Bassett Road<br>North Haven, CT 06473</p>
            </div>
        </div>

        <!-- Prospective Members Card -->
        <div class="contact-card">
            <span style="display: inline-block; background: #22a8b8; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 10px;">JOIN OUR LAB</span>
            <h2>Opportunities</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Students</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">We welcome motivated students interested in computational biology and genomics.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Collaborations</h3>
                <p style="font-size: 16px; color: #1a1a1a; line-height: 1.6; margin: 0;">Interested in collaboration? Contact us to discuss research partnerships.</p>
            </div>
        </div>

    </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
