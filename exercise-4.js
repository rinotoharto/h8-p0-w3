

function dataHandling2(input) {
    // splice
    input.splice(1,1,'Roman Alamsyah Elsharawy');
    input.splice(2,1,'Provinsi Bandar Lampung');
    input.splice(4,1,'Pria', 'SMA Internasional Metro');
    console.log(input);

    // bulan switch case
    var inputBulan = input[3].split('/');
    var bulan = '';
    switch(inputBulan[1]) {
        case '01':
            bulan = 'Januari';
            break;
        case '02':
            bulan = 'Feburari';
            break;
        case '03':
            bulan = 'Maret';
            break;
        case '04':
            bulan = 'April';
            break;
        case '05':
            bulan = 'Mei';
            break;
        case '06':
            bulan = 'Juni';
            break;
        case '07':
            bulan = 'Juli';
            break;
        case '08':
            bulan = 'Agustus';
            break;
        case '09':
            bulan = 'September';
            break;
        case '10':
            bulan = 'Oktober';
            break;
        case '11':
            bulan = 'November';
            break;
        case '12':
            bulan = 'Desember';
            break;
        default:
    }
    console.log(bulan)
    // sorting tanggal/bulan/tahun
    var formatTanggal = input[3].split('/')
        formatTanggal.sort(function(a,b) {
            return b - a
        });
    console.log(formatTanggal)
    // split tanggal/bulan/tahun
    console.log(inputBulan.join('-'))
    // slice nama
    console.log(input[1].slice(0,15))
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */