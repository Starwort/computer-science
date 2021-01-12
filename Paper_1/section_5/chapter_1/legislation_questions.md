---
layout: default
title: Legislation Questions | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.4 "fix broken link for 'C' filetype" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 1
---

# Legislation questions

A number of laws govern the use of computers. For each of the following scenarios tick one box relating to the law being broken.

Scenario | CMA | CDPA | DPA
-------- | :---: | :----: | :---:
A bank accidentally publishes customers' details onto its website | | | √
Someone downloads a pirated version of a piece of software that users would ordinarily have to pay for ||√|
Someone writes and distributes a virus |√||

*Marks: [3 / 3]* <!-- not a header -->

A town council stores details of the people who live in the town. These details are stored in a database on a newtork. Some people are worried about the storage of their details.

Describe **three** methods that can be used to protect the data about people held in the town council's database

01. Restrict database access, e.g. with a username/password authentication system. This also enables the use of transaction logging to note who accesses/modifies data, and what data they accessed
02. The database can be backed up to a secure location frequently to ensure that information is never lost; the backups would need to be secured and stored offsite
03. The database could be encrypted to ensure that even if a security breach occurs, the attacker would be unable to extract any useful information from the retrieved data

*Marks: [6 / 6]* <!-- not a header -->

A database stores information about songs on a music streaming service. One of the tables, called `Song`, has the fields:

- `Title`
- `Artist`
- `Genre`
- `Length`

A band called _RandomBits_ revokes their permission for their songs to be streamed.  
The company removes all the songs belonging to _RandomBits_ from their service.

01. Identify the law with which the company are complying
    - ~~Data Protection Act~~ Copyright, Design, and Patents Act
02. Write an SQL statement that will remove all songs by _RandomBits_ from the table `Song`

    - ```sql
      DELETE -- specify that I am deleting records
      FROM "Song" -- specify the table
      WHERE "Artist" LIKE 'RandomBits'; -- use LIKE for case-insensitivity; could use = instead
      ```

03. When the songs have been removed, explain what must happen to the table `PlayListEntry` if the database is to retain its referential integrity.
    - `PlayListEntry` records which reference songs by _RandomBits_ must be updated to point to a 'Deleted Song' fake record, or deleted entirely, so that no record points to a record which does not exist.
    - In SQL, this can be achieved by running the following before deleting the songs:

      ```sql
      UPDATE "PlayListEntry" -- modify records in PlayListEntry
      SET "PlayListEntry"."TrackID" = 'MissingTrack' -- update to point to missing track
      FROM "PlayListEntry"
      INNER JOIN "Song" ON "PlayListEntry"."TrackID" = "Song"."TrackID" -- link rows where appropriate
      WHERE "Song"."Artist" LIKE "RandomBits"; -- select only RandomBits songs
      ```

*Marks: [3 / 4]* <!-- not a header -->

A dance group decide they are going to use the Internet to promote their work.

Describe **one** legal implication the dance group need to consider when adding soundtracks to their videos.

The dance group must consider whether or not the soundtrack they choose to use is **free** (*permissive*, not price) before they can add it to their videos; if the soundtrack they choose is not free then they either must negotiate with the copyright holder, or will be in breach of the CDPA (Copyright, Design, and Patents Act)

See And Believe is a company that specialises in computer-generated imagery (CGI) for films. Producing CGI requires lots of processing power and so the company has a large number of high-performance computers.

The company is working on scenes from the latest _Stellar Scuffles_ film. There is strict security around the film, and there are worries about unauthorised people gaining access to the company's network and putting clips from the film on the internet.

Discuss to what extent each of the following laws is intended to address the issue of someone accessing and distributing clips of the film online:

- The Computer Misuse Act (CMA)
- The Copyright, Design, and Patents Act (CDPA)
- The Data Protection Act (DPA)

- CMA
  - The CMA addresses the issue of someone accessing and distributing clips of the film online without authorisation by making it illegal to access any computer system with intent to commit an offence or crime, and by making it illegal to access computer material in any capacity without authorisation.
- CDPA
  - The CDPA addresses the issue of someone accessing and distributing clips of the film online by making it illegal to:
    - use anybody's intellectual property without permission
    - make or use una

A number of laws govern the use of computers.

Describe the purpose of the Regulation of Investigatory Powers Act.

> The Regulation of Investigatory Powers Act (RIPA) was created with the purpose of allowing law enforcement to inspect online communications at a similar or greater level of ability compared to the physical world.
>
> Police, and certain specified government agencies, may (under certain circumstances) collect mass data on individuals' digital communications, without their knowledge or consent. It also allows the seizure of encryption keys, to decrypt encrypted data.
