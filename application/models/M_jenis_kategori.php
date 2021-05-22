<?php

class M_jenis_kategori extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('utama', true);
	}

	function get_all_jenis_kategori()
	{
		$qry = "
		SELECT * from m_kategori
		order by nama asc;
		";

		$data = $this->db->query($qry);

		if ($data->num_rows() > 0) return $data->result();
		else return false;
	}


	function daftar($user, $pass)
	{
		// $data = $this->db->where(array('username'=>$user,'password'=>$pass))->get('m_user'); 

		// if($data->num_rows() > 0){  

		// 	return $data->result();
		// }
		// else{
		// 	return false;
		// }
		// $this->chek_user_exist($user);
		$qry = "
				insert into users (username,password)VALUES('$user','$pass');
				";

		$data = $this->db->query($qry);

		if ($data->num_rows() > 0) return $data->result();
		else return false;
	}

	public function is_login()
	{
		if ($this->session->userdata('akses') != 0)  return true;
		else   return false;
		// return true;
	}
	public function chek_user_exist($user)
	{
		$qry  = " select * from users where username = '$user'";
		$data = $this->db->query($qry);
		var_dump($data);
		return false;
	}
}
