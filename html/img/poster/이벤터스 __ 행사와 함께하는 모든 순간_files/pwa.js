const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            const version = new URL(document.currentScript.src).search;
            const registration = await navigator.serviceWorker.register(`/sw.js${version}`,{ scope: './' });
            if (registration.installing) {                
            } else if (registration.waiting) {
            } else if (registration.active) {                
            };
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

registerServiceWorker();