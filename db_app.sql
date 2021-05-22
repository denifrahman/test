/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : test-praktek

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 22/05/2021 11:09:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for kategori
-- ----------------------------
DROP TABLE IF EXISTS `kategori`;
CREATE TABLE `kategori` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `kategori_id` int(10) DEFAULT NULL,
  `prioritas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kategori_ibfk_1` (`kategori_id`),
  CONSTRAINT `kategori_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `m_kategori` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kategori
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for m_kategori
-- ----------------------------
DROP TABLE IF EXISTS `m_kategori`;
CREATE TABLE `m_kategori` (
  `id` int(11) DEFAULT NULL,
  `nama` varchar(128) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_kategori
-- ----------------------------
BEGIN;
INSERT INTO `m_kategori` VALUES (1, 'Pengeluaran');
INSERT INTO `m_kategori` VALUES (2, 'Pemasukan');
COMMIT;

-- ----------------------------
-- Table structure for t_mutasi
-- ----------------------------
DROP TABLE IF EXISTS `t_mutasi`;
CREATE TABLE `t_mutasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(128) DEFAULT NULL,
  `nominal` double(20,0) DEFAULT NULL,
  `kategori_id` int(10) DEFAULT NULL,
  `createAt` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `kategori_id` (`kategori_id`),
  CONSTRAINT `t_mutasi_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `m_kategori` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_mutasi
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'deni', 'ciojai');
INSERT INTO `users` VALUES (2, 'test', 'ciojai');
INSERT INTO `users` VALUES (3, 'denia', 'ciojai');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
