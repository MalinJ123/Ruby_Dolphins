import express, { application } from 'express';
import { getUserDb } from '../data/userDatabase/userDb.js';
import { isValidUser } from '../data/validate.js';

const router = express.Router();

//	 X	 GET - User lista 
//	 X  GET - Users genom ID
//	 X	 POST - Uppdatera User 
//		DELETE - Radera ALLA User
//		 DELETE - Radera Användare med Id 

// GET Users - hela listan
router.get('/', async (req, res) => {
	try {
	  const db = getUserDb();
	  await db.read();
	  const users = db.data.users;
	  console.log('Visar user-lista', users);
	  res.send(users);
	  
	} catch (error) {
	  console.log('Detta är vad vi får tillbaka i user-listan', error);
	  res.status(500).send('An error occurred while retrieving users.');
	}
 });

//GET Users - med ID
router.get('/:id', async (req, res) => {
	try {
	  const db = getUserDb();
	  await db.read();
	  const users = db.data.users;
	  const userId = parseInt(req.params.id);
 
	  const user = users.find((user) => user.id === userId);
 
	  if (!user) {
		 return res.status(404).send('User not found.');
	  }
 
	  console.log('Visar användaren med ID:', user);
	  res.send(user);
	} catch (error) {
	  console.log('Ett fel uppstod vid hämtning av användare:', error);
	  res.status(500).send('Ett fel uppstod vid hämtning av användare.');
	}
});

//Post User 
router.post( '/' , async (req, res) => {
	const db = getUserDb();
	await db.read();
	console.log('test 1');
	
	let username = req.body.username;
	let password = req.body.password;
	function generateId() {
		return Math.floor(Math.random() * 10000) 
	}
	let newUser = {
		id : generateId(),
		username  ,
		password 
	}
	console.log('newUser' ,newUser);
	if( isValidUser (newUser) ) {
		console.log('test 2' ,newUser);
		console.log('det måste vara sträng');
		res.status(400).send('Det måste vara sträng inte nummer');	

			return;
	}
	db.data.users.push(newUser);
	await db.write()
	res.sendStatus(201)
	console.log('test 3');
})

 

export default router;
