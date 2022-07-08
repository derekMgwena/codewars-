/* DESCRIPTION:
This time the input is a sequence of course-ids that are formatted in the following way:

name-yymm
The return of the function shall first be sorted by yymm, then by the name (which varies in length).*/
const revamp = (arr) => {
  return arr.map(v => {
    const splittedCourse = v.split('-')
    return splittedCourse[1] + '-' + splittedCourse[0]
  })
}

sortme = function( courses ){
  const revampedCourses = revamp(courses)
  return revamp(revampedCourses.sort())
}