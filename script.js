document.addEventListener('DOMContentLoaded', function() {
    // Ajouter un écouteur d'événement au bouton de soumission
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        // Empêcher la soumission du formulaire pour gérer avec JavaScript
        event.preventDefault();
        
        // Définir les bonnes réponses
        const correctAnswers = {
            'radio-1': 'Vrai',
            'radio-2': 'Faux',
            'radio-3': 'Faux'
        };
        
        let score = 0;
        
        // Parcourir les questions
        for (let key in correctAnswers) {
            // Récupérer les réponses sélectionnées pour chaque question
            const radios = document.getElementsByName(key);
            for (let radio of radios) {
                if (radio.checked && radio.previousElementSibling.textContent.trim() === correctAnswers[key]) {
                    score += 5;
                }
            }
        }
        
        // Sélectionner le conteneur d'alerte
        const alertContainer = document.getElementById('alert-container');
        alertContainer.innerHTML = ''; // Vider les anciennes alertes

        // Définir les messages d'alerte
        let alertMessage = '';
        let alertClass = '';
        let alertIcon = '';
        if (score === 15) {
            alertMessage = `Félicitations ! Vous avez obtenu tous les points (${score}/15 points).`;
            alertClass = 'alert alert-success';
            alertIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
        } else if (score >= 7.5) {
            alertMessage = `Bien joué ! Vous avez la moyenne (${score}/15 points).`;
            alertClass = 'alert';
            alertIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
        } else {
            alertMessage = `Dommage, vous avez une mauvaise note (${score}/15 points).`;
            alertClass = 'alert alert-error';
            alertIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
        }

        // Injecter le message d'alerte dans le conteneur
        alertContainer.innerHTML = `
            <div role="alert" class="${alertClass}">
                ${alertIcon}
                <span>${alertMessage}</span>
            </div>
        `;

        // Actualiser la page après un délai de 2 secondes
        setTimeout(function() {
            location.reload();
        }, 2000);
    });
});
