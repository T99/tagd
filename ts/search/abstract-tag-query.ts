/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:08 AM -- September 26th, 2022
 * Project: tagd
 */

import type { TAGDFile } from "../schema/tagd-file";

/**
 * The generic form of a class that serves to query the database for some form
 * of (potentially complex) tag query.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class AbstractTagQuery {
	
	/**
	 * The numerical value for the maximum number of results that should be
	 * returned by this query.
	 */
	protected readonly resultLimit: number;
	
	/**
	 * Initializes a new TagQuery instance with the provided result limit.
	 * 
	 * @param {number} resultLimit The numerical value for the maximum number of
	 * results that should be returned by this query.
	 */
	protected constructor(resultLimit: number) {
		
		this.resultLimit = resultLimit;
		
	}
	
	/**
	 * Executes the query and returns the matching set of file IDs.
	 * 
	 * @returns {string[]} The matching set of file IDs.
	 */
	public abstract getMatchingFileIDs(): Promise<string[]>;
	
	/**
	 * Executes this query and returns the resulting set of files.
	 *
	 * @returns {TAGDFile[]} The files that match this query.
	 */
	public abstract getMatchingFiles(): Promise<TAGDFile[]>;
	
	/**
	 * Returns the numerical value for the maximum number of results that should
	 * be returned by this query.
	 * 
	 * @returns {number} The numerical value for the maximum number of results
	 * that should be returned by this query.
	 */
	public getResultLimit(): number {
		
		return this.resultLimit;
		
	}
	
}
