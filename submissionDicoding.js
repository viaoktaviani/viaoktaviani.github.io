window.alert("Hello User!")
const Pengguna = prompt ("Apakah anda mengenal Rara? iya/tidak");
const Name = prompt ("Siapakah nama anda?");
const Visit = prompt ("Apakah anda pernah mengunjungi website ini?");


const user = {
    pengguna:Pengguna,
    Nama:Name
};


if (user.pengguna ==="iya"){
    alert ("Hallo "+ user.Nama +" Senang Bertemu Denganmu Kembali");
    updateDisplay();
}

else if (user.pengguna==="tidak"){
    alert("Hallo " + user.Nama +" Senang Berkenalan Denganmu, Hi saya rara :) ");
    updateDisplay();
}

else {
    alert ("Hallo," + user.Nama + " Selamat datang di my personal website, Salam Kenal :)");
    updateDisplay();
}

function updateDisplay (){ 
    document.querySelector("#display").innerText ="Welcome" +"to my personal page, " + user.Nama +" :)";}  // mendapatkan objek display number dengan menambahkan inner text untuk terus menampilkan. data ditammpilkan pada html id #displayNumber 
        




