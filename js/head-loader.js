/**
 * Система загрузки единого head для статических сайтов
 * Заменяет SSI для хостингов без поддержки Server Side Includes
 */

class HeadLoader {
    constructor() {
        this.headData = null;
        this.isLoaded = false;
    }

    /**
     * Загружает head.html и применяет его к странице
     */
    async loadHead() {
        if (this.isLoaded) return;

        try {
            const response = await fetch('partials/head.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const headHTML = await response.text();
            this.headData = headHTML;
            this.applyHead();
            this.isLoaded = true;
        } catch (error) {
            console.error('Ошибка загрузки head.html:', error);
            // Fallback: загружаем базовые мета-теги
            this.loadFallbackHead();
        }
    }

    /**
     * Применяет загруженный head к странице
     */
    applyHead() {
        if (!this.headData) return;

        const head = document.head;
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.headData, 'text/html');
        const headElements = doc.head.children;

        // Удаляем существующие мета-теги (кроме уникальных)
        this.cleanExistingMetaTags();

        // Добавляем новые элементы
        Array.from(headElements).forEach(element => {
            // Пропускаем слоты - они будут заменены уникальными мета-тегами
            if (element.textContent && element.textContent.includes('SLOT')) {
                return;
            }
            
            // Клонируем элемент в реальный DOM
            const clonedElement = element.cloneNode(true);
            head.appendChild(clonedElement);
        });

        // Применяем уникальные мета-теги для текущей страницы
        this.applyPageSpecificMeta();
    }

    /**
     * Очищает существующие мета-теги (кроме уникальных)
     */
    cleanExistingMetaTags() {
        const head = document.head;
        const tagsToRemove = [
            'meta[charset]',
            'meta[name="viewport"]',
            'link[rel="preconnect"]',
            'link[href*="fonts.googleapis.com"]',
            'link[href*="fonts.gstatic.com"]',
            'link[rel="stylesheet"][href="styles.css"]',
            'script[src*="yandex.ru"]',
            'noscript'
        ];

        tagsToRemove.forEach(selector => {
            const elements = head.querySelectorAll(selector);
            elements.forEach(el => el.remove());
        });
    }

    /**
     * Применяет уникальные мета-теги для текущей страницы
     */
    applyPageSpecificMeta() {
        const pageMeta = this.getPageMeta();
        
        // Title
        if (pageMeta.title) {
            document.title = pageMeta.title;
        }

        // Description
        if (pageMeta.description) {
            this.setMetaTag('name', 'description', pageMeta.description);
        }

        // Open Graph теги
        if (pageMeta.og) {
            Object.entries(pageMeta.og).forEach(([property, content]) => {
                this.setMetaTag('property', `og:${property}`, content);
            });
        }
    }

    /**
     * Получает мета-данные для текущей страницы
     */
    getPageMeta() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '') || 'index';
        
        // Маппинг страниц на мета-данные
        const metaMap = {
            'index': {
                title: 'Трубы и фитинги SML от ЭНЕКО',
                description: 'Профессиональные решения для строительных компаний и дистрибьюторов. Трубы и фитинги SML высочайшего качества от ЭНЕКО.',
                og: {
                    title: 'Трубы и фитинги SML от ЭНЕКО',
                    description: 'Профессиональные решения для строительных компаний и дистрибьюторов. Трубы и фитинги SML высочайшего качества от ЭНЕКО.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/hero-background.png'
                }
            },
            'support-pipes': {
                title: 'Опорные трубы SML - ЭНЕКО',
                description: 'Специализированные элементы для создания опорных конструкций в трубопроводных системах SML. Опорные трубы из высококачественного литого чугуна.',
                og: {
                    title: 'Опорные трубы SML - ЭНЕКО',
                    description: 'Специализированные элементы для создания опорных конструкций в трубопроводных системах SML. Опорные трубы из высококачественного литого чугуна.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/support-pipes/support-pipes-main.png'
                }
            },
            'elbows': {
                title: 'Отводы SML - ЭНЕКО',
                description: 'Фасонные части для изменения направления трубопровода под углами 15°, 30°, 45°, 68° и 88°. Произведены из высококачественного литого чугуна.',
                og: {
                    title: 'Отводы SML - ЭНЕКО',
                    description: 'Фасонные части для изменения направления трубопровода под углами 15°, 30°, 45°, 68° и 88°. Произведены из высококачественного литого чугуна.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/elbows/sml-elbows-main.png'
                }
            },
            'tees': {
                title: 'Тройники SML - ЭНЕКО',
                description: 'Фасонные части для создания ответвлений в трубопроводных системах под углами 45° и 88°. Произведены из высококачественного литого чугуна.',
                og: {
                    title: 'Тройники SML - ЭНЕКО',
                    description: 'Фасонные части для создания ответвлений в трубопроводных системах под углами 45° и 88°. Произведены из высококачественного литого чугуна.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/tees/sml-tees-main.png'
                }
            },
            'crosses': {
                title: 'Крестовины SML - ЭНЕКО',
                description: 'Фасонные части для создания четырехстороннего соединения в трубопроводных системах под углами 45° и 70°. Произведены из высококачественного литого чугуна.',
                og: {
                    title: 'Крестовины SML - ЭНЕКО',
                    description: 'Фасонные части для создания четырехстороннего соединения в трубопроводных системах под углами 45° и 70°. Произведены из высококачественного литого чугуна.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/crosses/sml-crosses-main.png'
                }
            },
            'support-rings': {
                title: 'Опорные кольца SML - ЭНЕКО',
                description: 'Элементы крепления для фиксации трубопроводных систем SML. Опорные кольца из высококачественного литого чугуна для надежной поддержки труб.',
                og: {
                    title: 'Опорные кольца SML - ЭНЕКО',
                    description: 'Элементы крепления для фиксации трубопроводных систем SML. Опорные кольца из высококачественного литого чугуна для надежной поддержки труб.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/support-rings/support-rings-main.png'
                }
            },
            'revisions': {
                title: 'Ревизия с круглым отверстием SML - ЭНЕКО',
                description: 'Элементы для обслуживания и очистки трубопроводных систем. Ревизии из литого чугуна с круглым твердым отверстием для надежного доступа к системе канализации.',
                og: {
                    title: 'Ревизия с круглым отверстием SML - ЭНЕКО',
                    description: 'Элементы для обслуживания и очистки трубопроводных систем. Ревизии из литого чугуна с круглым твердым отверстием для надежного доступа к системе канализации.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/revisions/sml-revisions-main.png'
                }
            },
            'rect-revisions': {
                title: 'Ревизия с прямоугольным отверстием SML - ЭНЕКО',
                description: 'Элементы для обслуживания и очистки трубопроводных систем. Ревизии из литого чугуна с прямоугольным отверстием для надежного доступа к системе канализации.',
                og: {
                    title: 'Ревизия с прямоугольным отверстием SML - ЭНЕКО',
                    description: 'Элементы для обслуживания и очистки трубопроводных систем. Ревизии из литого чугуна с прямоугольным отверстием для надежного доступа к системе канализации.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/rect-revisions/rect-revisions-main.png'
                }
            },
            'eccentric-reducers': {
                title: 'Переходники эксцентрические SML - ЭНЕКО',
                description: 'Фасонные части для соединения труб разного диаметра с эксцентрическим смещением. Переходники из литого чугуна для надежного соединения при изменении диаметра трубопровода.',
                og: {
                    title: 'Переходники эксцентрические SML - ЭНЕКО',
                    description: 'Фасонные части для соединения труб разного диаметра с эксцентрическим смещением. Переходники из литого чугуна для надежного соединения при изменении диаметра трубопровода.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/eccentric-reducers/eccentric-reducers-main.png'
                }
            },
            'plugs': {
                title: 'Заглушки SML - ЭНЕКО',
                description: 'Фасонные части для герметичного закрытия трубопроводов. Заглушки из литого чугуна с прижимными скобами, пресс-заглушки и торцевые заглушки для надежного закрытия системы.',
                og: {
                    title: 'Заглушки SML - ЭНЕКО',
                    description: 'Фасонные части для герметичного закрытия трубопроводов. Заглушки из литого чугуна с прижимными скобами, пресс-заглушки и торцевые заглушки для надежного закрытия системы.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/plugs/plugs-main.png'
                }
            },
            'flange-adapters': {
                title: 'Фланцевые переходники SML - ЭНЕКО',
                description: 'Фасонные части для соединения труб SML с фланцевыми системами. Переходники из литого чугуна для интеграции систем SML с другими типами трубопроводных систем.',
                og: {
                    title: 'Фланцевые переходники SML - ЭНЕКО',
                    description: 'Фасонные части для соединения труб SML с фланцевыми системами. Переходники из литого чугуна для интеграции систем SML с другими типами трубопроводных систем.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/flange-adapters/flange-adapters-main.png'
                }
            },
            'siphons': {
                title: 'Сифоны SML - ЭНЕКО',
                description: 'Специальные фасонные части для создания водяных затворов в канализационных системах. Сифоны дождевых вод и стандартные сифоны SML для защиты от газов и запахов.',
                og: {
                    title: 'Сифоны SML - ЭНЕКО',
                    description: 'Специальные фасонные части для создания водяных затворов в канализационных системах. Сифоны дождевых вод и стандартные сифоны SML для защиты от газов и запахов.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/siphons/siphons-main.png'
                }
            },
            'clamps': {
                title: 'Хомуты крепежные SML - ЭНЕКО',
                description: 'Крепежные элементы для надежной фиксации труб SML к стенам и конструкциям. Стандартные и усиленные хомуты из высококачественных материалов.',
                og: {
                    title: 'Хомуты крепежные SML - ЭНЕКО',
                    description: 'Крепежные элементы для надежной фиксации труб SML к стенам и конструкциям. Стандартные и усиленные хомуты из высококачественных материалов.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/clamps/clamps-main.png'
                }
            },
            'sml-pipes': {
                title: 'Трубы SML - ЭНЕКО',
                description: 'Элементы системы канализации из литого чугуна. Для соединения SML труб между собой применяются современные хомуты.',
                og: {
                    title: 'Трубы SML - ЭНЕКО',
                    description: 'Элементы системы канализации из литого чугуна. Для соединения SML труб между собой применяются современные хомуты.',
                    type: 'website',
                    url: window.location.href,
                    image: window.location.origin + '/images/pipes/sml-pipes-main.png'
                }
            }
        };

        return metaMap[filename] || {
            title: 'ЭНЕКО - Трубы и фитинги SML',
            description: 'Профессиональные решения для строительных компаний и дистрибьюторов. Трубы и фитинги SML высочайшего качества.',
            og: {
                title: 'ЭНЕКО - Трубы и фитинги SML',
                description: 'Профессиональные решения для строительных компаний и дистрибьюторов. Трубы и фитинги SML высочайшего качества.',
                type: 'website',
                url: window.location.href,
                image: window.location.origin + '/images/hero-background.png'
            }
        };
    }

    /**
     * Устанавливает мета-тег
     */
    setMetaTag(attribute, name, content) {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }

    /**
     * Fallback загрузка базовых мета-тегов
     */
    loadFallbackHead() {
        // Базовые мета-теги
        this.setMetaTag('name', 'viewport', 'width=device-width, initial-scale=1.0');
        
        // Яндекс.Метрика
        const ymScript = document.createElement('script');
        ymScript.type = 'text/javascript';
        ymScript.textContent = `
            (function(m, e, t, r, i, k, a) {
                m[i] = m[i] || function() {
                    (m[i].a = m[i].a || []).push(arguments)
                };
                m[i].l = 1 * new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                        return;
                    }
                }
                k = e.createElement(t),
                a = e.getElementsByTagName(t)[0],
                k.async = 1,
                k.src = r,
                a.parentNode.insertBefore(k, a);
            })(
                window,
                document,
                'script',
                'https://mc.yandex.ru/metrika/tag.js?id=104214599',
                'ym'
            );

            ym(104214599, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                accurateTrackBounce: true,
                trackLinks: true
            });
        `;
        document.head.appendChild(ymScript);

        // Noscript для Яндекс.Метрики
        const noscript = document.createElement('noscript');
        noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/104214599" style="position:absolute; left:-9999px;" alt="" /></div>';
        document.head.appendChild(noscript);

        this.isLoaded = true;
    }
}

// Инициализация
const headLoader = new HeadLoader();

// Загружаем head сразу при загрузке скрипта
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => headLoader.loadHead());
} else {
    headLoader.loadHead();
}
