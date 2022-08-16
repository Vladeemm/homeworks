function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  
}

Student.prototype.setSubject = function (subjectName) {
  return this.subject;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark);
    } else {
    this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (mark1, mark2, ...mark3) {
  return this.marks.push(mark);
}

Student.prototype.getAverage = function () {
  return mark / mark.length;
}

Student.prototype.exclude = function (reason) {
  delete subject;
  delete marks;
  const excluded = { excluded: 'excluded!' };
}