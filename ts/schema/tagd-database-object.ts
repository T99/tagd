/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:15 PM -- September 26th, 2022
 * Project: tagd
 */

/**
 * The raw JSON format of a TAGDDatabaseObject.
 */
export type RawTAGDDatabaseObject = {
	id: string;
	uuid: string;
	modifiedAt: Date;
	createdAt: Date;
};

/**
 * The most generic form of an object whose information is stored in/originated
 * from a TAGD database.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export class TAGDDatabaseObject {
	
	/**
	 * An unsigned integer value that uniquely identifies this object among
	 * others of its type.
	 */
	protected id: string;
	
	/**
	 * A UUID ('universally unique identifier') that can uniquely identify this
	 * object in any context.
	 */
	protected uuid: string;
	
	/**
	 * A datetime representing the moment at which this object was most recently
	 * modified.
	 */
	protected modifiedAt: Date;
	
	/**
	 * A datetime representing the moment at which this object was initially
	 * created.
	 */
	protected createdAt: Date;
	
	/**
	 * Initializes a new TAGDDatabaseObject with the provided ID, UUID, modified
	 * at date, and created at date.
	 * 
	 * @param {string} id An unsigned integer value that uniquely identifies
	 * this object among others of its type.
	 * @param {string} uuid A UUID ('universally unique identifier') that can
	 * uniquely identify this object in any context.
	 * @param {Date} modifiedAt A datetime representing the moment at which this
	 * object was most recently modified.
	 * @param {Date} createdAt A datetime representing the moment at which this
	 * object was initially created.
	 */
	public constructor(id: string, uuid: string, modifiedAt: Date,
					   createdAt: Date) {
		
		this.id = id;
		this.uuid = uuid;
		this.modifiedAt = modifiedAt;
		this.createdAt = createdAt;
		
	}
	
	/**
	 * Returns an unsigned integer value that uniquely identifies this object
	 * among others of its type.
	 * 
	 * @returns {string} An unsigned integer value that uniquely identifies this
	 * object among others of its type.
	 */
	public getID(): string {
		
		return this.id;
		
	}
	
	/**
	 * Returns a UUID ('universally unique identifier') that can uniquely
	 * identify this object in any context.
	 * 
	 * @returns {string} A UUID ('universally unique identifier') that can
	 * uniquely identify this object in any context.
	 */
	public getUUID(): string {
		
		return this.uuid;
		
	}
	
	/**
	 * Returns a datetime representing the moment at which this object was most
	 * recently modified.
	 * 
	 * @returns {Date} A datetime representing the moment at which this object
	 * was most recently modified.
	 */
	public getModifiedAtDate(): Date {
		
		return this.modifiedAt;
		
	}
	
	/**
	 * Returns a datetime representing the moment at which this object was
	 * initially created.
	 * 
	 * @returns {Date} A datetime representing the moment at which this object
	 * was initially created.
	 */
	public getCreatedAtDate(): Date {
		
		return this.createdAt;
		
	}
	
	/**
	 * Returns a JSON object containing the various database-originating fields
	 * of this object.
	 * 
	 * @returns {RawTAGDDatabaseObject} A JSON object containing the various
	 * database-originating fields of this object.
	 */
	public toJSON(): RawTAGDDatabaseObject {
		
		return {
			id: this.id,
			uuid: this.uuid,
			modifiedAt: this.modifiedAt,
			createdAt: this.createdAt,
		};
		
	}
	
}
