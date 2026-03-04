(function () {
    const api = window.SubwayBuilderAPI;

    console.log('[Shinkansen] Loaded!');

    api.hooks.onGameInit(() => {
        api.ui.showNotification('Shinkansen loaded.', 'success');
    });

    window.SubwayBuilderAPI.trains.registerTrainType({
        id: 'shinkansen',
        name: 'Bullet - Shinkansen',
        description: 'Extremely fast Japanese Bullet Trains. Modelled after Shinkansen.',
        stats: {
            maxAcceleration: 0.72,
            maxDeceleration: 1.2,
            maxSpeed: 88, // m/s (~90 mph)
            maxSpeedLocalStation: 55,
            capacityPerCar: 83,
            carLength: 25,
            minCars: 6,
            maxCars: 16,
            carsPerCarSet: 2,
            carCost: 8_400_000,
            trainWidth: 3.4,
            minStationLength: 160,
            maxStationLength: 410,
            baseTrackCost: 100_000,
            baseStationCost: 150_000_000,
            trainOperationalCostPerHour: 1800,
            carOperationalCostPerHour: 125,
            scissorsCrossoverCost: 4_500_000,
            stopTimeSeconds: 60,
            parallelTrackSpacing: 4.3,
            trackClearance: 5.5,
            maxLateralAcceleration: 0.8,
            minTurnRadius: 100,
            minStationTurnRadius: 100,
            maxSlopePercentage: 3.5,
        },
        compatibleTrackTypes: ['Shinkansen'],
        appearance: {
            color: '#8b5cf6'
        }
    });


})();