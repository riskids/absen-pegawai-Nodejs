function hitungPasangKaosKaki(arr) {
  const jumlahKaosKaki = {};
  let jumlahPasang = 0;

  // Menghitung jumlah kemunculan setiap warna kaos kaki
  for (let i = 0; i < arr.length; i++) {
    const warna = arr[i];
    if (jumlahKaosKaki[warna]) {
      jumlahKaosKaki[warna]++;
    } else {
      jumlahKaosKaki[warna] = 1;
    }
  }

  // Menghitung jumlah pasang kaos kaki yang dapat dijual
  for (const warna in jumlahKaosKaki) {
    const jumlah = jumlahKaosKaki[warna];
    jumlahPasang += Math.floor(jumlah / 2);
  }

  return jumlahPasang;
}

const a = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const b = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const c = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log(hitungPasangKaosKaki(a));
console.log(hitungPasangKaosKaki(b));
console.log(hitungPasangKaosKaki(c));
