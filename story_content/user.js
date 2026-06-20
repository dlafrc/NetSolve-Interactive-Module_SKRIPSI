window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1953 = function()
{
  var player = GetPlayer();

// Mengambil nilai dari inputan user di Storyline
var namaUser = player.GetVar("vNamaLengkap");
var kelasUser = player.GetVar("vKelas");

// Ini adalah URL Web App Google Apps Script yang BARU
var url = "https://script.google.com/macros/s/AKfycbzIpN1JLTBAJBHMEdZQ4CGGO5nCLRvHwBCnrsnPtQTwvO-9Od0z8EYMdUBAvmmGWLfRjA/exec";

// Mengirim data ke Google Sheet menggunakan metode yang paling stabil
fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaUser) + '&kelas=' + encodeURIComponent(kelasUser)
});
}

window.Script1954 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir");
var webAppUrl = "https://script.google.com/macros/s/AKfycbzIar8x7kJb0pP8QGE7AHwC-RMH7CUES1lcUqXEsNfczLhno3NAigbU9N3qlr0d0eE/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Ulangi Kuis'
});
}

window.Script1955 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir");
var webAppUrl = "https://script.google.com/macros/s/AKfycbzIar8x7kJb0pP8QGE7AHwC-RMH7CUES1lcUqXEsNfczLhno3NAigbU9N3qlr0d0eE/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Reviu Kuis'
});
}

window.Script1956 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir"); 
var webAppUrl = "https://script.google.com/macros/s/AKfycbzIar8x7kJb0pP8QGE7AHwC-RMH7CUES1lcUqXEsNfczLhno3NAigbU9N3qlr0d0eE/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Selesai'
});
}

window.Script1957 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir");
var webAppUrl = "https://script.google.com/macros/s/AKfycby9_gkrlZFXPZUYFNzcWqd0zMAWJpToiIp9W2R9u5ZM_0Yx_gklYVeuQuiBn79Cug5j3g/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Ulangi Kuis'
});
}

window.Script1958 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir");
var webAppUrl = "https://script.google.com/macros/s/AKfycby9_gkrlZFXPZUYFNzcWqd0zMAWJpToiIp9W2R9u5ZM_0Yx_gklYVeuQuiBn79Cug5j3g/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Reviu Kuis'
});
}

window.Script1959 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir");
var webAppUrl = "https://script.google.com/macros/s/AKfycby9_gkrlZFXPZUYFNzcWqd0zMAWJpToiIp9W2R9u5ZM_0Yx_gklYVeuQuiBn79Cug5j3g/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Selesai'
});
}

window.Script1960 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir");
var webAppUrl = "https://script.google.com/macros/s/AKfycbx97ZZjSYmGFILtnOjjbPsi2xOEEyvi381qp3dSJIvs8Gct1mJw9Xl7cK2uOImiGN8WNA/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Ulangi Kuis'
});
}

window.Script1961 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir");
var webAppUrl = "https://script.google.com/macros/s/AKfycbx97ZZjSYmGFILtnOjjbPsi2xOEEyvi381qp3dSJIvs8Gct1mJw9Xl7cK2uOImiGN8WNA/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Reviu Kuis'
});
}

window.Script1962 = function()
{
  var player = GetPlayer();
var namaSiswa = player.GetVar("vNamaLengkap");
var nilaiKuis = player.GetVar("NilaiAkhir"); 
var webAppUrl = "https://script.google.com/macros/s/AKfycbx97ZZjSYmGFILtnOjjbPsi2xOEEyvi381qp3dSJIvs8Gct1mJw9Xl7cK2uOImiGN8WNA/exec"; 

fetch(webAppUrl, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'nama=' + encodeURIComponent(namaSiswa) + '&nilai=' + encodeURIComponent(nilaiKuis) + '&keterangan=Selesai'
});
}

};
