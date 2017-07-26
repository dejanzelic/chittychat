CREATE DATABASE chittychat;

USE chittychat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `msg` text,
  `user` varchar(100) DEFAULT NULL,
  `room` varchar(20) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
