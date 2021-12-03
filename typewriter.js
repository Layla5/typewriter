
const sentence = "hello there from lighthouse labs";
const typewriter = (words, delay) => {
	words.split('').forEach((element, index, array) => {
		setTimeout(() => {
			if ((index + 1) < array.length) {
				process.stdout.write(element);
			} else {
				process.stdout.write(element + '\n');
			}
		} ,delay * (index + 1));
	});
};

typewriter(sentence, 50);

