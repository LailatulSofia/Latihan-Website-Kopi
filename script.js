// Menentukan sapaan berdasarkan waktu
const now = new Date();
const hour = now.getHours();
let sapa;

if (hour < 12) {
    sapa = 'Selamat Pagi!';
} else if (hour < 18) {
    sapa = 'Selamat Siang!';
} else {
    sapa = 'Selamat Malam!';
}

// Menampilkan alert ke pengguna
alert(`${sapa}! Selamat datang di Website Kopi Nusantara`);

// Menampilkan nama UMKM di console
const namaUMKM = 'Kopi Nusantara';
console.log('Website:', namaUMKM);

// Menambahkan variabel stok produk sederhana
let stokKopi = 10;
console.log('Stok kopi awal:', stokKopi);

// Mengurangi stok setelah penjualan 2 kopi
stokKopi -= 2;
console.log('Setelah penjualan 2 kopi, sisa stok:', stokKopi);

// Menampilkan pesan sederhana berdasarkan stok
if (stokKopi > 0) {
    console.log('Stok masih tersedia.');
} else {
    console.log('Stok habis!');
}