const Pool = require('pg').Pool
const pool = new Pool({
  user: 'anand',
  host: 'localhost',
  database: 'bidrx',
  password: 'password',
  port: 5432,
})
const getRequests = (request, response) => {
  pool.query('SELECT * FROM requests ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createRequest = (request, response) => {
  console.log("request:  ", request.body.bidRequest);
  const { firstName, lastName, city, state,zipCode, medicineName, medicineQuantity } = request.body.bidRequest

  pool.query('INSERT INTO requests (first_name,last_name,city,state,zipcode,medicine_name,medicine_quantity ) VALUES ($1, $2, $3, $4, $5, $6, $7)', [firstName, lastName, city, state,zipCode, medicineName, medicineQuantity], (error, results) => {
    if (error){
      throw error
    }
    response.status(201).send(`Request added!`)
  })
}

const updateRequest = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteRequest = (request, response) => {
  const id = request.body.id;
  console.log('****deleting:  ', id);

  pool.query('DELETE FROM requests WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send('Request deleted')
  })
}

module.exports = {
  getRequests,
  createRequest,
  updateRequest,
  deleteRequest,
}

