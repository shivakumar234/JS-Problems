function classifyMovie(movie) {
    const { title = "Unknown Movie", rating } = movie;

    if (typeof rating !== 'number') {
        console.log(`❌ Rating for "${title}" is missing or invalid.`);
        return;
    }

    let result = "";

    if (rating >= 9) {
        result = "Blockbuster";
    } else if (rating >= 8) {
        result = "Superhit";
    } else if (rating >= 6.5) {
        result = "Hit";
    } else if (rating >= 5) {
        result = "Average";
    } else {
        result = "Flop";
    }

    console.log(`🎬 "${title}" is a ${result} with a rating of ${rating}.`);
}


classifyMovie({ title: "Inception", rating: 8.8 });

classifyMovie({ title: "Some B-grade Movie", rating: 3.2 });

classifyMovie({ title: "Mystery Movie" });
