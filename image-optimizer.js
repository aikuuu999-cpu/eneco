// Система оптимизации изображений для ENECO проекта
class ImageOptimizer {
    constructor() {
        this.supportsWebP = false;
        this.init();
    }

    // Инициализация системы
    async init() {
        await this.checkWebPSupport();
        this.setupLazyLoading();
        this.optimizeHeroBackground();
    }

    // Проверка поддержки WebP
    checkWebPSupport() {
        return new Promise((resolve) => {
            const webp = new Image();
            webp.onload = webp.onerror = () => {
                this.supportsWebP = (webp.height === 2);
                console.log('WebP support:', this.supportsWebP ? '✅' : '❌');
                resolve();
            };
            webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }

    // Получение оптимального пути к изображению
    getOptimalImagePath(basePath, options = {}) {
        const { 
            responsive = true, 
            fallback = true,
            quality = 'desktop' // mobile, tablet, desktop, large
        } = options;

        // Определяем размер экрана
        let size = quality;
        if (responsive) {
            const width = window.innerWidth;
            if (width <= 480) size = 'mobile';
            else if (width <= 768) size = 'tablet';
            else if (width <= 1200) size = 'desktop';
            else size = 'large';
        }

        // Убираем расширение из пути
        const pathWithoutExt = basePath.replace(/\.(png|jpg|jpeg)$/i, '');
        
        // Формируем путь к WebP версии
        let webpPath = `${pathWithoutExt}.webp`;
        if (responsive && size !== 'desktop') {
            webpPath = `${pathWithoutExt}-${size}.webp`;
        }

        // Формируем fallback путь
        let fallbackPath = basePath;
        if (responsive && size !== 'desktop') {
            const ext = basePath.match(/\.(png|jpg|jpeg)$/i)?.[0] || '.png';
            fallbackPath = `${pathWithoutExt}-${size}${ext}`;
        }

        return {
            webp: webpPath,
            fallback: this.supportsWebP ? null : fallbackPath,
            original: basePath
        };
    }

    // Создание picture элемента с поддержкой WebP и адаптивности
    createPictureElement(src, alt, className = '', options = {}) {
        const { webp, fallback, original } = this.getOptimalImagePath(src, options);
        
        const picture = document.createElement('picture');
        
        // Добавляем source для WebP
        if (this.supportsWebP) {
            const source = document.createElement('source');
            source.srcset = webp;
            source.type = 'image/webp';
            picture.appendChild(source);
        }
        
        // Добавляем img элемент
        const img = document.createElement('img');
        img.src = this.supportsWebP ? webp : (fallback || original);
        img.alt = alt;
        img.className = className;
        img.loading = 'lazy'; // Нативный lazy loading
        
        picture.appendChild(img);
        
        return picture;
    }

    // Создание адаптивного изображения с srcset
    createResponsiveImage(basePath, alt, className = '') {
        const pathWithoutExt = basePath.replace(/\.(png|jpg|jpeg)$/i, '');
        const ext = basePath.match(/\.(png|jpg|jpeg)$/i)?.[0] || '.png';
        
        const img = document.createElement('img');
        img.alt = alt;
        img.className = className;
        img.loading = 'lazy';
        
        if (this.supportsWebP) {
            // WebP srcset
            const webpSrcset = [
                `${pathWithoutExt}-mobile.webp 400w`,
                `${pathWithoutExt}-tablet.webp 768w`,
                `${pathWithoutExt}-desktop.webp 1200w`,
                `${pathWithoutExt}.webp 1920w`
            ].join(', ');
            
            img.srcset = webpSrcset;
            img.src = `${pathWithoutExt}.webp`;
        } else {
            // Fallback srcset
            const fallbackSrcset = [
                `${pathWithoutExt}-mobile${ext} 400w`,
                `${pathWithoutExt}-tablet${ext} 768w`,
                `${pathWithoutExt}-desktop${ext} 1200w`,
                `${pathWithoutExt}${ext} 1920w`
            ].join(', ');
            
            img.srcset = fallbackSrcset;
            img.src = basePath;
        }
        
        img.sizes = '(max-width: 480px) 400px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px';
        
        return img;
    }

    // Настройка lazy loading для существующих изображений
    setupLazyLoading() {
        // Проверяем поддержку нативного lazy loading
        if ('loading' in HTMLImageElement.prototype) {
            console.log('Используется нативный lazy loading');
            this.enableNativeLazyLoading();
        } else {
            console.log('Используется Intersection Observer для lazy loading');
            this.enableIntersectionObserverLazyLoading();
        }
    }

    // Включение нативного lazy loading
    enableNativeLazyLoading() {
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            // Не применяем lazy loading к hero изображениям
            if (!img.closest('.hero')) {
                img.loading = 'lazy';
                // Убираем любые анимации после загрузки
                img.addEventListener('load', () => {
                    img.classList.remove('loading-shimmer');
                    img.classList.add('loaded');
                });
            }
        });
    }

    // Lazy loading через Intersection Observer (fallback)
    enableIntersectionObserverLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Оптимизация hero background
    optimizeHeroBackground() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const width = window.innerWidth;
        let heroImage = 'images/hero-background.webp';
        
        if (this.supportsWebP) {
            if (width <= 768) {
                heroImage = 'images/hero-background-mobile.webp';
            } else if (width <= 1024) {
                heroImage = 'images/hero-background-tablet.webp';
            } else {
                heroImage = 'images/hero-background-desktop.webp';
            }
        } else {
            heroImage = 'images/hero-background.png';
        }

        // Предзагрузка hero изображения
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroImage;
        document.head.appendChild(link);

        // Обновляем CSS переменную для hero background
        document.documentElement.style.setProperty('--hero-bg', `url('${heroImage}')`);
        
        console.log('Hero background оптимизирован:', heroImage);
    }

    // Замена всех изображений на оптимизированные версии
    replaceAllImages() {
        const catalogImages = document.querySelectorAll('.catalog-main-image');
        
        catalogImages.forEach(img => {
            const currentSrc = img.src;
            if (!currentSrc.includes('.webp')) {
                const optimizedPaths = this.getOptimalImagePath(currentSrc, { responsive: true });
                
                // Создаем новый адаптивный элемент
                const newImg = this.createResponsiveImage(currentSrc, img.alt, img.className);
                
                // Заменяем старое изображение
                img.parentNode.replaceChild(newImg, img);
            }
        });
        
        console.log('Все изображения каталога заменены на оптимизированные версии');
    }

    // Обновление при изменении размера окна
    handleResize() {
        // Переоптимизируем hero background при изменении размера
        this.optimizeHeroBackground();
    }
}

// Инициализация системы оптимизации изображений
document.addEventListener('DOMContentLoaded', () => {
    window.imageOptimizer = new ImageOptimizer();
    
    // Обработка изменения размера окна
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            window.imageOptimizer.handleResize();
        }, 250);
    });
});

// Экспорт для использования в других скриптах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageOptimizer;
}
