alert("hello this is bms calculator welcome");

/* we are going to calculate bmi for
our own good */

let your_Name = prompt("entrer name");
console.log("Name: ", your_Name);

let weightInPounds = Number(prompt("enter weight in pounds"));

console.log(typeof weightInPounds);

console.log("pound weight ", weightInPounds);

//2.2046lbs=1kg//

let conversion = 2.2046;

let weight_In_Kgs = weightInPounds * conversion;

console.log("kg weight ", weight_In_Kgs);

let height_In_Inches = Number(prompt("enter height"));

console.log("height in inches ", height_In_Inches);
console.log(typeof height_In_Inches)

//1 inch =2.54 cm

/*backlash\ is used to show to not use that as you usually use
for example statments starting at " would usually end at"
but if i use back lash \" IT WONNT BE TRETED AS A 
code ending sign */

let conversion_For_Height = 1 / 2.54;

let height_In_Cm = height_In_Inches * conversion_For_Height;
console.log("cm height ", height_In_Cm);

let bmi = weight_In_Kgs / height_In_Cm ** 2;
console.log("bmi ", bmi);

console.log("thank you");
