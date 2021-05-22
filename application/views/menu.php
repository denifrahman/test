<?php

$url = $_SERVER["REQUEST_URI"];

$ex_url = explode("/", $url);



$role = $this->session->userdata('role');



$dashboard = "";
$master_user = "";
$master_pasien = "";
$master_bidang_ilmu = "";
$master_penyakit = "";
$master_rencana_perawatan = "";
$rawat = "";
$master = "";
$rawat_tambah = "";
$rawat_pilih = "";
$rawat_histori = "";
$rawat_verifikasi = "";
$mutasi = "";
$stoken = "";
$deposit = "";

if (count($ex_url) == 3) {

	if ($ex_url[2] == "dashboard") {

		$dashboard = "active";
	} else if ($ex_url[2] == "master_user") {

		$master_user = "active";

		$master = "active";
	} else if ($ex_url[2] == "master_pasien") {

		$master_pasien = "active";

		$master = "active";
	} else if ($ex_url[2] == "master_bidang_ilmu") {

		$master_bidang_ilmu = "active";

		$master = "active";
	} else if ($ex_url[2] == "master_penyakit") {

		$master_penyakit = "active";

		$master = "active";
	} else if ($ex_url[2] == "master_rencana_perawatan") {

		$master_rencana_perawatan = "active";

		$master = "active";
	} else if ($ex_url[2] == "rawat_tambah") {

		$rawat_tambah = "active";

		$rawat = "active";
	} else if ($ex_url[2] == "rawat_pilih") {

		$rawat_pilih = "active";

		$rawat = "active";
	} else if ($ex_url[2] == "rawat_histori") {

		$rawat_histori = "active";

		$rawat = "active";
	} else if ($ex_url[2] == "rawat_verifikasi") {

		$rawat_verifikasi = "active";

		$rawat = "active";
	} else if ($ex_url[2] == "sToken") {

		$stoken = "active";

		$deposit = "active";
	} else if ($ex_url[2] == "sToken" && $ex_url[2] == "index_mutasi") {

		$mutasi = "active";

		$deposit = "active";
	}
}

?>



<div class="sidebar" data-active-color="rose" data-background-color="black" data-image="<?php echo base_url(); ?>assets/img/sidemenu.jpeg">

	<!--
Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"
Tip 2: you can also add an image using data-image tag
-->

	<div class="logo">

		<a href="#" class="simple-text logo-mini"></a>

		<a href="#" class="simple-text logo-normal">

			App

		</a>

	</div>

	<div class="sidebar-wrapper">

		<div class="user">

			<div class="photo">

				<img src="<?php echo base_url(); ?>assets/img/rs-logo.png" />

			</div>

			<div class="info">

				<a data-toggle="collapse" href="#collapseExample" class="collapsed">

					<span>

						<?php echo $this->session->userdata('nama'); ?>

						<b class="caret"></b>

					</span>

				</a>

				<div class="clearfix"></div>

				<div class="collapse" id="collapseExample">

					<ul class="nav">

						<li>

							<a href="<?php echo site_url("my_profile"); ?>">

								<span class="sidebar-mini">MP</span>

								<span class="sidebar-normal">My Profile</span>

							</a>

						</li>

						<li>

							<a href="<?php echo site_url("login/logout"); ?>">

								<span class="sidebar-mini">LO</span>

								<span class="sidebar-normal">Log Out</span>

							</a>

						</li>

					</ul>

				</div>

			</div>

		</div>

		<ul class="nav">

			<!-- <li class="<?php echo $dashboard; ?>">
	            <a href="<?php echo site_url("dashboard"); ?>">
	                <i class="material-icons">dashboard</i>
	                <p>Dashboard</p>
	            </a>
	        </li> -->


			<li class="<?php echo $rawat; ?>">

				<a data-toggle="collapse" href="#menu_rawat" class="collapsed">

					<i class="material-icons">library_books</i>

					<p>Master

						<b class="caret"></b>

					</p>

				</a>

				<div class="collapse in" id="menu_rawat">

					<ul class="nav">

						<?php
						if ($role == "ADMIN" || $role == "MAHASISWA") {

						?>
							<li class="<?php echo $rawat_tambah; ?>">

								<a href="<?php echo site_url("rawat_tambah");  ?>">

									<span class="sidebar-mini"><i class="material-icons" style="margin-right: 5px;">playlist_add</i></span>

									<span class="sidebar-normal">Input Pasien</span>

								</a>

							</li>

						<?php
						}
						if ($role == "ADMIN" || $role == "DOKTER_MUDA") {

						?>

							<li class="<?php echo $rawat_pilih; ?>">

								<a href="<?php echo site_url("rawat_pilih");  ?>">

									<span class="sidebar-mini"><i class="material-icons" style="margin-right: 5px;">playlist_add_check</i></span>

									<span class="sidebar-normal">Jenis Kategori</span>

								</a>

							</li>

						<?php

						}
						if ($role == "ADMIN" || $role == "VERIFIKATOR") {

						?>

							<!-- <li class="<?php echo $rawat_verifikasi; ?>">
	                        <a href="<?php echo site_url("rawat_verifikasi");  ?>">
	                            <span class="sidebar-mini"><i class="material-icons" style="margin-right: 5px;">playlist_add_check</i></span>
	                            <span class="sidebar-normal">Verifikasi Pasien</span>
	                        </a>
	                    </li> -->

						<?php

						}

						if ($role == "ADMIN" || $role == "MAHASISWA") {

						?>

							<li class="<?php echo $rawat_histori; ?>">

								<a href="<?php echo site_url("rawat_history");  ?>">

									<span class="sidebar-mini"><i class="material-icons" style="margin-right: 5px;">storage</i></span>

									<span class="sidebar-normal">History</span>

								</a>

							</li>
						<?php } ?>

					</ul>

				</div>

			</li>

		</ul>

	</div>

</div>
