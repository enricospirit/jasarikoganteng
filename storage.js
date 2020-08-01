const info = {
   displayItem: 'Pilih jasa & lihat tarif di bawah',
};

function updateDisplay() {
   document.querySelector("#displayItem").innerText = info.displayItem;
}//klik muncul kata sama di atas

function selesaiInfo() {
   info.displayItem = 'Terimakasih. Semoga sukses...!';
}//tombol selesai mirip tombol clear(0)

function potong2Info() {
   info.displayItem = 'Tarif potong rambut Rp 35.000 per kepala';
}

function cuci2Info() {
   info.displayItem = 'Tarif cuci mobil Rp 35.000 untuk cuci eksterior dan Rp 50.000 untuk cuci reguler';
}

function desain2Info() {
   info.displayItem = 'Tarif jasa desain mulai Rp 30.000-100.000 per jasa';
}

function isyarat2Info() {
   info.displayItem = 'Tarif kelas bahasa isyarat mulai Rp 50.000 per kelas';
}

function sms2Info() {
   info.displayItem = 'Kirim SMS ke no 08992546588';
}

function wa2Info() {
   info.displayItem = 'Chat WA ke 08992546588';
}

function email2Info() {
   info.displayItem = 'Kirim email ke simon.enrico@yahoo.co.id';
}

function inputDigit(digit) {
   info.displayItem = digit;
}//awalnya ada +-= jadi + hilang supaya gak sambung kata lain

const tombols = document.querySelectorAll(".tombol");
for (let tombol of tombols) {
   tombol.addEventListener('click', function(event) {

       // mendapatkan objek elemen yang diklik
       const target = event.target;

       if(target.classList.contains('selesai')) {
           selesaiInfo();
           updateDisplay();
           return;//klik selesi muncul kata lain kntl
       }else if
         (target.classList.contains('potong2')) {
             potong2Info();
             updateDisplay();
             return;
       }else if
         (target.classList.contains('cuci2')) {
             cuci2Info();
             updateDisplay();
             return;
       }else if
         (target.classList.contains('desain2')) {
             desain2Info();
             updateDisplay();
             return;
       }else if
         (target.classList.contains('isyarat2')) {
             isyarat2Info();
             updateDisplay();
             return;
       }else if
         (target.classList.contains('sms2')) {
             sms2Info();
             updateDisplay();
             return;
       }else if
         (target.classList.contains('wa2')) {
             wa2Info();
             updateDisplay();
             return;
       }else if
         (target.classList.contains('email2')) {
               email2Info();
               updateDisplay();
               return;
       }



       /*if(target.classList.contains('potong')) {
           potongInfo();
           updateDisplay();
           return;*/

       inputDigit(target.innerText);
       updateDisplay()
   });
}

function inputDigit(digit) {
   if(info.displayItem === 'kontol') {
       info.displayItem = digit;
   } else {
       info.displayItem = digit;
   }//awalnya ada +-= jadi + hilang supaya gak sambung kata lain
}
