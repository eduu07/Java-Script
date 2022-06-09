function ageCheck() {

    
    
    let currentYear = 2022;
    var birthYear = Number(document.getElementById("year").value);
    var yearChecked = currentYear - birthYear;





    if (yearChecked > 18) {                                          
        alert('Acesso permitido');
        window.location.href = "https://www.google.com/";
    }



    else {
        alert('Parece que voce nao é maior de idade, ACESSO NEGADO!!');
    }
    
}
