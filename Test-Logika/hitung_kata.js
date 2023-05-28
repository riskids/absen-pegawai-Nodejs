function hitungJumlahKata(input) {
    var words = input.split(/\s+/);
  
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        //pengecekan agar tidak menghitung kata2 dengan spesial karakter kecuali tanda baca yang benar
        if (/^[a-zA-Z-]+[.?,]?$/.test(words[i])) {
            count++;
        }
    }
    return count;
}

const a = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const b = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const c = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(hitungJumlahKata(a));
console.log(hitungJumlahKata(b));
console.log(hitungJumlahKata(c));
