---
layout: default
title: SQL | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_3/chapter_2
back_text: Back to Chapter 2
---

# Structured Query Language

- SQL is the standard tool for working with databases and is implemented within most DBMSs
  - It is used for querying and updating tables in a relational database
  - It can also be used to create tables
- SQL is a declarative language
  - This is a programming paradigm
  - Declarative is where you write statements that describe the problem to be solved, and the language implementation decides the best way of solving it
- Part of a database used by a retailer to store details of CDs - the database will allow information about the CDs to be extracted
- The ER diagram shows how the four entities - CD, CDSong, Song, and Artist are connected

  `CD--<CDSong>--Song>--Artist`

## SQL for querying a database

- We will look at SQL to modify databases later
- You will already recognise SQL for querying a single table from GCSE

- **`SELECT`**: Defines the **fields** to be returned in the search (`*` acts as a wildcard)  
- **`FROM`**: The table or tables to be searched  
- **`WHERE`**: The condition(s) so that only a subset of the table is returned
  - only fetches the records that meet this criteria or condition
- **`ORDER BY`**: Sort the data into a specific order. The default is ascending

## The `CD` Table

- Using SQL to query the `CD` table

| `CDNumber` | `CDTitle`        | `RecordCompany` | `DatePublished` |
|------------|------------------|-----------------|-----------------|
| CD14356    | Shadows          | ABC             | 2014-05-06      |
| CD19998    | Night Turned Day | GHK             | 2015-03-24      |
| CD25364    | Autumn           | ABC             | 2015-10-11      |
| CD34512    | Basic Poetry     | GHK             | 2016-02-01      |
| CD56666    | The Lucky Ones   | DEF             | 2016-02-16      |
| CD77233    | Lucky Me         | ABC             | 2014-05-24      |
| CD77665    | Flying High      | DEF             | 2015-07-31      |

- ```sql
  SELECT CDTitle, RecordCompany, DatePulished
  FROM CD
  WHERE DatePublished BETWEEN '2015-01-01' AND '2015-12-31'
  ORDER BY CDTitle
  ```

  - Returns

| `CDTitle`        | `RecordCompany` | `DatePublished` |
|------------------|-----------------|-----------------|
| Autumn           | ABC             | 2015-10-11      |
| Flying High      | DEF             | 2015-07-31      |
| Night Turned Day | GHK             | 2015-03-24      |

## Specifying a sort order

- `ORDER BY` gives you control over the order in which records appear in the query return
- If you want the records to be displayed in ascending order of `RecordCompany` and within that, descending order of `DatePublished`, you would write:

  ```sql
  SELECT *
  FROM CD
  WHERE DatePublushed < '2015-12-31'
  ORDER BY RecordCompany, DatePublished DESC
  ```

01. Write the SQL to return all of the CD titles, their CD number, and the date published for record companies that start with A. Display the results in descending order of CD number

    - ```sql
      SELECT CDTitle, CDNumber, DatePublished
      FROM CD
      WHERE RecordCompany LIKE 'A%'
      ORDER BY CDNumber DESC
      ```

02. Write the results of the query

| `CDTitle` | `CDNumber` | `DatePublished` |
|-----------|------------|-----------------|
| Lucky Me  | CD77233    | 2014-05-24      |
| Autumn    | CD25364    | 2015-10-11      |
| Shadows   | CD14356    | 2014-05-06      |

03. Write a query which will display all the fields of records in the CD table published by ABC or GHK record company in 2014-2015

    - ```sql
      SELECT *
      FROM CD
      WHERE RecordCompany IN ('ABC', 'GHK')
      AND DatePublished BETWEEN '2014-01-01' AND '2015-12-31'
      ```

## Extracting data from several tables

SQL can be used to combine data from two or more tables by specifying the tables the data is held in

If the field name appears in more than one searched table, *qualified* field names must be used

E.G.

```sql
SELECT Song.Title, Artist.Name, Song.Genre
FROM Song, Artist
```

You will need to provide a link between the `Song` and `Artist` tables so that the `Artist`'s name corresponding to the `ArtistID` in the `Song` table can be found in the `Artist` table)

Therefore in the `WHERE` statement you must show the link like so:

```sql
WHERE Song.ArtistID = Artist.ArtistID
```

Your `WHERE` statement may not be complete. You still need to write the *condition*

## SQL `JOIN`

`JOIN` provides an alternative method of combining rows from two or more tables, based on a common field between them

```sql
SELECT Song.Title, Artist.Name, Song.Genre
FROM Song
LEFT JOIN Artist
ON Song.ArtistID = Artist.ArtistID
WHERE Song.Genre = 'Art Pop'
```

01. Write an SQL query which will give the song title, artist name, and genre of all songs by JJ or Fred Bates, sorted by ArtistName and SongTitle

```sql
SELECT Song.Title, Artist.Name, Song.Genre
FROM Song
LEFT JOIN Artist
ON Song.ArtistID = Artist.ArtistID
WHERE Artist.Name IN ('JJ', 'Fred Bates')
ORDER BY Artist.Name, Song.Title
```

## Creating a new database table using SQL

- Also known as **defining** a database table

Possible exam question:

- Define a new table named `Employee` which has four columns: `EmpID` (a compulsory int field which is the primary key), `EmpName` (a compulsory character field of length 20), `HireDate` (an optional date field) and `Salary` (an optional real number field)

```sql
CREATE TABLE "Employee" (
    "EmpID" INTEGER NOT NULL,
    "EmpName" VARCHAR(20) NOT NULL,
    "HireDate" DATE,
    "Salary" CURRENCY,
    PRIMARY KEY ("EmpID")
);
```

## Altering a table structure

- `ALTER TABLE` statement used to **add, delete, or modify fields in an existing table**
- To **add** a field:

  - ```sql
    ALTER TABLE Employee
    ADD Department VARCHAR(10);
    ```

- To **remove** a field:

  - ```sql
    ALTER TABLE Employee
    DROP COLUMN HireDate;
    ```

- To **change the data type** of a field:

  - ```sql
    ALTER TABLE Employee
    MODIFY COLUMN EmpName VARCHAR(30) NOT NULL;
    ```

## Foreign Keys

```sql
CREATE TABLE "CourseAttendance" (
    "CourseID" CHAR(6) NOT NULL,
    "EmpID" INTEGER NOT NULL,
    "CourseDate" DATE,
    FOREIGN KEY "CourseID" REFERENCES "Course"("CourseID"),
    FOREIGN KEY "EmpID" REFERENCES "Employee"("EmpID"),
    PRIMARY KEY ("CourseID", "EmpID")
)
```

## Inserting data

- The SQL `INSERT INTO` statement
  - Used to **insert a new record** into a table

```SQL
INSERT INTO "Employee"("EmpID", "Name", "HireDate")
VALUES(1125, 'Cully', '2001-01-01');
```

## Updating data in a table

- The SQL `UPDATE` statement
  - Used to **update** a record in a table

```sql
UPDATE "Employee"
SET "Salary" = "Salary"*1.1
WHERE "Department" = 'Technical';
```

## Deleting data from a table

- The SQL `DELETE FROM` statement
  - Used to **delete a record** from a table

## Activities

01. Use SQL to create a table called `Student` which is defined as follows:
    - `StudentID` 6 characters fixed length (primary key)
    - `Surname` 20 characters
    - `FirstName` 15 characters
    - `DateOfBirth` Date

    - ```sql
      CREATE TABLE "Student" (
          "StudentID" CHAR(6) NOT NULL,
          "Surname" VARCHAR(20),
          "FirstName" VARCHAR(15),
          "DateOfBirth" DATE,
          PRIMARY KEY ("StudentID")
      );
      ```

02. Write an SQL statement to add a new column named `YearGroup` of type `INTEGER`

    - ```sql
      ALTER TABLE "Student"
      ADD "YearGroup" INTEGER;
      ```

03. The structure of the `Course` table is:
    - `CourseID` 6 characters fixed length (primary key)
    - `CourseTitle` 30 characters (compulsory)
    - `OnSite` boolean

    Create the table

    - ```sql
      CREATE TABLE "Course" (
          "CourseID" CHAR(6) NOT NULL,
          "CourseTitle" VARCHAR(30) NOT NULL,
          "OnSite" BOOLEAN,
          PRIMARY KEY ("CourseID")
      );
      ```

04. The table `Student` is defined below:
    - `StudentID` 6 characters fixed length (primary key)
    - `Surname` 20 characters
    - `FirstName` 15 characters
    - `DateOfBirth` Date

    01. Create the table using SQL syntax

        - ```sql
          CREATE TABLE "Student" (
              "StudentID" CHAR(6) NOT NULL,
              "Surname" VARCHAR(20),
              "FirstName" VARCHAR(15),
              "DateOfBirth" DATE,
              PRIMARY KEY ("StudentID")
          );
          ```

    02. Make the following changes:
        01. Use SQL to add a record for Jennifer Daley, Student AB1234, DoB 23/6/2005

            - ```sql
              INSERT INTO "Student"
              VALUES ('AB1234', 'Daley', 'Jennifer', '2005-06-23');
              ```

        02. Update this record, the student's name is Jane, not Jennifer

            - ```sql
              UPDATE "Student"
              SET "FirstName"='Jane'
              WHERE "StudentID"='AB1234';
              ```

        03. Add a new column `DateStarted` to the table, of type `DATE`

            - ```sql
              ALTER TABLE "Student"
              ADD "DateStarted" DATE;
              ```
