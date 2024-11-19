document.getElementById('enableDarkMode').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs && tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'applyDarkTheme' }, function(response) {
                if (chrome.runtime.lastError) {
                    console.error('Błąd: ' + chrome.runtime.lastError.message);
                } else {
                    console.log('Motyw ciemny włączony.');
                }
            });
        } else {
            console.error('Nie znaleziono aktywnej karty.');
        }
    });
});

document.getElementById('disableDarkMode').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs && tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'removeDarkTheme' }, function(response) {
                if (chrome.runtime.lastError) {
                    console.error('Błąd: ' + chrome.runtime.lastError.message);
                } else {
                    console.log('Motyw ciemny wyłączony.');
                }
            });
        } else {
            console.error('Nie znaleziono aktywnej karty.');
        }
    });
});
