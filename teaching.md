---
layout: default
title: Teaching
permalink: /teaching/
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

/* CODE TERMINAL AESTHETIC */
.terminal-header {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    padding: 80px 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.terminal-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(90deg, rgba(34, 168, 184, 0.1) 1px, transparent 1px),
        linear-gradient(rgba(34, 168, 184, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.3;
    animation: grid-scroll 20s linear infinite;
}

@keyframes grid-scroll {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
}

.terminal-header h1 {
    font-family: 'Courier New', monospace;
    font-size: 48px;
    color: #22a8b8;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}

.terminal-header h1::before {
    content: "$ ";
    color: #10b981;
}

.terminal-header p {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: #d0d0d0;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* CURRICULUM INNOVATION SECTION */
.innovation-section {
    background: #ffffff;
    padding: 80px 40px;
}

.innovation-container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-label {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #10b981;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    color: #1a1a1a;
    margin-bottom: 50px;
}

/* COURSE CARDS - CODE BLOCK STYLE */
.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.course-card {
    background: #1a1a2e;
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;
    border: 1px solid #2a2a4e;
}

.course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(34, 168, 184, 0.3);
}

.course-header {
    background: linear-gradient(135deg, #22a8b8 0%, #1a8a9a 100%);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.course-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.course-code {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 700;
}

.course-body {
    padding: 25px;
}

.course-title {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 15px;
    line-height: 1.3;
}

.course-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.meta-badge {
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.course-description {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #b0b0b0;
}

/* NEW BADGE */
.new-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 4px;
    margin-left: 8px;
    animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.5); }
    50% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.8); }
}

/* TEACHING PHILOSOPHY - TERMINAL STYLE */
.philosophy-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 80px 40px;
}

.terminal-window {
    max-width: 900px;
    margin: 0 auto;
    background: #1a1a2e;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.terminal-titlebar {
    background: #2a2a4e;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.terminal-button.close { background: #ff5f56; }
.terminal-button.minimize { background: #ffbd2e; }
.terminal-button.maximize { background: #27c93f; }

.terminal-body {
    padding: 30px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.8;
    color: #d0d0d0;
}

.terminal-prompt {
    color: #10b981;
    font-weight: 700;
}

.terminal-output {
    color: #22a8b8;
    margin-left: 20px;
}

/* STATS GRID */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    margin-top: 60px;
}

.stat-card {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    border-left: 4px solid #22a8b8;
}

.stat-number {
    font-family: 'Courier New', monospace;
    font-size: 48px;
    font-weight: 700;
    color: #22a8b8;
    line-height: 1;
    margin-bottom: 10px;
}

.stat-label {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* STUDENT SUCCESS */
.success-section {
    background: #ffffff;
    padding: 80px 40px;
}

.mentee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}

.mentee-card {
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    padding: 25px;
    border-radius: 10px;
    border: 2px solid #e9ecef;
    transition: all 0.3s;
}

.mentee-card:hover {
    border-color: #22a8b8;
    box-shadow: 0 4px 20px rgba(34, 168, 184, 0.15);
}

.mentee-name {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
}

.mentee-program {
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #22a8b8;
    background: rgba(34, 168, 184, 0.1);
    padding: 4px 10px;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 8px;
}

.mentee-year {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #666;
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

<!-- TERMINAL HEADER -->
<div class="terminal-header">
    <h1>teaching.init()</h1>
    <p>Integrating computational approaches with biomedical education to prepare the next generation of researchers at the intersection of biology, medicine, and data science</p>
</div>

<!-- CURRICULUM INNOVATION -->
<div class="innovation-section">
    <div class="innovation-container">
        <div class="section-label">// CURRICULUM_INNOVATION</div>
        <h2 class="section-title">New Course Development</h2>
        
        <div class="courses-grid">
            
            <!-- Machine Learning Course -->
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">🤖</div>
                    <div class="course-code">BMS622 / MED740</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Machine Learning in Medical Sciences<span class="new-badge">NEW</span></h3>
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2026</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Hands-on introduction to ML/AI applications in biomedical research, covering supervised and unsupervised learning, deep learning, and practical implementation with genomic and clinical datasets.</p>
                </div>
            </div>
            
            <!-- Computational Biomedicine -->
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">💻</div>
                    <div class="course-code">BMS519 / MED700</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Computational Biomedicine</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2025</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Introduction to computational approaches in biomedical research, emphasizing Python programming, data analysis pipelines, and bioinformatics tools for genomic data interpretation.</p>
                </div>
            </div>
            
            <!-- Biomedical Genomics -->
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">🧬</div>
                    <div class="course-code">BMS312</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Biomedical Genomics</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2024, 2025</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Comprehensive exploration of genomic technologies and their applications in precision medicine, covering sequencing platforms, variant interpretation, and clinical genomics workflows.</p>
                </div>
            </div>
            
            <!-- Neurogenetics -->
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">🧠</div>
                    <div class="course-code">BIO500</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Neurogenetics</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Summer 2024</span>
                        <span class="meta-badge">Graduate</span>
                    </div>
                    <p class="course-description">Integration of genetics, genomics, and neuroscience to understand inherited neurological disorders, combining molecular mechanisms with clinical phenotypes.</p>
                </div>
            </div>
            
        </div>
        
        <!-- TEACHING STATS -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">9</div>
                <div class="stat-label">Courses Taught</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">4</div>
                <div class="stat-label">New Curricula</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">11</div>
                <div class="stat-label">Independent Studies</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">15+</div>
                <div class="stat-label">Mentees</div>
            </div>
        </div>
        
    </div>
</div>

<!-- TEACHING PHILOSOPHY - TERMINAL -->
<div class="philosophy-section">
    <div class="innovation-container">
        <div class="section-label">// TEACHING_PHILOSOPHY</div>
        <h2 class="section-title">Bridging Biology & Computation</h2>
        
        <div class="terminal-window">
            <div class="terminal-titlebar">
                <div class="terminal-button close"></div>
                <div class="terminal-button minimize"></div>
                <div class="terminal-button maximize"></div>
            </div>
            <div class="terminal-body">
                <div><span class="terminal-prompt">$</span> cat teaching_philosophy.txt</div>
                <div class="terminal-output">
                    <p>Modern biomedical research requires fluency in both biological systems and computational approaches. My teaching integrates these domains by:</p>
                    <br>
                    <p><strong>1. Hands-On Learning:</strong> Students work with real genomic datasets, implementing analysis pipelines from data acquisition through interpretation.</p>
                    <br>
                    <p><strong>2. Interdisciplinary Integration:</strong> Courses combine molecular biology, genetics, computer science, and clinical medicine to reflect authentic research workflows.</p>
                    <br>
                    <p><strong>3. Problem-Based Pedagogy:</strong> Complex biological questions drive curriculum design, with computational tools emerging as solutions to specific challenges.</p>
                    <br>
                    <p><strong>4. Reproducible Research:</strong> Emphasis on version control, documentation, and transparent methodologies prepares students for modern scientific practice.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ADDITIONAL COURSES -->
<div class="innovation-section">
    <div class="innovation-container">
        <div class="section-label">// CORE_INSTRUCTION</div>
        <h2 class="section-title">Additional Courses</h2>
        
        <div class="courses-grid">
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">🔬</div>
                    <div class="course-code">BMS578</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Cellular Basis of Neurobiological Disorders</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2025</span>
                    </div>
                    <p class="course-description">Exploration of cellular and molecular mechanisms underlying neurological and psychiatric disorders.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">🧪</div>
                    <div class="course-code">BMS472</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Biotechnology</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2024-26</span>
                    </div>
                    <p class="course-description">Applied molecular biology techniques and biotechnology applications in medicine and research.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">⚖️</div>
                    <div class="course-code">BMS556</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Seminar in Healthcare Disparities</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2025-26</span>
                    </div>
                    <p class="course-description">Critical examination of health inequities and the role of genomics in precision public health.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">🧬</div>
                    <div class="course-code">BIO282</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Genetics</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2023-25</span>
                    </div>
                    <p class="course-description">Foundational genetics covering inheritance patterns, molecular mechanisms, and genomic technologies.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">🛡️</div>
                    <div class="course-code">BMS522/L</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Immunology & Lab</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Fall 2023-24</span>
                    </div>
                    <p class="course-description">Immune system function with hands-on laboratory component.</p>
                </div>
            </div>
            
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon">⚡</div>
                    <div class="course-code">BIO329</div>
                </div>
                <div class="course-body">
                    <h3 class="course-title">Neurobiology</h3>
                    <div class="course-meta">
                        <span class="meta-badge">Spring 2023-24</span>
                    </div>
                    <p class="course-description">Comprehensive study of nervous system structure, function, and cellular mechanisms.</p>
                </div>
            </div>
            
        </div>
    </div>
</div>

<!-- STUDENT MENTORING -->
<div class="success-section">
    <div class="innovation-container">
        <div class="section-label">// STUDENT_MENTORING</div>
        <h2 class="section-title">Research Mentorship</h2>
        
        <h3 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #1a1a1a; margin: 40px 0 25px 0;">Master's Thesis Students</h3>
        <div class="mentee-grid">
            <div class="mentee-card">
                <div class="mentee-name">Natalie Grober</div>
                <div class="mentee-program">GBMS</div>
                <div class="mentee-year">2025-2026</div>
            </div>
            <div class="mentee-card">
                <div class="mentee-name">Brandon Assi</div>
                <div class="mentee-program">GBMS</div>
                <div class="mentee-year">2024-2025</div>
            </div>
        </div>
        
        <h3 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #1a1a1a; margin: 60px 0 25px 0;">Medical Students (SRCC Capstone)</h3>
        <div class="mentee-grid">
            <div class="mentee-card">
                <div class="mentee-name">Alan Chai</div>
                <div class="mentee-program">NETTER MED</div>
                <div class="mentee-year">2024-present</div>
            </div>
            <div class="mentee-card">
                <div class="mentee-name">Phil Smit</div>
                <div class="mentee-program">NETTER MED</div>
                <div class="mentee-year">2023-present</div>
            </div>
            <div class="mentee-card">
                <div class="mentee-name">John Gribbin</div>
                <div class="mentee-program">NETTER MED</div>
                <div class="mentee-year">2022-2025</div>
            </div>
        </div>
        
        <h3 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #1a1a1a; margin: 60px 0 25px 0;">QUIPRS Program</h3>
        <div class="mentee-grid">
            <div class="mentee-card">
                <div class="mentee-name">Jesse Matijevic</div>
                <div class="mentee-program">QUIPRS 2025</div>
                <div class="mentee-year">Metagenomics Research</div>
            </div>
            <div class="mentee-card">
                <div class="mentee-name">Jenna Visich</div>
                <div class="mentee-program">QUIPRS 2025</div>
                <div class="mentee-year">Computational Genomics</div>
            </div>
            <div class="mentee-card">
                <div class="mentee-name">Kaylee Pettengill</div>
                <div class="mentee-program">QUIPRS 2024</div>
                <div class="mentee-year">Neural Tube Defects</div>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #22a8b8 0%, #1a8a9a 100%); padding: 30px; border-radius: 12px; text-align: center; margin-top: 60px;">
            <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #ffffff; margin: 0;">
                <strong>11 independent study students</strong> mentored across 30 credits (2023-Present)
            </p>
        </div>
        
    </div>
</div>

<!-- RECOGNITION -->
<div class="philosophy-section">
    <div class="innovation-container">
        <div class="section-label">// RECOGNITION</div>
        <h2 class="section-title">Teaching Award</h2>
        
        <div style="max-width: 700px; margin: 0 auto; text-align: center; background: #ffffff; padding: 50px 40px; border-radius: 12px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);">
            <div style="font-size: 60px; margin-bottom: 20px;">🏆</div>
            <h3 style="font-family: 'Playfair Display', serif; font-size: 28px; color: #1a1a1a; margin-bottom: 15px;">Outstanding Mentor Award</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #666; margin-bottom: 10px;">Scholarly Reflection and Concentration Capstone (SRCC)</p>
            <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #999;">Frank H. Netter School of Medicine, March 2025</p>
        </div>
    </div>
</div>
