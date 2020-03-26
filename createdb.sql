-- Run when the image is started up

-- CREATE DATABASE help_directory;

-- \connect help_directory;

CREATE TABLE organizations(
	id int PRIMARY KEY NOT NULL,
	name varchar(100) NOT NULL,
	contact_email varchar(200),
	zip_code varchar(50),
	description text,
	image_url varchar(300)
);

CREATE TABLE organization_needs(
	organization_id int,
	name varchar(100) NOT NULL,
	quantity_requested int,
	quantity_fulfilled int
);
