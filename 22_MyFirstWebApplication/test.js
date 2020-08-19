let currentPhoto = 0;
let imagesData = [
	{
	photo: 'images/photo1.jpg',
    title: 'Incredible Things You Never Knew About Prague #1',
    description: "It’s home to the largest castle in the world. Dating back to the ninth century, Prague Castle spans an impressive 18 acres and is home to stunning cathedrals, chapels, royal palaces and gorgeous ornamental gardens."
    },

	{
	photo: 'images/photo2.jpg',
    title: 'Incredible Things You Never Knew About Prague #2',
    description: "There is a graffiti wall devoted to John Lennon. Since 1980, it’s been repainted numerous times and is laced in graffiti lyrics from Lennon and The Beatles."
    },

	{
	photo: 'images/photo3.jpg',
    title: 'Incredible Things You Never Knew About Prague #3',
    description: "The Charles Bridge has some rather mathematical significance. Former Czech king Charles IV laid the first stone of the bridge at precisely 5.31am on July 9, 1357. A superstitious man, the king was so into astrology and numerology that he chose this date because of its written form: 1-3-5-7-9-7-5-3-1 (year, day, month, time)."
    },

	{
	photo: 'images/photo4.jpg',
    title: 'Incredible Things You Never Knew About Prague #4',
    description: "The city is home to the longest river in the Czech Republic, the Vltava. One of the best-known works of classical music by a Czech composer is Bedrich Smetana's Vltava, sometimes called The Moldau in English."
    },

	{
    photo: 'images/photo5.jpg',
    title: 'Incredible Things You Never Knew About Prague #5',
    description: "According to legend, Hitler planned to preserve Prague’s Jewish quarter in his retirement plan. Strange it may be, but the former Nazi leader wanted to settle in the city and make the area a museum to preserve the memory of ‘the extinguished race’."
    },

	{
    photo: 'images/photo6.jpg',
    title: 'Incredible Things You Never Knew About Prague #6',
    description: "Even if you’ve never been to Prague, you’ve probably heard of its famous Astronomical Clock. Well guess what: if you’re about in Southeast Asia, in Seoul to be precise, you’ll find an exact replica in the mega-popular Hongdae district."
    },
];

let loadPhoto = (photoNumber) => {
	$('#photo').attr('src', imagesData[photoNumber].photo);
    $('#PhotoTitle').text(imagesData[photoNumber].title);
    $('#PhotoDescription').text(imagesData[photoNumber].description);   
	$('.previews div').remove('.this-arrow');
	$(`*[data-number="${photoNumber}"]`).parent().prepend('<div class="this-arrow"></div>');
}

loadPhoto(currentPhoto);

$('#next').click(() => {
	currentPhoto++;
	currentPhoto = currentPhoto % 9;
	loadPhoto(currentPhoto);
});

$('#previous').click(() => {
	currentPhoto--;
	currentPhoto = (currentPhoto + 9) % 9;
	loadPhoto(currentPhoto);
});

// let i = 0;
// imagesData.forEach((data) => {
// 	$('.previews').append(`<div style="position: relative"><div class="hidden-title">${data.title}<div class="hidden-arrow"></div></div><img src="${data.photo}" class="thumbnail" data-number="${i}"></img></div>`);
// 	i++;
// });

// $('.thumbnail').click((event) => {
// 	currentPhoto = $(event.target).attr('data-number');
// 	loadPhoto(currentPhoto);
// });

// $('.thumbnail').hover((event) => {
// 	$(event.target).parent().children('.hidden-title').css('visibility', 'unset');
// }, (event) => {
// 	$(event.target).parent().children('.hidden-title').css('visibility', 'hidden');
// });