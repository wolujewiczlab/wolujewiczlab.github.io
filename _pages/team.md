---
layout: single
title: "Team"
permalink: /team/
author_profile: false
---

<style>
/* TEAM PAGE - PROFESSIONAL & SLEEK */

/* Remove default spacing */
.page__content {
    max-width: 100%;
    padding: 0;
}

/* PRINCIPAL INVESTIGATOR SECTION - Landau Lab Inspired */
.pi-section {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    padding: 80px 40px;
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
                <a href="https://orcid.org/0000-0002-1234-5678" target="_blank" class="pi-link">
                    <i class="fab fa-orcid"></i> ORCID
                </a>
                <a href="https://www.linkedin.com/in/paulwolujewicz/" target="_blank" class="pi-link">
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
                <div class="collaborator-item">
                    <div class="collaborator-name">Ross Lab</div>
                    <a href="https://medicine.weill.cornell.edu/" target="_blank" class="collaborator-link">
                        Weill Cornell Medicine →
                    </a>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-name">Colak Lab</div>
                    <a href="https://medicine.weill.cornell.edu/" target="_blank" class="collaborator-link">
                        Weill Cornell Medicine →
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Quinnipiac University -->
        <div class="collaborator-institution">
            <h3 class="quinnipiac">Quinnipiac University</h3>
            <div class="collaborator-list">
                <div class="collaborator-item">
                    <div class="collaborator-name">Takacs Lab</div>
                    <a href="https://www.qu.edu/" target="_blank" class="collaborator-link">
                        Quinnipiac University →
                    </a>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-name">Eggers Lab</div>
                    <a href="https://www.qu.edu/" target="_blank" class="collaborator-link">
                        Quinnipiac University →
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Connecticut Agricultural Experiment Station -->
        <div class="collaborator-institution">
            <h3 class="caes">Connecticut Agricultural Experiment Station</h3>
            <div class="collaborator-list">
                <div class="collaborator-item">
                    <div class="collaborator-name">Dr. Goudarz Molaei</div>
                    <a href="https://portal.ct.gov/caes" target="_blank" class="collaborator-link">
                        CAES →
                    </a>
                </div>
            </div>
        </div>
    </div>
    
</div>
</div>
