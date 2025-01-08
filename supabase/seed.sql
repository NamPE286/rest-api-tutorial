SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "created_at", "name", "price") VALUES
	(1, '2025-01-08 17:06:44.654494+00', 'Shampoo', 150000);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."users" ("user_id", "created_at", "name") VALUES
	('93841e8c-6ee3-4f3c-b333-bb8c0bc94d10', '2025-01-08 17:01:05.179977+00', 'NamPE'),
	('a09a524f-3383-4d7c-af28-634e4f2c2ca8', '2025-01-08 17:01:12.897319+00', 'Tachi');


--
-- Data for Name: product_reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."product_reviews" ("created_at", "user_id", "product_id", "id", "content") VALUES
	('2025-01-08 17:07:56.681249+00', 'a09a524f-3383-4d7c-af28-634e4f2c2ca8', 1, 1, 'dau goi sach nhe');


--
-- Name: product_reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."product_reviews_id_seq"', 1, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."products_id_seq"', 1, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
