-- MySQL Workbench Synchronization
-- Generated: 2021-06-06 21:35
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Kevin Mamaqi Kapllani

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `it_academy` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `it_academy`.`user` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `lastnames` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` TEXT NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  `user_status_id` INT(11) NOT NULL,
  `user_role_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_user_status_idx` (`user_status_id` ASC) VISIBLE,
  INDEX `fk_user_user_role1_idx` (`user_role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_user_status`
    FOREIGN KEY (`user_status_id`)
    REFERENCES `it_academy`.`user_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_user_role1`
    FOREIGN KEY (`user_role_id`)
    REFERENCES `it_academy`.`user_role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `it_academy`.`user_role` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `admin` TINYINT(4) NULL DEFAULT 0,
  `manager` TINYINT(4) NULL DEFAULT 0,
  `registered` TINYINT(4) NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `it_academy`.`user_status` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `active` TINYINT(4) NOT NULL DEFAULT 0,
  `pending` TINYINT(4) NOT NULL DEFAULT 0,
  `suspended` TINYINT(4) NOT NULL DEFAULT 0,
  `deleted` TINYINT(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `it_academy`.`access_log` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `login` DATETIME NULL DEFAULT NULL,
  `logout` DATETIME NULL DEFAULT NULL,
  `user_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_log_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_log_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `it_academy`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `it_academy`.`recover_password` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `hash` TEXT NOT NULL,
  `expire_time` TIMESTAMP NOT NULL,
  `user_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_recover_password_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_recover_password_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `it_academy`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `it_academy`.`media` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `path` TEXT NULL,
  `mime_type` VARCHAR(45) NULL,
  `file_size` VARCHAR(45) NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_media_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_media_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `it_academy`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
