function likes(names) {

//defines len as the length of the given array 'names'
   var nms = names.length;

//if there are no name in the array then return string  'no one likes this'
//if there is one name in the array return this persons name and likes this concatenated into a string
//if there are two names in the array return person 1 and person 2 like this  concatenated into a string
//if there are thre names in the array return person 1 person 2 and person 3 like this  concatenated into a string
//if more than three names are present in the array return person 1 person 2 and however many other names ther were in the array
  if (nms === 0) return 'no one likes this';
  else if (nms === 1) return names[0] + ' likes this';
  else if (nms === 2) return names[0] + ' and ' + names[1] + ' like this';
  else if (nms === 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  else if (nms > 3) return names[0] + ', ' + names[1] + ' and ' + (len-2) + ' others like this';
}
