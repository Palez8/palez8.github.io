var userLanguage = navigator.language || navigator.userLanguage;

console.log(userLanguage)

var translations = {
    'en': {
        'homepageKey': 'Homepage',
        'testKey': 'Test',

        'welcomeHomepageKey': 'Welcome to the Homepage',
        'welcomeTestPageKey': 'Welcome to the Test Page',

        'backToHomepageKey': 'Back to Homepage',
    },
    'de': {
        'homepageKey': 'Startseite',
        'testKey': 'Test',

        'welcomeHomepageKey': 'Willkommen auf der Startseite',
        'welcomeTestPageKey': 'Willkommen auf der Test Seite',

        'backToHomepageKey': 'Zurueck zur Startseite',
    },
};

function displayTranslation() {
    var elements = document.querySelectorAll('[data-translation-key]');
    
    elements.forEach(function (element) {
        var translationKey = element.getAttribute('data-translation-key');
        var translation = translations[userLanguage] && translations[userLanguage][translationKey];
        
        if (translation) {
            element.textContent = translation;
        }
    });
}

displayTranslation();
