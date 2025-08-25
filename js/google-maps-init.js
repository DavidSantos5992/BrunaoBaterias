// google-maps-init.js

// Verifique se a variável google está definida
if (typeof google !== 'undefined') {
    // Função de inicialização do Google Maps
    function initMap() {
        // Seu código de inicialização do mapa aqui
        var map = new google.maps.Map(document.getElementById('singleListingMap'), {
            center: {lat: -23.2099737, lng: -46.829127},
            zoom: 14,
            // Outras opções do mapa, se necessário
        });

        // Marcador no mapa
        var marker = new google.maps.Marker({
            position: {lat: -23.2099737, lng: -46.829127},
            map: map,
            // Outras opções do marcador, se necessário
        });
    }

    // Adicione um ouvinte de carga para chamar a função de inicialização
    google.maps.event.addDomListener(window, 'load', initMap);
}
