

// Google Spreadsheet URL
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/15R658gMmkKxcp2qsgZN37vMcWBkpJ7FuDe962fBtdIM/edit?usp=sharing';

// Fungsi untuk memulai pengambilan data dari Google Spreadsheet
function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    });
}

// Fungsi untuk menampilkan daftar proyek
function showInfo(data, tabletop) {
    var projectContainer = document.getElementById('project-list-container');
    var htmlContent = '';

    // Loop melalui data dari Spreadsheet dan tampilkan tiap proyek
    data.forEach(function(projects) {
        htmlContent += `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3>${projects.title}</h3>
            <p>${projects['sub-title']}</p>
            <p>${projects.description}</p>
            <a href="${projects.link}" class="cta-btn">More Detail</a>
        </div>
        `;
    });

    projectContainer.innerHTML = htmlContent;
}

// Jalankan fungsi init saat halaman dimuat
window.addEventListener('DOMContentLoaded', init);
