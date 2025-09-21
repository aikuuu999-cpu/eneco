    // Общие компоненты сайта - управляются из одного места
const SiteComponents = {
    head: `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
`,

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
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p class="copyright">
                        © 2024. Все права защищены. 
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
    </footer>`
};

// Функция инициализации Яндекс.Метрики
function initYandexMetrika() {
    // Проверяем, не загружена ли уже Метрика
    if (window.ym) {
        return;
    }
    
    // Добавляем noscript элемент
    const noscript = document.createElement('noscript');
    noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/104214599" style="position:absolute; left:-9999px;" alt="" /></div>';
    document.head.appendChild(noscript);
    
    // Инициализируем Яндекс.Метрику
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104214599', 'ym');
    
    // Инициализируем счетчик после загрузки скрипта
    window.addEventListener('load', function() {
        if (window.ym) {
            ym(104214599, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                accurateTrackBounce: true,
                trackLinks: true
            });
        }
    });
}

// Функция мгновенной загрузки компонентов (синхронная)
function loadSiteComponents() {
    // Загружаем head (сохраняя существующий title)
    const headElement = document.head;
    if (headElement) {
        const existingTitle = headElement.querySelector('title');
        const titleText = existingTitle ? existingTitle.textContent : 'ЭНЕКО';
        
        // Создаем временный div для парсинга HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = SiteComponents.head;
        
        // Очищаем head и добавляем новые элементы
        headElement.innerHTML = '';
        
        // Добавляем title первым
        const newTitle = document.createElement('title');
        newTitle.textContent = titleText;
        headElement.appendChild(newTitle);
        
        // Добавляем остальные элементы из компонента
        while (tempDiv.firstChild) {
            headElement.appendChild(tempDiv.firstChild);
        }
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
}

// Добавляем класс для определения поддержки WebP
function detectWebPSupport() {
    const webp = new Image();
    webp.onload = webp.onerror = function () {
        if (webp.height === 2) {
            document.documentElement.classList.add('webp-supported');
        } else {
            document.documentElement.classList.add('no-webp');
        }
    };
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

// Загружаем компоненты сразу при загрузке скрипта (до DOMContentLoaded)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadSiteComponents();
        initYandexMetrika();
        detectWebPSupport();
    });
} else {
    loadSiteComponents();
    initYandexMetrika();
    detectWebPSupport();
}
