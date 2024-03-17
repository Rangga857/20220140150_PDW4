// Function untuk mengubah ke halaman login
function switchToLoginPage() {
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("popArtPage").style.display = "none";
}

// Function untuk mengubah ke halaman pop art
function switchToPopArtPage() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("popArtPage").style.display = "block";
}

// Function untuk melakukan aksi login
function login() {
    // Lakukan logika login di sini
    // Untuk kesederhanaan, hanya mengubah ke halaman pop art
    switchToPopArtPage();
}

// Function untuk menampilkan waktu saat ini
function updateWaktu() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("waktu").innerHTML = date.toLocaleDateString('en-US', options);
}

// Perbarui waktu secara awal dan setiap detik
updateWaktu();
setInterval(updateWaktu, 1000);