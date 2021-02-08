function zeigen() {
    // console.log("full name :" + " " + vorname.value + " " + nachname.value + " " + "from" + " " + land.value)
    console.log("full name :" + " " + (document.getElementById("vorname").value = "Johnny") + " " + (document.getElementById("nachname").value = "bravo") + " " + "from" + " " + (document.getElementById("land").value = "Australia"))
}