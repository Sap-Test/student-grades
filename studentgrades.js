$(document).ready(function ()
{
    $("form").submit(studentGrades);
});

function studentGrades(event){
    event.preventDefault();
    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();
    let pointEarned = $("input#pointsEarned").val();
    let pointPossible = $("input#pointsPossible").val();

    let student = {};

    student.first = firstName;
    student.last = lastName;
    student.earned = pointEarned;
    student.possible = pointPossible;

    let percentage = pointEarned / pointPossible;

    student.percent = (percentage * 100).toFixed(2);

    if(student.percent >= 90)
        student.grade = "A";
    else if (student.percent < 90 && student.percent > 60)
        student.grade= "B";
    else
        student.grade = "C";

    $("p#displayName").text(`${student.first} ${student.last}`);
    $("p#percentage").text(`${student.percent}%`);
    $("p#letterGrade").text(`${student.grade}`);
}