// import { join, dirname } from 'path'
// import { fileURLToPath } from 'url'
// import { Low } from 'lowdb'
// import { JSONFile } from 'lowdb/node'

// function getUserDb() {
// 	// Skapa sökväg till databasen
// 	const __dirname = dirname(fileURLToPath(import.meta.url))
// 	const file = join(__dirname, 'dbUsers.json')
// 	const adapter = new JSONFile(file)
// 	const db = new Low(adapter, {})
// 	// {} är default data
// 	return db
// }

// export { getUserDb }