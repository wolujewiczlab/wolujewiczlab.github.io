---
layout: single
title: ""
permalink: /team/
author_profile: false
---

<style>
/* BLACK TOP NAVIGATION BAR - Same as Main Page */
.masthead {
    background-color: #000000 !important;
    position: relative;
}

.greedy-nav {
    background: #000000 !important;
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
        right: 55px !important;  /* Top-right corner, left of hamburger */
        right: auto !important;
        width: 25px !important;
        height: 40px !important;
        transform: translateY(-50%) scale(0.65) !important;
        z-index: 50 !important;
    }
    
    /* Ensure the site title has room */
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

/* TEAM PAGE - PROFESSIONAL & SLEEK */

/* Remove default spacing */
.page__content {
    max-width: 100%;
    padding: 0;
    margin-top: 0 !important;
}

/* Remove page title */
.page__title {
    display: none !important;
}

/* PRINCIPAL INVESTIGATOR SECTION - Starts immediately after header */
.pi-section {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    padding: 80px 40px;
    margin-top: 0 !important;
}

.pi-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 320px 1fr;  /* Reduced from 400px */
    gap: 60px;
    align-items: start;
}

.pi-photo-wrapper {
    position: relative;
}

.pi-photo {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 4px solid #666666;  /* Professional grey instead of turquoise */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);  /* Subtle shadow, no glow */
    transition: all 0.3s ease;
}

.pi-photo:hover {
    transform: translateY(-3px);  /* Reduced from -5px */
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);  /* Subtle lift, no colored glow */
}

.pi-info {
    color: #ffffff;
}

.pi-info h1 {
    font-size: 48px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 10px;
    font-family: 'Playfair Display', serif;
    letter-spacing: -0.5px;
}

.pi-title {
    font-size: 20px;
    color: #22a8b8;
    margin-bottom: 8px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
}

.pi-affiliations {
    margin: 25px 0 30px 0;
}

.affiliation-item {
    font-size: 16px;
    color: #d0d0d0;
    margin-bottom: 8px;
    font-family: 'Inter', sans-serif;
    padding-left: 20px;
    position: relative;
}

.affiliation-item:before {
    content: "▸";
    color: #22a8b8;
    position: absolute;
    left: 0;
}

.affiliation-item a {
    color: #d0d0d0;
    text-decoration: none;
    transition: color 0.3s ease;
}

.affiliation-item a:hover {
    color: #22a8b8;
}

.pi-bio {
    font-size: 17px;
    line-height: 1.8;
    color: #c0c0c0;
    margin: 30px 0;
    font-family: 'Inter', sans-serif;
}

.pi-links {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.pi-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: transparent;
    border: 2px solid #22a8b8;
    color: #22a8b8;
    text-decoration: none;
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
}

.pi-link:hover {
    background: #22a8b8;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(34, 168, 184, 0.3);
}

.pi-link i {
    font-size: 16px;
}

/* TWO-COLUMN SECTION - Students & Collaborators */
.team-columns-section {
    max-width: 1200px;
    margin: 80px auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 120px;  /* Increased from 80px for better separation */
}

/* Dark background wrapper for better contrast */
.team-columns-wrapper {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    padding: 80px 0;
}

.team-column h2 {
    font-size: 32px;
    font-weight: 600;
    color: #ffffff;  /* Changed from #1a1a1a to white */
    margin-bottom: 40px;
    font-family: 'Playfair Display', serif;
    padding-bottom: 15px;
    border-bottom: 3px solid #22a8b8;
}

/* Volunteer footnote */
.volunteer-note {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 13px;
    color: #999;
    font-style: italic;
    font-family: 'Inter', sans-serif;
    text-align: center;
}

/* STUDENTS SECTION - White box containers */
.student-category {
    margin-bottom: 40px;
    padding: 30px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.student-category h3 {
    font-size: 22px;
    font-weight: 600;
    color: #22a8b8;
    margin-bottom: 25px;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
}

.student-item {
    margin-bottom: 20px;
    padding: 15px 20px;
    background: #f8f8f8;
    border-radius: 6px;
    border-left: 4px solid #22a8b8;
    transition: all 0.3s ease;
}

.student-item:last-child {
    margin-bottom: 0;
}

.student-item:hover {
    background: #f0f0f0;
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.student-name {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 5px;
    font-family: 'Inter', sans-serif;
}

.student-info {
    font-size: 15px;
    color: #666;
    font-family: 'Inter', sans-serif;
}

.student-project {
    font-size: 14px;
    color: #888;
    margin-top: 8px;
    font-style: italic;
    font-family: 'Inter', sans-serif;
}

/* COLLABORATORS SECTION - Apostolou Lab Inspired */
.collaborator-institution {
    margin-bottom: 40px;
}

.collaborator-institution h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    font-family: 'Inter', sans-serif;
}

/* Institution-specific colors */
.collaborator-institution h3.weill-cornell {
    color: #B31B1B;  /* Cornell red */
}

.collaborator-institution h3.quinnipiac {
    color: #FF8C00;  /* Quinnipiac orange */
}

.collaborator-institution h3.caes {
    color: #4169E1;  /* Royal blue */
}

.collaborator-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.collaborator-item {
    padding: 15px 20px;
    background: #f8f8f8;
    border-radius: 6px;
    transition: all 0.3s ease;
    border-left: 3px solid #22a8b8;
}

.collaborator-item:hover {
    background: #22a8b8;
    transform: translateX(5px);
}

.collaborator-item:hover .collaborator-name {
    color: #ffffff;
}

.collaborator-item:hover .collaborator-link {
    color: #ffffff;
}

.collaborator-name {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    font-family: 'Inter', sans-serif;
    transition: color 0.3s ease;
}

.collaborator-link {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    transition: color 0.3s ease;
}

.collaborator-link:hover {
    color: #22a8b8;
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .pi-container {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .pi-photo-wrapper {
        max-width: 400px;
        margin: 0 auto;
    }
    
    .team-columns-section {
        grid-template-columns: 1fr;
        gap: 60px;
    }
}

/* Responsive institutional photos */
@media (max-width: 768px) {
    .institutional-photos {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
    }
}
</style>

<!-- PRINCIPAL INVESTIGATOR SECTION -->
<div class="pi-section">
    <div class="pi-container">
        <!-- Photo -->
        <div class="pi-photo-wrapper">
            <img src="/assets/images/paul-wolujewicz.jpg" alt="Paul Wolujewicz" class="pi-photo">
        </div>
        
        <!-- Info -->
        <div class="pi-info">
            <h1>Paul Wolujewicz, PhD, MPH</h1>
            <p class="pi-title">Principal Investigator</p>
            
            <div class="pi-affiliations">
                <div class="affiliation-item">
                    <a href="https://www.qu.edu/schools/health-sciences/" target="_blank">Assistant Professor, School of Health Sciences, Quinnipiac University</a>
                </div>
                <div class="affiliation-item">
                    <a href="https://medicine.weill.cornell.edu/" target="_blank">Adjunct Assistant Professor, Weill Cornell Medicine</a>
                </div>
                <div class="affiliation-item">
                    <a href="https://portal.ct.gov/caes" target="_blank">Research Affiliate, Connecticut Agricultural Experiment Station</a>
                </div>
            </div>
            
            <div class="pi-links">
                <a href="https://orcid.org/0000-0003-2982-9448" target="_blank" class="pi-link">
                    <i class="fab fa-orcid"></i> ORCID
                </a>
                <a href="https://www.linkedin.com/in/paul-wolujewicz-82b73314/" target="_blank" class="pi-link">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="mailto:paul.wolujewicz@quinnipiac.edu" class="pi-link">
                    <i class="fas fa-envelope"></i> Email
                </a>
            </div>
        </div>
    </div>
</div>

<!-- TWO-COLUMN SECTION: Students & Collaborators -->
<div class="team-columns-wrapper">
<div class="team-columns-section">
    
    <!-- LEFT COLUMN: STUDENTS -->
    <div class="team-column">
        <h2>Lab Members</h2>
        
        <!-- Current Students -->
        <div class="student-category">
            <h3>Current Students</h3>
            
            <div class="student-item">
                <div class="student-name">Jesse Matijevic</div>
                <div class="student-info">Undergraduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Safia Benbrahim</div>
                <div class="student-info">Undergraduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Natalie Grober</div>
                <div class="student-info">Graduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Reese Triana</div>
                <div class="student-info">Graduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Kaylee Pettengill</div>
                <div class="student-info">Undergraduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Jenna Visich</div>
                <div class="student-info">Undergraduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Phil Smit</div>
                <div class="student-info">Medical Student Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Alan Chai</div>
                <div class="student-info">Medical Student Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Audrey Chodkiewicz</div>
                <div class="student-info">Undergraduate Researcher</div>
            </div>
        </div>
        
        <!-- Former Students -->
        <div class="student-category">
            <h3>Alumni</h3>
            
            <div class="student-item">
                <div class="student-name">Megan Shuguli</div>
                <div class="student-info">Former Graduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Brandon Assi</div>
                <div class="student-info">Former Graduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Gianna Gorvan</div>
                <div class="student-info">Former Graduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Alexandra Fassett</div>
                <div class="student-info">Former Graduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">Brianna Dalipovski</div>
                <div class="student-info">Former Undergraduate Researcher</div>
            </div>
            
            <div class="student-item">
                <div class="student-name">John Gribbin</div>
                <div class="student-info">Former Medical Student Researcher</div>
            </div>
        </div>
        
        <!-- Volunteer Acknowledgment - Under Alumni -->
        <div class="volunteer-note" style="margin-top: 30px; text-align: left; max-width: 100%;">
            * This list includes students engaged in formal research for credit or thesis work. We are deeply grateful for the contributions of our research volunteers and lab assistants.
        </div>
    </div>
    
    <!-- RIGHT COLUMN: COLLABORATORS -->
    <div class="team-column">
        <h2>Collaborators</h2>
        
        <!-- Weill Cornell Medicine -->
        <div class="collaborator-institution">
            <h3 class="weill-cornell">Weill Cornell Medicine</h3>
            <div class="collaborator-list">
                <a href="https://gradschool.weill.cornell.edu/faculty/m-elizabeth-ross" target="_blank" style="text-decoration: none;">
                    <div class="collaborator-item">
                        <div class="collaborator-name">Ross Lab</div>
                        <span class="collaborator-link">
                            Weill Cornell Medicine →
                        </span>
                    </div>
                </a>
                <a href="https://www.colaklab.com/" target="_blank" style="text-decoration: none;">
                    <div class="collaborator-item">
                        <div class="collaborator-name">Colak Lab</div>
                        <span class="collaborator-link">
                            Weill Cornell Medicine →
                        </span>
                    </div>
                </a>
            </div>
        </div>
        
        <!-- Quinnipiac University -->
        <div class="collaborator-institution">
            <h3 class="quinnipiac">Quinnipiac University</h3>
            <div class="collaborator-list">
                <a href="https://www.qu.edu/faculty-and-staff/carter-takacs-phd/" target="_blank" style="text-decoration: none;">
                    <div class="collaborator-item">
                        <div class="collaborator-name">Takacs Lab</div>
                        <span class="collaborator-link">
                            Quinnipiac University →
                        </span>
                    </div>
                </a>
                <a href="https://www.qu.edu/faculty-and-staff/christian-eggers/" target="_blank" style="text-decoration: none;">
                    <div class="collaborator-item">
                        <div class="collaborator-name">Eggers Lab</div>
                        <span class="collaborator-link">
                            Quinnipiac University →
                        </span>
                    </div>
                </a>
            </div>
        </div>
        
        <!-- Connecticut Agricultural Experiment Station -->
        <div class="collaborator-institution">
            <h3 class="caes">Connecticut Agricultural Experiment Station</h3>
            <div class="collaborator-list">
                <a href="https://portal.ct.gov/caes/tick-office/tick-office/tick-testing-laboratory" target="_blank" style="text-decoration: none;">
                    <div class="collaborator-item">
                        <div class="collaborator-name">Dr. Goudarz Molaei</div>
                        <span class="collaborator-link">
                            CAES →
                        </span>
                    </div>
                </a>
            </div>
        </div>
        
        <!-- INSTITUTIONAL PHOTO GALLERY - In Right Column -->
        <div style="margin-top: 60px;">
            <div style="display: flex; flex-direction: column; gap: 25px;">
                
                <!-- Quinnipiac University -->
                <div style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); aspect-ratio: 1/1;">
                    <img src="/assets/images/team/quinnipiac-campus.jpg" alt="Quinnipiac University" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 20px 15px 15px 15px;">
                        <p style="color: #ffffff; font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Quinnipiac University</p>
                    </div>
                </div>
                
                <!-- Weill Cornell Medicine -->
                <div style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); aspect-ratio: 1/1;">
                    <img src="/assets/images/team/weill-cornell-campus.jpg" alt="Weill Cornell Medicine" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 20px 15px 15px 15px;">
                        <p style="color: #ffffff; font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Weill Cornell Medicine</p>
                    </div>
                </div>
                
                <!-- Connecticut Agricultural Experiment Station -->
                <div style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); aspect-ratio: 1/1;">
                    <img src="/assets/images/team/caes-building.jpg" alt="Connecticut Agricultural Experiment Station" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 20px 15px 15px 15px;">
                        <p style="color: #ffffff; font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Connecticut Agricultural<br>Experiment Station</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
</div>
</div>

<script>
(function() {
    function addDNAToNav() {
        const masthead = document.querySelector('.masthead');
        if (!masthead || masthead.querySelector('.nav-dna-container')) {
            return;
        }
        
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
