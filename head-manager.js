// Система управления head для SEO-дружелюбности
// Используется как fallback для случаев, когда SSI недоступен

class HeadManager {
    constructor() {
        this.baseUrl = window.location.origin;
        this.defaultImage = 'images/hero-background.png';
        this.siteName = 'ЭНЕКО';
        this.siteDescription = 'Трубы и фитинги SML от ЭНЕКО. Профессиональные решения для строительных компаний и дистрибьюторов.';
    }

    // Конфигурация мета-тегов для каждой страницы
    getPageConfig() {
        const path = window.location.pathname;
        const configs = {
            '/index.html': {
                title: 'Трубы и фитинги SML от ЭНЕКО',
                description: 'Профессиональные решения для строительных компаний и дистрибьюторов. Трубы и фитинги SML высочайшего качества.',
                keywords: 'SML, чугунные трубы, фитинги, канализация, ЭНЕКО, строительство',
                ogImage: 'images/hero-background.png'
            },
            '/sml-pipes.html': {
                title: 'Трубы SML - ЭНЕКО',
                description: 'Элементы системы канализации из литого чугуна. Для соединения SML труб применяются современные хомуты. Соответствуют ГОСТ 9583-75, EN 877.',
                keywords: 'трубы SML, чугунные трубы, канализация, SML, ЭНЕКО',
                ogImage: 'images/pipes/sml-pipes-main.png'
            },
            '/elbows.html': {
                title: 'Отводы SML - ЭНЕКО',
                description: 'Фасонные части для изменения направления трубопровода под углами 15°, 30°, 45°, 68° и 88°. Произведены из высококачественного литого чугуна.',
                keywords: 'отводы SML, фасонные части, чугунные отводы, SML, ЭНЕКО',
                ogImage: 'images/elbows/sml-elbows-main.png'
            },
            '/tees.html': {
                title: 'Тройники SML - ЭНЕКО',
                description: 'Фасонные части для создания ответвлений в трубопроводных системах под углами 45° и 88°. Произведены из высококачественного литого чугуна.',
                keywords: 'тройники SML, фасонные части, чугунные тройники, SML, ЭНЕКО',
                ogImage: 'images/tees/sml-tees-main.png'
            },
            '/crosses.html': {
                title: 'Крестовины SML - ЭНЕКО',
                description: 'Фасонные части для создания четырехстороннего соединения в трубопроводных системах под углами 45° и 70°. Произведены из высококачественного литого чугуна.',
                keywords: 'крестовины SML, фасонные части, чугунные крестовины, SML, ЭНЕКО',
                ogImage: 'images/crosses/sml-crosses-main.png'
            },
            '/support-rings.html': {
                title: 'Опорные кольца SML - ЭНЕКО',
                description: 'Элементы крепления для фиксации трубопроводных систем SML. Опорные кольца из высококачественного литого чугуна для надежной поддержки труб.',
                keywords: 'опорные кольца SML, крепление труб, чугунные кольца, SML, ЭНЕКО',
                ogImage: 'images/support-rings/support-rings-main.png'
            },
            '/support-pipes.html': {
                title: 'Опорные трубы SML - ЭНЕКО',
                description: 'Специализированные элементы для создания опорных конструкций в трубопроводных системах SML. Опорные трубы из высококачественного литого чугуна.',
                keywords: 'опорные трубы SML, опорные конструкции, чугунные трубы, SML, ЭНЕКО',
                ogImage: 'images/support-pipes/support-pipes-main.png'
            },
            '/revisions.html': {
                title: 'Ревизия с круглым отверстием SML - ЭНЕКО',
                description: 'Элементы для обслуживания и очистки трубопроводных систем. Ревизии из литого чугуна с круглым твердым отверстием для надежного доступа к системе канализации.',
                keywords: 'ревизия SML, обслуживание труб, чугунные ревизии, SML, ЭНЕКО',
                ogImage: 'images/revisions/sml-revisions-main.png'
            },
            '/rect-revisions.html': {
                title: 'Ревизия с прямоугольным отверстием SML - ЭНЕКО',
                description: 'Элементы для обслуживания и очистки трубопроводных систем. Ревизии из литого чугуна с прямоугольным отверстием для надежного доступа к системе канализации.',
                keywords: 'ревизия SML, обслуживание труб, чугунные ревизии, SML, ЭНЕКО',
                ogImage: 'images/rect-revisions/rect-revisions-main.png'
            },
            '/eccentric-reducers.html': {
                title: 'Переходники эксцентрические SML - ЭНЕКО',
                description: 'Фасонные части для соединения труб разного диаметра с эксцентрическим смещением. Переходники из литого чугуна для надежного соединения при изменении диаметра трубопровода.',
                keywords: 'переходники SML, эксцентрические переходники, чугунные переходники, SML, ЭНЕКО',
                ogImage: 'images/eccentric-reducers/eccentric-reducers-main.png'
            },
            '/plugs.html': {
                title: 'Заглушки SML - ЭНЕКО',
                description: 'Фасонные части для герметичного закрытия трубопроводов. Заглушки из литого чугуна с прижимными скобами, пресс-заглушки и торцевые заглушки для надежного закрытия системы.',
                keywords: 'заглушки SML, закрытие труб, чугунные заглушки, SML, ЭНЕКО',
                ogImage: 'images/plugs/plugs-main.png'
            },
            '/flange-adapters.html': {
                title: 'Фланцевые переходники SML - ЭНЕКО',
                description: 'Фасонные части для соединения труб SML с фланцевыми системами. Переходники из литого чугуна для интеграции систем SML с другими типами трубопроводных систем.',
                keywords: 'фланцевые переходники SML, фланцевые соединения, чугунные переходники, SML, ЭНЕКО',
                ogImage: 'images/flange-adapters/flange-adapters-main.png'
            },
            '/siphons.html': {
                title: 'Сифоны SML - ЭНЕКО',
                description: 'Специальные фасонные части для создания водяных затворов в канализационных системах. Сифоны дождевых вод и стандартные сифоны SML для защиты от газов и запахов.',
                keywords: 'сифоны SML, водяные затворы, канализационные сифоны, SML, ЭНЕКО',
                ogImage: 'images/siphons/siphons-main.png'
            },
            '/clamps.html': {
                title: 'Хомуты крепежные SML - ЭНЕКО',
                description: 'Крепежные элементы для надежной фиксации труб SML к стенам и конструкциям. Стандартные и усиленные хомуты из высококачественных материалов.',
                keywords: 'хомуты SML, крепежные элементы, крепление труб, SML, ЭНЕКО',
                ogImage: 'images/clamps/clamps-main.png'
            }
        };

        return configs[path] || {
            title: this.siteName,
            description: this.siteDescription,
            keywords: 'SML, чугунные трубы, фитинги, канализация, ЭНЕКО',
            ogImage: this.defaultImage
        };
    }

    // Создает мета-теги для страницы
    createMetaTags(config) {
        const currentUrl = window.location.href;
        const fullImageUrl = config.ogImage.startsWith('http') ? config.ogImage : `${this.baseUrl}/${config.ogImage}`;

        return `
            <title>${config.title}</title>
            <meta name="description" content="${config.description}">
            <meta name="keywords" content="${config.keywords}">
            
            <!-- Open Graph -->
            <meta property="og:title" content="${config.title}">
            <meta property="og:description" content="${config.description}">
            <meta property="og:image" content="${fullImageUrl}">
            <meta property="og:url" content="${currentUrl}">
            <meta property="og:type" content="website">
            <meta property="og:site_name" content="${this.siteName}">
            <meta property="og:locale" content="ru_RU">
            
            <!-- Twitter Card -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="${config.title}">
            <meta name="twitter:description" content="${config.description}">
            <meta name="twitter:image" content="${fullImageUrl}">
            
            <!-- Canonical -->
            <link rel="canonical" href="${currentUrl}">
            
            <!-- Structured Data -->
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "${this.siteName}",
                "url": "${this.baseUrl}",
                "logo": "${this.baseUrl}/logos/logo.png",
                "description": "${this.siteDescription}",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+7-908-974-36-35",
                    "contactType": "customer service"
                }
            }
            </script>
        `;
    }

    // Инициализация (используется как fallback)
    init() {
        // Проверяем, есть ли уже мета-теги (если SSI работает)
        const existingTitle = document.querySelector('title');
        const existingDescription = document.querySelector('meta[name="description"]');
        
        // Если мета-теги уже есть, не перезаписываем их
        if (existingTitle && existingDescription) {
            return;
        }

        // Получаем конфигурацию для текущей страницы
        const config = this.getPageConfig();
        
        // Создаем и вставляем мета-теги
        const metaTags = this.createMetaTags(config);
        
        // Вставляем в head
        const head = document.head;
        head.insertAdjacentHTML('beforeend', metaTags);
        
        console.log('HeadManager: Мета-теги добавлены для', config.title);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const headManager = new HeadManager();
    headManager.init();
});

// Экспорт для использования в других скриптах
window.HeadManager = HeadManager;
