/*
 Navicat Premium Data Transfer

 Source Server         : docker-vps-mariadb
 Source Server Type    : MariaDB
 Source Server Version : 100508
 Source Host           : mbangun.id:3307
 Source Schema         : bank

 Target Server Type    : MariaDB
 Target Server Version : 100508
 File Encoding         : 65001

 Date: 04/04/2021 08:26:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for m_pertanyaan
-- ----------------------------
DROP TABLE IF EXISTS `m_pertanyaan`;
CREATE TABLE `m_pertanyaan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomor` int(10) NOT NULL,
  `pertanyaan` text NOT NULL,
  `kode` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_pertanyaan
-- ----------------------------
BEGIN;
INSERT INTO `m_pertanyaan` VALUES (1, 1, 'Gigi Hilang ?', 'K13');
INSERT INTO `m_pertanyaan` VALUES (2, 2, 'Gigi Berlubang?', 'K2');
INSERT INTO `m_pertanyaan` VALUES (3, 3, 'Lubang Gigi hanya mengenai email?', 'K3');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
