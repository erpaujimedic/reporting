// Konfigurasi Google Sheets
const SCRIPT_URL = 'URL_APPS_SCRIPT_ANDA'; // Ganti dengan URL Apps Script nanti

document.getElementById('mcuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        cabang: document.getElementById('cabang').value,
        tanggal: document.getElementById('tanggal').value,
        jumlahPeserta: document.getElementById('jumlahPeserta').value,
        keterangan: document.getElementById('keterangan').value,
        status: document.getElementById('status').value,
        timestamp: new Date().toLocaleString('id-ID')
    };
    
    submitData(formData);
});

function submitData(data) {
    const messageDiv = document.getElementById('message');
    
    // Simulasi submit (nanti diganti dengan Apps Script)
    messageDiv.innerHTML = '<div class="message success">Data berhasil disimpan! (Simulasi)</div>';
    messageDiv.innerHTML += `<p>Data yang disimpan:<br>
        Cabang: ${data.cabang}<br>
        Tanggal: ${data.tanggal}<br>
        Jumlah Peserta: ${data.jumlahPeserta}<br>
        Status: ${data.status}</p>`;
    
    // Reset form
    document.getElementById('mcuForm').reset();
    
    // Untuk implementasi real, gunakan kode berikut:
    /*
    fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        messageDiv.innerHTML = '<div class="message success">Data berhasil disimpan!</div>';
        document.getElementById('mcuForm').reset();
    })
    .catch(error => {
        messageDiv.innerHTML = '<div class="message error">Error: Gagal menyimpan data</div>';
    });
    */
}
