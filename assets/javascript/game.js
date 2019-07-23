// Trivia Content
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var questions = [
    'In what state did George Washington Carver discover more than 300 uses for peanuts?',
    'What state has the longest coastline in the U.S. at 6,640 miles long, greater than all other states combined?',
    'What state can claim to house the most telescopes in the world?',
    'What state holds the only active diamond mine in the U.S.?',
    'In what state can you find the 3,500-year-old tree "General Sherman"?',
    'In what state was the world\'s largest silver nugget found?',
    'Where was America\'s first cookbook, American Cookery (Amelia Simmons, 1796) published?',
    'Where were the first log cabins built, in 1683 by Swedish immigrants?',
    'What state houses the Cape Canaveral spacecraft launch center?',
    'In what state were the Girl Scouts founded by Juliette Gorden in 1912?',
    'What state holds the only royal palace, Iolani, in the country?',
    'What state had the longest Main Street, 33 miles, in the country?',
    'In what state is the Sears Tower located?',
    'What state hosts the famous car race: the Indy 500?',
    'What state holds the shortest and steepest railroad in the U.S., at 60 degrees and 296 feet?',
    'In state was Helium discovered, at the state university of the same name?',
    'What state has the longest underground cave system in the world, the Mammoth-Flint Cave system, over 300 miles long?',
    'What state produces 98% of the world\'s crayfish?',
    'What state holds the most easterly point in the U.S., West Quoddy Head?',
    'What state produced the nation\'s first umbrella factory in 1928?',
    'What state hosted the very first World Series in 1903, with the Boston Americans vs. the Pittsburg Pirates?',
    'In what state is Battle Creek, the "Cereal Bowl of America" located?',
    'In what state was the oldest rock in the world, dated at 3.8 billion years old, found?',
    'In what state is Vicksburg, the city where Coca-Cola was first bottled in 1894?',
    'What state is Mark Twain and some of his characters, like Tom Sawyer and Huckleberry Finn, from?',
    'In what state is "Grasshopper Glacier", named for the grasshoppers that can be seen still frozen in ice?',
    'What state holds the world\'s only roller skating museum?',
    'What is the nation\'s driest state, also home to such rare prehistoric fish as the Devils Hole pup?',
    'In what state was the first instance of "Artificial Rain" used to stop forest fires in 1947?',
    'What state had the first drive-in movie theater in 1933?',
    'In what state is "Smokey Bear" buried, a cub orphaned by fire in 1950, at the Smokey Bear Historical State Park?',
    'In what state did the first presidential inauguration of George Washington on April 30th, 1789 occur?',
    'In what state was Virgina Dare, the first English child born in America, born in 1587?',
    'In what state is the geographic center of North America?',
    'In what state were electric traffic lights invented, and then installed in 1914?',
    'What state installed the nation\'s first parking meter?',
    'What state holds the world\'s smallest park, totalling 452 inches, created on St. Patrick\'s Day for leprechauns and snail races?',
    'In what state was the first magazine in America, "American Magazine" published in 1741?',
    'In what state were the first chicken\'s bred to create the poultry industry?',
    'What state holds the U.S.\'s first tea farm, founded in 1890?',
    'What state was the world\'s largest natural, indoor warmwater pool named Evan\'s Plunge?',
    'In what state is Graceland, Evis Presley\'s estate and gravesite?',
    'In what state is NASA\'s headquarters for all U.S. piloted space projects?',
    'In what state is the Rainbow Bridge, the largest natural stone bridge in the world?',
    'What state produces the largest amount of maple syrup in the U.S.?',
    'What state holds the only full-length statue of George Washington, placed at the state capitol in 1796?',
    'In what state was the Lunar Rover made, along with other aircraft and spacecraft?',
    'In what state are the majority of the country\'s glass marbles made?',
    'In what state was the typewriter invented?',
    'In what state can you find "Register of the Desert", a huge granite boulder covering 27 acres with 5,000 early pioneer names carved on it?'
];

// Pick a question and generate answers
var randomNumbers = [];
var questionRecord = [];

var generateQnA = function() {
    for(var i = 0; i < 4; i++) {
        var add = true;
        var n = Math.floor(Math.random() * 50);
        for (var j = 0; j < 4; j++) {
            if (randomNumbers[j] === n) {
                add = false;
            };
        };
        if (add) {
            randomNumbers.push(n)
        } else {
            i--;
        };
    };
    console.log('picking questions and answers');
};

generateQnA();
console.log(randomNumbers);

// Mix up the ordering of right and wrong answers
var answerOrder = [];

var generateAnswerOrder = function() {
    for(var i = 0; i < 4; i++) {
        var add = true;
        var n = Math.floor(Math.random() * 4);
        for (var j = 0; j < 4; j++) {
            if (answerOrder[j] === n) {
                add = false;
            };
        };
        if (add) {
            answerOrder.push(n)
        } else {
            i--;
        };
    };
    console.log('set answer orders');
};

generateAnswerOrder();
console.log(answerOrder);

var updateButtons = function() {

    for (var i = 0; i < 4; i++) {
        $('#answer' + i).removeClass('btn-primary');
        $('#answer' + i).removeClass('btn-danger');
        $('#answer' + i).addClass('btn-light');
        $('#answer' + i).prop('disabled', false);
    };
    
    $('#questionText').text(questions[randomNumbers[0]]);
    $('#answer' + answerOrder[0]).text(states[randomNumbers[0]]);
    $('#answer' + answerOrder[0]).attr('answer', 'correct');
    $('#answer' + answerOrder[1]).text(states[randomNumbers[1]]);
    $('#answer' + answerOrder[2]).text(states[randomNumbers[2]]);
    $('#answer' + answerOrder[3]).text(states[randomNumbers[3]]);
    console.log('update buttons');

    $('#nextQuestion').prop('disabled', true);
};

updateButtons();

var score = 0;

$('.answerButton').on('click', function() {
    $(this).prop('disabled', true);
    if ($(this).attr('answer') === 'correct') {
        $(this).removeClass('btn-light');
        $(this).addClass('btn-primary');
        score += 100;
        $('#scoreCard').text('Score: ' + score.toString());
        $('#nextQuestion').prop('disabled', false);
        for (var i = 0; i < 4; i++) {
            $('#answer' + i).prop('disabled', true);
        };
        console.log('correct');
    } else {
        $(this).removeClass('btn-light');
        $(this).addClass('btn-danger');
        score -= 10;
        $('#scoreCard').text('Score: ' + score.toString());
        console.log('incorrect');
    };

});

$('#nextQuestion').on('click', function() {
    randomNumbers= [];
    answerOrder = [];
    generateQnA();
    generateAnswerOrder();
    updateButtons();
});