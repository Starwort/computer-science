abstract base class Person {
    str name;
    int age;
}

class Teacher inherits Person {
    str form;
}

class Student inherits Person {
    str form;
    int year;
}

class School {
    list[Teacher] teachers;
    list[Student] students;
    str name;
}

Teacher prof_archer = {"Maxwell Archer", 34, "WYU"};
Student tom = {"Thomas Williams", 16, "WYU", 12};
Student harry = {"Harry Jones", 17, "WYU", 12};
Student lewis = {"Lewis Taylor", 16, "WYU", 12};

School school = {{prof_archer}, {tom, harry, lewis}, "Wildwood Academy"};