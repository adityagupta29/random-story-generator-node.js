const getRandomStory = () => {
    const start = ["Once upon a time,"]
    const characters = [" their was a Lion.", " their was a Fox.", " their was a Tiger."]
    const behavior = [" He was very nice", " He was very rude", " He was very kind"]
    const operation = [" but one day he save a life.", " but one day he killed his friend."]

    const getRandomValue = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    };

    const randomStory = getRandomValue(start) + getRandomValue(characters) +
        getRandomValue(behavior) + getRandomValue(operation);

    return randomStory;
};

