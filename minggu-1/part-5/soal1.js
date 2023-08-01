let nama ="reizal";
let peran ="mage";

if(nama === ""){
    console.log("nama wajib diisi !!!")
}
if (peran === "") {
    console.log("pilih peranmu untuk memulai game")
}else{
    switch (peran) {
        case "ksatria":
            console.log(`halo kstaria ${nama}, kamu dapat menyerang dengan senjatamu`)
            break;
        case "tabib":
            console.log(`halo tabib ${nama}, kamu dapat membantu temanmu yang terluka`)
            break;
        case "penyihir":
            console.log(`halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
            break;
        default:
            console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
            break;
    }}