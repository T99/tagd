/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:51 AM -- September 23rd, 2022
 * Project: tagd
 */

import {
	type RawTAGDDatabaseObject,
	TAGDDatabaseObject,
} from "./tagd-database-object";

export type RawTAGDTag = RawTAGDDatabaseObject & {
	text: string;
};

export class TAGDTag extends TAGDDatabaseObject {
	
	protected text: string;
	
	public constructor(id: string, uuid: string, text: string, modifiedAt: Date,
					   createdAt: Date) {
		
		super(id, uuid, modifiedAt, createdAt);
		
		this.text = text;
		
	}
	
	public getText(): string {
		
		return this.text;
		
	}
	
	public toJSON(): RawTAGDTag {
		
		return {
			...super.toJSON(),
			text: this.text,
		};
		
	}
	
}
