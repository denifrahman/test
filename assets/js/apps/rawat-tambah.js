var table_user;


var formData;
var data_edit = {};

var nomorGigi;
var controlGigi;
var posisiGigi;
var paramGigi;
var diagnosaGigi = [];
var skipGigiGoyang = false;
var skipGigiGoyangKananKiri = false;
var skipEmail = false;
var skipPersistensi = false;
var skipKarangGigi = false;
var gigiAnak = false;
app_rawat_tambah = {

	init: function () {

		// hidePertanyaan();

		loaded();
		odontogram();
		$('.nav-tabs > li a[title]').tooltip();

		//Wizard
		$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

			var $target = $(e.target);
			if ($target.parent().hasClass('disabled')) {
				return false;
			}
		});

		$(".next-step").click(function (e) {
			// $("#K13").hide();
			// $("#ç").show();
			// console.log(e);

		});
		$(".prev-step").click(function (e) {

			var $active = $('.wizard .nav-tabs li.active');
			prevTab($active);

		});

		$('input[type=radio][name=K12]').change(function () {
			if (this.value != 0) {
				console.log(this.value);
				skipGigiGoyang = true;
			} else {
				skipGigiGoyang = false;
			}
		});

		$('input[type=radio][name=K10]').change(function () {
			if (this.value != 0) {
				console.log(this.value);
				skipGigiGoyangKananKiri = true;
			} else {
				skipGigiGoyangKananKiri = false;
			}
		});

		$("#complete-K13").hide();
		$("#complete-K14").hide();
		$('input[type=radio][name=K13]').change(function () {
			if (this.value != 0) {
				$("#complete-K13").show();
				$("#next-K13").hide();
			} else {
				$("#complete-K13").hide();
				$("#next-K13").show();
			}
		});

		$('input[type=radio][name=K14]').change(function () {
			if (this.value == 0) {
				$("#complete-K14").show();
				$("#next-K14").hide();
			} else {
				$("#complete-K14").hide();
				$("#next-K14").show();
			}
		});

		$('input[type=radio][name=K02]').change(function () {
			console.log(this.value);
			if (this.value == 0) {
				skipEmail = true;
			} else {
				skipEmail = false;
			}
		});


		$('input[type=radio][name=K09]').change(function () {
			if (this.value == 0) {
				skipPersistensi = true;
			} else {
				skipPersistensi = false;
			}
		});

		$('input[type=radio][name=K14]').change(function () {
			if (this.value == 0) {
				skipKarangGigi = true;
			} else {
				skipKarangGigi = false;
			}
		});

		$('input[type=radio][name=K05]').change(function () {
			if (this.value != 0) {
				skipEmail = true;
			} else {
				skipEmail = false;
			}
		});

		$('#next-k13').click(function () {

		});

	}

}
function nextPage(param) {
	switch (param) {
		case "1":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "2":
			if (skipGigiGoyang) {
				$("#" + (parseInt(param) + 3)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) + 1)).show();
				$("#" + param).hide();
			}
			break;
		case "3":
			if (skipGigiGoyangKananKiri) {
				$("#" + (parseInt(param) + 2)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) + 1)).show();
				$("#" + param).hide();
			}
			break;
		case "4":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "5":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "6":
			if (skipEmail) {
				$("#" + (parseInt(param) + 6)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) + 1)).show();
				$("#" + param).hide();
			}
			break;
		case "7":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "8":
			if (skipEmail) {
				$("#" + (parseInt(param) + 2)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) + 1)).show();
				$("#" + param).hide();
			}
			break;
		case "9":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "10":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "11":
			if (skipPersistensi) {
				$("#" + (parseInt(param) + 3)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) + 1)).show();
				$("#" + param).hide();
			}
			break;
		case "12":
			if (skipKarangGigi && gigiAnak) {
				$("#complete-13").show();
				$("#next-K08").hide();
				// $("#" + (parseInt(param) + 2)).show();
				// $("#" + param).hide();
			}
			if (skipPersistensi) {
				$("#" + (parseInt(param) + 2)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) + 1)).show();
				$("#" + param).hide();
			}
			break;
		case "13":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "14":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "15":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
		case "16":
			$("#" + (parseInt(param) + 1)).show();
			$("#" + param).hide();
			break;
	}
}

function prevPage(param) {
	switch (param) {
		case "1":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "2":
			if (skipGigiGoyang) {
				$("#" + (parseInt(param) - 3)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) - 1)).show();
				$("#" + param).hide();
			}
			break;
		case "3":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "4":
			if (skipGigiGoyangKananKiri) {
				$("#" + (parseInt(param) - 2)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) - 1)).show();
				$("#" + param).hide();
			}
			break;
		case "5":
			// $("#" + (parseInt(param) + 1)).show();
			// $("#" + param).hide();
			if (skipGigiGoyang) {
				$("#" + (parseInt(param) - 3)).show();
				$("#" + param).hide();

			} else if (skipGigiGoyangKananKiri) {
				$("#" + (parseInt(param) - 2)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) - 1)).show();
				$("#" + param).hide();
			}
			break;
		case "6":
			if (skipEmail) {
				$("#" + (parseInt(param) - 5)).show();
				$("#" + param).hide();
			} else {
				console.log("normal param 6")
				$("#" + (parseInt(param) - 1)).show();
				$("#" + param).hide();
			}
			break;
		case "7":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "8":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "9":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "10":
			if (skipEmail) {
				$("#" + (parseInt(param) - 2)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) - 1)).show();
				$("#" + param).hide();
			}
			break;
		case "11":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "12":
			if (skipEmail) {
				$("#" + (parseInt(param) - 6)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) - 1)).show();
				$("#" + param).hide();
			}
			break;
		case "13":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "14":
			if (skipPersistensi) {
				$("#" + (parseInt(param) - 3)).show();
				$("#" + param).hide();
			} else {
				$("#" + (parseInt(param) - 1)).show();
				$("#" + param).hide();
			}
			break;
		case "15":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
		case "16":
			$("#" + (parseInt(param) - 1)).show();
			$("#" + param).hide();
			break;
	}
	//     if (param == 5) {
	// if (skipGigiGoyang) {
	//         $("#" + (parseInt(param) - 3)).show();
	//         $("#" + param).hide();

	//     } else {
	//         $("#" + (parseInt(param) - 1)).show();
	//         $("#" + param).hide();
	//     }
	// } else {
	//     $("#" + (parseInt(param) - 1)).show();
	//     $("#" + param).hide();
	// }

}

function hidePertanyaan() {
	$.ajax({
		type: "GET",
		url: base_url + "master_pertanyaan/get_all_pertanyaan",
		cache: false,
		success: function (json) {
			var obj = JSON.parse(json);
			if (obj.status) {
				for (let i = 0; i < obj.length; i++) {
					const element = obj[i];
					console.log('test');
					if (element.nomor != 1) {
						$("#" + element.nomor).hide();
					} else {
						$("#" + element.nomor).show();
					}
				}
			}
		}
	});
}

function getPertanyaan() {
	$.ajax({
		type: "GET",
		url: base_url + "master_pertanyaan/get_all_pertanyaan",
		cache: false,
		success: function (json) {
			swal.close()
			var obj = JSON.parse(json);
			$("#modalPertanyaan").modal({
				show: 'false',
				backdrop: 'static',
				keyboard: false
			});
			for (let i = 0; i < obj.length; i++) {
				const element = obj[i];
				var nomorGigiInt = parseInt(nomorGigi.replace("dental", ""));
				if (nomorGigiInt >= 51 && nomorGigiInt <= 85) {
					$("#complete-13").hide();
					gigiAnak = true;
					if (element.nomor >= 1 && element.nomor <= 4) {
						$("#" + element.nomor).hide();
					} else {
						if (element.nomor != 5) {
							$("#" + element.nomor).hide();
							$("#btn-5").hide();
						} else {
							$("#" + element.nomor).show();
						}
					}
					skipPersistensi = false;
					skipGigiGoyang = true;
					skipKarangGigi = true;
				} else {
					$("#complete-13").hide();
					gigiAnak = true;
					if (element.nomor != 1) {
						$("#" + element.nomor).hide();
					} else {
						$("#" + element.nomor).show();
					}
					skipPersistensi = true;
					skipGigiGoyang = false;
					skipKarangGigi = false;
				}

				// if (element.nomor != 1) {
				//     $("#" + element.nomor).hide();
				// } else {
				//     $("#" + element.nomor).show();
				// }
			}
		}
	});
}


function complete() {
	console.log("complete")
	var K13 = $("#K13:checked");
	$("#rl01").html(rl01(K13));
	var K12 = $("#K12:checked");
	$("#rl02").html(rl02(K12));
	var K11 = $("#K11:checked");
	$("#rl03").html(rl03(K11));
	var K10 = $("#K10:checked");
	$("#rl04").html(rl04(K10));
	var K01 = $("#K01:checked");
	var K14 = $("#K14:checked");
	var K15 = $("#K15:checked");
	var K16 = $("#K16:checked");
	$("#rl06").html(rl06(K14, K15, K16));
	var K02 = $("#K02:checked");
	var K03 = $("#K03:checked");
	var K04 = $("#K04:checked");
	var K05 = $("#K05:checked");
	var K06 = $("#K06:checked");
	var K07 = $("#K07:checked");
	$("#rl05").html(rl05(K01, K02, K03, K04, K05, K06, K07));


	$("#rl07").html(rl07(K01, K02, K03, K04, K05, K06, K07));
	$("#rl08").html(rl08(K01, K02, K03, K04, K05, K06, K07));
	$("#rl08").html(rl09(K01, K02, K03, K04, K05, K06, K07));

	var K08 = $("#K08:checked");
	var K09 = $("#K09:checked");
	$("#rl10").html(rl10(K08, K09));
	$("input:radio").removeAttr("checked");
	var view = [];
	for (let i = 0; i < diagnosaGigi.length; i++) {
		const element = diagnosaGigi[i];
		view.push(element.deskripsi);
	}
	$("#rl10").html(view.join('<br>'));
	// var deksripsi = `

	// </br>
	// <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")} </strong> </label> 
	// </br>
	// <label>Keadaan : <strong style="color:black;"> Goyang 3 Derajat </strong> </label> 
	// </br>
	// <label>Diagnosa : <strong style="color:black;"> Periodontitis Apikalis Kronis </strong> </label>
	// </br>
	// <label>Departemen : <strong style="color:black;">Bedah Mulut </strong> </label>
	// </br>
	// <label>Rencana Perawatan : <strong style="color:black;">CABUT </strong> </label>
	// </br>
	// </br>
	// <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
	// mengalami diagnosa  <strong>Periodontitis Apikalis Kronis</strong> yang akan di tangani oleh Departemen Prostodonsia dengan Rencana Perawatan GTT. </label>
	// </br>
	// `;

}



function nextTab(elem) {
	var K01 = $("#K01:checked");
	var K02 = $("#K02:checked");
	var K03 = $("#K03:checked");
	var K04 = $("#K04:checked");
	var K05 = $("#K05:checked");
	var K06 = $("#K06:checked");
	var K07 = $("#K07:checked");
	var K08 = $("#K08:checked");
	var K09 = $("#K09:checked");
	var K10 = $("#K10:checked");
	var K11 = $("#K11:checked");
	var K12 = $("#K12:checked");
	var K13 = $("#K13:checked");
	var K14 = $("#K14:checked");
	var K15 = $("#K15:checked");
	var K16 = $("#K16:checked");
	// console.log($(elem).next().find('a[href="step8"]'));
	// if (K02.val() != undefined && K02.val() == 0) {
	//     $('#step-c-8').click();
	// } else {
	$(elem).next().find('a[data-toggle="tab"]').click();
	// }

	var result = "<label>Diagnosa</label>";
	$("#diagnosa").html(rl01(K13));
}

function rl01(K13) {
	if (K13.val() != 0 && K13.val() != undefined) {
		var CFgejala = K13.val() * 0.9;
		var percentase = CFgejala * 100;
		var view = [];
		var deksripsi = `
    
            </br>
            <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")} </strong> </label> 
            </br>
            <label>Keadaan : <strong style="color:black;"> Gigi Hilang </strong> </label> 
            </br>
            <label>Diagnosa : <strong style="color:black;"> Edentulous ridge </strong> </label>
            </br>
            <label>Departemen : <strong style="color:black;">Prostodonsia </strong> </label>
            </br>
            <label>Rencana Perawatan : <strong style="color:black;">GTT </strong> </label>
            </br>
            </br>
            <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
            mengalami diagnosa <strong> Edentulous Ridge </strong> yang akan di tangani oleh Departemen <strong> Prostodonsia </strong> dengan Rencana Perawatan <strong>GTT</strong>. </label>
            </br>
            `;
		// for (i = 0; i < gigiHilangs.length + 1; i++) {
		var gigiHilang = {};
		gigiHilang.kode = "rl01";
		gigiHilang.id = diagnosaGigi.length + 1;
		gigiHilang.id_penyakit = 6;
		gigiHilang.id_bidang_ilmu = 3;
		gigiHilang.id_rencana_perawatan = 12;
		gigiHilang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiHilang);
		// }
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl01") {
				view.push(element.deskripsi);
			}
		}
		setColorRl01("gigiHilang", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}

}

function rl02(K12) {

	if (K12.val() != 0 && K12.val() != undefined) {
		var CFgejala = K12.val() * 0.9;
		var percentase = CFgejala * 100;
		var view = [];
		var deksripsi = `

        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")} </strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Goyang 3 Derajat </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Periodontitis Apikalis Kronis </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Bedah Mulut </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">CABUT </strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa  <strong>Periodontitis Apikalis Kronis</strong> yang akan di tangani oleh Departemen Prostodonsia dengan Rencana Perawatan GTT. </label>
        </br>
        `;
		// for (i = 0; i < gigiHilangs.length + 1; i++) {
		var gigiGoyang = {};
		gigiGoyang.kode = "rl02";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 4;
		gigiGoyang.id_bidang_ilmu = 1;
		gigiGoyang.id_rencana_perawatan = 8;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		// }
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl02") {
				view.push(element.deskripsi);
			}
		}
		setColorRl02("gigiGoyang", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}

}
function rl03(K11) {

	if (K11.val() != 0 && K11.val() != undefined) {
		var CFgejala = K11.val() * 0.9;
		var percentase = CFgejala * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")} </strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Goyang 2 Derajat </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Periodontitis Apikalis Kronis </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Periodonsia </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">Splinting, CABUT</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa  <strong>Periodontitis Apikalis Kronis</strong> yang akan di tangani oleh Departemen Prostodonsia dengan Rencana Perawatan GTT. </label>
        </br>
        `;
		// for (i = 0; i < gigiHilangs.length + 1; i++) {
		var gigiGoyang = {};
		gigiGoyang.kode = "rl03";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 4;
		gigiGoyang.id_bidang_ilmu = 2;
		gigiGoyang.id_rencana_perawatan = 10;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		// }
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl03") {
				view.push(element.deskripsi);
			}
		}
		console.log(view);
		setColorRl02("gigiGoyang", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}

}

function rl04(K10) {

	if (K10.val() != 0 && K10.val() != undefined) {
		var CFgejala = K10.val() * 0.9;
		var percentase = CFgejala * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")} </strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Goyang 1 Derajat </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Periodontitis Apikalis Kronis </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Periodonsia </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">Splinting</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa <strong>Periodontitis Apikalis Kronis</strong> yang akan di tangani oleh Departemen Prostodonsia dengan Rencana Perawatan Splinting. </label>
        </br>
        `;
		// for (i = 0; i < gigiHilangs.length + 1; i++) {
		var gigiGoyang = {};
		gigiGoyang.kode = "rl04";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 4;
		gigiGoyang.id_bidang_ilmu = 2;
		gigiGoyang.id_rencana_perawatan = 9;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		// }
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl04") {
				view.push(element.deskripsi);
			}
		}
		console.log(view);
		setColorRl02("gigiGoyang", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}

}

function rl05(K01, K02, K03, K04, K05, K06, K07) {
	/*/ 
    
	IF ( (K02 == YA || K02 == MUNGKIN  && K04 == YA || K04 == MUNGKIN && K06 == YA || K06 == MUNGKIN  && K05 == YA || K05 == MUNGKIN) && (G01 == TRUE && G02 == FALSE)) 
	THEN
	Diagnosa = Pulpitis irreversible;
	Department = Konservasi;
	Rencana Perawatan = PSA-ONLAY, PSA-PASAK ;
	𝐶𝐹𝑔𝑒𝑗𝑎𝑙𝑎 = CFUser * CFPakar
	K02 = 1 * 0, 9 = 0, 9
	K04 = 0, 5 * 0, 7 = 0, 35
	K05 = 0, 5 * 0, 85 = 0, 425
	K06 = 0, 5 * 0, 9 = 0, 45
	CF Gabungan(CF1, CF2) = CF1 + CF2 – (CF1 * CF2)
	CF(K02, K04) = 0, 9 + 0, 35 - (0, 9 * 0, 35) = 0, 935
	CF(old, K05) = 0, 935 + 0, 425 - (0, 935 * 0, 425) = 0, 962625
	CF(old, K06) = 0, 962625 + 0, 45 - (0, 962625 * 0, 45) = 0, 97944375
	Persentase = CFGabungan * 100 %
					=  0, 97944375 * 100 %
							=  97, 95 %
	/*/



	/*/
															<========================================== Implementasi ===============================================>
	/*/
	if ((K02.val() != 0 && K02.val() != undefined) &&
		(K04.val() != 0 && K04.val() != undefined) &&
		(K05.val() != 0 && K05.val() != undefined) &&
		(K06.val() != 0 && K06.val() != undefined) &&
		(K07.val() == 0 || K07.val() == undefined) &&
		(K01.val() == 0 || K01.val() == undefined) &&
		(K03.val() == 0 || K03.val() == undefined)
	) {
		var CfGejalaK02 = K02.val() * 0.9;
		var CfGejalaK04 = K04.val() * 0.7;
		var CfGejalaK05 = K05.val() * 0.85;
		var CfGejalaK06 = K06.val() * 0.9;
		var cfGabunganK02K04 = (CfGejalaK02 + CfGejalaK04) - (CfGejalaK02 * CfGejalaK04);
		var cfGabunganOldK05 = (cfGabunganK02K04 + CfGejalaK05) - (cfGabunganK02K04 * CfGejalaK05);
		var cfGabunganOldK06 = (cfGabunganOldK05 + CfGejalaK06) - (cfGabunganOldK05 * CfGejalaK06);

		var percentase = cfGabunganOldK06 * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")} Bagian ${posisiGigi == "C" ? "Tengah" : posisiGigi == "T" ? "Atas" : posisiGigi == "B" ? "Bawah" : posisiGigi == "R" ? "Kanan" : "Kiri"}</strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Karies Profunda </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Pulpitis irreversible </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Konservasi </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">PSA-ONLAY, PSA-PASAK</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa <strong>Pulpitis irreversible</strong> yang akan di tangani oleh Departemen <strong>Konservasi</strong> dengan Rencana Perawatan <strong>PSA-ONLAY, PSA-PASAK </strong>. </label>
        </br>
        `;

		var gigiGoyang = {};
		gigiGoyang.kode = "rl05";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 2;
		gigiGoyang.id_bidang_ilmu = 5;
		gigiGoyang.id_rencana_perawatan = 5;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl05") {
				view.push(element.deskripsi);
			}
		}
		setColorRl05("kariesProfunda", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}

}

function rl06(K14, K15, K16) {
	/*/
	IF ( K14 == YA || K14 == MUNGKIN  && K15 == YA || K15 == MUNGKIN && K16 == YA || K16 == MUNGKIN  && G01 == TRUE && G02 == FALSE )THEN
	Diagnosa = Gingivitis;
	Department = Periodonsia;
	Rencana Perawatan = Scalling;

    
	/*/

	/*/
															<========================================== Implementasi ===============================================>
	/*/
	if ((K14.val() != 0 && K14.val() != undefined) && (K15.val() != 0 && K15.val() != undefined) && (K16.val() != 0 && K16.val() != undefined)) {
		var CfGejalaK14 = K14.val() * 0.5;
		var CfGejalaK15 = K15.val() * 0.8;
		var CfGejalaK16 = K16.val() * 0.4;
		var cfGabunganK14K15 = (CfGejalaK14 + CfGejalaK15) - (CfGejalaK14 * CfGejalaK15);
		var cfGabunganOldK16 = (cfGabunganK14K15 + CfGejalaK16) - (cfGabunganK14K15 * CfGejalaK16);

		var percentase = cfGabunganOldK16 * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")} </strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Karang Gigi </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Gingivitis </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Periodonsia </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">Scalling</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa <strong>Gingivitis</strong> yang akan di tangani oleh Departemen <strong>Periodonsia</strong> dengan Rencana Perawatan <strong>Scalling </strong>. </label>
        </br>
        `;

		var gigiGoyang = {};
		gigiGoyang.kode = "rl06";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 5;
		gigiGoyang.id_bidang_ilmu = 2;
		gigiGoyang.id_rencana_perawatan = 11;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl06") {
				view.push(element.deskripsi);
			}
		}
		setColorRl06("karangGigi", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}
}
function rl07(K01, K02, K03, K04, K05, K06, K07) {
	/*/
   IF ( K01 == YA || K01 == MUNGKIN  && K02 == YA || K02 == MUNGKIN && K03 == YA || K03 == MUNGKIN  && (G01 == TRUE && G01 == FALSE)) THEN
	Diagnosa = Pulpitis Revesible;
	Department = Konservasi;
	Rencana Perawatan = Tumpatan GIC, Mahkota Selubung Gigi Vital, Inlay;
    
	/*/

	/*/
															<========================================== Implementasi ===============================================>
	/*/
	if ((K01.val() != 0 && K01.val() != undefined) &&
		(K02.val() != 0 && K02.val() != undefined) &&
		(K03.val() != 0 && K03.val() != undefined) &&
		(K04.val() == 0 || K04.val() == undefined) &&
		(K05.val() == 0 || K05.val() == undefined) &&
		(K06.val() == 0 || K06.val() == undefined) &&
		(K07.val() == 0 || K07.val() == undefined)
	) {
		var CfGejalaK01 = K01.val() * 0.5;
		var CfGejalaK02 = K02.val() * 0.9;
		var CfGejalaK03 = K03.val() * 0.8;
		var cfGabunganK01K02 = (CfGejalaK01 + CfGejalaK02) - (CfGejalaK01 * CfGejalaK02);
		var cfGabunganOldK03 = (cfGabunganK01K02 + CfGejalaK03) - (cfGabunganK01K02 * CfGejalaK03);

		var percentase = cfGabunganOldK03 * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")}  Bagian ${posisiGigi == "C" ? "Tengah" : posisiGigi == "T" ? "Atas" : posisiGigi == "B" ? "Bawah" : posisiGigi == "R" ? "Kanan" : "Kiri"}</strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Karies Superfisial </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Pulpitis Revesible </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Konservasi </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">Tumpatan GIC, Mahkota Selubung Gigi Vital, Inlay</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa <strong>Pulpitis Revesible</strong> yang akan di tangani oleh Departemen <strong>Konservasi</strong> dengan Rencana Perawatan <strong>Tumpatan GIC, Mahkota Selubung Gigi Vital, Inlay </strong>. </label>
        </br>
        `;

		var gigiGoyang = {};
		gigiGoyang.kode = "rl07";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 1;
		gigiGoyang.id_bidang_ilmu = 5;
		gigiGoyang.id_rencana_perawatan = 1;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl07") {
				view.push(element.deskripsi);
			}
		}
		setColorRl07("kariesSuperfisial", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}
}
function rl08(K01, K02, K03, K04, K05, K06, K07) {
	/*/
	IF ( K02 == YA || K02== MUNGKIN  && K04== YA || K04 == MUNGKIN && K05 == YA || K05 == MUNGKIN  && (G01 == TRUE && G01 == FALSE)) THEN
	Diagnosa = Pulpitis Revesible;
	Department = Konservasi;
	Rencana Perawatan = Tumpatan GIC, Mahkota Selubung Gigi Vital, Inlay;
    
	/*/

	/*/
															<========================================== Implementasi ===============================================>
	/*/
	console.log(K01.val(), K02.val(), K03.val(), K04.val(), K05.val(), K06.val(), K07.val())
	if ((K01.val() == 0 || K01.val() == undefined) &&
		(K02.val() != 0 && K02.val() != undefined) &&
		(K03.val() == 0 || K03.val() == undefined) &&
		(K04.val() != 0 && K04.val() != undefined) &&
		(K05.val() != 0 && K05.val() != undefined) &&
		(K06.val() == 0 || K06.val() == undefined) &&
		(K07.val() == 0 || K07.val() == undefined)
	) {
		var CfGejalaK02 = K02.val() * 0.9;
		var CfGejalaK04 = K04.val() * 0.7;
		var CfGejalaK05 = K05.val() * 0.85;
		var cfGabunganK02K04 = (CfGejalaK02 + CfGejalaK04) - (CfGejalaK02 * CfGejalaK04);
		var cfGabunganOldK05 = (cfGabunganK02K04 + CfGejalaK05) - (cfGabunganK02K04 * CfGejalaK05);

		var percentase = cfGabunganOldK05 * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")}  Bagian ${posisiGigi == "C" ? "Tengah" : posisiGigi == "T" ? "Atas" : posisiGigi == "B" ? "Bawah" : posisiGigi == "R" ? "Kanan" : "Kiri"}</strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Karies Media </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Pulpitis Revesible </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Konservasi </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">Tumpatan GIC, Mahkota Selubung Gigi Vital, Inlay</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa <strong>Pulpitis Revesible</strong> yang akan di tangani oleh Departemen <strong>Konservasi</strong> dengan Rencana Perawatan <strong>Tumpatan GIC, Mahkota Selubung Gigi Vital, Inlay </strong>. </label>
        </br>
        `;

		var gigiGoyang = {};
		gigiGoyang.kode = "rl08";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiHilang.id_penyakit = 1;
		gigiHilang.id_bidang_ilmu = 5;
		gigiHilang.id_rencana_perawatan = 1;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl08") {
				view.push(element.deskripsi);
			}
		}
		setColorRl08("kariesMedia", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}
}
function rl09(K01, K02, K03, K04, K05, K06, K07) {
	/*/
	IF ( K02 == YA || K02== MUNGKIN  && K04== YA || K04 == MUNGKIN && K05 == YA || K05 == MUNGKIN  && K06 == YA || K06 == MUNGKIN &&  K07 == YA || K07 == MUNGKIN && (G01 == TRUE && G01 == FALSE)) THEN
	Diagnosa = Nekrosis Pulpa;
	Department = Konservasi;
	Rencana Perawatan = PSA-PASAK;
    
	/*/

	/*/
															<========================================== Implementasi ===============================================>
	/*/
	if ((K01.val() == 0 || K01.val() == undefined) &&
		(K02.val() != 0 && K02.val() != undefined) &&
		(K03.val() == 0 || K03.val() == undefined) &&
		(K04.val() != 0 && K04.val() != undefined) &&
		(K05.val() != 0 && K05.val() != undefined) &&
		(K06.val() != 0 && K06.val() != undefined) &&
		(K07.val() != 0 && K07.val() != undefined)
	) {
		var CfGejalaK02 = K02.val() * 0.9;
		var CfGejalaK04 = K04.val() * 0.7;
		var CfGejalaK05 = K05.val() * 0.85;
		var CfGejalaK06 = K06.val() * 0.9;
		var CfGejalaK07 = K06.val() * 0.9;
		var cfGabunganK02K04 = (CfGejalaK02 + CfGejalaK04) - (CfGejalaK02 * CfGejalaK04);
		var cfGabunganOldK05 = (cfGabunganK02K04 + CfGejalaK05) - (cfGabunganK02K04 * CfGejalaK05);
		var cfGabunganOldK06 = (cfGabunganOldK05 + CfGejalaK06) - (cfGabunganOldK05 * CfGejalaK06);
		var cfGabunganOldK07 = (cfGabunganOldK06 + CfGejalaK07) - (cfGabunganOldK06 * CfGejalaK07);

		var percentase = cfGabunganOldK07 * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")}  Bagian ${posisiGigi == "C" ? "Tengah" : posisiGigi == "T" ? "Atas" : posisiGigi == "B" ? "Bawah" : posisiGigi == "R" ? "Kanan" : "Kiri"}</strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Karies Profunda Perforasi </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Nekrosis Pulpa </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Konservasi </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">PSA-PASAK</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa <strong>Nekrosis Pulpa</strong> yang akan di tangani oleh Departemen <strong>Konservasi</strong> dengan Rencana Perawatan <strong>PSA-PASAK </strong>. </label>
        </br>
        `;

		var gigiGoyang = {};
		gigiGoyang.kode = "rl09";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 3;
		gigiGoyang.id_bidang_ilmu = 5;
		gigiGoyang.id_rencana_perawatan = 7;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl09") {
				view.push(element.deskripsi);
			}
		}
		setColorRl09("kariesProfundaPerforasi", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}
}

function rl10(K08, K09) {
	/*/
	IF ( K08 == YA || K08== MUNGKIN  && K09 == YA || K09 == MUNGKIN && (G01 == FALSE && G01 == TRUE )) THEN
	Diagnosa = Periodontitis Aplikalis Kronis;
	Department = Pedodonsia;
	Rencana Perawatan = Cabut;
    
	/*/

	/*/
															<========================================== Implementasi ===============================================>
	/*/

	if ((K08.val() != 0 || K08.val() != undefined) &&
		(K09.val() != 0 && K09.val() != undefined)
	) {
		var CfGejalaK08 = K08.val() * 0.9;
		var CfGejalaK09 = K09.val() * 0.7;
		var cfGabunganK08K09 = (CfGejalaK08 + CfGejalaK09) - (CfGejalaK08 * CfGejalaK09);

		var percentase = cfGabunganK08K09 * 100;
		var view = [];
		var deksripsi = `
        </br>
        <label>Posisi Gigi : <strong style="color:black;"> ${nomorGigi.replace("dental", "Gigi ")}  Bagian ${posisiGigi == "C" ? "Tengah" : posisiGigi == "T" ? "Atas" : posisiGigi == "B" ? "Bawah" : posisiGigi == "R" ? "Kanan" : "Kiri"}</strong> </label> 
        </br>
        <label>Keadaan : <strong style="color:black;"> Persistensi </strong> </label> 
        </br>
        <label>Diagnosa : <strong style="color:black;"> Periodontitis Aplikalis Kronis </strong> </label>
        </br>
        <label>Departemen : <strong style="color:black;">Pedodonsia </strong> </label>
        </br>
        <label>Rencana Perawatan : <strong style="color:black;">Cabut</strong> </label>
        </br>
        </br>
        <label style="color:black;">Keterangan : Dari perhitungan akurasi diatas Pasien </br> <strong>${percentase}%</strong> 
        mengalami diagnosa <strong>Periodontitis Aplikalis Kronis</strong> yang akan di tangani oleh Departemen <strong>Pedodonsia</strong> dengan Rencana Perawatan <strong>Cabut</strong>. </label>
        </br>
        `;

		var gigiGoyang = {};
		gigiGoyang.kode = "rl10";
		gigiGoyang.id = diagnosaGigi.length + 1;
		gigiGoyang.id_penyakit = 4;
		gigiGoyang.id_bidang_ilmu = 4;
		gigiGoyang.id_rencana_perawatan = 8;
		gigiGoyang.deskripsi = deksripsi;
		diagnosaGigi.push(gigiGoyang);
		for (let i = 0; i < diagnosaGigi.length; i++) {
			const element = diagnosaGigi[i];
			if (element['kode'] == "rl10") {
				view.push(element.deskripsi);
			}
		}
		setColorRl10("persistensi", nomorGigi, posisiGigi);
		return view.join('</br><hr>');
	}
}

function precisionRoundMod(number, precision) {
	var factor = Math.pow(10, precision);
	var n = precision < 0 ? number : 0.01 / factor + number;
	return Math.round(n * factor) / factor;
}

function prevTab(elem) {
	var K01 = $("#K01:checked");
	var K02 = $("#K02:checked");
	var K03 = $("#K03:checked");
	var K04 = $("#K04:checked");
	var K05 = $("#K05:checked");
	var K06 = $("#K06:checked");
	var K07 = $("#K07:checked");
	var K08 = $("#K08:checked");
	var K09 = $("#K09:checked");
	var K10 = $("#K10:checked");
	var K11 = $("#K11:checked");
	var K12 = $("#K12:checked");
	var K13 = $("#K13:checked");
	var K14 = $("#K14:checked");
	var K15 = $("#K15:checked");
	var K16 = $("#K16:checked");

	if (K02.val() != undefined && K02.val() == 0) {
		$('#step-c-2').click();
	} else {
		$(elem).prev().find('a[data-toggle="tab"]').click();
	}
}



var odontogram = function () {
	var data = [
		// satuKiri : [
		{ id: "dental18", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "0", transform2: "0", title: "18" },
		{ id: "dental17", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "25", transform2: "0", title: "17" },
		{ id: "dental16", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "50", transform2: "0", title: "16" },
		{ id: "dental15", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "75", transform2: "0", title: "15" },
		{ id: "dental14", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "100", transform2: "0", title: "14" },
		{ id: "dental13", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "125", transform2: "0", title: "13" },
		{ id: "dental12", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "150", transform2: "0", title: "12" },
		{ id: "dental11", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "175", transform2: "0", title: "11" },
		// ],
		// satuKanan : [
		{ id: "dental21", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "210", transform2: "0", title: "21" },
		{ id: "dental22", data: { C: "White", T: "White", B: "white", R: "White", L: "White" }, transform1: "235", transform2: "0", title: "22" },
		{ id: "dental23", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "260", transform2: "0", title: "23" },
		{ id: "dental24", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "285", transform2: "0", title: "24" },
		{ id: "dental25", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "310", transform2: "0", title: "25" },
		{ id: "dental26", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "335", transform2: "0", title: "26" },
		{ id: "dental27", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "360", transform2: "0", title: "27" },
		{ id: "dental28", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "385", transform2: "0", title: "28" },
		// ],
		// duaKiri : [
		{ id: "dental55", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "75", transform2: "40", title: "55" },
		{ id: "dental54", data: { C: "White", T: "White", B: "white", R: "White", L: "White" }, transform1: "100", transform2: "40", title: "54" },
		{ id: "dental53", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "125", transform2: "40", title: "53" },
		{ id: "dental52", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "150", transform2: "40", title: "52" },
		{ id: "dental51", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "175", transform2: "40", title: "51" },
		// ],
		// duaKanan : [
		{ id: "dental61", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "210", transform2: "40", title: "61" },
		{ id: "dental62", data: { C: "White", T: "White", B: "white", R: "White", L: "White" }, transform1: "235", transform2: "40", title: "62" },
		{ id: "dental63", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "260", transform2: "40", title: "63" },
		{ id: "dental64", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "285", transform2: "40", title: "64" },
		{ id: "dental65", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "310", transform2: "40", title: "65" },
		// ],
		// tigaKiri : [
		{ id: "dental85", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "75", transform2: "80", title: "85" },
		{ id: "dental84", data: { C: "White", T: "White", B: "white", R: "White", L: "White" }, transform1: "100", transform2: "80", title: "84" },
		{ id: "dental83", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "125", transform2: "80", title: "83" },
		{ id: "dental82", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "150", transform2: "80", title: "82" },
		{ id: "dental81", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "175", transform2: "80", title: "81" },
		// ],
		// tigaKanan : [
		{ id: "dental71", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "210", transform2: "80", title: "71" },
		{ id: "dental72", data: { C: "White", T: "White", B: "white", R: "White", L: "White" }, transform1: "235", transform2: "80", title: "72" },
		{ id: "dental73", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "260", transform2: "80", title: "73" },
		{ id: "dental74", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "285", transform2: "80", title: "74" },
		{ id: "dental75", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "310", transform2: "80", title: "75" },
		// ],
		// empatKiri : [
		{ id: "dental48", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "0", transform2: "120", title: "48" },
		{ id: "dental47", data: { C: "White", T: "White", B: "white", R: "White", L: "White" }, transform1: "25", transform2: "120", title: "47" },
		{ id: "dental46", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "50", transform2: "120", title: "46" },
		{ id: "dental45", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "75", transform2: "120", title: "45" },
		{ id: "dental44", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "100", transform2: "120", title: "44" },
		{ id: "dental43", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "125", transform2: "120", title: "43" },
		{ id: "dental42", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "150", transform2: "120", title: "42" },
		{ id: "dental41", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "175", transform2: "120", title: "41" },
		// ],
		// empatKanan : [
		{ id: "dental31", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "210", transform2: "120", title: "31" },
		{ id: "dental32", data: { C: "White", T: "White", B: "white", R: "White", L: "White" }, transform1: "235", transform2: "120", title: "32" },
		{ id: "dental33", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "260", transform2: "120", title: "33" },
		{ id: "dental34", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "285", transform2: "120", title: "34" },
		{ id: "dental35", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "310", transform2: "120", title: "35" },
		{ id: "dental36", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "335", transform2: "120", title: "36" },
		{ id: "dental37", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "360", transform2: "120", title: "37" },
		{ id: "dental38", data: { C: "White", T: "White", B: "White", R: "White", L: "White" }, transform1: "385", transform2: "120", title: "38" },
	];

	allDental = data;
	//hasil 44
	function parseSVG(s) {
		var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
		div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
		var frag = document.createDocumentFragment();
		while (div.firstChild.firstChild)
			frag.appendChild(div.firstChild.firstChild);
		return frag;
	}
	var arrId4Sisi = ['dental13', 'dental12', 'dental11', 'dental21', 'dental22', 'dental23',
		'dental53', 'dental52', 'dental51', 'dental61', 'dental62', 'dental63',
		'dental83', 'dental82', 'dental81', 'dental71', 'dental72', 'dental73',
		'dental43', 'dental42', 'dental41', 'dental31', 'dental32', 'dental33'];
	for (var i = 0; i < data.length; i++) {
		if (arrId4Sisi.indexOf(data[i].id) > -1) {
			var svg = '<g id="' + data[i].id + '" transform="translate(' + data[i].transform1 + ',' + data[i].transform2 + ')">' +
				'<polygon points="0,0   20,0    15,10    0,10 " fill="' + data[i].data.T + '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="5,10  15,10   20,20   0,20" fill="' + data[i].data.B + '" stroke="navy" stroke-width="0.5" id="B" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="20,0  20,0    20,20   15,10" fill="' + data[i].data.R + '" stroke="navy" stroke-width="0.5" id="R" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="0,0   5,10     5,10    0,20" fill="' + data[i].data.L + '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' + data[i].title + '</text>' +
				'</g>';
		} else {
			var svg = '<g id="' + data[i].id + '" transform="translate(' + data[i].transform1 + ',' + data[i].transform2 + ')">' +
				'<polygon points="5,5   15,5    15,15   5,15" fill="' + data[i].data.C + '" stroke="navy" stroke-width="0.5" id="C" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="0,0   20,0    15,5    5,5" fill="' + data[i].data.T + '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="5,15  15,15   20,20   0,20" fill="' + data[i].data.B + '" stroke="navy" stroke-width="0.5" id="B" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="15,5  20,0    20,20   15,15" fill="' + data[i].data.R + '" stroke="navy" stroke-width="0.5" id="R" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="0,0   5,5     5,15    0,20" fill="' + data[i].data.L + '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' + data[i].title + '</text>' +
				'</g>';

		}

		var parser = new DOMParser();
		var doc = parser.parseFromString(svg, "image/svg+xml");
		// var baru = document.importNode(svg,true);
		document.getElementById("odontograma").appendChild(parseSVG(svg));
		// console.log("svg: " , doc);
		// $("#odontograma").append(svg);
	}

}

var odontogramcoba = function (data) {

	//hasil 
	function parseSVG(s) {
		var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
		div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
		var frag = document.createDocumentFragment();
		while (div.firstChild.firstChild)
			frag.appendChild(div.firstChild.firstChild);
		return frag;
	}
	var arrId4Sisi = ['dental13', 'dental12', 'dental11', 'dental21', 'dental22', 'dental23',
		'dental53', 'dental52', 'dental51', 'dental61', 'dental62', 'dental63',
		'dental83', 'dental82', 'dental81', 'dental71', 'dental72', 'dental73',
		'dental43', 'dental42', 'dental41', 'dental31', 'dental32', 'dental33'];
	for (var i = 0; i < data.length; i++) {
		if (arrId4Sisi.indexOf(data[i].id) > -1) {

			var svg = '<g id="' + data[i].id + '" transform="translate(' + data[i].transform1 + ',' + data[i].transform2 + ')">' +
				'<polygon points="0,0   20,0    15,10    0,10" fill="' + data[i].data.T + '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="5,10  15,10   20,20   0,20" fill="' + data[i].data.B + '" stroke="navy" stroke-width="0.5" id="B" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="20,0  20,0    20,20   15,10" fill="' + data[i].data.R + '" stroke="navy" stroke-width="0.5" id="R" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="0,0   5,10     5,10    0,20" fill="' + data[i].data.L + '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' + data[i].title + '</text>' +
				'</g>';
		} else {
			var svg = '<g id="' + data[i].id + '" transform="translate(' + data[i].transform1 + ',' + data[i].transform2 + ')">' +
				'<polygon points="5,5   15,5    15,15   5,15" fill="' + data[i].data.C + '" stroke="navy" stroke-width="0.5" id="C" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="0,0   20,0    15,5    5,5" fill="' + data[i].data.T + '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="5,15  15,15   20,20   0,20" fill="' + data[i].data.B + '" stroke="navy" stroke-width="0.5" id="B" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="15,5  20,0    20,20   15,15" fill="' + data[i].data.R + '" stroke="navy" stroke-width="0.5" id="R" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<polygon points="0,0   5,5     5,15    0,20" fill="' + data[i].data.L + '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
				'<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' + data[i].title + '</text>' +
				'</g>';

		}

		var parser = new DOMParser();
		var doc = parser.parseFromString(svg, "image/svg+xml");
		// var baru = document.importNode(svg,true);
		document.getElementById("odontograma").appendChild(parseSVG(svg));
		// console.log("svg: " , doc);
		// $("#odontograma").append(svg);
	}

}

var loaded = function () {


	$('.datepicker').datetimepicker({

		format: 'YYYY-MM-DD',

		keyBinds: false,

		date: new Date(),

		icons: {

			time: "fa fa-clock-o",

			date: "fa fa-calendar",

			up: "fa fa-chevron-up",

			down: "fa fa-chevron-down",

			previous: 'fa fa-chevron-left',

			next: 'fa fa-chevron-right',

			today: 'fa fa-screenshot',

			clear: 'fa fa-trash',

			close: 'fa fa-remove'

		}

	});



	table_user = $('#datatablesPasien').DataTable({

		"pagingType": "full_numbers",

		"lengthMenu": [

			[10, 25, 50, -1],

			[10, 25, 50, "All"]

		],

		responsive: true,



		language: {

			search: "_INPUT_",

			searchPlaceholder: "Search records",

		},



	});



	$('#datatablesPenyakit').DataTable({

		"pagingType": "full_numbers",

		"lengthMenu": [

			[10, 25, 50, -1],

			[10, 25, 50, "All"]

		],

		responsive: true,



		language: {

			search: "_INPUT_",

			searchPlaceholder: "Search records",

		},



	});



	$(".select2-single").select2({

		theme: "bootstrap",

		placeholder: "Pencarian",

		maximumSelectionSize: 6,

		width: null,

		containerCssClass: ':all:'

	});



	$('.card .material-datatables label').addClass('form-group');



	$(document).on('click', '.pilih-pasien', function (e) {

		$("#div_pasien").addClass("label-static");

		$("#pasien_nama").val($(this).attr('data-nama'));

		$("#pasien_id").val($(this).attr('data-id'));

		$("#pasien_telp").val($(this).attr('data-telp'));

		$('#myModalPasien').modal('hide');

	});



	$(document).on('click', '.pilih-penyakit', function (e) {

		$("#div_penyakit").addClass("label-static");

		$("#penyakit_nama").val($(this).attr('data-nama'));

		$("#penyakit_id").val($(this).attr('data-id'));

		$('#myModalPenyakit').modal('hide');

	});

	$(".select2-single").select2("val", "");



	getBidangIlmu();



	$('#id_penyakit').on('change', function () {

		getRencanaPerawatan($("#id_penyakit").val());

	});



	$('#fotos').on('change', function () {

		if ($("#fotos")[0].files[0] !== undefined) {



			getBase64($("#fotos")[0].files[0]);

		}

	});

	$('#pasien_fotos').on('change', function () {
		console.log('pasien_fotos');
		if ($("#pasien_fotos")[0].files[0] !== undefined) {
			getBase64FotoPasien($("#pasien_fotos")[0].files[0]);

		}

	});

	$('#rahang_atas_fotos').on('change', function () {
		console.log('rahang_atas_fotos');
		if ($("#rahang_atas_fotos")[0].files[0] !== undefined) {
			getBase64RahangAtas($("#rahang_atas_fotos")[0].files[0]);

		}

	});

	$('#rahang_bawah_fotos').on('change', function () {
		console.log('rahang_bawah_fotos');
		if ($("#rahang_bawah_fotos")[0].files[0] !== undefined) {
			getBase64RahangBawah($("#rahang_bawah_fotos")[0].files[0]);

		}

	});

	$('#tambahan_fotos').on('change', function () {
		console.log('tambahan_fotos');
		if ($("#tambahan_fotos")[0].files[0] !== undefined) {
			getBase64Tambahan($("#tambahan_fotos")[0].files[0]);

		}

	});


	$('#id_bidang_ilmu').on('change', function () {

		getKategoriPenyakit($("#id_bidang_ilmu").val());

		console.log("ccs: ", $('#id_bidang_ilmu option:selected').attr('data-nama'));

	});



	$("#div_detail_penyakit").hide();



	setTgl((new Date()).getDay());
	setBulan((new Date()).getMonth() + 1);
	setTahun((new Date()).getFullYear() - 17);


}


function updateJsonOdontograma(idSvg, idPolygon, color) {
	for (var i = 0; i < allDental.length; i++) {
		if (allDental[i].id === idSvg) {
			if (idPolygon === "C") {
				allDental[i].data.C = color;
			} else if (idPolygon === "T") {
				allDental[i].data.T = color;
			} else if (idPolygon === "B") {
				allDental[i].data.B = color;
			} else if (idPolygon === "R") {
				allDental[i].data.R = color;
			} else if (idPolygon === "L") {
				allDental[i].data.L = color;
			}
			odontogramcoba(allDental);
		}
	}
}

function setColorRl01(control, idSvg, idPolygon) {
	console.log(idSvg);
	switch (control) {
		case "gigiHilang":
			if ($(paramGigi).attr("fill").toLowerCase() === "#228b22") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				// $(paramGigi).attr("fill", "#228B22");
				updateJsonOdontograma(idSvg, "B", "#228B22");
				updateJsonOdontograma(idSvg, "T", "#228B22");
				updateJsonOdontograma(idSvg, "C", "#228B22");
				updateJsonOdontograma(idSvg, "R", "#228B22");
				updateJsonOdontograma(idSvg, "L", "#228B22");
			}
			break;
	}
}

function setColorRl02(control, idSvg, idPolygon) {
	switch (control) {
		case "gigiGoyang":
			if ($(paramGigi).attr("fill").toLowerCase() === "#7FFF00") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				// updateJsonOdontograma(idSvg, idPolygon, "#7FFF00");
				updateJsonOdontograma(idSvg, "B", "#7FFF00");
				updateJsonOdontograma(idSvg, "T", "#7FFF00");
				updateJsonOdontograma(idSvg, "C", "#7FFF00");
				updateJsonOdontograma(idSvg, "R", "#7FFF00");
				updateJsonOdontograma(idSvg, "L", "#7FFF00");
			}
			break;
	}
}

function setColorRl05(control, idSvg, idPolygon) {
	switch (control) {
		case "kariesProfunda":
			if ($(paramGigi).attr("fill").toLowerCase() === "red") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				updateJsonOdontograma(idSvg, idPolygon, "red");
			}
			break;
	}
}

function setColorRl06(control, idSvg, idPolygon) {
	switch (control) {
		case "karangGigi":
			if ($(paramGigi).attr("fill").toLowerCase() === "#191970") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				updateJsonOdontograma(idSvg, idPolygon, "#191970");
			}
			break;
	}
}

function setColorRl07(control, idSvg, idPolygon) {
	switch (control) {
		case "kariesSuperfisial":
			if ($(paramGigi).attr("fill").toLowerCase() === "yellow") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				updateJsonOdontograma(idSvg, idPolygon, "yellow");
			}
			break;
	}
}

function setColorRl08(control, idSvg, idPolygon) {
	switch (control) {
		case "kariesMedia":
			if ($(paramGigi).attr("fill").toLowerCase() === "orange") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				updateJsonOdontograma(idSvg, idPolygon, "orange");
			}
			break;
	}
}

function setColorRl09(control, idSvg, idPolygon) {
	switch (control) {
		case "kariesProfundaPerforasi":
			if ($(paramGigi).attr("fill").toLowerCase() === "grey") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				updateJsonOdontograma(idSvg, idPolygon, "grey");
			}
			break;
	}
}
function setColorRl10(control, idSvg, idPolygon) {
	switch (control) {
		case "persistensi":
			if ($(paramGigi).attr("fill").toLowerCase() === "pink") {
				$(paramGigi).attr("fill", "white");
				// updateJsonOdontograma(idSvg, idPolygon, "white");
			} else {
				updateJsonOdontograma(idSvg, idPolygon, "pink");
			}
			break;
	}
}

function clickSvg(x) {
	swal({
		allowOutsideClick: false,
		title: "Loading...",
		showCancelButton: false,
		showConfirmButton: false,
		text: "<img src='assets/img/loading.gif' style='width:250px;'>",
	});
	$("#example-async").steps({
		headerTag: "h3",
		bodyTag: "section",
		transitionEffect: "slideLeft",
		autoFocus: true
	});
	getPertanyaan();
	$("input:radio").removeAttr("checked");
	$("#complete-K13").hide();
	$('a[href="#step1"]').click();
	var control = $("#controls").children().find('.active').attr('id');
	var idSvg = $(x).parent().attr('id');
	var idPolygon = $(x).attr("id");
	nomorGigi = idSvg;
	posisiGigi = idPolygon;
	paramGigi = x;
	// for (let i = 51; i <= 85; i++) {
	var nomorGigiInt = parseInt(nomorGigi.replace("dental", ""));
	if (nomorGigiInt >= 51 && nomorGigiInt <= 85) {
		console.log(nomorGigiInt);
		skipPersistensi = false;
		skipGigiGoyang = true;
		skipKarangGigi = true;
	} else {
		skipPersistensi = true;
		skipGigiGoyang = false;
		skipKarangGigi = false;
	}
	// }



	// switch (control) {
	//     case "kariesSuperfisia":

	//         if ($(x).attr("fill").toLowerCase() === "yellow") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "yellow");
	//             updateJsonOdontograma(idSvg, idPolygon, "yellow");
	//         }
	//         break;
	//     case "kariesMedia":
	//         if ($(x).attr("fill").toLowerCase() === "orange") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "orange");
	//             updateJsonOdontograma(idSvg, idPolygon, "orange");
	//         }
	//         break;
	//     case "kariesProfunda":
	//         if ($(x).attr("fill").toLowerCase() === "red") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "red");
	//             updateJsonOdontograma(idSvg, idPolygon, "red");
	//         }
	//         break;
	//     case "kariesProfundaPerfores":
	//         if ($(x).attr("fill").toLowerCase() === "gray") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "gray");
	//             updateJsonOdontograma(idSvg, idPolygon, "gray");
	//         }
	//         break;
	//     case "sisaAkar":
	//         if ($(x).attr("fill").toLowerCase() === "purple") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "purple");
	//             updateJsonOdontograma(idSvg, idPolygon, "purple");
	//         }
	//         break;
	//     case "pitFissuredalam":
	//         if ($(x).attr("fill").toLowerCase() === "#6495ed") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "#6495ED");
	//             updateJsonOdontograma(idSvg, idPolygon, "#6495ED");
	//         }
	//         break;
	//     case "kariesMangkok":
	//         if ($(x).attr("fill").toLowerCase() === "blue") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "blue");
	//             updateJsonOdontograma(idSvg, idPolygon, "blue");
	//         }
	//         break;
	//     case "gigiGoyang":
	//         if ($(x).attr("fill").toLowerCase() === "#7fff00") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "#7FFF00");
	//             updateJsonOdontograma(idSvg, idPolygon, "#7FFF00");
	//         }
	//         break;
	//     case "presistensi":
	//         if ($(x).attr("fill").toLowerCase() === "pink") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "pink");
	//             updateJsonOdontograma(idSvg, idPolygon, "pink");
	//         }
	//         break;
	//     case "tambalanRestoras":
	//         if ($(x).attr("fill").toLowerCase() === "black") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "black");
	//             updateJsonOdontograma(idSvg, idPolygon, "black");
	//         }
	//         break;
	//     case "tambalanRestoras":
	//         if ($(x).attr("fill").toLowerCase() === "black") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "black");
	//             updateJsonOdontograma(idSvg, idPolygon, "black");
	//         }
	//         break;
	//     case "gigiHilang":
	//         if ($(x).attr("fill").toLowerCase() === "#228b22") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "#228B22");
	//             updateJsonOdontograma(idSvg, idPolygon, "#228B22");
	//         }
	//         break;
	//     case "resesiGingiva":
	//         if ($(x).attr("fill").toLowerCase() === "brown") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "brown");
	//             updateJsonOdontograma(idSvg, idPolygon, "brown");
	//         }
	//         break;
	//     case "karangGigi":
	//         if ($(x).attr("fill").toLowerCase() === "#191970") {
	//             $(x).attr("fill", "white");
	//             updateJsonOdontograma(idSvg, idPolygon, "white");
	//         } else {
	//             $(x).attr("fill", "#191970");
	//             updateJsonOdontograma(idSvg, idPolygon, "#191970");
	//         }
	//         break;
	//     default:
	//         console.log("borrar case");
	// }
	return false;
}


function setTgl(x) {
	var tglJadi = "<option value=''>Tanggal</option>";
	$("#tgl_lahir_d").html("");
	for (var i = 1; i <= 31; i++) {
		var selected = "";
		if (x == i) {
			selected = "selected";
		}

		tglJadi += '<option value="' + i + '" ' + selected + '>' + i + '</option>';
	}

	$("#tgl_lahir_d").html(tglJadi);
}


function setBulan(x) {
	var blnJadi = "<option value=''>Bulan</option>";
	var arrBln = ["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGT", "SEP", "OKT", "NOV", "DES"];
	$("#tgl_lahir_m").html("");
	for (var i = 0; i < arrBln.length; i++) {
		var selected = "";
		if ((x - 1) == i) {
			selected = "selected";
		}

		blnJadi += '<option value="' + (i + 1) + '" ' + selected + '>' + arrBln[i] + '</option>';
	}

	$("#tgl_lahir_m").html(blnJadi);
}

function setTahun(x) {
	var blnJadi = "<option value=''>Tahun</option>";
	// $date = strtotime('-100 year', time());
	var thT = (new Date()).getFullYear();
	var thF = thT - 100;
	$("#tgl_lahir_y").html("");
	for (var i = thT; i >= thF; i--) {
		var selected = "";
		if (x == i) {
			selected = "selected";
		}

		blnJadi += '<option value="' + i + '" ' + selected + '>' + i + '</option>';
	}

	$("#tgl_lahir_y").html(blnJadi);
}


function hitungDiagnosa() {
	var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	for (let i = 0; i < count.length; i++) {
		const element = count[i];
		if ($("#q1").is(":checked") && $("#q2").is(":checked") && $("#q3").is(":checked")) {
			console.log('karies superfisial');
		} else if ($("#q2").is(":checked") && $("#q4").is(":checked") && $("#q5").is(":checked")) {
			console.log('Karies media');
		} else if ($("#q2").is(":checked") && $("#q4").is(":checked") && $("#q5").is(":checked") && $("#q6").is(":checked")) {
			console.log('Karies porfunda');
		}


	}
}

function prev() {
	var link = document.getElementById('prev');
	for (var i = 0; i < 50; i++)
		link.click();
}




function getBidangIlmu(id) {

	var selected = "";

	$("#id_bidang_ilmu").html("");

	$.ajax({

		type: "GET",

		url: base_url + "master_bidang_ilmu/getBidangIlmuSelect2",

		cache: false,

		success: function (json) {

			var obj = JSON.parse(json)

			for (var i = 0; i < obj.length; i++) {

				if (id === obj[i].id) {

					selected = "selected";

				} else {

					selected = "";

				}

				$("#id_bidang_ilmu").append("<option value='" + obj[i].id + "' " + selected + " data-nama='" + obj[i].nama + "'>" + obj[i].nama + "</option>")

				// console.log("<option value='"+obj[i].id+"' "+selected+">"+obj[i].nama+"</option>");

			}

			if ($("#id_bidang_ilmu").val() != null || $("#id_bidang_ilmu").val() != undefined) {

				getKategoriPenyakit($("#id_bidang_ilmu").val(), data_edit.id_penyakit);

				console.log("ccc: ", $('#id_bidang_ilmu option:selected').attr('data-nama'));

			}



		}

	});

}



function getKategoriPenyakit(id, x) {

	var selected = "";

	$("#id_penyakit").html("");

	var data_send = "id=" + id;

	$.ajax({

		type: "POST",

		url: base_url + "master_penyakit/getPenyakitByBidangIlmuSelect2",

		cache: false,

		data: data_send,

		success: function (json) {

			var obj = JSON.parse(json)

			for (var i = 0; i < obj.length; i++) {

				if (x === obj[i].id) {

					selected = "selected";

				} else {

					selected = "";

				}

				$("#id_penyakit").append("<option value='" + obj[i].id + "' " + selected + " data-nama='" + obj[i].nama + "'>" + obj[i].nama + "</option>")

				// console.log("<option value='" + obj[i].id + "' " + selected + ">" + obj[i].nama + "</option>");

			}

			if ($("#id_penyakit").val() != null || $("#id_penyakit").val() != undefined) {

				getRencanaPerawatan($("#id_penyakit").val(), data_edit.id_rencana_perawatan);

			}



		}

	});

}







function getRencanaPerawatan(id, x) {

	var selected = "";

	$("#id_rencana_perawatan").html("");

	var data_send = "id=" + id;

	$.ajax({

		type: "POST",

		url: base_url + "master_rencana_perawatan/getRencanaPerawatanByPenyakitSelect2",

		cache: false,

		data: data_send,

		success: function (json) {

			var obj = JSON.parse(json)

			for (var i = 0; i < obj.length; i++) {

				if (x === obj[i].id) {

					selected = "selected";

				} else {

					selected = "";

				}

				$("#id_rencana_perawatan").append("<option value='" + obj[i].id + "' " + selected + " data-nama='" + obj[i].nama + "'>" + obj[i].nama + "</option>")

				console.log("<option value='" + obj[i].id + "' " + selected + ">" + obj[i].nama + "</option>");

			}



		}

	});

}



var tambahDetailPenyakit = function () {



	$("#id_detail_rawat").val("undefined");

	$("#modal-title").text("Tambah Detail Pasien");

	$("#remove_detail_foto").trigger("click");

	$("#myModalDetailPenyakit").modal({

		show: 'false',

		backdrop: 'static',

		keyboard: false

	});

}



function saveDetail() {

	var nama_bidang_ilmu = $('#id_bidang_ilmu option:selected').attr('data-nama');

	console.log("xx: ", $("#fotos")[0].files[0]);

}



function cancelSaveRawat() {
	$("#id").val("undefined");
	$("#nama_pasien").val("");
	$("#notelp_pasien").val("");
	$("#alamat_pasien").val("");
	$("#id_rawat").val("");
	$('#tgl_rawat').data("DateTimePicker").date(new Date());

}

function saveHeaderRawat(button) {

	var $validator = $('#formRawatTambah').validate({
		errorPlacement: function (error, element) {
			$(element).parent('div').addClass('has-error');
		}
	});
	var $valid = $('#formRawatTambah').valid();
	if (!$valid) {
		$validator.focusInvalid();
		return false;
	} else {
		swal({
			allowOutsideClick: false,
			title: "Loading...",
			showCancelButton: false,
			showConfirmButton: false,
			text: "<img src='assets/img/loading.gif' style='width:250px;'>",
		});
		var $validDate = isValidDate($("#tgl_lahir_m").val() + "-" + $("#tgl_lahir_d").val() + "-" + $("#tgl_lahir_y").val());
		if (!$validDate) {
			bootbox.alert("Tanggal lahir yang anda masukkan tidak valid!");
			return false;
		} else {
			var deskripsi = [];
			for (let i = 0; i < diagnosaGigi.length; i++) {
				const element = diagnosaGigi[i];
				deskripsi.push(element.deskripsi);
			}
			var tgl_lahir = $("#tgl_lahir_y").val() + "-" + $("#tgl_lahir_m").val() + "-" + $("#tgl_lahir_d").val();
			console.log($('#formRawatTambah').serialize());
			var url = base_url + "rawat_tambah/add_rawat_header";
			if ($("#id_rawat").val() != "undefined" && $("#id").val() != "undefined") {
				url = base_url + "rawat_tambah/edit_rawat_header"
			} else {
				url = base_url + "rawat_tambah/add_rawat_header";
			}
			$("body").addClass("loading");
			// console.log($('#formRawatTambah').serialize() + "&odontogram=" + JSON.stringify(allDental) + "&umur_pasien=" + tgl_lahir + "&diagnosa=" + JSON.stringify(diagnosaGigi) + "&deskripsi=" + deskripsi.join('<br>'));
			$.ajax({
				type: "POST",
				url: url,
				cache: false,
				data: $('#formRawatTambah').serialize() + "&odontogram=" + JSON.stringify(allDental) + "&umur_pasien=" + tgl_lahir + "&diagnosa=" + JSON.stringify(diagnosaGigi) + "&deskripsi=" + deskripsi.join('<br>'),
				success: function (json) {
					var obj = JSON.parse(json);
					if (obj.rc === "0000") {
						if (button == "add") {
							notifikasi("success", obj.message);
							$("#div_detail_penyakit").show();
							$("#div_save_header_rawat").hide();
							$("#id_rawat").val(obj.id_rawat);
							$("#id").val(obj.id);
							window.setTimeout(function () {
								// Move to a new location or you can do something else
								window.location.href = base_url + 'rawat_history/';
								swal.close();
							}, 500);
						} else if (button == "edit") {
							notifikasi("success", "Daftar Rawat Pasien Berhasil Ditambahkan.");
							window.setTimeout(function () {
								// Move to a new location or you can do something else
								window.location.href = base_url + 'rawat_history/';
								swal.close();
							}, 500);
						}
					} else {
						notifikasi("danger", obj.message);
					}
				},
				complete: function (obj) {
					$('body').removeClass("loading");
				}
			});
		}
	}
}




function saveDetailRawat() {

	var $validator = $('#formDetailPenyakit').validate({

		errorPlacement: function (error, element) {

			$(element).parent('div').addClass('has-error');

		}

	});

	var $valid = $('#formDetailPenyakit').valid();

	if (!$valid) {

		$validator.focusInvalid();

		return false;

	} else {

		var url = "";

		var src_foto = $("#foto_base64").val();

		// $("#tgl_rawat").val(parseDate($("#tgl_rawat").val()));

		// console.log("xx: ", $("#fotos")[0].files[0]);

		// if (src_foto !== undefined) {

		// console.log($('#formDetailPenyakit').serialize()+"&id_rawat=" + $("#id_rawat").val());

		$("#myModalDetailPenyakit").modal("hide");



		if ($("#id_detail_rawat").val() === "undefined") {

			url = base_url + "rawat_tambah/add_rawat_detail";

		} else {

			url = base_url + "rawat_tambah/edit_rawat_detail";

		}

		$("body").addClass("loading");



		console.log("url: " + url);

		$.ajax({

			type: "POST",

			url: url,

			cache: false,

			data: $('#formDetailPenyakit').serialize() + "&id_rawat=" + $("#id_rawat").val() + "&tgl_rawat=" + $("#tgl_rawat").val(),

			success: function (json) {
				$('body').removeClass("loading");
				var obj = JSON.parse(json);

				$("#remove_detail_foto").trigger("click");

				if (obj.rc === "0000") {

					notifikasi("success", obj.message);

					getDetailRawat(obj.id_rawat);

					// $("#div_detail_penyakit").show();

					// $("#div_save_header_rawat").hide();



					// $("#nama_pasien").attr("disabled", "true");

					// $("#notelp_pasien").attr("disabled", "true");

					// $("#alamat_pasien").attr("disabled", "true");

					// $("#tingkat_kooperatif").attr("disabled", "true");

					// $("#id_rawat").val(obj.id_rawat);

				} else {

					notifikasi("danger", obj.message);

				}

			},
			complete: function (obj) {
				$('body').removeClass("loading");
			}

		});



		// } else {

		//     notifikasi("danger", "Silahkan Tambah Photo Kondisi Pasien");

		// }

	}

}



function deleteRawatDetail(id, id_rawat, nama) {

	bootbox.confirm("Apakah anda yakin untuk menghapus diagnosa [' " + nama + " '] dari daftar detail pasien?", function (result) {

		if (result) {

			$.ajax({

				type: "POST",

				url: base_url + "rawat_tambah/deleteRawatDetail",

				cache: false,

				data: JSON.stringify({ "id": id.toString(), "id_rawat": id_rawat.toString() }),

				success: function (json) {

					var obj = JSON.parse(json);

					if (obj.rc === "0000") {

						notifikasi("success", obj.message);

						getDetailRawat(id_rawat);

					} else {

						notifikasi("danger", obj.message);

					}

				},

				error: function (e) {

					// console.log("delete_pasien: ", e.responseText);



				}

			});



		}

	});

}



function editDetailRawat(id) {
	if (id != null || id != undefined) {
		$.ajax({
			type: "POST",
			url: base_url + "rawat_tambah/getDetailRawatById",
			cache: false,
			data: JSON.stringify({ "id": id }),
			success: function (json) {
				$("#modal-title").text("Edit Detail Pasien");
				$("#myModalDetailPenyakit").modal({
					show: 'false',
					backdrop: 'static',
					keyboard: false
				});
				console.log('get_user: ', json);
				var obj = JSON.parse(json);
				if (obj.rc === "0000") {
					data_edit = obj;
					getBidangIlmu(obj.id_bidang_ilmu);
					$("#id_detail_rawat").val(obj.id);
					$("#div_foto_base64").removeClass("fileinput-new");
					$("#div_foto_base64").addClass("fileinput-exists");
					$("#div_ada_foto").html("<img src='" + obj.foto + "'>");
					$("#tgl_rawat").val(obj.tgl_rawat);
					$("#foto_base64").val(obj.foto);
				} else {
					notifikasi("danger", obj.message);

				}

			}

		});

	}

}



function getDetailRawat(id) {

	var data_send = "id=" + id;

	$.ajax({

		type: "POST",

		url: base_url + "rawat_tambah/getDetailRawat",

		cache: false,

		data: data_send,

		success: function (json) {

			// console.log('json: ', json);

			$("#datatables-detail-rawat").html(json);

			// $('#datatables').DataTable().destroy();

			// $('#datatables').DataTable({

			//      "pagingType": "full_numbers",

			//      "lengthMenu": [

			//          [10, 25, 50, -1],

			//          [10, 25, 50, "All"]

			//      ],

			//      responsive: true,



			//      language: {

			//          search: "_INPUT_",

			//          searchPlaceholder: "Search records",

			//      },



			//  });

		}

	});

}





function notifikasi(jenis, data) {



	$.notify({

		icon: "notifications",

		message: data



	}, {

		type: jenis,

		timer: 3000,

		placement: {

			from: "top",

			align: "right"

		}

	});

}



function parseDate(s) {

	console.log(s);

	var months = {
		jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",

		jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12"
	};

	var p = s.split('-');

	return p[2] + "-" + months[p[1].toLowerCase()] + "-" + (p[0].length === 1 ? "0" + p[0] : p[0]);

}



function toDate(dateStr) {

	var parts = dateStr.split("-");

	return new Date(parts[0], parts[1] - 1, parts[2]);

}



function getBase64(file) {

	var response = "";

	var reader = new FileReader();

	reader.readAsDataURL(file);

	reader.onload = function (e) {

		response = e.target.result;

		$("#foto_base64").val(response);

	};

	reader.onerror = function (error) {

		notifikasi('danger: ', error);

	};

	return response;

}

function getBase64FotoPasien(file) {

	var response = "";

	var reader = new FileReader();

	reader.readAsDataURL(file);

	reader.onload = function (e) {

		response = e.target.result;

		$("#pasien_foto_base64").val(response);

	};

	reader.onerror = function (error) {

		notifikasi('danger: ', error);

	};

	return response;

}

function getBase64RahangAtas(file) {

	var response = "";

	var reader = new FileReader();

	reader.readAsDataURL(file);

	reader.onload = function (e) {

		response = e.target.result;

		$("#rahang_atas_base64").val(response);

	};

	reader.onerror = function (error) {

		notifikasi('danger: ', error);

	};

	return response;

}

function getBase64RahangBawah(file) {

	var response = "";

	var reader = new FileReader();

	reader.readAsDataURL(file);

	reader.onload = function (e) {

		response = e.target.result;

		$("#rahang_bawah_base64").val(response);

	};

	reader.onerror = function (error) {

		notifikasi('danger: ', error);

	};

	return response;

}

function getBase64Tambahan(file) {

	var response = "";

	var reader = new FileReader();

	reader.readAsDataURL(file);

	reader.onload = function (e) {

		response = e.target.result;

		$("#tambahan_base64").val(response);

	};

	reader.onerror = function (error) {

		notifikasi('danger: ', error);

	};

	return response;

}

function validatePhone(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	var regex = /[0-9]/;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}




function isValidDate(date) {
	var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
	if (matches == null) return false;
	var d = matches[2];
	var m = matches[1] - 1;
	var y = matches[3];
	var composedDate = new Date(y, m, d);
	return composedDate.getDate() == d &&
		composedDate.getMonth() == m &&
		composedDate.getFullYear() == y;
}
