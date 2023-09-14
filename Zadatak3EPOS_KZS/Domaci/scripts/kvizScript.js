var pomocna = 0;



function btnScore() {
  //promenjiva za konacan rezultat
  let score = 0;

  //provera mail
  let meil = document.getElementById("mejl").value;
  let rezultat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(meil);
  if (!rezultat) {
    alert("Mail nije pravilno unet");
    return;
  }

  //prvo pitanje
  if (valueRadio("pitanjeJedan") == "Egipat") {
    document.getElementById("textPitanja1").classList.remove("pogresno");
    document.getElementById("textPitanja1").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja1").classList.add("pogresno");
  }

  //drugo pitanje
  var temp = $("#pitanjeDva").val();
  if (temp.toLowerCase() == "benny" || temp.toLowerCase() == "jabuka") {
    document.getElementById("textPitanja2").classList.remove("pogresno");
    document.getElementById("textPitanja2").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja2").classList.add("pogresno");
  }

  //trece pitanje

  if ($("#pitanjeTri").val() == 4) {
    document.getElementById("textPitanja3").classList.remove("pogresno");
    document.getElementById("textPitanja3").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja3").classList.add("pogresno");
  }
  //cetvrto pitanje
  if ($("#pitanjeCetri :selected").text() == "Banana") {
    document.getElementById("textPitanja4").classList.remove("pogresno");
    document.getElementById("textPitanja4").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja4").classList.add("pogresno");
  }
  //peto pitanje
  if (valueRadio("pitanjePet") == "SAD") {
    document.getElementById("textPitanja5").classList.remove("pogresno");
    document.getElementById("textPitanja5").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja5").classList.add("pogresno");
  }
  //sesto pitanje
  if ($("#pitanjeSest").val() == 14) {
    document.getElementById("textPitanja6").classList.remove("pogresno");
    document.getElementById("textPitanja6").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja6").classList.add("pogresno");
  }
  //sedmo pitanje
  var temp = document.getElementById("pitanjeSedam").value;
  if (temp.toLowerCase() == "viktorija") {
    document.getElementById("textPitanja7").classList.remove("pogresno");
    document.getElementById("textPitanja7").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja7").classList.add("pogresno");
  }

  //osmo pitanje
  if (valueRadio("pitanjeOsam") == "Bademi") {
    document.getElementById("textPitanja9").classList.remove("pogresno");
    document.getElementById("textPitanja9").classList.add("tacno");
    score++;
  } else {
    document.getElementById("textPitanja9").classList.add("pogresno");
  }

  var poljeBodovi = document.getElementById("brojBodova");

  poljeBodovi.value = score + "";

  const date = new Date();
  alert(
    "Vaš odgovor je sačuvan u " + date.getHours() + ":" + date.getMinutes()
  );
  alert("Broj tačnih odgovora je " + score);

}

function hint() {
  if (pomocna == 0) {
    document.getElementById("imgHint").src = "../img/tt.jpg";
    document.getElementById("imgHint").style.width = "30%";
    document.getElementById("imgHint").style.visibility = "visible";
    pomocna = 1;
  } else {
    pomocna = 0;
    document.getElementById("imgHint").style.width = "0%";
    document.getElementById("imgHint").style.visibility = "hidden";
  }
}

//pomocna funkcija koja izvlaci selektovani radio button iz grupe
function valueRadio(name) {
  var ele = document.getElementsByName(name);

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].value;
    }
  }
}
