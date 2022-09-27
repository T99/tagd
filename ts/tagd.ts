/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:32 PM -- September 23rd, 2022
 * Project: tagd
 */

import { DatabaseConnectionPool } from "@t99/mysql-toolkit";
import type { TAGDConfiguration } from "./tagd-configuration";

export class TAGD {
	
	protected config: TAGDConfiguration;
	
	protected database: DatabaseConnectionPool;
	
	protected constructor(config: TAGDConfiguration,
						  database: DatabaseConnectionPool) {
		
		this.config = config;
		this.database = database;
		
	}
	
	// eslint-disable-next-line @typescript-eslint/require-await
	public static async start(config: TAGDConfiguration): Promise<TAGD> {
		
		const database: DatabaseConnectionPool = new DatabaseConnectionPool({
			host: "",
			user: "",
			password: "",
			database: "",
			connectionLimit: 10,
		});
		
		const result: TAGD = new TAGD(config, database);
		
		return result;
		
	}
	
	public getConfig(): TAGDConfiguration {
		
		return this.config;
		
	}
	
	public getDatabase(): DatabaseConnectionPool {
		
		return this.database;
		
	}
	
}
