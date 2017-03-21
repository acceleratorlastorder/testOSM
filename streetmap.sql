-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 20, 2017 at 07:26
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `streetmap`
--

-- --------------------------------------------------------

--
-- Table structure for table `streetmap`
--

CREATE TABLE `streetmap` (
  `ID` int(11) NOT NULL,
  `pays` text NOT NULL,
  `ville` text NOT NULL,
  `coordonees` text NOT NULL,
  `nbmsg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `streetmap`
--

INSERT INTO `streetmap` (`ID`, `pays`, `ville`, `coordonees`, `nbmsg`) VALUES
(1, 'France', 'Marseille', '[43.296346, 5.369889]', 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `streetmap`
--
ALTER TABLE `streetmap`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `streetmap`
--
ALTER TABLE `streetmap`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
