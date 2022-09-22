CREATE TABLE `Tag` (
	`id` INT UNSIGNED
	    AUTO_INCREMENT
	    PRIMARY KEY
	    COMMENT 'An unsigned integer value that uniquely identifies this row among those in this table.',
	`uuid` CHAR(36) NOT NULL
	    DEFAULT UUID()
	    COMMENT 'A UUID (''universally unique identifier'') that can uniquely identify this row in any context.',
	`text` VARCHAR(255) NOT NULL
	    COMMENT 'The text of this tag.',
	`modifiedAt` DATETIME NOT NULL
	    DEFAULT CURRENT_TIMESTAMP()
	    ON UPDATE CURRENT_TIMESTAMP()
	    COMMENT 'A datetime representing the moment at which this row was most recently modified.',
	`createdAt` DATETIME NOT NULL
	    DEFAULT CURRENT_TIMESTAMP()
	    COMMENT 'A datetime representing the moment at which this row was initially created.',
	CONSTRAINT `text_uindex`
		UNIQUE (`text`),
	CONSTRAINT `uuid_uindex`
		UNIQUE (`uuid`)
) COMMENT 'An enumeration of tags that have been used with this system.';
