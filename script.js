// Konfigurasi - Ganti dengan URL Apps Script Anda
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxahOZh7J91LhurAX5XBg5O6c8pwLVXgh4FBABvGwuu5NHFtZVp0XmNbzEK-LpGftCbSg/exec';

document.getElementById('mcuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        cabang: document.getElementById('cabang').value,
        tanggal: document.getElementById('tanggal').value,
        jumlahPeserta: parseInt(document.getElementById('jumlahPeserta').value),
        keterangan: document.getElementById('keterangan').value,
        status: document.getElementById('status').value
    };
    
    submitToGoogleSheets(formData);
});

async function submitToGoogleSheets(data) {
    const messageDiv = document.getElementById('message');
    
    try {
        messageDiv.innerHTML = '<div class="message">Mengirim data...</div>';
        
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.result === "success") {
            messageDiv.innerHTML = '<div class="message success">✅ Data berhasil disimpan ke database!</div>';
            document.getElementById('mcuForm').reset();
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        messageDiv.innerHTML = '<div class="message error">❌ Gagal menyimpan data: ' + error.message + '</div>';
    }
}
