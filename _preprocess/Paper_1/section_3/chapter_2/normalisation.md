<style>
o {
    text-decoration: overline;
}
ol ol {
    list-style-type: lower-alpha;
}
ol ol ol {
    list-style-type: lower-roman;
}
</style>
# Databases

## Normalisation questions

01. The publisher of several magazines has a relational database in which the details of each magazine are held. One of the tables in the database holds details of all the major articles in each magazine.
    01. Write a description for entities **`Magazine`** and **`Article`**, showing for each table the primary key, a foreign key if applicable, and at least two other attributes, using the format

        **`EntityName`**`(`<u>`primary_key,`</u>`attribute1, attribute2, attribute3, ...,`<o>`foreign_key`</o>`)`

        - **`Magazine`**`(`<u>`magazine_id,`</u>`name, issue_no, editor )`
        - **`Article`**`(`<u>`article_id,`</u>`title, article_content, author,`<o>`magazine_id`</o>`)`
    02. Suggest, with a reason, an attribute in either table which it would be useful to define as a secondary key.
        - `Magazine.name` as the name of a magazine is likely to be something that is looked up very frequently
02. A college department wishes to create a database to hold information about students and the courses they take. The relationship between students and courses is shown in the following entity relationship diagram.

    ```
    Student
       |
       | attends
       |
      /|\
    Course
    ```

    Each course has a tutor who is in charge of the course.

    Sample data held on the database is held below.

    Student Number | Student Name | DateOfBirth&nbsp; | Gender | Course Number | CourseName | TeacherID | Teacher Name
    --: | --- | --- | --- | --- | --- | --- | ---
    `1111` | Bell, K | `1998-01-14` | M | `COMP23` | Java1 | `8563` | Davey, A
    `2222`<br><br><br> | Cope, F<br><br><br> | `1997-08-12`<br><br><br> | F<br><br><br> | `COMP23`<br>`COMP16`<br>`G101` | Java1<br>Intro to OOP<br>Animation | `8563`<br>`2299`<br>`1567` | Davey, A<br>Ross, M<br>Day, S
    `3333`<br><br> | Behr, K<br><br> | `1996-07-31`<br><br> | M<br><br> | `COMP16`<br>`COMP34` | Intro to OOP<br>Database&nbsp;Design | `2299`<br>`3370` | Ross, M<br>Blaine,&nbsp;N

    01. Show how the data may be rearranged into relations which are in third normal form.

        Student:

        *student_id* | surname | initial | date_of_birth | gender
        -----------: | ------- | ------- | ------------- | ------
        `1111`       | Bell    | K       | `1998-01-14`  | M
        `2222`       | Cope    | F       | `1997-08-12`  | F
        `3333`       | Behr    | K       | `1996-07-31`  | M

        Teacher:

        *teacher_id* | surname | initial
        -----------: | ------- | -------
        `8563`       | Davey   | A
        `2299`       | Ross    | M
        `1567`       | Day     | S
        `3370`       | Blaine  | N

        Course:

        *course_id* | course_name     | <o>teacher_id</o>
        ----------: | --------------- | -----------------
        `COMP23`    | Java1           | `8563`
        `COMP16`    | Intro to OOP    | `2299`
        `G101`      | Animation       | `1567`
        `COMP34`    | Database Design | `3370`

        StudentCourse:

        <o>*course_id*</o> | <o>*student_id*</o>
        -----------------: | ------------------:
        `1111`             | `COMP23`
        `2222`             | `COMP23`
        `2222`             | `COMP16`
        `2222`             | `G101`
        `3333`             | `COMP16`
        `3333`             | `COMP34`

        Rules for 1NF:

        - [x] Each data item is atomic
        - [x] Each row/record has a unique primary key
        - [x] No records have repeating data
        - [x] Each field should be unique

        Rules for 2NF:

        - [x] The table must be in 1NF
        - [x] No partial dependencies

        Rules for 3NF:

        - [x] The table must be in 2NF
        - [x] There are no non-key attributes that depend on another non-key attribute
        - [x] Every non-key attribute is non-transitively dependent on the primary key
    02. State **two** properties that the tables in a fully normalised database must have.
        - No partial dependencies
        - All attributes should depend transitively on the primary key
03. A museum has permanent displays but also runs a programme of special events. People may pay an annual fee to become Friends of the Museum. Friends can attend events, which they must book in advance. This, and other data about the museum, is stored in a relational database. Part of the entity-relationship (E-R) diagram is shown.

    ```
    FRIEND
      |
     /|\
    TICKET
     \|/
      |
    EVENT
    ```

    01. &nbsp;
        01. State the type of relationship between `FRIEND` and `TICKET`.
            - One-to-many
        02. Explain the use of primary and foreign keys in `FRIEND` and `TICKET`
            - `FRIEND` will have a primary key, which will uniquely identify each record
            - As one `FRIEND` needs to be able to have many tickets, its primary key needs to be a foreign key of `TICKET`, and as one `EVENT` needs to issue many tickets, its primary key also needs to be a foreign key of `TICKET`
            - `TICKET` will therefore contain 2 foreign keys that are used to link it to its `FRIEND` and `EVENT`
            - `TICKET` will have a composite primary key, formed by the `FRIEND` table's primary key and the `EVENT` table's primary key (as one `TICKET` is for only one `EVENT` and only one `FRIEND`)
    02. When the database was being designed, an initial version of the diagram showed a direct relationship between `FRIEND` and `EVENT`.

        Draw this initial E-R diagram with `FRIEND` and `EVENT` only.

        - ```
          FRIEND
           \|/
            |
           /|\
          EVENT
          ```

        Explain why `TICKET` was inserted.

        - `FRIEND`-`EVENT` is a many-to-many relationship
        - In real database systems, many-to-many relationships cannot exist
        - Therefore, a linker table is needed, to create one-to-many relationships with each other entity
