CREATE TABLE `File` (
	`id` INT UNSIGNED
		AUTO_INCREMENT
		PRIMARY KEY
		COMMENT 'An unsigned integer value that uniquely identifies this row among those in this table.',
	`uuid` CHAR(36) NOT NULL
		DEFAULT UUID()
		COMMENT 'A UUID (''universally unique identifier'') that can uniquely identify this row in any context.',
	`extension` VARCHAR(32) NOT NULL
		COMMENT 'The extension (including all text found after the initial dot separator character) for this file.',
	`full_file_name` TEXT AS (CONCAT(`uuid`, '.', `extension`))
		COMMENT 'The extension (including all text found after the initial dot separator character) for this file.',
	`modifiedAt` DATETIME NOT NULL
		DEFAULT CURRENT_TIMESTAMP()
		ON UPDATE CURRENT_TIMESTAMP()
		COMMENT 'A datetime representing the moment at which this row was most recently modified.',
	`createdAt` DATETIME NOT NULL
		DEFAULT CURRENT_TIMESTAMP()
		COMMENT 'A datetime representing the moment at which this row was initially created.',
	CONSTRAINT `uuid_uindex`
		UNIQUE (`uuid`)
) COMMENT 'An enumeration of files that have been registered to this system.';
