const form = document.getElementById("formKontak");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // ⬅️ WAJIB: selalu cegah submit HTML

  let valid = true;

  // ===== NAMA =====
  const nama = document.getElementById("nama");
  const errorNama = document.getElementById("errorNama");

  if (nama.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
    valid = false;
  } else {
    errorNama.textContent = "";
  }

  // ===== EMAIL =====
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  const emailPattern = /^[^ ]+@gmail\.com$/i;

  if (!emailPattern.test(email.value)) {
    errorEmail.textContent = "Email harus diisi @gmail.com dan format benar.";
    valid = false;
  } else {
    errorEmail.textContent = "";
  }

  // ===== NO HP =====
  const hp = document.getElementById("hp");
  const errorNoHp = document.getElementById("errorNoHp");
  const nomorPattern = /^[0-9]+$/;

  if (!nomorPattern.test(hp.value)) {
    errorNoHp.textContent = "Nomor HP hanya boleh angka.";
    valid = false;
  } else if (hp.value.length < 10 || hp.value.length > 13) {
    errorNoHp.textContent = "Nomor HP minimal 10 digit dan maksimal 13 digit.";
    valid = false;
  } else {
    errorNoHp.textContent = "";
  }

  // ===== KATEGORI =====
  const kategori = document.getElementById("kategori");
  const errorKategori = document.getElementById("errorKategori");

  if (kategori.value === "") {
    errorKategori.textContent = "Pilih salah satu kategori.";
    valid = false;
  } else {
    errorKategori.textContent = "";
  }

  // ===== TANGGAL =====
  const tgl = document.getElementById("tgl");
  const errorTgl = document.getElementById("errorTgl");

  if (tgl.value === "") {
    errorTgl.textContent = "Tanggal pengiriman harus diisi.";
    valid = false;
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(tgl.value);

    if (selectedDate < today) {
      errorTgl.textContent = "Tanggal tidak boleh sebelum hari ini.";
      valid = false;
    } else {
      errorTgl.textContent = "";
    }
  }

  // ===== PESAN =====
  const pesan = document.getElementById("pesan");
  const errorPesan = document.getElementById("errorPesan");

  if (pesan.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
    valid = false;
  } else {
    errorPesan.textContent = "";
  }

  // ===== FINAL =====
  if (!valid) return;

  alert("Pesan berhasil dikirim!");
  form.reset();
});
