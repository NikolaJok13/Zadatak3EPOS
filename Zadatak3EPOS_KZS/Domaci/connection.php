<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
//uzimanje vrednosti iz forme
$ime = $_POST['ime'];
$prezime = $_POST['prezime'];
$datumRodjenja = $_POST['datum'];
$email = $_POST['email'];


if (isset($_POST['brojBodova'])) {
    $brojBodova = $_POST['brojBodova'];
    echo "PHP je dobio vrednost: " . $brojBodova . "<br>";
} else {
    echo "Nije poslata vrednost iz JavaScript-a. <br>";
}


//konekcija sa bazom
    $konekcija = new mysqli('127.0.0.1', 'root', '', 'bazakviza');

//unos podataka u bazu
    if ($konekcija->connect_error) {
        die("Greška pri povezivanju na bazu: " . $konekcija->connect_error);
    } else {
        $sqlKomanda = "INSERT INTO ucesnicikviza (Ime, Prezime, BrojBodova, DatumRodjenja, Email) VALUES (?, ?, ?, ?, ?)";
        $komanda = $konekcija->prepare($sqlKomanda);
        $komanda->bind_param("ssiss",  $ime, $prezime, $brojBodova, $datumRodjenja, $email);
        
        if ($komanda->execute()) {
            echo "Podaci uspešno dodati u bazu.<br>";
        } else {
            echo "Greška pri dodavanju podataka u bazu: " . $komanda->error . "<br>";
        }
    }
    
    $novi_podaci = array(
        "ime" => $ime,
        "prezime" => $prezime,
        "datum rodjenja" => $datumRodjenja,
        "brojBodova" => $brojBodova,
        "email" => $email
    );

    $json_fajl = 'podaci.json';
    $trenutni_podaci = json_decode(file_get_contents($json_fajl), true);
    $trenutni_podaci[] = $novi_podaci;
    file_put_contents($json_fajl, json_encode($trenutni_podaci));

    echo "Podaci uspešno dodati u .json fajl. <br>";

    $komanda->close();
    $konekcija->close();





}
?>