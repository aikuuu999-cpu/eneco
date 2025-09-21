// Общие компоненты сайта - управляются из одного места
const SiteComponents = {
    // Общая часть head - стили, мета-теги, скрипты
    commonHead: `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    
    <!-- Общие мета-теги -->
    <meta name="author" content="ЭНЕКО">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph базовые -->
    <meta property="og:site_name" content="ЭНЕКО - Трубы и фитинги SML">
    <meta property="og:type" content="website">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="logos/logo.png">
    `,

    // SEO данные для каждой страницы
    pageData: {
        'index.html': {
            title: 'Трубы и фитинги SML от ЭНЕКО',
            description: 'Профессиональные решения для строительных компаний и дистрибьюторов. Трубы и фитинги SML высочайшего качества.',
            keywords: 'трубы SML, фитинги, строительство, ЭНЕКО',
            ogImage: 'images/hero-background.png'
        },
        'flange-adapters.html': {
            title: 'Фланцевые переходники SML - ЭНЕКО',
            description: 'Фланцевые переходники SML для профессионального монтажа систем водоотведения.',
            keywords: 'фланцевые переходники, SML, водоотведение',
            ogImage: 'images/flange-adapters/flange-adapters-main.png'
        },
        'crosses.html': {
            title: 'Крестовины SML - ЭНЕКО',
            description: 'Крестовины SML для разветвления трубопроводов в системах водоотведения.',
            keywords: 'крестовины SML, разветвление, трубопроводы',
            ogImage: 'images/crosses/sml-crosses-main.png'
        },
        'eccentric-reducers.html': {
            title: 'Переходники эксцентрические SML - ЭНЕКО',
            description: 'Переходники эксцентрические SML для изменения диаметра трубопроводов.',
            keywords: 'переходники эксцентрические, SML, диаметр труб',
            ogImage: 'images/eccentric-reducers/eccentric-reducers-main.png'
        },
        'sml-pipes.html': {
            title: 'Трубы SML - ЭНЕКО',
            description: 'Чугунные трубы SML для систем внутренней канализации и водоотведения.',
            keywords: 'трубы SML, чугунные трубы, канализация',
            ogImage: 'images/pipes/sml-pipes-main.png'
        },
        'elbows.html': {
            title: 'Отводы SML - ЭНЕКО',
            description: 'Отводы SML различных углов для поворотов в системах водоотведения.',
            keywords: 'отводы SML, повороты труб, фитинги',
            ogImage: 'images/elbows/sml-elbows-main.png'
        },
        'tees.html': {
            title: 'Тройники SML - ЭНЕКО',
            description: 'Тройники SML для создания разветвлений в трубопроводных системах.',
            keywords: 'тройники SML, разветвления, фитинги',
            ogImage: 'images/tees/sml-tees-main.png'
        },
        'plugs.html': {
            title: 'Заглушки SML - ЭНЕКО',
            description: 'Заглушки SML для герметичного закрытия концов трубопроводов.',
            keywords: 'заглушки SML, герметизация, фитинги',
            ogImage: 'images/plugs/plugs-main.png'
        },
        'revisions.html': {
            title: 'Ревизия с круглым отверстием SML - ЭНЕКО',
            description: 'Ревизии SML с круглым отверстием для обслуживания трубопроводных систем.',
            keywords: 'ревизии SML, обслуживание труб, круглое отверстие',
            ogImage: 'images/revisions/sml-revisions-main.png'
        },
        'rect-revisions.html': {
            title: 'Ревизия с прямоугольным отверстием SML - ЭНЕКО',
            description: 'Ревизии SML с прямоугольным отверстием для удобного обслуживания систем.',
            keywords: 'ревизии SML, прямоугольное отверстие, обслуживание',
            ogImage: 'images/rect-revisions/rect-revisions-main.png'
        },
        'support-pipes.html': {
            title: 'Опорные трубы SML - ЭНЕКО',
            description: 'Опорные трубы SML для создания надежных вертикальных стояков.',
            keywords: 'опорные трубы SML, стояки, вертикальные системы',
            ogImage: 'images/support-pipes/support-pipes-main.png'
        },
        'support-rings.html': {
            title: 'Опорные кольца SML - ЭНЕКО',
            description: 'Опорные кольца SML для фиксации и поддержки трубопроводных систем.',
            keywords: 'опорные кольца SML, фиксация труб, поддержка',
            ogImage: 'images/support-rings/support-rings-main.png'
        },
        'siphons.html': {
            title: 'Сифоны SML - ЭНЕКО',
            description: 'Сифоны SML для создания гидрозатворов в системах водоотведения.',
            keywords: 'сифоны SML, гидрозатворы, водоотведение',
            ogImage: 'images/siphons/siphons-main.png'
        },
        'clamps.html': {
            title: 'Хомуты крепежные SML - ЭНЕКО',
            description: 'Хомуты крепежные SML для надежной фиксации трубопроводных систем.',
            keywords: 'хомуты SML, крепежные элементы, фиксация труб',
            ogImage: 'images/clamps/clamps-main.png'
        }
    },
    header: `
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">
                    <img src="logos/logo.png" alt="ENECCO trade house" class="logo-img">
                </a>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="index.html#about">О продукции</a></li>
                        <li><a href="index.html#catalogs">Каталоги</a></li>
                        <li><a href="index.html#contact">Контакты</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <div class="contact-info">
                        <a href="tel:+79089743635" class="phone-link">+7 908 974-36-35</a>
                    </div>
                    <button class="menu-toggle" id="menuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>`,

    footer: `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <img src="logos/logo.png" alt="ENECCO trade house" class="footer-logo-img">
                        <h3>ЭНЕКО</h3>
                    </div>
                    <p class="footer-description">
                        Профессиональные решения для строительных компаний и дистрибьюторов. 
                        Трубы и фитинги SML высочайшего качества.
                    </p>
                </div>
                
                <div class="footer-section">
                    <h4>Продукция</h4>
                    <ul class="footer-links">
                        <li><a href="index.html#catalogs">Каталоги</a></li>
                        <li><a href="sml-pipes.html">Трубы SML</a></li>
                        <li><a href="elbows.html">Отводы SML</a></li>
                        <li><a href="sml-fittings.html">Фасонные части SML</a></li>
                        <li><a href="index.html#about">О продукции SML</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Контакты</h4>
                    <div class="footer-contact">
                        <div class="contact-item">
                            <strong>Телефон:</strong>
                            <a href="tel:+79089743635">+7 908 974-36-35</a>
                        </div>
                        <div class="contact-item">
                            <strong>Адрес:</strong>
                            <span>Владивосток, Первомайский район<br>Улица Калинина, 133, 2 этаж, 690012</span>
                        </div>
                    </div>
                    <div class="contact-mini-buttons">
                        <a href="https://wa.me/79089743635" target="_blank" class="contact-mini-button whatsapp">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            WhatsApp
                        </a>
                        <a href="https://t.me/username" target="_blank" class="contact-mini-button telegram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            Telegram
                        </a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Информация</h4>
                    <ul class="footer-links">
                        <li><a href="index.html#contact">Обратная связь</a></li>
                        <li><a href="#" onclick="downloadCatalog()">Получить каталог</a></li>
                        <li><a href="#">Техническая поддержка</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p class="copyright">
                        © 2024 ЭНЕКО. Все права защищены. 
                        <a href="#">Политика конфиденциальности</a> | 
                        <a href="#">Пользовательское соглашение</a>
                    </p>
                    <div class="footer-social">
                        <span>Мы в социальных сетях:</span>
                        <div class="social-links">
                            <a href="https://wa.me/79089743635" target="_blank" class="social-link whatsapp" title="WhatsApp">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                            </a>
                            <a href="https://t.me/username" target="_blank" class="social-link telegram" title="Telegram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`,

    contactModal: `
    <!-- Contact Modal -->
    <div id="contactModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeContactModal()">&times;</span>
            <div class="modal-header">
                <h2>Получить каталог</h2>
                <p>Свяжитесь с нами для получения актуального каталога продукции</p>
            </div>
            <div class="modal-body">
                <div class="contact-info">
                    <p>Выберите удобный способ связи:</p>
                    <div class="contact-buttons">
                        <a href="https://wa.me/79089743635" target="_blank" class="contact-button whatsapp">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            WhatsApp
                        </a>
                        <a href="https://t.me/username" target="_blank" class="contact-button telegram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            Telegram
                        </a>
                    </div>
                    <div class="contact-details">
                        <p><strong>Телефон:</strong> <a href="tel:+79089743635">+7 908 974-36-35</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
};

// Функция для получения имени текущей страницы
function getCurrentPageName() {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
}

// Функция для генерации SEO head
function generateSEOHead(pageName) {
    const pageData = SiteComponents.pageData[pageName] || SiteComponents.pageData['index.html'];
    
    return `
    <title>${pageData.title}</title>
    <meta name="description" content="${pageData.description}">
    <meta name="keywords" content="${pageData.keywords}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${pageData.title}">
    <meta property="og:description" content="${pageData.description}">
    <meta property="og:image" content="${pageData.ogImage}">
    <meta property="og:url" content="${window.location.href}">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${pageData.title}">
    <meta name="twitter:description" content="${pageData.description}">
    <meta name="twitter:image" content="${pageData.ogImage}">
    `;
}

// Функция мгновенной загрузки компонентов (синхронная)
function loadSiteComponents() {
    const currentPage = getCurrentPageName();
    
    // Загружаем общий head + SEO данные
    const headPlaceholder = document.getElementById('head-placeholder');
    if (headPlaceholder) {
        headPlaceholder.innerHTML = SiteComponents.commonHead + generateSEOHead(currentPage);
    }
    // Загружаем header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = SiteComponents.header;
    }
    
    // Загружаем footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = SiteComponents.footer;
    }
    
    // Загружаем contact modal
    const contactModalPlaceholder = document.getElementById('contact-modal-placeholder');
    if (contactModalPlaceholder) {
        contactModalPlaceholder.innerHTML = SiteComponents.contactModal;
    }
}

// Загружаем компоненты сразу при загрузке скрипта (до DOMContentLoaded)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSiteComponents);
} else {
    loadSiteComponents();
}
