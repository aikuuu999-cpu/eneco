// Компоненты теперь загружаются из components.js для мгновенной видимости

// Product catalog data based on ENECO catalog
const catalogData = {
    'sml-pipes': {
        title: "ТРУБЫ SML",
        description: "Элементы системы канализации из литого чугуна. Для соединения SML труб между собой применяются современные хомуты. Соответствуют ГОСТ 9583-75, EN 877.",
        category: "pipes",
        subcategories: {
            'pipe-3000': {
                title: "Труба 3000 мм",
                description: "Прямые трубы длиной 3000 мм",
                table: {
                    headers: ["Артикул", "DN, мм", "шт./уп", "кг/шт."],
                    rows: [
                        ["10050", "50", "37", "15,8"],
                        ["10070", "70", "41", "18,7"],
                        ["10080", "80", "38", "20,2"],
                        ["10100", "100", "38", "25,6"],
                        ["10125", "125", "23", "35,8"],
                        ["10150", "150", "20", "42,8"],
                        ["10200", "200", "10", "71,5"],
                        ["10250", "250", "8", "91,0"],
                        ["10300", "300", "6", "125,2"]
                    ]
                }
            }
        }
    },
    'sml-fittings': {
        title: "ФАСОННЫЕ ЧАСТИ SML",
        description: "Фасонные части из литого чугуна для систем канализации. Включают отводы, тройники, переходы и другие элементы.",
        category: "fittings",
        subcategories: {
            'elbows': {
                title: "Отводы",
                description: "Отводы различных углов для изменения направления трубопровода",
                items: {
                    'elbow-15': {
                        title: "Отвод 15°",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X, мм"],
                            rows: [
                                ["27050", "50", "0.5", "45"],
                                ["27070", "70", "0.7", "50"],
                                ["27080", "80", "0.8", "55"],
                                ["27100", "100", "1.1", "65"],
                                ["27125", "125", "1.6", "80"],
                                ["27150", "150", "2.3", "95"],
                                ["27200", "200", "4.1", "125"]
                            ]
                        }
                    },
                    'elbow-30': {
                        title: "Отвод 30°",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X, мм"],
                            rows: [
                                ["27050", "50", "0.6", "55"],
                                ["27070", "70", "0.8", "65"],
                                ["27080", "80", "0.9", "70"],
                                ["27100", "100", "1.3", "85"],
                                ["27125", "125", "1.9", "105"],
                                ["27150", "150", "2.7", "125"],
                                ["27200", "200", "4.8", "165"]
                            ]
                        }
                    },
                    'elbow-45': {
                        title: "Отвод 45°",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X, мм"],
                            rows: [
                                ["27050", "50", "0.7", "70"],
                                ["27070", "70", "1.0", "85"],
                                ["27080", "80", "1.1", "90"],
                                ["27100", "100", "1.6", "110"],
                                ["27125", "125", "2.3", "135"],
                                ["27150", "150", "3.3", "160"],
                                ["27200", "200", "5.9", "210"]
                            ]
                        }
                    },
                    'elbow-68': {
                        title: "Отвод 68°",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X, мм"],
                            rows: [
                                ["27050", "50", "0.7", "65"],
                                ["27070", "70", "1.1", "75"],
                                ["27080", "80", "1.2", "80"],
                                ["27100", "100", "1.9", "90"],
                                ["27125", "125", "2.9", "105"],
                                ["27150", "150", "4.3", "120"],
                                ["27200", "200", "7.7", "145"]
                            ]
                        }
                    },
                    'elbow-88': {
                        title: "Отвод 88°",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X, мм"],
                            rows: [
                                ["28050", "50", "0.7", "75"],
                                ["28070", "70", "1.1", "90"],
                                ["28080", "80", "1.2", "95"],
                                ["28100", "100", "2.1", "110"],
                                ["28125", "125", "3.2", "125"],
                                ["28150", "150", "4.9", "145"],
                                ["28200", "200", "8.8", "180"],
                                ["28250", "250", "12.5", "225"],
                                ["28300", "300", "16.5", "275"]
                            ]
                        }
                    },
                    'elbow-45-extended': {
                        title: "45° отвод с удлиненной (250 мм) стороной",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X1, мм", "X2, мм", "К, мм"],
                            rows: [
                                ["22070", "70", "2.5", "250", "60", "190"],
                                ["22080", "80", "2.6", "250", "60", "190"],
                                ["22100", "100", "4.2", "250", "70", "180"]
                            ]
                        }
                    },
                    'elbow-88-extended': {
                        title: "88° отвод с удлиненной (250 мм) стороной",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X1, мм", "X2, мм", "К, мм"],
                            rows: [
                                ["24070", "70", "2.8", "250", "90", "160"],
                                ["24080", "80", "2.8", "250", "90", "155"],
                                ["24100", "100", "3.5", "250", "110", "140"]
                            ]
                        }
                    },
                    'elbow-88-calm': {
                        title: "88° отвод с успокоительным участком 250 мм",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X1, мм", "X2, мм", "X3, мм"],
                            rows: [
                                ["20100", "100", "4.8", "70", "312", "291"],
                                ["20125", "125", "6.8", "80", "322", "308"],
                                ["20150", "150", "9.6", "90", "334", "326"]
                            ]
                        }
                    },
                    'elbow-88-double': {
                        title: "88° отвод из двух колен по 44°",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "X1, мм", "X2, мм", "X3, мм"],
                            rows: [
                                ["26050", "50", "1.2", "50", "100", "121"],
                                ["26070", "70", "1.8", "60", "120", "145"],
                                ["26080", "80", "1.8", "60", "120", "145"],
                                ["26100", "100", "3.2", "70", "140", "170"],
                                ["26125", "125", "4.6", "80", "160", "195"],
                                ["26150", "150", "7.0", "90", "180", "219"]
                            ]
                        }
                    },
                    'elbow-88-revision': {
                        title: "Отвод 88° с ревизией",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "а, мм", "b, мм"],
                            rows: [
                                ["29100", "100", "3.40", "112", "112"],
                                ["29150", "150", "7.0", "146", "146"]
                            ]
                        }
                    },
                    'elbow-45-revision': {
                        title: "Отвод 45° с ревизией",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "а, мм", "b, мм"],
                            rows: [
                                ["31100", "100", "2.60", "82", "82"],
                                ["31150", "150", "7.00", "112", "112"]
                            ]
                        }
                    },
                    'elbow-88-long-revision': {
                        title: "Длинный отвод 88° с ревизией",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "а, мм", "R, мм"],
                            rows: [
                                ["50075", "75", "4.51", "330", "300"],
                                ["50100", "100", "7.70", "426", "400"],
                                ["50150", "150", "19.70", "630", "600"]
                            ]
                        }
                    }
                }
            },
            'tees': {
                title: "Тройники",
                description: "Тройники для создания ответвлений в трубопроводной системе",
                items: {
                    'tee-88-revision': {
                        title: "Тройник 88° с ревизией и плавным входом",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "L, мм", "а, мм", "b, мм"],
                            rows: [
                                ["42050", "100x50", "3.80", "205", "103", "96"],
                                ["42075", "100x75", "4.00", "228", "118", "145"],
                                ["42010", "100x100", "4.50", "275", "168", "150"],
                                ["42015", "150x100", "7.50", "280", "140", "167"],
                                ["42115", "150x150", "11.00", "353", "205", "192"]
                            ]
                        }
                    },
                    'tee-45-revision': {
                        title: "Тройник 45° с ревизией",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "L, мм", "а, мм", "b, мм"],
                            rows: [
                                ["44100", "100x100", "4.39", "275", "205", "205"],
                                ["44150", "150x150", "9.92", "354", "264", "264"],
                                ["44200", "200x200", "15.75", "455", "340", "340"]
                            ]
                        }
                    },
                    'tee-88-long': {
                        title: "Тройник 88° с длинной стороной",
                        table: {
                            headers: ["Артикул", "DN, мм", "кг/шт.", "L, мм", "К, мм", "X1, мм", "X2, мм", "X3, мм"],
                            rows: [
                                ["42016", "100x100", "4.6", "430", "205", "325", "105", "115"]
                            ]
                        }
                    }
                }
            }
        }
    }
};

// Download catalog function
function downloadCatalog() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        // Fallback if modal is not found
        alert('Свяжитесь с нами для получения каталога:\nWhatsApp: +7 908 974-36-35\nTelegram: @username');
    }
}

// Contact modal functions
function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Open catalog modal
function openCatalog(catalogType) {
    const modal = document.getElementById('catalogModal');
    const modalContent = document.getElementById('modalContent');
    
    const catalog = catalogData[catalogType];
    
    if (!catalog) {
        console.error('Catalog not found:', catalogType);
        return;
    }
    
    // Check if catalog has subcategories
    if (catalog.subcategories) {
        modalContent.innerHTML = `
            <h2>${catalog.title}</h2>
            <p style="margin-bottom: 2rem; color: #666; font-size: 1.1rem;">${catalog.description}</p>
            
            <div class="subcategories-grid">
                ${Object.entries(catalog.subcategories).map(([key, subcategory]) => `
                    <div class="subcategory-card" onclick="openSubcategory('${catalogType}', '${key}')">
                        <h3>${subcategory.title}</h3>
                        <p>${subcategory.description}</p>
                        <button class="catalog-button">Посмотреть</button>
                    </div>
                `).join('')}
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="catalog-button" onclick="closeModal()">Вернуться на главную</button>
            </div>
        `;
    } else {
        // Legacy format for backward compatibility
        modalContent.innerHTML = `
            <h2>${catalog.title}</h2>
            <p style="margin-bottom: 2rem; color: #666; font-size: 1.1rem;">${catalog.description}</p>
            
            <div class="table-container">
                <table class="catalog-table">
                    <thead>
                        <tr>
                            ${catalog.table.headers.map(header => `<th>${header}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${catalog.table.rows.map(row => `
                            <tr>
                                ${row.map(cell => `<td>${cell}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="cta-button" onclick="orderProduct('${catalogType}')">Заказать</button>
                <button class="catalog-button" onclick="closeModal()">Вернуться на главную</button>
            </div>
        `;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open subcategory
function openSubcategory(catalogType, subcategoryKey) {
    const modal = document.getElementById('catalogModal');
    const modalContent = document.getElementById('modalContent');
    
    const catalog = catalogData[catalogType];
    const subcategory = catalog.subcategories[subcategoryKey];
    
    if (!subcategory) {
        console.error('Subcategory not found:', subcategoryKey);
        return;
    }
    
    // Check if subcategory has items
    if (subcategory.items) {
        modalContent.innerHTML = `
            <h2>${subcategory.title}</h2>
            <p style="margin-bottom: 2rem; color: #666; font-size: 1.1rem;">${subcategory.description}</p>
            
            <div class="items-grid">
                ${Object.entries(subcategory.items).map(([key, item]) => `
                    <div class="item-card" onclick="openItem('${catalogType}', '${subcategoryKey}', '${key}')">
                        <h3>${item.title}</h3>
                        <button class="catalog-button">Посмотреть характеристики</button>
                    </div>
                `).join('')}
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="catalog-button" onclick="openCatalog('${catalogType}')">Назад к категории</button>
                <button class="catalog-button" onclick="closeModal()">Вернуться на главную</button>
            </div>
        `;
    } else {
        // Direct table display
        modalContent.innerHTML = `
            <h2>${subcategory.title}</h2>
            <p style="margin-bottom: 2rem; color: #666; font-size: 1.1rem;">${subcategory.description}</p>
            
            <div class="table-container">
                <table class="catalog-table">
                    <thead>
                        <tr>
                            ${subcategory.table.headers.map(header => `<th>${header}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${subcategory.table.rows.map(row => `
                            <tr>
                                ${row.map(cell => `<td>${cell}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="cta-button" onclick="orderProduct('${catalogType}')">Заказать</button>
                <button class="catalog-button" onclick="openCatalog('${catalogType}')">Назад к категории</button>
                <button class="catalog-button" onclick="closeModal()">Вернуться на главную</button>
            </div>
        `;
    }
}

// Open item details
function openItem(catalogType, subcategoryKey, itemKey) {
    const modal = document.getElementById('catalogModal');
    const modalContent = document.getElementById('modalContent');
    
    const catalog = catalogData[catalogType];
    const subcategory = catalog.subcategories[subcategoryKey];
    const item = subcategory.items[itemKey];
    
    if (!item) {
        console.error('Item not found:', itemKey);
        return;
    }
    
    modalContent.innerHTML = `
        <h2>${item.title}</h2>
        
        <div class="table-container">
            <table class="catalog-table">
                <thead>
                    <tr>
                        ${item.table.headers.map(header => `<th>${header}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${item.table.rows.map(row => `
                        <tr>
                            ${row.map(cell => `<td>${cell}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <button class="cta-button" onclick="orderProduct('${catalogType}')">Заказать</button>
            <button class="catalog-button" onclick="openSubcategory('${catalogType}', '${subcategoryKey}')">Назад к подкатегории</button>
            <button class="catalog-button" onclick="closeModal()">Вернуться на главную</button>
        </div>
    `;
}

// Close modal
function closeModal() {
    const modal = document.getElementById('catalogModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Order product function
function orderProduct(catalogType) {
    const catalog = catalogData[catalogType];
    alert(`Запрос коммерческого предложения по ${catalog.title} принят! Наш менеджер по работе с ключевыми клиентами свяжется с вами в течение рабочего дня для обсуждения условий поставки и технических требований.`);
    closeModal();
}


// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('catalogModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('loading')) return;
        
        const originalText = this.textContent;
        this.classList.add('loading');
        this.textContent = 'Загрузка...';
        
        setTimeout(() => {
            this.classList.remove('loading');
            this.textContent = originalText;
        }, 1000);
    });
});

// Add scroll effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        // Ensure menu is closed by default on mobile and desktop
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu (components уже загружены из components.js)
    initMobileMenu();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Hero section should be visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});
