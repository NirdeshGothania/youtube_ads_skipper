function clickSkipButton() {
    const skipButton = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
    if (skipButton) {
        skipButton.click();
    }
}

const observer = new MutationObserver(() => {
    clickSkipButton();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

clickSkipButton();
