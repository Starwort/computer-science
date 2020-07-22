---
layout: default
title: inheritance | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

from dataclasses import dataclass
from typing import List


@dataclass
class Person:
    name: str
    age: int


@dataclass
class Teacher(Person):
    form: str


@dataclass
class Student(Person):
    form: str
    year: int


@dataclass
class School:
    teachers: List[Teacher]
    students: List[Student]
    name: str


prof_archer: Teacher = Teacher("Maxwell Archer", 34, "WYU")
tom: Student = Student("Thomas Williams", 16, "WYU", 12)
harry: Student = Student("Harry Jones", 17, "WYU", 12)
lewis: Student = Student("Lewis Taylor", 16, "WYU", 12)

school: School = School([prof_archer], [tom, harry, lewis], "Wildwood Academy")

try:
    import black

    print(black.format_str(repr(school), mode=black.FileMode()))
    # prints:

    # School(
    #     teachers=[Teacher(name="Maxwell Archer", age=34, form="WYU")],
    #     students=[
    #         Student(name="Thomas Williams", age=16, form="WYU", year=12),
    #         Student(name="Harry Jones", age=17, form="WYU", year=12),
    #         Student(name="Lewis Taylor", age=16, form="WYU", year=12),
    #     ],
    #     name="Wildwood Academy",
    # )
except ImportError:
    print(school)
