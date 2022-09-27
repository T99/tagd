/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:25 PM -- September 26th, 2022
 * Project: tagd
 */

import type {
	DatabaseConnectionPool,
	MySQLQueryResults,
} from "@t99/mysql-toolkit";
import { AbstractTagQuery } from "./abstract-tag-query";
import type { TAGD } from "../tagd";
import type { TAGDFile } from "../schema/tagd-file";
import type { TAGDTag } from "../schema/tagd-tag";

export class SingleTagQuery extends AbstractTagQuery {
	
	protected readonly tagd: TAGD;
	
	protected readonly tag: TAGDTag;
	
	protected matchingFileIDs?: string[];
	
	public constructor(tagd: TAGD, tag: TAGDTag, resultLimit: number) {
		
		super(resultLimit);
		
		this.tagd = tagd;
		this.tag = tag;
		
	}
	
	public async getMatchingFileIDs(): Promise<string[]> {
		
		const pool: DatabaseConnectionPool = this.tagd.getDatabase();
		
		const queryResult: MySQLQueryResults = await pool.query(
			"SELECT `fileID` FROM `FileTag` WHERE `tagID` = ?",
			this.tag.getID()
		);
		
		pool.quer
		
		return [];
		
	}
	
	public getMatchingFiles(): TAGDFile[] {
		
		
		
		return [];
		
	}
	
}
