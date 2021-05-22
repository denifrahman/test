<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Master_pertanyaan extends CI_Controller
{

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->helper('url');
		$this->load->model('m_pertanyaan'); 
		$this->load->model('m_login');
		$this->load->library('session');
		if (!$this->m_login->is_login()) redirect('login');
	}

	public function index()
	{
		$data['m_pertanyaan'] = $this->m_pertanyaan->get_all_pertanyaan();
		$data['header'] = 'header';
		$data['menu'] = 'menu';
		$data['script'] = 'script';
		$data['footer'] = 'footer';
		$this->load->view('pertanyaan', $data);
	}

	function add_pertanyaan()
	{
		// if($this->input->post('add_pertanyaan')){
		$nama		= $this->input->post('nama');
		$kode	= $this->input->post('kode');

		$harga	= $this->input->post('harga');
		$id_bidang_ilmu = $this->input->post('id_bidang_ilmu');

		$cek_kode = $this->m_pertanyaan->cek_kode($kode);

		$result = array();


		if (!$cek_kode) {

			$cek_nama = $this->m_pertanyaan->cek_nama($nama);

			if (!$cek_nama) {


				$data['add_pertanyaan'] = $this->m_pertanyaan->add_pertanyaan($nama, $kode, $id_bidang_ilmu, $harga);

				if ($data['add_pertanyaan']) {
					$result = array(
						"rc" => "0000",
						"message" => "Master pertanyaan berhasil ditambahkan."
					);
				} else {
					$result = array(
						"rc" => "0001",
						"message" => "Master pertanyaan gagal ditambahkan."
					);
				}
			} else {
				$result = array(
					"rc" => "0002",
					"message" => "Nama pertanyaan Sudah Ada!"
				);
			}
		} else {
			$result = array(
				"rc" => "0003",
				"message" => "Kode pertanyaan Sudah Ada!"
			);
		}

		echo json_encode($result);
	}

	function edit_pertanyaan()
	{

		$nama		= $this->input->post('nama');
		$id		= $this->input->post('id');
		$kode	= $this->input->post('kode');
		$harga	= $this->input->post('harga');
		$kode_lama	= $this->input->post('kode_lama');
		$nama_lama	= $this->input->post('nama_lama');
		$id_bidang_ilmu = $this->input->post('id_bidang_ilmu');

		// $cek_kode = $this->m_pertanyaan->cek_kode($kode);

		$result = array();


		// if(!$cek_kode || $kode != $kode_lama){

		// 	$cek_nama = $this->m_pertanyaan->cek_nama($nama);

		// 	if(!$cek_nama || $nama != $nama_lama){

		$data['add_pertanyaan'] = $this->m_pertanyaan->edit_pertanyaan($id, $nama, $kode, $id_bidang_ilmu, $harga);

		if ($data['add_pertanyaan']) {
			$result = array(
				"rc" => "0000",
				"message" => "Master pertanyaan berhasil diperbarui."
			);
		} else {
			$result = array(
				"rc" => "0001",
				"message" => "Master pertanyaan gagal diperbarui."
			);
		}
		//   		} else{
		// 		$result = array(
		//   						"rc" => "0002",
		//   						"message" => "Nama pertanyaan Sudah Ada!"
		//   					);
		// 	}

		// } else{
		// 	$result = array(
		//  						"rc" => "0003",
		//  						"message" => "Kode pertanyaan Sudah Ada!"
		//  					);
		// }

		echo json_encode($result);
	}

	function delete_pertanyaan()
	{
		$dtusr = trim(file_get_contents('php://input'));
		$objx = json_decode(trim($dtusr), true);
		$id = $objx['id'];

		$data['delete_pertanyaan'] = $this->m_pertanyaan->delete_pertanyaan($id);

		if ($data['delete_pertanyaan']) {
			$result = array(
				"rc" => "0000",
				"message" => "Master pertanyaan berhasil dihapus."
			);
		} else {
			$result = array(
				"rc" => "0001",
				"message" => "Master pertanyaan gagal dihapus."
			);
		}

		echo json_encode($result);

		// } else {

		// 	redirect(base_url().'user');

		// }
	}

	function get_pertanyaan_by_id()
	{
		$dtusr = trim(file_get_contents('php://input'));
		$objx = json_decode(trim($dtusr), true);
		$id = $objx['id'];

		$data['get_pertanyaan'] = $this->m_pertanyaan->get_pertanyaan_by_id($id);

		if ($data['get_pertanyaan']) {
			// print_r(json_decode(json_encode($data['get_pertanyaan'][0]), true));
			$result = array_merge(json_decode(json_encode($data['get_pertanyaan'][0]), true), array(
				"rc" => "0000",
			));
			// $result = $data['get_pertanyaan'];
		} else {
			$result = array(
				"rc" => "0001",
				"message" => "Master pertanyaan tidak ditemukan."
			);
		}

		echo json_encode($result);

		// } else {

		// 	redirect(base_url().'user');

		// }
	}

	function get_all_pertanyaan()
	{
		$data_pertanyaan = $this->m_pertanyaan->get_all_pertanyaan();
		echo json_encode($data_pertanyaan);
	}

	function getpertanyaanSelect2()
	{
		$data_pertanyaan = $this->m_pertanyaan->get_all_pertanyaan();
		$result = array();
		if ($data_pertanyaan != "") {
			$result = $data_pertanyaan;
		}

		echo json_encode($result);
	}

	function getpertanyaanByBidangIlmuSelect2()
	{
		$result = array();
		if ($this->input->post('id')) {
			# code...
			$id		= $this->input->post('id');
			$data_pertanyaan = $this->m_pertanyaan->get_all_pertanyaan_by_bidang_ilmu($id);
			if ($data_pertanyaan != "") {
				$result = $data_pertanyaan;
			}
		}

		echo json_encode($result);
	}
}
