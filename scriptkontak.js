// VALIDASI SAAT SUBMIT (PRAKTIKUM 1)
const form = document.getElementById("formKontak");

form.addEventListener("submit", function (event) {
    let valid = true;

    // ==========================
    // VALIDASI NAMA
    // ==========================
    const nama = document.getElementById("nama");
    const errorNama = document.getElementById("errorNama");

    if (nama.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
        valid = false;
    } else {
        errorNama.textContent = "";
    }

    // ==========================
    // VALIDASI EMAIL
    // ==========================
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailPattern = /^[^ ]+@gmail\.com$/i;

    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Email harus diisi dengan format @gmail.com.";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    // ==========================
    // VALIDASI NOMOR HP
    // ==========================
    const hp = document.getElementById("hp");
    const errorNoHp = document.getElementById("errorNoHp");

    // Hanya angka (0–9)
    const nomorPattern = /^[0-9]+$/;

    if (!nomorPattern.test(hp.value)) {
        errorNoHp.textContent = "Nomor HP hanya boleh angka.";
        valid = false;
    } 
    else if (hp.value.length < 10 && hp.value.length > 13) {
        errorNoHp.textContent = "Nomor HP minimal 10 digit dan maksimal 13 digit.";
        valid = false;
    }
    else {
        errorNoHp.textContent = "";
    }

    // ==========================
    // VALIDASI KATEGORI
    // ==========================
    const kategori = document.getElementById("kategori");
    const errorKategori = document.getElementById("errorKategori");

    if (kategori.value === "") {
        errorKategori.textContent = "Pilih salah satu kategori.";
        valid = false;
    } else {
        errorKategori.textContent = "";
    }

    // ==========================
    // VALIDASI TANGGAL
    // ==========================
    const tgl = document.getElementById("tgl");
    const errorTgl = document.getElementById("errorTgl");

    if (tgl.value === "") {
        errorTgl.textContent = "Tanggal pengiriman harus diisi.";
        valid = false;
    } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Biar perbandingan tidak error

        const selectedDate = new Date(tgl.value);

        if (selectedDate < today) {
            errorTgl.textContent = "Tanggal tidak boleh sebelum hari ini.";
            valid = false;
        } else {
            errorTgl.textContent = "";
        }
    }

    // ==========================
    // VALIDASI PESAN
    // ==========================
    const pesan = document.getElementById("pesan");
    const errorPesan = document.getElementById("errorPesan");

    if (pesan.value.trim().length < 10) {
        errorPesan.textContent = "Pesan minimal 10 karakter.";
        valid = false;
    } else {
        errorPesan.textContent = "";
    }

    // ==========================
    // CEK KESELURUHAN
    // ==========================
    if (!valid) {
        event.preventDefault(); // Gagalkan submit
    } else {
        //karena sudah menggunkaan form.js
        // alert("Pesan berhasil dikirim!");
        // form.reset();
    }
});

// VALIDASI REAL-TIME (PRAKTIKUM 2)

// Nama → event blur
document.getElementById("nama").addEventListener("blur", function () {
    const errorNama = document.getElementById("errorNama");
    errorNama.textContent = this.value.trim() === "" ? "Nama wajib diisi." : "";
});

// Pesan → event input
document.getElementById("pesan").addEventListener("input", function () {
    const errorPesan = document.getElementById("errorPesan");
    errorPesan.textContent = this.value.trim().length < 10 ? "Pesan minimal 10 karakter." : "";
});

// VALIDASI CHECKBOX (PRAKTIKUM 3)

document.getElementById("langganan").addEventListener("change", function () {
    if (this.checked) {
        alert("Terima kasih telah berlangganan newsletter!");
    }
});

    document.addEventListener("DOMContentLoaded", function () {
        const errorMsg = document.getElementById("errorMsg");
        const successMsg = document.getElementById("successMsg");
        const clearButton = document.getElementById("clearButton");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

        errorMsg.textContent = "";
        successMsg.textContent = "";

        if (nama.value === "" || email.value === "" || hp.value === "" || pesan.value === "") {
            errorMsg.textContent = "Semua field harus diisi.";
            return;
            }

                    successMsg.textContent = "Pesan berhasil dikirim!";
                    form.reset();
                });

                clearButton.addEventListener("click", function () {
                    form.reset();
                    errorMsg.textContent = "";
                    successMsg.textContent = "";
                });
            });