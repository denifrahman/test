<!doctype html>
<html lang="en">

<?php $this->load->view($header); ?>

<body>
	<div class="wrapper">

		<?php $this->load->view($menu); ?>

		<div class="main-panel">
			<nav class="navbar navbar-transparent navbar-absolute">
				<div class="container-fluid">
					<div class="navbar-minimize">
						<button id="minimizeSidebar" class="btn btn-round btn-white btn-fill btn-just-icon">
							<i class="material-icons visible-on-sidebar-regular">more_vert</i>
							<i class="material-icons visible-on-sidebar-mini">view_list</i>
						</button>
					</div>
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#"> Rawat History </a>
					</div>
				</div>
			</nav>
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header card-header-icon" data-background-color="purple">
									<i class="material-icons">assignment</i>
								</div>
								<div class="card-content">
									<h4 class="card-title">Daftar Rawat Pasien</h4>
									<div class="toolbar">
										<form method="POST" action="">
											<div class="row">
												<div class="col-sm-3">
													<div class="form-group label-floating label-static">
														<label class="control-label">Tgl Dari</label>
														<input type="text" class="form-control datepicker" name="fromDate" id="fromDate" value="<?php echo $fromDate; ?>" />
													</div>
												</div>
												<div class="col-sm-3">
													<div class="form-group label-floating label-static">
														<label class="control-label">Tgl Sampai</label>
														<input type="text" class="form-control datepicker" name="toDate" id="toDate" value="<?php echo $toDate; ?>" />
													</div>
												</div>
												<div class="col-sm-2">
													<input type="submit" class="btn btn-primary btn-fill" name="cari" value="Cari">
												</div>
											</div>
										</form>
									</div>
									<div class="material-datatables">
										<table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
											<thead>
												<tr>
													<th>No</th>
													<th>Tgl. Daftar</th>
													<th>Nama Pasien</th>
													<th>Jenis Kelamin</th>
													<th class="text-right">Actions</th>
												</tr>
											</thead>
											<tfoot>
												<tr>
													<th>No</th>
													<th>Tgl. Daftar</th>
													<th>Nama Pasien</th>
													<th>Jenis Kelamin</th>
													<th class="text-right">Actions</th>
												</tr>
											</tfoot>
											<tbody>
												<?php
												$no = 0;
												if ($m_rawat != "") {
													foreach ($m_rawat as $key) {
														// $status = "";
														// if ($key->status == "DAFTAR") {
														// 	$status = '<button class="btn btn-info btn-xs" style="margin: 0;">DAFTAR</button>';
														// } else if ($key->status == "RAWAT") {
														// 	$status = '<button class="btn btn-warning btn-xs" style="margin: 0;">RAWAT</button>';
														// } else if ($key->status == "MENUNGGU_DAFTAR") {
														// 	$status = '<button class="btn btn-xs" style="margin: 0;">BARU</button>';
														// } else if ($key->status == "MENUNGGU_RAWAT") {
														// 	$status = '<button class="btn btn-rose btn-xs" style="margin: 0;">MENUNGGU RAWAT</button>';
														// } else if ($key->status == "MENOLAK_RAWAT") {
														// 	$status = '<button class="btn btn-danger btn-xs" style="margin: 0;">MENOLAK RAWAT</button>';
														// } else {
														// 	$status = '<button class="btn btn-success btn-xs" style="margin: 0;">SELESAI</button>';
														// }
														$jenis_kelamin = "";
														if ($key->jenis_kelamin == "L") {
															$jenis_kelamin = "Laki-Laki";
														} else {
															$jenis_kelamin = "Perempuan";
														}
														echo '<tr>
				                                                    <td>' . ($no + 1) . '</td>
				                                                    <td>' . $key->time_ins . '</td>
				                                                    <td>' . $key->nama_pasien . '</td>
				                                                    <td>' . $jenis_kelamin . '</td>
                                                                    <td class="text-right">
                                                                        <a href="#" class="btn btn-simple btn-warning btn-icon edit" rel="tooltip" title="Detail" onclick="editRawat(' . $key->id . ');"><i class="material-icons">visibility</i></a>';
														// if ($key->nama_penyakit) {
														//     echo '<a href="#" class="btn btn-simple btn-success btn-icon edit" rel="tooltip" title="Print"  onclick="printPasien('.$key->id_detail.');"><i class="material-icons">print</i></a>';
														// }
														// if (!$key->id_dokter) {
														//  echo '
														//     <a href="#" class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Remove"  onclick="deleteRawat('.$key->id_rawat.', '."'".$key->nama_pasien."'".', '.$key->id_detail.');"><i class="material-icons">close</i></a>';
														// }
														echo '</td>';
														echo '</tr>';

														$no++;
													}
												}

												?>

											</tbody>
										</table>
									</div>
								</div>
								<!-- end content-->
							</div>
							<!--  end card  -->
						</div>
						<!-- end col-md-12 -->
					</div>
					<!-- end row -->
				</div>
			</div>
			<?php $this->load->view($footer); ?>
		</div>
	</div>
</body>
<?php $this->load->view($script); ?>
<script>
	var base_url = '<?php echo base_url() ?>';
</script>
<script src="<?php echo base_url(); ?>assets/js/apps/rawat-history.js"></script>
<script type="text/javascript">
	$(document).ready(function() {

		app_rawat_history.init();
	});
</script>

</html>

<div class="modal fade" id="myModalDetailPenyakit" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog" style=" overflow-x: scroll; min-width:75%;  max-height:100%;  margin-top: 60px; margin-bottom:60px;">
		<div class="modal-content">
			<form id="formDetailPenyakit" method="" enctype='multipart/form-data'>
				<div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> <i class="material-icons">clear</i> </button>
					<h4 class="modal-title" id="modal-title">Lookup Pasien</h4>
				</div>
				<div class="row" id="row-loading">
					<div class="col-sm-12">
						<div class="text-center">
							<img src="<?php echo base_url(); ?>assets/img/loading.gif">
						</div>
					</div>
				</div>
				<div class="row" id="row-odonto">
					<div class="row">
						<div class="col-sm-offset-1 col-sm-10">
							<label class="label-control">Odontogram</label>
							<div style="width: 100%; overflow-x: scroll;">

								<table style="width: 100%">
									<tbody>
										<tr>
											<td colspan="2">
												<div id="message" style="height:20px">
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div id="svgselect" style="width: 610px; height: 230px; background-color: #ffffff;">
													<!-- background-color:red -->
													<svg version="1.1" height="100%" width="100%" style="overflow-x: scroll;">
														<g transform="scale(1.5)" id="odontograma">

														</g>
													</svg>
												</div>
											</td>
											<td>
												<div id="controls" class="panel panel-default">
													<div class="panel-body"> <label class="label-control">Pilih Kategori</label>
														<div class="btn-group list-group" data-toggle="buttons">
															<div id="kariesSuperfisia" class="btn btn-primary btn-xs list-group-item active" style="width: 100%; background-color: yellow; color: black;"> <input type="radio" name="options" id="option2" autocomplete="off" checked> Karies Superfisial
															</div>
															<div id="kariesMedia" class="btn btn-warning btn-xs list-group-item" style="width: 100%; background-color: orange; color: black;"> <input type="radio" name="options" id="option3" autocomplete="off"> Karies media
															</div>
															<div id="kariesProfunda" class="btn btn-warning btn-xs list-group-item" style="width: 100%; background-color: red; color: black;"> <input type="radio" name="options" id="option4" autocomplete="off"> Karies profunda
															</div>
															<div id="kariesProfundaPerfores" class="btn btn-primary btn-xs list-group-item" style="width: 100%; background-color: gray;color: black; "> <input type="radio" name="options" id="option5" autocomplete="off"> Karies profunda perforasi
															</div>
															<div id="gigiGoyang" class="btn btn-default btn-xs list-group-item" style="width: 100%; background-color: #7FFF00; color: black; "> <input type="radio" name="options" id="option6" autocomplete="off"> gigi goyang
															</div>
															<div id="presistensi" class="btn btn-default btn-xs list-group-item" style="width: 100%; background-color: pink; color: black;"> <input type="radio" name="options" id="option6" autocomplete="off"> presistensi
															</div>
															<div id="gigiHilang" class="btn btn-default btn-xs list-group-item" style="width: 100%; background-color: #228B22; color: black;"> <input type="radio" name="options" id="option6" autocomplete="off"> gigi hilang
															</div>
															<div id="karangGigi" class="btn btn-default btn-xs list-group-item" style="width: 100%; background-color: #191970; "> <input type="radio" name="options" id="option6" autocomplete="off"> Karang Gigi
															</div>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td colspan="2">
												<div id="message" style="height:20px">
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div id="tableDetail" class="modal-body">
					<table id="tableDetailDiagnosa" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
						<thead>
							<tr>
								<th>No</th>
								<th>Diagnosa</th>
								<th>Departemen</th>
								<th>Rencana Perawatan</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th>No</th>
								<th>Diagnosa</th>
								<th>Departemen</th>
								<th>Rencana Perawatan</th>
							</tr>
						</tfoot>
						<tbody>
						</tbody>

					</table>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-danger btn-fill" data-dismiss="modal">Close</button>
				</div>
			</form>
		</div>
	</div><!--  End Modal -->
