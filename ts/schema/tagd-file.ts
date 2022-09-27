/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:28 AM -- September 26th, 2022
 * Project: tagd
 */

import type { TAGD } from "../tagd";
import {
	type RawTAGDDatabaseObject,
	TAGDDatabaseObject,
} from "./tagd-database-object";

/**
 * The raw JSON format of a TAGDFile.
 */
export type RawTAGDFile = RawTAGDDatabaseObject & {
	extension: string;
	fullFileName: string;
	hashMD5: string;
};

/**
 * A file/resource that has been registered to a TAGD system.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export class TAGDFile extends TAGDDatabaseObject {
	
	protected tagd: TAGD;
	
	protected extension: string;
	
	protected fullFileName: string;
	
	protected hashMD5: string;
	
	public constructor(tagd: TAGD, id: string, uuid: string, extension: string,
					   fullFileName: string, hashMD5: string, modifiedAt: Date,
					   createdAt: Date) {
		
		super(id, uuid, modifiedAt, createdAt);
		
		this.tagd = tagd;
		this.extension = extension;
		this.fullFileName = fullFileName;
		this.hashMD5 = hashMD5;
		
	}
	
	public getExtension(): string {
		
		return this.extension;
		
	}
	
	public getFullFileName(): string {
		
		return this.fullFileName;
		
	}
	
	public getMD5Hash(): string {
		
		return this.hashMD5;
		
	}
	
	public toJSON(): RawTAGDFile {
		
		return {
			...super.toJSON(),
			extension: this.extension,
			fullFileName: this.fullFileName,
			hashMD5: this.hashMD5,
		};
		
	}
	
}
