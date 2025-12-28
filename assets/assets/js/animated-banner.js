// Animated DNA Banner JavaScript
(function() {
    'use strict';
    
    // Helper function to generate random DNA sequence
    function generateDNA(length) {
        const bases = ['A', 'C', 'T', 'G'];
        let sequence = '';
        for (let i = 0; i < length; i++) {
            sequence += bases[Math.floor(Math.random() * 4)];
        }
        return sequence;
    }
    
    // Initialize banner when DOM is ready
    function initBanner() {
        // Generate DNA ticker content for TOP ticker
        const tickerTop = document.querySelector('.ticker-content-top');
        if (tickerTop) {
            let tickerSeqTop = '';
            const longDNATop = generateDNA(200);
            for (let i = 0; i < longDNATop.length; i++) {
                if (i % 10 === 0) {
                    tickerSeqTop += '<span class="highlight-base">' + longDNATop[i] + '</span>';
                } else {
                    tickerSeqTop += longDNATop[i];
                }
            }
            tickerTop.innerHTML = tickerSeqTop + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + tickerSeqTop;
        }
        
        // Generate DNA ticker content for BOTTOM ticker
        const tickerBottom = document.querySelector('.ticker-content-bottom');
        if (tickerBottom) {
            let tickerSeqBottom = '';
            const longDNABottom = generateDNA(200);
            for (let i = 0; i < longDNABottom.length; i++) {
                if (i % 10 === 0) {
                    tickerSeqBottom += '<span class="highlight-base">' + longDNABottom[i] + '</span>';
                } else {
                    tickerSeqBottom += longDNABottom[i];
                }
            }
            tickerBottom.innerHTML = tickerSeqBottom + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + tickerSeqBottom;
        }
        
        // Colorful dot positions and colors
        const dotConfigs = [
            { left: '8%', top: '20%', color: 'pink', delay: 0 },
            { left: '18%', top: '75%', color: 'cyan', delay: 1.2 },
            { left: '82%', top: '25%', color: 'purple', delay: 0.8 },
            { left: '92%', top: '70%', color: 'green', delay: 1.6 },
            { left: '50%', top: '15%', color: 'blue', delay: 0.4 },
            { left: '50%', top: '82%', color: 'orange', delay: 2 }
        ];
        
        // Add larger dots
        const largeDots = document.getElementById('banner-dots');
        if (largeDots) {
            dotConfigs.forEach(function(config) {
                const dot = document.createElement('div');
                dot.className = 'large-dot ' + config.color;
                dot.style.left = config.left;
                dot.style.top = config.top;
                dot.style.animationDelay = config.delay + 's';
                largeDots.appendChild(dot);
            });
        }
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBanner);
    } else {
        initBanner();
    }
})();
