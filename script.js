function updateDateTime() {
    const now = new Date();

    // Format tanggal: Senin, 28 April 2026 (contoh)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);

    // Format jam: 14:05:30
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('datetime').textContent = `${dateString} pukul ${timeString} WIB`;
}

// Panggil pertama kali, lalu perbarui setiap detik
updateDateTime();
setInterval(updateDateTime, 1000);

// Update tahun copyright otomatis
document.getElementById('year').textContent = new Date().getFullYear();