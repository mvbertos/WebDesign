-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Nov-2022 às 20:56
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projetofinal`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `conta`
--

CREATE TABLE `conta` (
  `usuario` text CHARACTER SET utf8 NOT NULL,
  `email` text CHARACTER SET utf8 NOT NULL,
  `senha` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `conta`
--

INSERT INTO `conta` (`usuario`, `email`, `senha`) VALUES
('ola', 'ola', 123),
('Elisabela', 'matheusbertos2@gmail.com', 1234),
('ASDasd', 'matheusbertos2@gmail.com', 123);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `conta`
--
ALTER TABLE `conta`
  ADD UNIQUE KEY `usuario` (`usuario`) USING HASH;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
