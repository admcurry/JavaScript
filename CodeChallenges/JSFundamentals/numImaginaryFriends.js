/*
A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.
Write a function, numImaginaryFriends(), that takes in the total number of friends
a person has and returns the number of imaginary friends they have.
Since friends can only come in whole numbers, be sure to round 
your result up to the nearest whole number before returning it.
*/

function numImaginaryFriends(input) {return Math.ceil(input / 4)}