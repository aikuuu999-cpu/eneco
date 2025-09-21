const fs = require('fs');
const path = require('path');

// Список файлов для исправления
const filesToFix = [
    'crosses.html',
    'clamps.html', 
    'plugs.html',
    'support-pipes.html',
    'revisions.html',
    'rect-revisions.html',
    'siphons.html',
    'eccentric-reducers.html',
    'flange-adapters.html'
];

filesToFix.forEach(filename => {
    try {
        const content = fs.readFileSync(filename, 'utf8');
        
        // Исправляем проблему с незакрытым JavaScript кодом после script.js
        const fixedContent = content.replace(
            /(<script src="script\.js" defer><\/script>)\s*\n\s*\/\/ Smooth loading animation\s*\n([\s\S]*?)(?=<\/body>)/,
            '$1\n    <script>\n        // Smooth loading animation\n$2    </script>'
        );
        
        // Исправляем дублированный </script> если есть
        const finalContent = fixedContent.replace(
            /<\/script><\/script>/g,
            '</script>'
        );
        
        if (content !== finalContent) {
            fs.writeFileSync(filename, finalContent);
            console.log(`Fixed ${filename}`);
        } else {
            console.log(`No changes needed for ${filename}`);
        }
    } catch (error) {
        console.error(`Error processing ${filename}:`, error.message);
    }
});

console.log('Script fixing complete!');
