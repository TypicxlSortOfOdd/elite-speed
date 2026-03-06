const CONFIG = {
    ID: "com.TypicxlSortOfOdd.elite-speed",
    MOD_NAME: "Elite Speed",
    EXPERIMENTAL_MODE: true,
};

(function () {
    const api = window.SubwayBuilderAPI;

    console.log(`[${CONFIG.MOD_NAME}] Loaded!`);

    api.hooks.onGameInit(() => {
        api.ui.showNotification(`${CONFIG.MOD_NAME} loaded.`, `success`);
    });
    try {
        api.trains.registerTrainType({
            id: 'Shinkansen',
            name: 'Jap. Bullet Train',
            description: 'Japanese Bullet Trains; modelled after Shinkansen.',
            compatibleTrackTypes: ['Shinkansen'],

            appearance: {
                color: '#2f0022'
            },

            stats: {
                maxAcceleration: 0.7, // m/s | 2.44kph/s | 1.52mph/s | 0.0714g
                maxDeceleration: 0.92, // m/s | 3.24kph/s | 2mph/s | 0.0939g
                maxSpeed: 85, // m/s | 306kph | 190mph
                maxSpeedLocalStation: 55.6, // m/s | 200kph | 124mph
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
                trainOperationalCostPerHour: 1350,
                carOperationalCostPerHour: 135,
                scissorsCrossoverCost: 4_500_000,
                stopTimeSeconds: 48,
                parallelTrackSpacing: 4.3,
                trackClearance: 5.5, // 0.4m Clearance
                maxLateralAcceleration: 0.8, // m/s | 2.88kph/s | 1.78mph/s | 0.0816g
                minTurnRadius: 100,
                minStationTurnRadius: 100,
                maxSlopePercentage: 3.5,
            },
        });

        api.trains.registerTrainType({
            id: 'SCMaglev',
            name: 'Jap. Maglev',
            description: 'Japanese Maglev; modelled after the SCMaglev L0 Series.',
            compatibleTrackTypes: ['SCMaglev'],

            appearance: {
                color: '#490000'
            },

            stats: {
                maxAcceleration: 1.32, // m/s | 4.75kph/s | 2.95mph/s | 0.1347g
                maxDeceleration: 1.32, // m/s | 4.75kph/s | 2.95mph/s | 0.1347g
                maxSpeed: 160, // m/s | 576kph | 357mph
                maxSpeedLocalStation: 85, // m/s | 306kph | 190mph
                capacityPerCar: 72,
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
                trainOperationalCostPerHour: 1600,
                carOperationalCostPerHour: 160,
                scissorsCrossoverCost: 16_000_000,
                stopTimeSeconds: 45,
                parallelTrackSpacing: 4.5,
                trackClearance: 5.5, // 1.15m Clearance
                maxLateralAcceleration: 1.15, // m/s | 4.14kph/s | 2.57mph/s | 0.1173g
                minTurnRadius: 100,
                minStationTurnRadius: 100,
                maxSlopePercentage: 5.5,
            },
        });
    } catch (error) {
        console.error(`[${CONFIG.MOD_NAME}] Failed to initialize base train(s).`, error);
        api.ui.showNotification(`${CONFIG.MOD_NAME} ran into a problem.`);
    };

    try {
        if(CONFIG.EXPERIMENTAL_MODE) {
            console.warn(`[${CONFIG.MOD_NAME}] Experimental mode enabled.`)
            api.trains.registerTrainType({
                id: 'VacRail',
                name: 'VacRail',
                description: 'Rail surrounded by a vacuum minimizes air resistance; modelled after vactrain concepts.',
                compatibleTrackTypes: ['VacRail'],
                
                appearance: {
                    color: '#939393'
                },

                stats: {
                    maxAcceleration: 1.7, // m/s | 6.12kph/s | 3.80mph/s | 0.1734g
                    maxDeceleration: 1.7, // m/s | 6.12kph/s | 3.80mph/s | 0.1734g
                    maxSpeed: 313, // m/s | 1126kph | 700mph
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
                    maxLateralAcceleration: 1.3, // m/s | 4.68kph/s | 2.91mph/s | 0.1326g
                    minTurnRadius: 100,
                    minStationTurnRadius: 100,
                    maxSlopePercentage: 5.5,
                },
            });
        };
    } catch (error) {
        console.error(`[${CONFIG.MOD_NAME}] Failed to initialize experimental train(s).`, error);
        api.ui.showNotification(`${CONFIG.MOD_NAME} experimental ran into a problem.`);
    }
})();