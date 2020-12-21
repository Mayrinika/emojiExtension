import EmojiWidget from 'emojiwidget';

function onExtensionClick(tab) {
    const inputList = document.querySelectorAll('input[type="text"]');
    for(const input of inputList) {
        new EmojiWidget(input);
    }
}

onExtensionClick();