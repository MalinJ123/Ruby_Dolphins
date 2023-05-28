import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

function getUserDb() {
	// Skapa sökväg till databasen
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const file = join(__dirname, 'dbUsers.json');
	const adapter = new JSONFile(file);
	const db = new Low(adapter, {});
	// {} verkar vara default datan
	return db;
 }

export { getUserDb }