const fs = require('fs');
const path = require('path');

// Список HTML файлов для исправления
const htmlFiles = [
    'sml-pipes.html',
    'elbows.html', 
    'crosses.html',
    'clamps.html',
    'plugs.html',
    'support-pipes.html',
    'revisions.html',
    'rect-revisions.html',
    'siphons.html',
    'eccentric-reducers.html',
    'flange-adapters.html',
    'tees.html'
];

// Улучшенный код для скрытия прелоадера
const improvedLoaderCode = `        // Enhanced page loader management
        function hidePageLoader() {
            if (typeof PageLoader !== 'undefined') {
                PageLoader.hide();
            }
        }

        // Hide loader on DOM ready
        document.addEventListener('DOMContentLoaded', function() {
            // Show content smoothly after CSS is loaded
            setTimeout(function() {
                document.body.classList.add('loaded');
                hidePageLoader();
            }, 100);
        });

        // Hide loader on page show (handles back/forward navigation)
        window.addEventListener('pageshow', function(event) {
            setTimeout(hidePageLoader, 50);
            
            // If page loaded from cache
            if (event.persisted) {
                document.body.style.opacity = '1';
                document.body.classList.add('loaded');
            }
        });

        // Additional safety nets
        window.addEventListener('load', hidePageLoader);
        window.addEventListener('focus', function() {
            setTimeout(hidePageLoader, 100);
        });`;

htmlFiles.forEach(filename => {
    try {
        const content = fs.readFileSync(filename, 'utf8');
        
        // Заменяем старый код на улучшенный
        const oldPattern = /\/\/ Smooth loading animation[\s\S]*?document\.body\.classList\.add\('loaded'\);[\s\S]*?if \(typeof PageLoader !== 'undefined'\) \{[\s\S]*?PageLoader\.hide\(\);[\s\S]*?\}[\s\S]*?\}, \d+\);/;
        
        if (oldPattern.test(content)) {
            const newContent = content.replace(oldPattern, improvedLoaderCode);
            fs.writeFileSync(filename, newContent);
            console.log(`✅ Updated ${filename}`);
        } else {
            console.log(`⚠️  Pattern not found in ${filename} - might need manual update`);
        }
    } catch (error) {
        console.error(`❌ Error processing ${filename}:`, error.message);
    }
});

console.log('\\n🎉 Preloader fix complete!');
