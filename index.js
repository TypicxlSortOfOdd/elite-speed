const CONFIG = {
    id: "com.TypicxlSortOfOdd.elite-speed",
    mod_name: "Elite Speed",
    experimental_mode: false,
};

(function () {
    const api = window.SubwayBuilderAPI;

    console.log(`[${CONFIG.mod_name}] Loaded! Version`);

    api.hooks.onGameInit(() => {
        api.ui.showNotification(`${CONFIG.mod_name} loaded.`, `success`);
    });
    try {
        window.SubwayBuilderAPI.trains.registerTrainType({
            id: 'shinkansen',
            name: 'Jap. Bullet Train',
            description: 'Japanese Bullet Trains; modelled after Shinkansen.',
            compatibleTrackTypes: ['Shinkansen'],

            stats: {
                maxAcceleration: 0.70,
                maxDeceleration: 0.82,
                maxSpeed: 85, // m/s
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
                stopTimeSeconds: 48,
                parallelTrackSpacing: 4.3,
                trackClearance: 5.5,
                maxLateralAcceleration: 0.8,
                minTurnRadius: 100,
                minStationTurnRadius: 100,
                maxSlopePercentage: 3.5,
            },
            appearance: {
                color: '#939393'
            }
        });

        window.SubwayBuilderAPI.trains.registerTrainType({
            id: 'maglev',
            name: 'Jap. Maglev',
            description: 'Japanese Maglev; modelled after the SCMaglev L0 Series.',
            compatibleTrackTypes: ['Maglev'],

            stats: {
                maxAcceleration: 1.32,
                maxDeceleration: 1.32,
                maxSpeed: 160, // m/s
                maxSpeedLocalStation: 85,
                capacityPerCar: 68,
                carLength: 24.5,
                minCars: 4,
                maxCars: 16,
                carsPerCarSet: 4,
                carCost: 12_000_000,
                trainWidth: 2.9,
                minStationLength: 100,
                maxStationLength: 400,
                baseTrackCost: 250_000,
                baseStationCost: 250_000_000,
                trainOperationalCostPerHour: 3000,
                carOperationalCostPerHour: 225,
                scissorsCrossoverCost: 16_000_000,
                stopTimeSeconds: 45,
                parallelTrackSpacing: 4.5,
                trackClearance: 5.5,
                maxLateralAcceleration: 1.15,
                minTurnRadius: 100,
                minStationTurnRadius: 100,
                maxSlopePercentage: 5.5,
            },
            appearance: {
                color: '#939393'
            }    
        });
    } catch (error) {
        console.error(`[${CONFIG.mod_name}] Failed to initialize base train(s).`, error);
        api.ui.showNotification(`${CONFIG.mod_name} ran into a problem.`);
    };

    try {
        if(CONFIG.experimental_mode === true) {
            window.SubwayBuilderAPI.trains.registerTrainType({
                id: 'vacrail',
                name: 'VacRail',
                description: 'Rail surrounded by a vacuum minimizes air resistance; modelled after vactrain concepts.',
                compatibleTrackTypes: ['VacRail'],

                stats: {
                    maxAcceleration: 1.45,
                    maxDeceleration: 1.45,
                    maxSpeed: 313, // m/s
                    maxSpeedLocalStation: 110,
                    capacityPerCar: 30,
                    carLength: 20,
                    minCars: 8,
                    maxCars: 12,
                    carsPerCarSet: 4,
                    carCost: 16_000_000,
                    trainWidth: 2.9,
                    minStationLength: 150,
                    maxStationLength: 600,
                    baseTrackCost: 600_000,
                    baseStationCost: 450_000_000,
                    trainOperationalCostPerHour: 1750,
                    carOperationalCostPerHour: 88,
                    scissorsCrossoverCost: 24_000_000,
                    stopTimeSeconds: 45,
                    parallelTrackSpacing: 3.2,
                    trackClearance: 4,
                    maxLateralAcceleration: 1.22,
                    minTurnRadius: 100,
                    minStationTurnRadius: 100,
                    maxSlopePercentage: 5.5,
                },
                appearance: {
                    color: '#939393'
                },
            });
        };
    } catch (error) {
        console.error(`[${CONFIG.mod_name}] Failed to initialize experimental train(s).`, error);
        api.ui.showNotification(`${CONFIG.mod_name} experimental ran into a problem.`);
    }
})();