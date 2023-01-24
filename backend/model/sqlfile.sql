--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

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
-- Name: courses; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.courses AS ENUM (
    'python',
    'docker',
    'java',
    'javascript',
    'mongo',
    'react',
    'sql'
);


ALTER TYPE public.courses OWNER TO postgres;

--
-- Name: difficulty; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.difficulty AS ENUM (
    'hard',
    'easy',
    'medium',
    'Hard',
    'Easy',
    'Medium'
);


ALTER TYPE public.difficulty OWNER TO postgres;

--
-- Name: subject_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.subject_type AS ENUM (
    'python',
    'docker',
    'java',
    'javascript',
    'mongo',
    'react',
    'sql',
    'Python',
    'Docker',
    'Java',
    'JavaScript',
    'MongoDB',
    'React',
    'SQL'
);


ALTER TYPE public.subject_type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courseslist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courseslist (
    course_id integer NOT NULL,
    name character varying(255),
    user_id integer,
    subject_id integer
);


ALTER TABLE public.courseslist OWNER TO postgres;

--
-- Name: courseslist_course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courseslist_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courseslist_course_id_seq OWNER TO postgres;

--
-- Name: courseslist_course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courseslist_course_id_seq OWNED BY public.courseslist.course_id;


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subjects (
    subject_id integer NOT NULL,
    level public.difficulty,
    subject public.subject_type,
    rating double precision,
    description text,
    image text,
    CONSTRAINT subjects_rating_check CHECK (((rating >= (0.0)::double precision) AND (rating <= (10.0)::double precision)))
);


ALTER TABLE public.subjects OWNER TO postgres;

--
-- Name: subjects_subject_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjects_subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subjects_subject_id_seq OWNER TO postgres;

--
-- Name: subjects_subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subjects_subject_id_seq OWNED BY public.subjects.subject_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    name character varying(255),
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    CONSTRAINT users_email_check CHECK (((email)::text ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'::text))
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: courseslist course_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courseslist ALTER COLUMN course_id SET DEFAULT nextval('public.courseslist_course_id_seq'::regclass);


--
-- Name: subjects subject_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects ALTER COLUMN subject_id SET DEFAULT nextval('public.subjects_subject_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: courseslist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courseslist (course_id, name, user_id, subject_id) FROM stdin;
157	SQL1	1	13
158	SQL1	2	13
159	SQL1	3	13
160	Python1	1	7
161	Python1	2	7
162	Python1	3	7
163	Python1	4	7
164	Python1	5	7
165	Python1	6	7
166	Docker1	4	8
167	Docker1	5	8
168	Docker1	6	8
169	Docker1	7	8
170	Docker1	8	8
171	Docker1	9	8
172	Java1	6	9
173	Java1	7	9
174	Java1	8	9
175	Java1	9	9
176	JavaScript1	7	10
177	JavaScript1	8	10
178	JavaScript1	9	10
179	JavaScript1	10	10
180	JavaScript1	11	10
181	MongoDB1	9	11
182	MongoDB1	10	11
183	MongoDB1	11	11
184	MongoDB1	12	11
185	MongoDB1	13	11
186	MongoDB1	14	11
187	MongoDB1	15	11
188	React1	11	12
189	React1	12	12
190	React1	13	12
191	React1	14	12
192	React1	15	12
193	React1	16	12
194	React1	17	12
195	React1	18	12
196	React1	19	12
197	React1	20	12
198	SQL1	16	13
199	SQL1	17	13
200	SQL1	18	13
201	SQL1	19	13
203	Python1	12	7
204	Python1	13	7
205	Python1	14	7
206	Python1	15	7
207	Python1	16	7
208	Python1	17	7
209	Python1	18	7
210	Python1	19	7
211	React1	6	12
212	React1	7	12
213	React1	8	12
214	React1	9	12
215	React1	10	12
216	Java1	20	9
217	Java1	21	9
218	Java1	22	9
219	Java1	23	9
220	Java1	24	9
221	Java1	25	9
222	Java1	1	9
223	Java1	2	9
224	Java1	3	9
225	Java1	4	9
226	Java1	5	9
227	Java1	10	9
228	Java1	11	9
229	Java2	12	9
230	Java2	13	9
231	Java2	14	9
232	Java2	15	9
233	Java2	16	9
234	Java2	17	9
235	Java2	19	9
237	Java2	26	9
238	Java2	27	9
240	Python1	7	7
241	Python1	8	7
242	Python1	9	7
243	Python1	10	7
244	Python1	11	7
246	Python1	20	7
247	Python1	21	7
248	Python1	22	7
249	Python2	23	7
250	Python2	24	7
251	Python2	25	7
252	Python2	26	7
253	Python2	27	7
254	Docker1	1	8
255	Docker1	2	8
256	Docker1	3	8
257	Docker1	10	8
258	Docker1	11	8
259	Docker1	12	8
260	Docker1	13	8
261	Docker1	14	8
262	Docker1	15	8
263	Docker1	16	8
264	Docker1	17	8
265	Docker1	18	8
266	Docker1	19	8
267	Docker1	20	8
268	Docker1	21	8
269	Docker1	22	8
270	Docker2	23	8
271	Docker2	24	8
272	Docker2	25	8
273	Docker2	26	8
274	Docker2	27	8
308	SQL1	75	13
309	Python2	75	7
310	Docker2	75	8
314	SQL1	74	13
315	Docker2	74	8
316	Python2	74	7
317	Java2	74	9
318	JavaScript1	74	10
319	MongoDB1	74	11
320	React1	74	12
322	Python2	76	7
323	SQL1	76	13
\.


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subjects (subject_id, level, subject, rating, description, image) FROM stdin;
7	Medium	Python	9.4	Python is a high-level, interpreted programming language. It is known for its simple syntax, code readability and ease of use, making it a popular choice for beginners and experts alike. Python is used for a wide variety of tasks, including web development, data analysis, artificial intelligence, and scientific computing. It is an open-source language, which means that it is free to use and distribute.	https://thumbs.dreamstime.com/b/d-python-symbol-white-background-gold-silver-materials-python-symbol-white-background-gold-silver-materials-d-224284840.jpg
13	Easy	SQL	7.7	SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases. It is used for a wide variety of tasks, such as inserting, updating, and retrieving data from a database. SQL is widely used in the development of web and business applications.	https://assets.leetcode.com/static_assets/others/SQLIII.png
8	Hard	Docker	7.9	Docker is a platform for developing, shipping, and running distributed applications. It uses containerization technology, which allows developers to package an application along with all its dependencies, making it easy to run the same application in different environments. Docker allows for consistency across development, testing and production environments, making it a popular choice for organizations looking to improve their workflow and deployment process.	https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png
9	Hard	Java	8.1	Java is a general-purpose, object-oriented programming language that is widely used for building enterprise applications. It is known for its "Write Once, Run Anywhere" (WORA) principle, which means that Java code can run on any platform that has a Java Virtual Machine (JVM) installed. Java is a popular choice for building large-scale, enterprise systems, and is commonly used in the development of web, mobile, and desktop applications.	https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png
10	Easy	JavaScript	9.7	JavaScript is a programming language that is primarily used to create interactive and dynamic web pages. It is an interpreted language, which means that the code can be written and executed directly without the need for a compiler. JavaScript is commonly used in conjunction with HTML and CSS to create interactive user interfaces and dynamic web applications.	https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png
11	Easy	MongoDB	8.7	MongoDB is a cross-platform, document-oriented database that is widely used in modern web applications. It is known for its flexibility and scalability, making it a popular choice for organizations looking to handle large amounts of data. MongoDB uses a document data model, which allows for the storage of data in a format that is similar to JSON, making it easy for developers to work with.	https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png
12	Medium	React	9.2	React is a JavaScript library for building user interfaces. It is widely used for building complex and interactive web applications. React allows for the building of reusable UI components, making it easy to create and manage the look and feel of an application. React uses a virtual DOM, which improves performance by minimizing the amount of direct manipulation of the actual DOM.	https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, name, password, email) FROM stdin;
2	eliav	12345	eliav@gmail.com
3	John Smith	$2b$10$zQzzBnFYEnPgcUcIHDHCHebQovrHko3FcnoaqFSGPHztXHbV9BXNK	john.smith@example.com
4	Jane Doe	$2b$10$1PqUxu4ULLnEYbD0.zDRcO0fDFJVOzQSMP08yyatIXoxsDpKqo9sO	jane.doe@example.com
5	Bob Johnson	$2b$10$MQkRZTkhHwAscbo5wECc6OJbw.RPM4M3.sN1jTsT.DD1ZbETKkUj.	bob.johnson@example.com
6	Amy Williams	$2b$10$OXNTuMUg9VVX6Se/AO.YfuQYZw6ZNZ3CDetAf11UVJMIlsyFRGZA6	amy.williams@example.com
7	Michael Brown	$2b$10$aUCqosvHcXu/HuszM2vpoOHt7bYyEHzE3I7A6X6swfy.AvqHL4niS	michael.brown@example.com
8	Emily Thompson	$2b$10$EOSez8KscBqkgcfHXJ7YAuVg7AKJTZDbZ0PNjIaowDddf//hqgm5a	emily.thompson@example.com
9	Jacob Garcia	$2b$10$XOJk2tvKdm8ZCrfA5qre/Or058ltyuvKs/akNtTRNz5r9xDHKWdcC	jacob.garcia@example.com
10	Isabella Perez	$2b$10$o/DDe5VgF9wXb/tkJx1XMeTW80LxVKiHGXag.1RdhkWXZdGreUEeC	isabella.perez@example.com
11	Ethan Davis	$2b$10$mFDW6gKNj2EDlr4ZltP03OnwW/S9o1mdJSKb3pggXBvi1QNgMZPw6	ethan.davis@example.com
12	Madison Moore	$2b$10$tTSURQqblsqZXjsW5.UjYugMHiHpcKVqaxB19szWzlhSRW9shc18e	madison.moore@example.com
13	Aiden Rodriguez	$2b$10$LYrGdkhQ7Rt5bjIok.H3wOAtiRQSf6mv/GGWiPl.uG3oO8qQbgOaa	aiden.rodriguez@example.com
14	Natalie Martinez	$2b$10$UW4/edf/zaaJskNPU66pheboxWZuDa/JjqrUkjjz/P2s3KdCstJE2	natalie.martinez@example.com
15	Mason Wilson	$2b$10$/L.1k3PjJnMerq7kQQJHz.ZtZXyRYYXgMZ7bE.6TpVTplYMB1VLSm	mason.wilson@example.com
16	Avery Green	$2b$10$nAHNhanN4eKguztBXQdjS.dlSQ77cI4q0eCO2Yjh28yjcZZzvJ9SG	avery.green@example.com
17	Evelyn Baker	$2b$10$Uk5Dpz3uLTM3RSc4qA.T3uQh9dyyL4BITnuATcr22bWWIn0PFi9t2	evelyn.baker@example.com
18	test1	$2b$10$6hCs9xPDkRrMR6RGYmdqse6BMTp1QKUsVwX2A5KbI4csIRLhNo1u.	test1@example.com
19	test2	$2b$10$ozh2hj.obRdfPgZN1IYpt.X3VUIfnwGyqDU/9IaEScaegXph8MJ/G	test2@example.com
20	test3	$2b$10$un0B6R82jg8Swc3LrIl1meT.18K.cY83V9A1LXnWpZB5CMw2P6UAC	test3@example.com
21	test4	$2b$10$d25KWXr3TeT8X1He.tM1x.Rlw9kevrm.7RnKdaGSdJolpJFED.hNO	test4@example.com
22	test6	$2b$10$faPyQG9AzSzvGykf5/jCzegoKne/6QciDnqFh1i9WUMZb7gSF6TSe	test6@example.com
23	test5	$2b$10$1IzD/Lk4NaLN//QuSjyho./0.dUSnhg.B2EdTLZJDVpkyRNsLlNqO	test5@example.com
24	test7	$2b$10$80Nd0MjDVCzL.tRy3v0c3OTkW3yp4Foh9PhrqVSHFTvua04WKzlR.	test7@example.com
25	test8	$2b$10$Y.45I4y0iF3.y4.obZmEW.Xt2UoSrzO.zvQZuyTvxCEEtXHa46Fjm	test8@example.com
26	test9	$2b$10$hI9B6OTZvOMZio3nUp5VtOOxcYYY91vliDei6N1ImpcSBJXuBOOGO	test9@example.com
27	test10	$2b$10$m13GaDrEa4lo8ahJ7IOYruBrPosPWP.OrTTFZeKwYOSYikRjqIYvm	test10@example.com
34	menachem	$2b$10$zfHpVqF5nWvhKKrHmtTP/.pmx3bHe6ITcji68xQbVA8lL3igyCSdC	menachem@gmail.com
35	menachemFarkash	$2b$10$BzvZrv6qejhcZjFUwgbnIeAxdayCjlklarqQ2i3u004.NPMxfPH1m	menachemFarkash@gmail.com
47	test16	$2b$10$MSJsQavOY7QH4zpUdcFnpOz7QyOs5aqtGw2a95O5kPr6SHEM4d8qq	test16@gmail.com
58	test17	$2b$10$O7qqNF6qvknBO3JVpdewfOaXuDs3p/xpkVHvxxTsFqxfra.weHD86	test17@gmail.com
61	test18	$2b$10$vE.3MTKsXghT2K242LvZ9.OlltUfHPPfyF9cU3Ed.hlBu/ZvNBA4G	test18@gmail.com
62	test19	$2b$10$7kjDsbotaI98JXHl1r7Yhew9LCeSw44DjlCY3BSC1uIZyjKU39z.u	test19@gmail.com
63	test20	$2b$10$LlfvJDHnSC0jwjVS3v2TJ.i0fzS4X6kL8cLIDfSMx9t/0fA3xawny	test20@gmail.com
64	test21	$2b$10$KEmoEsGGxIGnAHpuLmxDKO.RgmHJR0E7fuJmn1bwnnYUur2b58DKC	test21@gmail.com
65	test22	$2b$10$VrItHkCtXc7Vm35ExvL9guLwCHpqjIbPeQuIuIPV5ARn7qJgRc1SG	test22@gmail.com
66	test23	$2b$10$fUZONguCKSYTMtNkH5.tOeb4sylk.bqNS1lnOVHEU6dpsf76.tGEi	test23@gmail.com
67	test24	$2b$10$mSNsu93qIaooFvwPIB3u3ONGVnaL/a/h2HTWdm4xnU/snrki0Qu4u	test24@gmail.com
75	hothaifaZoubi	$2b$10$yhyk3HF26sf0xyUjJ714j.L2YDy3VqYMZjt1G2uGklNWRckKU7ir2	hothaifaZoubi@gmail.com
1	Menachem	12345	Menachem.farkash@gmail.com
74	test25	$2b$10$1w2yjAZ63Mwz897xgd7Hk.hB9dk5j/tr0e8V8BpBzleTSPhbxpFMS	test25@gmail.com
76	naveh123	$2b$10$/CoFCoESpct6Zofl.sOcH.reEJcp3ygmi611T9pNXwSvbRYq/lG9y	naveh123@gmail.com
\.


--
-- Name: courseslist_course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courseslist_course_id_seq', 323, true);


--
-- Name: subjects_subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subjects_subject_id_seq', 13, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 76, true);


--
-- Name: courseslist courseslist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courseslist
    ADD CONSTRAINT courseslist_pkey PRIMARY KEY (course_id);


--
-- Name: subjects subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (subject_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: courseslist courseslist_subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courseslist
    ADD CONSTRAINT courseslist_subject_id_fkey FOREIGN KEY (subject_id) REFERENCES public.subjects(subject_id);


--
-- Name: courseslist courseslist_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courseslist
    ADD CONSTRAINT courseslist_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

