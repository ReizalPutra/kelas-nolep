let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.push("Pria", "SMA Internasional Metro");
    let date = input[3].split("/");
    const newDate = date.join("-");
    let bulan = "";
    switch (date[1]) {
      case "01": bulan = "Januari"; break;
      case "02": bulan = "Februari"; break;
      case "03": bulan = "Maret"; break;
      case "04": bulan = "April"; break;
      case "05": bulan = "Mei"; break;
      case "06": bulan = "Juni"; break;
      case "07": bulan = "Juli"; break;
      case "08": bulan = "Agustus"; break;
      case "09": bulan = "September"; break;
      case "10": bulan = "Oktober"; break;
      case "11": bulan = "November"; break;
      case "12": bulan = "Desember"; break;
      default: bulan = "Invalid"; break;
    }

    console.log(bulan);
    console.log([date[2], date[1], date[0]]);
    console.log(newDate);
    console.log(input);
}

dataHandling(input);
