// Funkcja do zastosowania ciemnego motywu
function applyDarkTheme() {
    console.log('Zastosowanie ciemnego motywu');

    // Całe tło strony
    document.body.style.backgroundColor = "#121212"; // Ciemne tło strony
    document.body.style.color = "#E0E0E0"; // Jasny tekst na stronie

    // Stylizacja wszystkich divów, z wykluczeniem profili graczy
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        // Sprawdzenie, czy element nie jest profilem gracza
        if (!div.closest('.pavatar_new') && !div.querySelector('.pavatar_new')) {
            div.style.backgroundColor = "#1E1E1E"; // Ciemniejsze tło dla bloków
            div.style.color = "#E0E0E0"; // Jasny tekst
        }
    });

    // Stylizacja specyficznych elementów na stronie
    const pbarElements = document.querySelectorAll('#forum TD.pbar');
    pbarElements.forEach(pbar => {
        pbar.style.backgroundColor = "#333"; // Ciemniejsze tło
        pbar.style.backgroundImage = "none"; // Usuń obrazek tła
        pbar.style.color = "#E0E0E0"; // Jasny tekst
        pbar.style.borderLeftStyle = "solid"; // Zmień obramowanie na pełne
        pbar.style.borderTopWidth = "1px";
        pbar.style.borderColor = "#444"; // Ciemne obramowanie
    });

    // Zmiana tła dla tabel i ramek, z wykluczeniem tabel w profilach graczy
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.classList.contains('repbar')) { // Wyklucz tabele z klasą repbar
            table.style.backgroundColor = "#1E1E1E"; // Ciemniejsze tło dla tabel
            table.style.color = "#FFFFFF"; // Jasny tekst w tabelach
            table.style.border = "1px solid #333"; // Delikatne ciemne obramowanie
        }
    });

    // Zmiany dotyczące komórek tabel (td, th) - bez zmian dla <tr> i <th>
    const tableCells = document.querySelectorAll('td');
    tableCells.forEach(cell => {
        if (!cell.closest('.repbar')) { // Wyklucz komórki w tabelach z klasą repbar
            cell.style.backgroundColor = "#1E1E1E"; // Ciemne tło komórek
            cell.style.color = "#E0E0E0"; // Jasny tekst
        }
    });


    // Przyciski
    const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
    buttons.forEach(button => {
        button.style.backgroundColor = "#333"; // Ciemne tło przycisków
        button.style.color = "#FFFFFF"; // Jasny tekst
        button.style.border = "1px solid #444"; // Obramowanie
    });

    // Nagłówki (wszystkie poziomy)
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headers.forEach(header => {
        header.style.color = "#FFFFFF"; // Białe nagłówki
    });

    // Zmiana stylu menu bocznego (jeśli jest)
    const sideMenus = document.querySelectorAll('.side-menu, #menu, .menu');
    sideMenus.forEach(menu => {
        menu.style.backgroundColor = "#1E1E1E"; // Ciemniejsze tło dla menu
        menu.style.color = "#E0E0E0"; // Jasny tekst
    });

    // Stylizacja wszystkich elementów z klasą post
    const posts = document.querySelectorAll('.post, .post-content, .comment');
    posts.forEach(post => {
        post.style.backgroundColor = "#1E1E1E"; // Ciemne tło postów
        post.style.color = "#E0E0E0"; // Jasny tekst
    });

    // Stylizacja <blockquote>
    const blockquotes = document.querySelectorAll('blockquote');
    blockquotes.forEach(blockquote => {
        blockquote.style.backgroundColor = "#1E1E1E";
        blockquote.style.color = "#E0E0E0";
        blockquote.style.borderLeft = "4px solid #4A90E2";
        blockquote.style.padding = "10px";
        blockquote.style.margin = "10px 0";
    });

    // Zapis do localStorage
    localStorage.setItem('darkMode', 'enabled');
}

// Funkcja do usunięcia ciemnego motywu
function removeDarkTheme() {
    console.log('Usunięcie ciemnego motywu');

    // Resetujemy tło i tekst
    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        div.style.backgroundColor = "";
        div.style.color = "";
    });

    const pbarElements = document.querySelectorAll('#forum TD.pbar');
    pbarElements.forEach(pbar => {
        pbar.style.backgroundColor = "";
        pbar.style.backgroundImage = "";
        pbar.style.color = "";
        pbar.style.borderLeftStyle = "";
        pbar.style.borderTopWidth = "";
        pbar.style.borderColor = "";
    });

    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.style.backgroundColor = "";
        table.style.color = "";
        table.style.border = "";
    });

    const tableCells = document.querySelectorAll('td');
    tableCells.forEach(cell => {
        cell.style.backgroundColor = "";
        cell.style.color = "";
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = "";
        link.style.textDecoration = "";
    });

    const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
    buttons.forEach(button => {
        button.style.backgroundColor = "";
        button.style.color = "";
        button.style.border = "";
    });

    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headers.forEach(header => {
        header.style.color = "";
    });

    const sideMenus = document.querySelectorAll('.side-menu, #menu, .menu');
    sideMenus.forEach(menu => {
        menu.style.backgroundColor = "";
        menu.style.color = "";
    });

    const posts = document.querySelectorAll('.post, .post-content, .comment');
    posts.forEach(post => {
        post.style.backgroundColor = "";
        post.style.color = "";
    });

    // Resetowanie stylów dla <blockquote>
    const blockquotes = document.querySelectorAll('blockquote');
    blockquotes.forEach(blockquote => {
        blockquote.style.backgroundColor = "";  // Resetowanie tła
        blockquote.style.color = "";            // Resetowanie koloru tekstu
        blockquote.style.borderLeft = "";       // Usunięcie lewego obramowania
        blockquote.style.padding = "";          // Resetowanie paddingu
        blockquote.style.margin = "";           // Resetowanie marginesu
    });

    // Usuń zapis w localStorage
    localStorage.setItem('darkMode', 'disabled');
}

// Funkcja do przełączania motywu
function toggleDarkTheme() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        removeDarkTheme();
    } else {
        applyDarkTheme();
    }
}
// Automatyczne załadowanie motywu przy odświeżeniu
if (localStorage.getItem('darkMode') === 'enabled') {
    applyDarkTheme();
}

// Nasłuchiwanie wiadomości z popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'applyDarkTheme') {
        applyDarkTheme();
        sendResponse({ status: 'success', message: 'Motyw ciemny został zastosowany.' });
    } else if (request.action === 'removeDarkTheme') {
        removeDarkTheme();
        sendResponse({ status: 'success', message: 'Motyw ciemny został wyłączony.' });
    }
});

