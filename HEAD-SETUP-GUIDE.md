# Руководство по настройке единого head

## 🎯 Цель
Создать единую систему управления мета-тегами для всех страниц сайта с SEO-оптимизацией.

## 📁 Структура файлов

```
eneco/
├── head.html                 # Базовый шаблон head (SSI)
├── head-manager.js          # JavaScript fallback
├── index.html               # Главная страница
├── sml-pipes.html          # Страница труб
├── elbows.html             # Страница отводов
└── ...                     # Остальные страницы
```

## 🚀 Варианты подключения

### **Вариант A: Server Side Includes (SSI) - РЕКОМЕНДУЕМЫЙ**

#### Преимущества:
- ✅ SEO-дружелюбный (мета-теги в исходном HTML)
- ✅ Быстрая загрузка
- ✅ Работает без JavaScript

#### Настройка:

1. **Включить SSI на сервере:**
   - Apache: добавить `Options +Includes` в .htaccess
   - Nginx: включить модуль `ssi`
   - Большинство хостингов поддерживают SSI

2. **Обновить каждую страницу:**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <!-- Включаем базовый head -->
    <!--#include virtual="head.html" -->
    
    <!-- Уникальные мета-теги для страницы -->
    <title>Название страницы - ЭНЕКО</title>
    <meta name="description" content="Описание страницы">
    <meta name="keywords" content="ключевые, слова">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Название страницы">
    <meta property="og:description" content="Описание страницы">
    <meta property="og:image" content="images/page-image.png">
    <meta property="og:url" content="https://eneco.ru/page.html">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://eneco.ru/page.html">
</head>
<body>
    <!-- Содержимое страницы -->
</body>
</html>
```

### **Вариант B: JavaScript Fallback**

#### Когда использовать:
- SSI недоступен на хостинге
- Нужна динамическая генерация мета-тегов

#### Настройка:

1. **Подключить скрипт в каждую страницу:**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <!-- Базовые мета-теги -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Заголовок по умолчанию</title>
    
    <!-- Подключаем head-manager.js -->
    <script src="head-manager.js"></script>
</head>
<body>
    <!-- Содержимое страницы -->
</body>
</html>
```

2. **Скрипт автоматически добавит мета-теги** на основе URL страницы.

## 📋 Пошаговая инструкция

### **Шаг 1: Подготовка файлов**

1. Скопировать `head.html` в корень проекта
2. Скопировать `head-manager.js` в корень проекта
3. Убедиться, что все изображения для og:image существуют

### **Шаг 2: Обновление страниц**

#### Для SSI (рекомендуемый):

1. **Открыть каждую HTML страницу**
2. **Заменить весь блок `<head>` на:**

```html
<head>
    <!--#include virtual="head.html" -->
    
    <!-- Уникальные мета-теги -->
    <title>Название страницы - ЭНЕКО</title>
    <meta name="description" content="Описание страницы">
    <meta name="keywords" content="ключевые, слова">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Название страницы">
    <meta property="og:description" content="Описание страницы">
    <meta property="og:image" content="images/page-image.png">
    <meta property="og:url" content="https://eneco.ru/page.html">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://eneco.ru/page.html">
</head>
```

#### Для JavaScript fallback:

1. **Добавить в каждую страницу:**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="head-manager.js"></script>
</head>
```

### **Шаг 3: Настройка аналитики**

1. **Открыть `head.html`**
2. **Раскомментировать блоки аналитики**
3. **Заменить `GA_MEASUREMENT_ID` и `YANDEX_COUNTER_ID` на реальные ID**

### **Шаг 4: Тестирование**

1. **Проверить работу SSI** (если используется)
2. **Проверить мета-теги** в исходном коде страниц
3. **Протестировать Open Graph** в Facebook Debugger
4. **Проверить Twitter Cards** в Twitter Card Validator

## 🔧 Настройка для разных хостингов

### **Apache (.htaccess):**
```apache
Options +Includes
AddType text/html .html
```

### **Nginx:**
```nginx
location ~ \.html$ {
    ssi on;
}
```

### **Если SSI недоступен:**
Использовать JavaScript fallback (Вариант B).

## 📊 SEO-оптимизация

### **Обязательные мета-теги:**
- `<title>` - уникальный для каждой страницы
- `<meta name="description">` - 150-160 символов
- `<meta name="keywords">` - релевантные ключевые слова
- `<link rel="canonical">` - канонический URL

### **Open Graph (для соцсетей):**
- `og:title` - заголовок для соцсетей
- `og:description` - описание для соцсетей
- `og:image` - изображение 1200x630px
- `og:url` - URL страницы

### **Twitter Cards:**
- `twitter:card` - тип карточки
- `twitter:title` - заголовок
- `twitter:description` - описание
- `twitter:image` - изображение

## 🚨 Важные замечания

1. **SSI предпочтительнее** для SEO
2. **JavaScript fallback** - только если SSI недоступен
3. **Все изображения og:image** должны быть доступны
4. **Тестировать** на реальном хостинге
5. **Проверять** мета-теги в исходном коде

## 📞 Поддержка

При возникновении проблем:
1. Проверить поддержку SSI на хостинге
2. Убедиться в правильности путей к файлам
3. Проверить консоль браузера на ошибки JavaScript
