import EmojiWidget from 'emojiwidget';

function onExtensionClick(tab) {
    const inputList = document.querySelectorAll('input[type="text"]');
    for(const input of inputList) {
        const isDisabled = input.hasAttribute('disabled');
        if((input.offsetWidth === 0 || input.offsetHeight === 0) || isDisabled) continue;
        new EmojiWidget(input);
    }
}

onExtensionClick();