document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const didResult = document.getElementById('didResult');

    generateButton.addEventListener('click', function () {
        const generatedDID = generateRandomDID();
        didResult.textContent = `Generated DID: ${generatedDID}`;
    });

    function generateRandomDID() {
        const characters = 'tool solve walnut will inch romance blood jelly medal love laundry horse'.split(' ');
        const didLength = 5;
        let did = 'did: ';
        
        for (let i = 0; i < didLength; i++) {
            did += characters[Math.floor(Math.random() * characters.length)];
            if (i < (didLength - 1)) {
                did += ' '
            }
        }

        return did;
    }
});
