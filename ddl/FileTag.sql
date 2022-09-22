CREATE TABLE `FileTag` (
	`fileID` INT UNSIGNED NOT NULL
	    COMMENT 'The ID of the file that has been tagged.',
	`tagID` INT UNSIGNED NOT NULL
	    COMMENT 'The ID of the tag that has been added to this row''s file.',
	`modifiedAt` DATETIME NOT NULL
	    DEFAULT CURRENT_TIMESTAMP()
	    ON UPDATE CURRENT_TIMESTAMP()
	    COMMENT 'A datetime representing the moment at which this row was most recently modified.',
	`createdAt` DATETIME NOT NULL
	    DEFAULT CURRENT_TIMESTAMP()
	    COMMENT 'A datetime representing the moment at which this row was initially created.',
	PRIMARY KEY `fileID_tagID_pk` (`fileID`, `tagID`),
	FOREIGN KEY `fileID_fk` (`fileID`)
		REFERENCES `File` (`id`)
		ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY `tagID_fk` (`tagID`)
		REFERENCES `Tag` (`id`)
		ON UPDATE CASCADE ON DELETE CASCADE
) COMMENT 'A relation between files and the tags that have been added to those files.';
