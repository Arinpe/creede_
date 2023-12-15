document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const didResult = document.getElementById('didResult');

    generateButton.addEventListener('click', function () {
        const generatedDID = generateRandomDID();
        didResult.textContent = `Generated DID: ${generatedDID}`;
    });

    function generateRandomDID() {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const didLength = 20;
        let did = 'did:';
        
        for (let i = 0; i < didLength; i++) {
            did += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return did;
    }
});
