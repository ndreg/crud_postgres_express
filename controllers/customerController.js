const connection = require('../sqlconf/connection');

const getCustomerAll = (req, res) => {
	const sql = `select * from customers`;
	connection.query(sql, (err, cont) => {
		if(err) {
			console.log('Ha sucedido un error '+err);
			res.redirect('/');
		}else {
			res.render('userAll', {customers: cont.rows})
		}
	})
}

const getCreateUser = (req, res) => {
	res.render('userCreate')
}

const postCreateUser = (req, res) => {
	const {customer_firstname, customer_lastname, customer_country, customer_city, customer_company} = req.body
	const sql = `INSERT INTO customers (customer_id, customer_firstname, customer_lastname, customer_country, customer_city, customer_company) values (default, '${customer_firstname}', '${customer_lastname}', '${customer_country}', '${customer_city}', '${customer_company}')`
	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha sucedido un error')
		res.redirect('/user/all')
	})
}

const getUpdateUser = (req, res) => {
	const id = req.params.id;
	const sql = `select * from customers where customer_id='${id}'`
	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha sucedido un error'+err);
		else {
			res.render('userUpdate', {user: cont.rows[0]})
		}
	})
}

const postUpdateUser = (req, res) => {
	const {firstname, lastname, country, city, company} = req.body;
	const sql = `update customers 
	set 
	customer_firstname='${firstname}', 
		customer_lastname='${lastname}', 
		customer_country='${country}', 
		customer_city='${city}', 
		customer_company='${company}'
		where customer_id='${req.params.id}'`;

	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha ocurrido un error');
		res.redirect('/user/all');
	})
}

const getDeleteUser = (req, res) => {
	const {id} = req.params;
	const sql = `select * from customers where customer_id='${id}'`;
	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha ocurrido un error');
		else {
			res.render('userDelete', {user: cont.rows[0]});
		}
	})
}

const postDeleteUser = (req, res) => {
	const {id} = req.params;
	const sql = `delete from customers where customer_id='${id}'`;

	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha ocurrido un error')
		res.redirect('/user/all');
	})
}

module.exports = {
	getCustomerAll,
	getCreateUser,
	postCreateUser,
	getUpdateUser,
	postUpdateUser,
	getDeleteUser,
	postDeleteUser
}
