// This file is auto-generated by @hey-api/openapi-ts

import { client, type Options } from '@hey-api/client-fetch';
import type { GetStatusError, GetStatusResponse, RegisterData, RegisterError, RegisterResponse, GetSystemsData, GetSystemsError, GetSystemsResponse, GetSystemData, GetSystemError, GetSystemResponse, GetSystemWaypointsData, GetSystemWaypointsError, GetSystemWaypointsResponse, GetWaypointData, GetWaypointError, GetWaypointResponse, GetMarketData, GetMarketError, GetMarketResponse, GetShipyardData, GetShipyardError, GetShipyardResponse, GetJumpGateData, GetJumpGateError, GetJumpGateResponse, GetConstructionData, GetConstructionError, GetConstructionResponse, SupplyConstructionData, SupplyConstructionError, SupplyConstructionResponse, GetFactionsData, GetFactionsError, GetFactionsResponse, GetFactionData, GetFactionError, GetFactionResponse, GetMyAgentError, GetMyAgentResponse, GetAgentsData, GetAgentsError, GetAgentsResponse, GetAgentData, GetAgentError, GetAgentResponse, GetContractsData, GetContractsError, GetContractsResponse, GetContractData, GetContractError, GetContractResponse, AcceptContractData, AcceptContractError, AcceptContractResponse, DeliverContractData, DeliverContractError, DeliverContractResponse, FulfillContractData, FulfillContractError, FulfillContractResponse, GetMyShipsData, GetMyShipsError, GetMyShipsResponse, PurchaseShipData, PurchaseShipError, PurchaseShipResponse, GetMyShipData, GetMyShipError, GetMyShipResponse, GetMyShipCargoData, GetMyShipCargoError, GetMyShipCargoResponse, OrbitShipData, OrbitShipError, OrbitShipResponse, ShipRefineData, ShipRefineError, ShipRefineResponse, CreateChartData, CreateChartError, CreateChartResponse, GetShipCooldownData, GetShipCooldownError, GetShipCooldownResponse, DockShipData, DockShipError, DockShipResponse, CreateSurveyData, CreateSurveyError, CreateSurveyResponse, ExtractResourcesData, ExtractResourcesError, ExtractResourcesResponse, SiphonResourcesData, SiphonResourcesError, SiphonResourcesResponse, ExtractResourcesWithSurveyData, ExtractResourcesWithSurveyError, ExtractResourcesWithSurveyResponse, JettisonData, JettisonError, JettisonResponse, JumpShipData, JumpShipError, JumpShipResponse, NavigateShipData, NavigateShipError, NavigateShipResponse, PatchShipNavData, PatchShipNavError, PatchShipNavResponse, GetShipNavData, GetShipNavError, GetShipNavResponse, WarpShipData, WarpShipError, WarpShipResponse, SellCargoData, SellCargoError, SellCargoResponse, CreateShipSystemScanData, CreateShipSystemScanError, CreateShipSystemScanResponse, CreateShipWaypointScanData, CreateShipWaypointScanError, CreateShipWaypointScanResponse, CreateShipShipScanData, CreateShipShipScanError, CreateShipShipScanResponse, RefuelShipData, RefuelShipError, RefuelShipResponse, PurchaseCargoData, PurchaseCargoError, PurchaseCargoResponse, TransferCargoData, TransferCargoError, TransferCargoResponse, NegotiateContractData, NegotiateContractError, NegotiateContractResponse, GetMountsData, GetMountsError, GetMountsResponse, InstallMountData, InstallMountError, InstallMountResponse, RemoveMountData, RemoveMountError, RemoveMountResponse, GetScrapShipData, GetScrapShipError, GetScrapShipResponse, ScrapShipData, ScrapShipError, ScrapShipResponse, GetRepairShipData, GetRepairShipError, GetRepairShipResponse, RepairShipData, RepairShipError, RepairShipResponse } from './types.gen';

/**
 * Get Status
 * Return the status of the game server.
 * This also includes a few global elements, such as announcements, server reset dates and leaderboards.
 */
export const getStatus = (options?: Options) => { return (options?.client ?? client).get<GetStatusResponse, GetStatusError>({
    ...options,
    url: '/'
}); };

/**
 * Register New Agent
 * Creates a new agent and ties it to an account.
 * The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.
 *
 * This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.
 *
 * > #### Keep your token safe and secure
 * >
 * > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.
 *
 * If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
 */
export const register = (options?: Options<RegisterData>) => { return (options?.client ?? client).post<RegisterResponse, RegisterError>({
    ...options,
    url: '/register'
}); };

/**
 * List Systems
 * Return a paginated list of all systems.
 */
export const getSystems = (options?: Options<GetSystemsData>) => { return (options?.client ?? client).get<GetSystemsResponse, GetSystemsError>({
    ...options,
    url: '/systems'
}); };

/**
 * Get System
 * Get the details of a system.
 */
export const getSystem = (options: Options<GetSystemData>) => { return (options?.client ?? client).get<GetSystemResponse, GetSystemError>({
    ...options,
    url: '/systems/{systemSymbol}'
}); };

/**
 * List Waypoints in System
 * Return a paginated list of all of the waypoints for a given system.
 *
 * If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
 */
export const getSystemWaypoints = (options: Options<GetSystemWaypointsData>) => { return (options?.client ?? client).get<GetSystemWaypointsResponse, GetSystemWaypointsError>({
    ...options,
    url: '/systems/{systemSymbol}/waypoints'
}); };

/**
 * Get Waypoint
 * View the details of a waypoint.
 *
 * If the waypoint is uncharted, it will return the 'Uncharted' trait instead of its actual traits.
 */
export const getWaypoint = (options: Options<GetWaypointData>) => { return (options?.client ?? client).get<GetWaypointResponse, GetWaypointError>({
    ...options,
    url: '/systems/{systemSymbol}/waypoints/{waypointSymbol}'
}); };

/**
 * Get Market
 * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.
 *
 * Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
 */
export const getMarket = (options: Options<GetMarketData>) => { return (options?.client ?? client).get<GetMarketResponse, GetMarketError>({
    ...options,
    url: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/market'
}); };

/**
 * Get Shipyard
 * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
 */
export const getShipyard = (options: Options<GetShipyardData>) => { return (options?.client ?? client).get<GetShipyardResponse, GetShipyardError>({
    ...options,
    url: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard'
}); };

/**
 * Get Jump Gate
 * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.
 *
 * Waypoints connected to this jump gate can be
 */
export const getJumpGate = (options: Options<GetJumpGateData>) => { return (options?.client ?? client).get<GetJumpGateResponse, GetJumpGateError>({
    ...options,
    url: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate'
}); };

/**
 * Get Construction Site
 * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
 */
export const getConstruction = (options: Options<GetConstructionData>) => { return (options?.client ?? client).get<GetConstructionResponse, GetConstructionError>({
    ...options,
    url: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction'
}); };

/**
 * Supply Construction Site
 * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.
 *
 * The good must be in your ship's cargo. The good will be removed from your ship's cargo and added to the construction site's materials.
 */
export const supplyConstruction = (options: Options<SupplyConstructionData>) => { return (options?.client ?? client).post<SupplyConstructionResponse, SupplyConstructionError>({
    ...options,
    url: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply'
}); };

/**
 * List Factions
 * Return a paginated list of all the factions in the game.
 */
export const getFactions = (options?: Options<GetFactionsData>) => { return (options?.client ?? client).get<GetFactionsResponse, GetFactionsError>({
    ...options,
    url: '/factions'
}); };

/**
 * Get Faction
 * View the details of a faction.
 */
export const getFaction = (options: Options<GetFactionData>) => { return (options?.client ?? client).get<GetFactionResponse, GetFactionError>({
    ...options,
    url: '/factions/{factionSymbol}'
}); };

/**
 * Get Agent
 * Fetch your agent's details.
 */
export const getMyAgent = (options?: Options) => { return (options?.client ?? client).get<GetMyAgentResponse, GetMyAgentError>({
    ...options,
    url: '/my/agent'
}); };

/**
 * List Agents
 * Fetch agents details.
 */
export const getAgents = (options?: Options<GetAgentsData>) => { return (options?.client ?? client).get<GetAgentsResponse, GetAgentsError>({
    ...options,
    url: '/agents'
}); };

/**
 * Get Public Agent
 * Fetch agent details.
 */
export const getAgent = (options: Options<GetAgentData>) => { return (options?.client ?? client).get<GetAgentResponse, GetAgentError>({
    ...options,
    url: '/agents/{agentSymbol}'
}); };

/**
 * List Contracts
 * Return a paginated list of all your contracts.
 */
export const getContracts = (options?: Options<GetContractsData>) => { return (options?.client ?? client).get<GetContractsResponse, GetContractsError>({
    ...options,
    url: '/my/contracts'
}); };

/**
 * Get Contract
 * Get the details of a contract by ID.
 */
export const getContract = (options: Options<GetContractData>) => { return (options?.client ?? client).get<GetContractResponse, GetContractError>({
    ...options,
    url: '/my/contracts/{contractId}'
}); };

/**
 * Accept Contract
 * Accept a contract by ID.
 *
 * You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
 */
export const acceptContract = (options: Options<AcceptContractData>) => { return (options?.client ?? client).post<AcceptContractResponse, AcceptContractError>({
    ...options,
    url: '/my/contracts/{contractId}/accept'
}); };

/**
 * Deliver Cargo to Contract
 * Deliver cargo to a contract.
 *
 * In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.
 *
 * Cargo that was delivered will be removed from the ship's cargo.
 */
export const deliverContract = (options: Options<DeliverContractData>) => { return (options?.client ?? client).post<DeliverContractResponse, DeliverContractError>({
    ...options,
    url: '/my/contracts/{contractId}/deliver'
}); };

/**
 * Fulfill Contract
 * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
 */
export const fulfillContract = (options: Options<FulfillContractData>) => { return (options?.client ?? client).post<FulfillContractResponse, FulfillContractError>({
    ...options,
    url: '/my/contracts/{contractId}/fulfill'
}); };

/**
 * List Ships
 * Return a paginated list of all of ships under your agent's ownership.
 */
export const getMyShips = (options?: Options<GetMyShipsData>) => { return (options?.client ?? client).get<GetMyShipsResponse, GetMyShipsError>({
    ...options,
    url: '/my/ships'
}); };

/**
 * Purchase Ship
 * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent's ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.
 *
 * Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
 */
export const purchaseShip = (options?: Options<PurchaseShipData>) => { return (options?.client ?? client).post<PurchaseShipResponse, PurchaseShipError>({
    ...options,
    url: '/my/ships'
}); };

/**
 * Get Ship
 * Retrieve the details of a ship under your agent's ownership.
 */
export const getMyShip = (options: Options<GetMyShipData>) => { return (options?.client ?? client).get<GetMyShipResponse, GetMyShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}'
}); };

/**
 * Get Ship Cargo
 * Retrieve the cargo of a ship under your agent's ownership.
 */
export const getMyShipCargo = (options: Options<GetMyShipCargoData>) => { return (options?.client ?? client).get<GetMyShipCargoResponse, GetMyShipCargoError>({
    ...options,
    url: '/my/ships/{shipSymbol}/cargo'
}); };

/**
 * Orbit Ship
 * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.
 *
 * Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.
 *
 * The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
 */
export const orbitShip = (options: Options<OrbitShipData>) => { return (options?.client ?? client).post<OrbitShipResponse, OrbitShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/orbit'
}); };

/**
 * Ship Refine
 * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.
 *
 * When refining, 30 basic goods will be converted into 10 processed goods.
 */
export const shipRefine = (options: Options<ShipRefineData>) => { return (options?.client ?? client).post<ShipRefineResponse, ShipRefineError>({
    ...options,
    url: '/my/ships/{shipSymbol}/refine'
}); };

/**
 * Create Chart
 * Command a ship to chart the waypoint at its current location.
 *
 * Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.
 *
 * Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint's traits.
 */
export const createChart = (options: Options<CreateChartData>) => { return (options?.client ?? client).post<CreateChartResponse, CreateChartError>({
    ...options,
    url: '/my/ships/{shipSymbol}/chart'
}); };

/**
 * Get Ship Cooldown
 * Retrieve the details of your ship's reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.
 *
 * Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.
 *
 * Response returns a 204 status code (no-content) when the ship has no cooldown.
 */
export const getShipCooldown = (options: Options<GetShipCooldownData>) => { return (options?.client ?? client).get<GetShipCooldownResponse, GetShipCooldownError>({
    ...options,
    url: '/my/ships/{shipSymbol}/cooldown'
}); };

/**
 * Dock Ship
 * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.
 *
 * Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.
 *
 * The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
 */
export const dockShip = (options: Options<DockShipData>) => { return (options?.client ?? client).post<DockShipResponse, DockShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/dock'
}); };

/**
 * Create Survey
 * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.
 *
 * In order to use a survey, send the entire survey details in the body of the extract request.
 *
 * Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.
 *
 * Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey's size. Multiple ships can use the same survey for extraction.
 *
 * A ship must have the `Surveyor` mount installed in order to use this function.
 */
export const createSurvey = (options: Options<CreateSurveyData>) => { return (options?.client ?? client).post<CreateSurveyResponse, CreateSurveyError>({
    ...options,
    url: '/my/ships/{shipSymbol}/survey'
}); };

/**
 * Extract Resources
 * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.
 *
 * The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.
 *
 * The survey property is now deprecated. See the `extract/survey` endpoint for more details.
 */
export const extractResources = (options: Options<ExtractResourcesData>) => { return (options?.client ?? client).post<ExtractResourcesResponse, ExtractResourcesError>({
    ...options,
    url: '/my/ships/{shipSymbol}/extract'
}); };

/**
 * Siphon Resources
 * Siphon gases, such as hydrocarbon, from gas giants.
 *
 * The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
 */
export const siphonResources = (options: Options<SiphonResourcesData>) => { return (options?.client ?? client).post<SiphonResourcesResponse, SiphonResourcesError>({
    ...options,
    url: '/my/ships/{shipSymbol}/siphon'
}); };

/**
 * Extract Resources with Survey
 * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.
 *
 * Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
 */
export const extractResourcesWithSurvey = (options: Options<ExtractResourcesWithSurveyData>) => { return (options?.client ?? client).post<ExtractResourcesWithSurveyResponse, ExtractResourcesWithSurveyError>({
    ...options,
    url: '/my/ships/{shipSymbol}/extract/survey'
}); };

/**
 * Jettison Cargo
 * Jettison cargo from your ship's cargo hold.
 */
export const jettison = (options: Options<JettisonData>) => { return (options?.client ?? client).post<JettisonResponse, JettisonError>({
    ...options,
    url: '/my/ships/{shipSymbol}/jettison'
}); };

/**
 * Jump Ship
 * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.
 *
 * A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
 */
export const jumpShip = (options: Options<JumpShipData>) => { return (options?.client ?? client).post<JumpShipResponse, JumpShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/jump'
}); };

/**
 * Navigate Ship
 * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship's current location. Navigating will consume the necessary fuel from the ship's manifest based on the distance to the target waypoint.
 *
 * The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.
 *
 * To travel between systems, see the ship's Warp or Jump actions.
 */
export const navigateShip = (options: Options<NavigateShipData>) => { return (options?.client ?? client).post<NavigateShipResponse, NavigateShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/navigate'
}); };

/**
 * Patch Ship Nav
 * Update the nav configuration of a ship.
 *
 * Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
 */
export const patchShipNav = (options: Options<PatchShipNavData>) => { return (options?.client ?? client).patch<PatchShipNavResponse, PatchShipNavError>({
    ...options,
    url: '/my/ships/{shipSymbol}/nav'
}); };

/**
 * Get Ship Nav
 * Get the current nav status of a ship.
 */
export const getShipNav = (options: Options<GetShipNavData>) => { return (options?.client ?? client).get<GetShipNavResponse, GetShipNavError>({
    ...options,
    url: '/my/ships/{shipSymbol}/nav'
}); };

/**
 * Warp Ship
 * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship's manifest.
 *
 * The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
 */
export const warpShip = (options: Options<WarpShipData>) => { return (options?.client ?? client).post<WarpShipResponse, WarpShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/warp'
}); };

/**
 * Sell Cargo
 * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
 */
export const sellCargo = (options: Options<SellCargoData>) => { return (options?.client ?? client).post<SellCargoResponse, SellCargoError>({
    ...options,
    url: '/my/ships/{shipSymbol}/sell'
}); };

/**
 * Scan Systems
 * Scan for nearby systems, retrieving information on the systems' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.
 *
 * The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
 */
export const createShipSystemScan = (options: Options<CreateShipSystemScanData>) => { return (options?.client ?? client).post<CreateShipSystemScanResponse, CreateShipSystemScanError>({
    ...options,
    url: '/my/ships/{shipSymbol}/scan/systems'
}); };

/**
 * Scan Waypoints
 * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints' traits.
 *
 * Requires a ship to have the `Sensor Array` mount installed to use.
 *
 * The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
 */
export const createShipWaypointScan = (options: Options<CreateShipWaypointScanData>) => { return (options?.client ?? client).post<CreateShipWaypointScanResponse, CreateShipWaypointScanError>({
    ...options,
    url: '/my/ships/{shipSymbol}/scan/waypoints'
}); };

/**
 * Scan Ships
 * Scan for nearby ships, retrieving information for all ships in range.
 *
 * Requires a ship to have the `Sensor Array` mount installed to use.
 *
 * The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
 */
export const createShipShipScan = (options: Options<CreateShipShipScanData>) => { return (options?.client ?? client).post<CreateShipShipScanResponse, CreateShipShipScanError>({
    ...options,
    url: '/my/ships/{shipSymbol}/scan/ships'
}); };

/**
 * Refuel Ship
 * Refuel your ship by buying fuel from the local market.
 *
 * Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.
 *
 * Each fuel bought from the market replenishes 100 units in your ship's fuel.
 *
 * Ships will always be refuel to their frame's maximum fuel capacity when using this action.
 */
export const refuelShip = (options: Options<RefuelShipData>) => { return (options?.client ?? client).post<RefuelShipResponse, RefuelShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/refuel'
}); };

/**
 * Purchase Cargo
 * Purchase cargo from a market.
 *
 * The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.
 *
 * The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.
 *
 * Purchased goods are added to the ship's cargo hold.
 */
export const purchaseCargo = (options: Options<PurchaseCargoData>) => { return (options?.client ?? client).post<PurchaseCargoResponse, PurchaseCargoError>({
    ...options,
    url: '/my/ships/{shipSymbol}/purchase'
}); };

/**
 * Transfer Cargo
 * Transfer cargo between ships.
 *
 * The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.
 *
 * The response body's cargo shows the cargo of the transferring ship after the transfer is complete.
 */
export const transferCargo = (options: Options<TransferCargoData>) => { return (options?.client ?? client).post<TransferCargoResponse, TransferCargoError>({
    ...options,
    url: '/my/ships/{shipSymbol}/transfer'
}); };

/**
 * Negotiate Contract
 * Negotiate a new contract with the HQ.
 *
 * In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.
 *
 * Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.
 *
 * The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
 */
export const negotiateContract = (options: Options<NegotiateContractData>) => { return (options?.client ?? client).post<NegotiateContractResponse, NegotiateContractError>({
    ...options,
    url: '/my/ships/{shipSymbol}/negotiate/contract'
}); };

/**
 * Get Mounts
 * Get the mounts installed on a ship.
 */
export const getMounts = (options: Options<GetMountsData>) => { return (options?.client ?? client).get<GetMountsResponse, GetMountsError>({
    ...options,
    url: '/my/ships/{shipSymbol}/mounts'
}); };

/**
 * Install Mount
 * Install a mount on a ship.
 *
 * In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.
 *
 * An installation fee will be deduced by the Shipyard for installing the mount on the ship.
 */
export const installMount = (options: Options<InstallMountData>) => { return (options?.client ?? client).post<InstallMountResponse, InstallMountError>({
    ...options,
    url: '/my/ships/{shipSymbol}/mounts/install'
}); };

/**
 * Remove Mount
 * Remove a mount from a ship.
 *
 * The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.
 *
 * A removal fee will be deduced from the agent by the Shipyard.
 */
export const removeMount = (options: Options<RemoveMountData>) => { return (options?.client ?? client).post<RemoveMountResponse, RemoveMountError>({
    ...options,
    url: '/my/ships/{shipSymbol}/mounts/remove'
}); };

/**
 * Get Scrap Ship
 * Get the amount of value that will be returned when scrapping a ship.
 */
export const getScrapShip = (options: Options<GetScrapShipData>) => { return (options?.client ?? client).get<GetScrapShipResponse, GetScrapShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/scrap'
}); };

/**
 * Scrap Ship
 * Scrap a ship, removing it from the game and returning a portion of the ship's value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
 */
export const scrapShip = (options: Options<ScrapShipData>) => { return (options?.client ?? client).post<ScrapShipResponse, ScrapShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/scrap'
}); };

/**
 * Get Repair Ship
 * Get the cost of repairing a ship.
 */
export const getRepairShip = (options: Options<GetRepairShipData>) => { return (options?.client ?? client).get<GetRepairShipResponse, GetRepairShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/repair'
}); };

/**
 * Repair Ship
 * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
 */
export const repairShip = (options: Options<RepairShipData>) => { return (options?.client ?? client).post<RepairShipResponse, RepairShipError>({
    ...options,
    url: '/my/ships/{shipSymbol}/repair'
}); };