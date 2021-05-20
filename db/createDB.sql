-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2021 at 08:18 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistemas_centrales`
--

-- --------------------------------------------------------

--
-- Table structure for table `baterias`
--

CREATE TABLE `baterias` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `dem_cd` decimal(10,1) NOT NULL,
  `marca_b` varchar(30) NOT NULL,
  `modelo_b` varchar(30) NOT NULL,
  `capacidad_b` mediumint(6) NOT NULL,
  `no_bancos` smallint(3) NOT NULL,
  `cap_total` mediumint(8) NOT NULL,
  `hrs_respaldo` decimal(4,1) NOT NULL,
  `fecha_prod` varchar(15) NOT NULL,
  `year` smallint(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Table structure for table `ca`
--

CREATE TABLE `ca` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `medicion` mediumint(6) NOT NULL,
  `dem_actual` decimal(6,2) NOT NULL,
  `dem_media` decimal(6,2) NOT NULL,
  `dem_max` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `siglas_central` char(3) NOT NULL,
  `nom_area` varchar(100) NOT NULL,
  `nom_central` varchar(100) NOT NULL,
  `categoria` varchar(5) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `rpu` bigint(12) NOT NULL,
  `no_medidor` varchar(10) NOT NULL,
  `inv_linea` int(10) NOT NULL,
  `n_pot` int(10) NOT NULL,
  `adsl` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



--
-- Table structure for table `ges`
--

CREATE TABLE `ges` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `capacidad_kw` smallint(5) NOT NULL,
  `hrs_duracion` decimal(10,1) NOT NULL,
  `arr` int(10) NOT NULL,
  `combustible` decimal(10,1) NOT NULL,
  `grupo` mediumint(6) NOT NULL,
  `amp_placa` mediumint(6) NOT NULL,
  `dem_act_g` decimal(6,2) NOT NULL,
  `dem_max_g` decimal(6,4) NOT NULL,
  `por_ocupado_g` decimal(8,2) NOT NULL,
  `por_ocu_max` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



--
-- Table structure for table `info_tipo_ge`
--

CREATE TABLE `info_tipo_ge` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `nom_central` varchar(100) NOT NULL,
  `tipo_ge` varchar(20) NOT NULL,
  `marca_ge` varchar(30) NOT NULL,
  `modelo_ge` varchar(30) NOT NULL,
  `capacidad_ge` smallint(5) NOT NULL,
  `amp_ca` smallint(5) NOT NULL,
  `por_ocupacion_ge` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `planta_rectificadores`
--

CREATE TABLE `planta_rectificadores` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `marca_pr` varchar(25) NOT NULL,
  `modelo_pr` varchar(50) NOT NULL,
  `carga_act` decimal(4,1) NOT NULL,
  `cap_total_pr` decimal(4,1) NOT NULL,
  `por_ocupado_pr` tinyint(3) NOT NULL,
  `ac_actual` decimal(3,1) NOT NULL,
  `ac_max` decimal(3,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Table structure for table `produccion_bcos`
--

CREATE TABLE `produccion_bcos` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `nom_central` varchar(100) NOT NULL,
  `tipo_banco` varchar(8) NOT NULL,
  `fecha_produccion` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



--
-- Table structure for table `rectificadores`
--

CREATE TABLE `rectificadores` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `marca_r` varchar(25) NOT NULL,
  `modelo_r` varchar(25) NOT NULL,
  `amp_cd` smallint(4) NOT NULL,
  `hilo` smallint(4) NOT NULL,
  `amp_fase` smallint(4) NOT NULL,
  `no_rect` smallint(4) NOT NULL,
  `cd_tot_inst` decimal(8,1) DEFAULT NULL,
  `tot_pta_cd` decimal(8,1) NOT NULL,
  `carga_act_cd` mediumint(8) NOT NULL,
  `por_ocupacion_r` mediumint(8) NOT NULL,
  `ac_actual_r` decimal(8,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Table structure for table `transformadores`
--

CREATE TABLE `transformadores` (
  `id` int(4) NOT NULL,
  `siglas_c` char(3) NOT NULL,
  `nom_medidor` varchar(10) NOT NULL,
  `capacidad` varchar(10) NOT NULL,
  `marca_t` varchar(30) NOT NULL,
  `modelo_t` varchar(30) NOT NULL,
  `voltaje` decimal(5,1) NOT NULL,
  `kva` mediumint(8) NOT NULL,
  `kw` mediumint(12) NOT NULL,
  `amp` smallint(10) NOT NULL,
  `fases` smallint(4) NOT NULL,
  `demanda` decimal(8,1) NOT NULL,
  `por_ocupacion_t` decimal(3,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `baterias`
--
ALTER TABLE `baterias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `siglas_c` (`siglas_c`);

--
-- Indexes for table `ca`
--
ALTER TABLE `ca`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `siglas_c` (`siglas_c`);

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD UNIQUE KEY `siglas_central` (`siglas_central`);

--
-- Indexes for table `ges`
--
ALTER TABLE `ges`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `siglas_c` (`siglas_c`);

--
-- Indexes for table `info_tipo_ge`
--
ALTER TABLE `info_tipo_ge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `planta_rectificadores`
--
ALTER TABLE `planta_rectificadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `siglas_c` (`siglas_c`);

--
-- Indexes for table `produccion_bcos`
--
ALTER TABLE `produccion_bcos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rectificadores`
--
ALTER TABLE `rectificadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `siglas_c` (`siglas_c`);

--
-- Indexes for table `transformadores`
--
ALTER TABLE `transformadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `siglas_c` (`siglas_c`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baterias`
--
ALTER TABLE `baterias`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ca`
--
ALTER TABLE `ca`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ges`
--
ALTER TABLE `ges`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `info_tipo_ge`
--
ALTER TABLE `info_tipo_ge`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `planta_rectificadores`
--
ALTER TABLE `planta_rectificadores`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `produccion_bcos`
--
ALTER TABLE `produccion_bcos`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `rectificadores`
--
ALTER TABLE `rectificadores`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `transformadores`
--
ALTER TABLE `transformadores`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
