export type ActivityLevel = 'WEAK' | 'GROWING' | 'STRONG' | 'RESTRICTED'

export type Agent = {
  accountId?: string
  symbol: string
  headquarters: string
  credits: number
  startingFaction: string
  shipCount: number
}

export type Chart = {
  waypointSymbol?: WaypointSymbol
  submittedBy?: string
  submittedOn?: string
}

export type Construction = {
  symbol: string
  materials: Array<ConstructionMaterial>
  isComplete: boolean
}

export type ConstructionMaterial = {
  tradeSymbol: TradeSymbol
  required: number
  fulfilled: number
}

export type Contract = {
  id: string
  factionSymbol: string
  type: ContractType
  terms: ContractTerms
  accepted: boolean
  fulfilled: boolean
  expiration: string
  deadlineToAccept?: string
}

export type ContractType = 'PROCUREMENT' | 'TRANSPORT' | 'SHUTTLE'

export type ContractDeliverGood = {
  tradeSymbol: string
  destinationSymbol: string
  unitsRequired: number
  unitsFulfilled: number
}

export type ContractPayment = {
  onAccepted: number
  onFulfilled: number
}

export type ContractTerms = {
  deadline: string
  payment: ContractPayment
  deliver?: Array<ContractDeliverGood>
}

export type Cooldown = {
  shipSymbol: string
  totalSeconds: number
  remainingSeconds: number
  expiration?: string
}

export type Extraction = {
  shipSymbol: string
  yield: ExtractionYield
}

export type ExtractionYield = {
  symbol: TradeSymbol
  units: number
}

export type Faction = {
  symbol: FactionSymbol
  name: string
  description: string
  headquarters: string
  traits: Array<FactionTrait>
  isRecruiting: boolean
}

export type FactionSymbol =
  | 'COSMIC'
  | 'VOID'
  | 'GALACTIC'
  | 'QUANTUM'
  | 'DOMINION'
  | 'ASTRO'
  | 'CORSAIRS'
  | 'OBSIDIAN'
  | 'AEGIS'
  | 'UNITED'
  | 'SOLITARY'
  | 'COBALT'
  | 'OMEGA'
  | 'ECHO'
  | 'LORDS'
  | 'CULT'
  | 'ANCIENTS'
  | 'SHADOW'
  | 'ETHEREAL'

export type FactionTrait = {
  symbol: FactionTraitSymbol
  name: string
  description: string
}

export type FactionTraitSymbol =
  | 'BUREAUCRATIC'
  | 'SECRETIVE'
  | 'CAPITALISTIC'
  | 'INDUSTRIOUS'
  | 'PEACEFUL'
  | 'DISTRUSTFUL'
  | 'WELCOMING'
  | 'SMUGGLERS'
  | 'SCAVENGERS'
  | 'REBELLIOUS'
  | 'EXILES'
  | 'PIRATES'
  | 'RAIDERS'
  | 'CLAN'
  | 'GUILD'
  | 'DOMINION'
  | 'FRINGE'
  | 'FORSAKEN'
  | 'ISOLATED'
  | 'LOCALIZED'
  | 'ESTABLISHED'
  | 'NOTABLE'
  | 'DOMINANT'
  | 'INESCAPABLE'
  | 'INNOVATIVE'
  | 'BOLD'
  | 'VISIONARY'
  | 'CURIOUS'
  | 'DARING'
  | 'EXPLORATORY'
  | 'RESOURCEFUL'
  | 'FLEXIBLE'
  | 'COOPERATIVE'
  | 'UNITED'
  | 'STRATEGIC'
  | 'INTELLIGENT'
  | 'RESEARCH_FOCUSED'
  | 'COLLABORATIVE'
  | 'PROGRESSIVE'
  | 'MILITARISTIC'
  | 'TECHNOLOGICALLY_ADVANCED'
  | 'AGGRESSIVE'
  | 'IMPERIALISTIC'
  | 'TREASURE_HUNTERS'
  | 'DEXTEROUS'
  | 'UNPREDICTABLE'
  | 'BRUTAL'
  | 'FLEETING'
  | 'ADAPTABLE'
  | 'SELF_SUFFICIENT'
  | 'DEFENSIVE'
  | 'PROUD'
  | 'DIVERSE'
  | 'INDEPENDENT'
  | 'SELF_INTERESTED'
  | 'FRAGMENTED'
  | 'COMMERCIAL'
  | 'FREE_MARKETS'
  | 'ENTREPRENEURIAL'

export type JumpGate = {
  symbol: WaypointSymbol
  connections: Array<string>
}

export type Market = {
  symbol: string
  exports: Array<TradeGood>
  imports: Array<TradeGood>
  exchange: Array<TradeGood>
  transactions?: Array<MarketTransaction>
  tradeGoods?: Array<MarketTradeGood>
}

export type MarketTradeGood = {
  symbol: TradeSymbol
  type: 'EXPORT' | 'IMPORT' | 'EXCHANGE'
  tradeVolume: number
  supply: SupplyLevel
  activity?: ActivityLevel
  purchasePrice: number
  sellPrice: number
}

export type type2 = 'EXPORT' | 'IMPORT' | 'EXCHANGE'

export type MarketTransaction = {
  waypointSymbol: WaypointSymbol
  shipSymbol: string
  tradeSymbol: string
  type: 'PURCHASE' | 'SELL'
  units: number
  pricePerUnit: number
  totalPrice: number
  timestamp: string
}

export type type3 = 'PURCHASE' | 'SELL'

export type Meta = {
  total: number
  page: number
  limit: number
}

export type RepairTransaction = {
  waypointSymbol: WaypointSymbol
  shipSymbol: string
  totalPrice: number
  timestamp: string
}

export type ScannedShip = {
  symbol: string
  registration: ShipRegistration
  nav: ShipNav
  frame?: {
    symbol: string
  }
  reactor?: {
    symbol: string
  }
  engine: {
    symbol: string
  }
  mounts?: Array<{
    symbol: string
  }>
}

export type ScannedSystem = {
  symbol: string
  sectorSymbol: string
  type: SystemType
  x: number
  y: number
  distance: number
}

export type ScannedWaypoint = {
  symbol: WaypointSymbol
  type: WaypointType
  systemSymbol: SystemSymbol
  x: number
  y: number
  orbitals: Array<WaypointOrbital>
  faction?: WaypointFaction
  traits: Array<WaypointTrait>
  chart?: Chart
}

export type ScrapTransaction = {
  waypointSymbol: WaypointSymbol
  shipSymbol: string
  totalPrice: number
  timestamp: string
}

export type Ship = {
  symbol: string
  registration: ShipRegistration
  nav: ShipNav
  crew: ShipCrew
  frame: ShipFrame
  reactor: ShipReactor
  engine: ShipEngine
  cooldown: Cooldown
  modules: Array<ShipModule>
  mounts: Array<ShipMount>
  cargo: ShipCargo
  fuel: ShipFuel
}

export type ShipCargo = {
  capacity: number
  units: number
  inventory: Array<ShipCargoItem>
}

export type ShipCargoItem = {
  symbol: TradeSymbol
  name: string
  description: string
  units: number
}

export type ShipComponentCondition = number

export type ShipComponentIntegrity = number

export type ShipConditionEvent = {
  symbol: ShipConditionEventSymbol
  component: ShipConditionEventComponent
  name: string
  description: string
}

export type ShipConditionEventSymbol =
  | 'REACTOR_OVERLOAD'
  | 'ENERGY_SPIKE_FROM_MINERAL'
  | 'SOLAR_FLARE_INTERFERENCE'
  | 'COOLANT_LEAK'
  | 'POWER_DISTRIBUTION_FLUCTUATION'
  | 'MAGNETIC_FIELD_DISRUPTION'
  | 'HULL_MICROMETEORITE_STRIKES'
  | 'STRUCTURAL_STRESS_FRACTURES'
  | 'CORROSIVE_MINERAL_CONTAMINATION'
  | 'THERMAL_EXPANSION_MISMATCH'
  | 'VIBRATION_DAMAGE_FROM_DRILLING'
  | 'ELECTROMAGNETIC_FIELD_INTERFERENCE'
  | 'IMPACT_WITH_EXTRACTED_DEBRIS'
  | 'FUEL_EFFICIENCY_DEGRADATION'
  | 'COOLANT_SYSTEM_AGEING'
  | 'DUST_MICROABRASIONS'
  | 'THRUSTER_NOZZLE_WEAR'
  | 'EXHAUST_PORT_CLOGGING'
  | 'BEARING_LUBRICATION_FADE'
  | 'SENSOR_CALIBRATION_DRIFT'
  | 'HULL_MICROMETEORITE_DAMAGE'
  | 'SPACE_DEBRIS_COLLISION'
  | 'THERMAL_STRESS'
  | 'VIBRATION_OVERLOAD'
  | 'PRESSURE_DIFFERENTIAL_STRESS'
  | 'ELECTROMAGNETIC_SURGE_EFFECTS'
  | 'ATMOSPHERIC_ENTRY_HEAT'

export type ShipConditionEventComponent = 'FRAME' | 'REACTOR' | 'ENGINE'

export type ShipCrew = {
  current: number
  required: number
  capacity: number
  rotation: ShipCrewRotation
  morale: number
  wages: number
}

export type ShipCrewRotation = 'STRICT' | 'RELAXED'

export type ShipEngine = {
  symbol: ShipEngineSymbol
  name: string
  description: string
  condition: ShipComponentCondition
  integrity: ShipComponentIntegrity
  speed: number
  requirements: ShipRequirements
}

export type ShipEngineSymbol =
  | 'ENGINE_IMPULSE_DRIVE_I'
  | 'ENGINE_ION_DRIVE_I'
  | 'ENGINE_ION_DRIVE_II'
  | 'ENGINE_HYPER_DRIVE_I'

export type ShipFrame = {
  symbol: ShipFrameSymbol
  name: string
  description: string
  condition: ShipComponentCondition
  integrity: ShipComponentIntegrity
  moduleSlots: number
  mountingPoints: number
  fuelCapacity: number
  requirements: ShipRequirements
}

export type ShipFrameSymbol =
  | 'FRAME_PROBE'
  | 'FRAME_DRONE'
  | 'FRAME_INTERCEPTOR'
  | 'FRAME_RACER'
  | 'FRAME_FIGHTER'
  | 'FRAME_FRIGATE'
  | 'FRAME_SHUTTLE'
  | 'FRAME_EXPLORER'
  | 'FRAME_MINER'
  | 'FRAME_LIGHT_FREIGHTER'
  | 'FRAME_HEAVY_FREIGHTER'
  | 'FRAME_TRANSPORT'
  | 'FRAME_DESTROYER'
  | 'FRAME_CRUISER'
  | 'FRAME_CARRIER'

export type ShipFuel = {
  current: number
  capacity: number
  consumed?: {
    amount: number
    timestamp: string
  }
}

export type ShipModificationTransaction = {
  waypointSymbol: string
  shipSymbol: string
  tradeSymbol: string
  totalPrice: number
  timestamp: string
}

export type ShipModule = {
  symbol: ShipModuleSymbol
  capacity?: number
  range?: number
  name: string
  description: string
  requirements: ShipRequirements
}

export type ShipModuleSymbol =
  | 'MODULE_MINERAL_PROCESSOR_I'
  | 'MODULE_GAS_PROCESSOR_I'
  | 'MODULE_CARGO_HOLD_I'
  | 'MODULE_CARGO_HOLD_II'
  | 'MODULE_CARGO_HOLD_III'
  | 'MODULE_CREW_QUARTERS_I'
  | 'MODULE_ENVOY_QUARTERS_I'
  | 'MODULE_PASSENGER_CABIN_I'
  | 'MODULE_MICRO_REFINERY_I'
  | 'MODULE_ORE_REFINERY_I'
  | 'MODULE_FUEL_REFINERY_I'
  | 'MODULE_SCIENCE_LAB_I'
  | 'MODULE_JUMP_DRIVE_I'
  | 'MODULE_JUMP_DRIVE_II'
  | 'MODULE_JUMP_DRIVE_III'
  | 'MODULE_WARP_DRIVE_I'
  | 'MODULE_WARP_DRIVE_II'
  | 'MODULE_WARP_DRIVE_III'
  | 'MODULE_SHIELD_GENERATOR_I'
  | 'MODULE_SHIELD_GENERATOR_II'

export type ShipMount = {
  symbol: ShipMountSymbol
  name: string
  description?: string
  strength?: number
  deposits?: Array<
    | 'QUARTZ_SAND'
    | 'SILICON_CRYSTALS'
    | 'PRECIOUS_STONES'
    | 'ICE_WATER'
    | 'AMMONIA_ICE'
    | 'IRON_ORE'
    | 'COPPER_ORE'
    | 'SILVER_ORE'
    | 'ALUMINUM_ORE'
    | 'GOLD_ORE'
    | 'PLATINUM_ORE'
    | 'DIAMONDS'
    | 'URANITE_ORE'
    | 'MERITIUM_ORE'
  >
  requirements: ShipRequirements
}

export type ShipMountSymbol =
  | 'MOUNT_GAS_SIPHON_I'
  | 'MOUNT_GAS_SIPHON_II'
  | 'MOUNT_GAS_SIPHON_III'
  | 'MOUNT_SURVEYOR_I'
  | 'MOUNT_SURVEYOR_II'
  | 'MOUNT_SURVEYOR_III'
  | 'MOUNT_SENSOR_ARRAY_I'
  | 'MOUNT_SENSOR_ARRAY_II'
  | 'MOUNT_SENSOR_ARRAY_III'
  | 'MOUNT_MINING_LASER_I'
  | 'MOUNT_MINING_LASER_II'
  | 'MOUNT_MINING_LASER_III'
  | 'MOUNT_LASER_CANNON_I'
  | 'MOUNT_MISSILE_LAUNCHER_I'
  | 'MOUNT_TURRET_I'

export type ShipNav = {
  systemSymbol: SystemSymbol
  waypointSymbol: WaypointSymbol
  route: ShipNavRoute
  status: ShipNavStatus
  flightMode: ShipNavFlightMode
}

export type ShipNavFlightMode = 'DRIFT' | 'STEALTH' | 'CRUISE' | 'BURN'

export type ShipNavRoute = {
  destination: ShipNavRouteWaypoint
  origin: ShipNavRouteWaypoint
  departureTime: string
  arrival: string
}

export type ShipNavRouteWaypoint = {
  symbol: string
  type: WaypointType
  systemSymbol: SystemSymbol
  x: number
  y: number
}

export type ShipNavStatus = 'IN_TRANSIT' | 'IN_ORBIT' | 'DOCKED'

export type ShipReactor = {
  symbol: ShipReactorSymbol
  name: string
  description: string
  condition: ShipComponentCondition
  integrity: ShipComponentIntegrity
  powerOutput: number
  requirements: ShipRequirements
}

export type ShipReactorSymbol =
  | 'REACTOR_SOLAR_I'
  | 'REACTOR_FUSION_I'
  | 'REACTOR_FISSION_I'
  | 'REACTOR_CHEMICAL_I'
  | 'REACTOR_ANTIMATTER_I'

export type ShipRegistration = {
  name: string
  factionSymbol: string
  role: ShipRole
}

export type ShipRequirements = {
  power?: number
  crew?: number
  slots?: number
}

export type ShipRole =
  | 'FABRICATOR'
  | 'HARVESTER'
  | 'HAULER'
  | 'INTERCEPTOR'
  | 'EXCAVATOR'
  | 'TRANSPORT'
  | 'REPAIR'
  | 'SURVEYOR'
  | 'COMMAND'
  | 'CARRIER'
  | 'PATROL'
  | 'SATELLITE'
  | 'EXPLORER'
  | 'REFINERY'

export type ShipType =
  | 'SHIP_PROBE'
  | 'SHIP_MINING_DRONE'
  | 'SHIP_SIPHON_DRONE'
  | 'SHIP_INTERCEPTOR'
  | 'SHIP_LIGHT_HAULER'
  | 'SHIP_COMMAND_FRIGATE'
  | 'SHIP_EXPLORER'
  | 'SHIP_HEAVY_FREIGHTER'
  | 'SHIP_LIGHT_SHUTTLE'
  | 'SHIP_ORE_HOUND'
  | 'SHIP_REFINING_FREIGHTER'
  | 'SHIP_SURVEYOR'

export type Shipyard = {
  symbol: string
  shipTypes: Array<{
    type: ShipType
  }>
  transactions?: Array<ShipyardTransaction>
  ships?: Array<ShipyardShip>
  modificationsFee: number
}

export type ShipyardShip = {
  type: ShipType
  name: string
  description: string
  supply: SupplyLevel
  activity?: ActivityLevel
  purchasePrice: number
  frame: ShipFrame
  reactor: ShipReactor
  engine: ShipEngine
  modules: Array<ShipModule>
  mounts: Array<ShipMount>
  crew: {
    required: number
    capacity: number
  }
}

export type ShipyardTransaction = {
  waypointSymbol: WaypointSymbol
  shipSymbol: string
  shipType: string
  price: number
  agentSymbol: string
  timestamp: string
}

export type Siphon = {
  shipSymbol: string
  yield: SiphonYield
}

export type SiphonYield = {
  symbol: TradeSymbol
  units: number
}

export type SupplyLevel =
  | 'SCARCE'
  | 'LIMITED'
  | 'MODERATE'
  | 'HIGH'
  | 'ABUNDANT'

export type Survey = {
  signature: string
  symbol: string
  deposits: Array<SurveyDeposit>
  expiration: string
  size: 'SMALL' | 'MODERATE' | 'LARGE'
}

export type size = 'SMALL' | 'MODERATE' | 'LARGE'

export type SurveyDeposit = {
  symbol: string
}

export type System = {
  symbol: string
  sectorSymbol: string
  type: SystemType
  x: number
  y: number
  waypoints: Array<SystemWaypoint>
  factions: Array<SystemFaction>
}

export type SystemFaction = {
  symbol: FactionSymbol
}

export type SystemSymbol = string

export type SystemType =
  | 'NEUTRON_STAR'
  | 'RED_STAR'
  | 'ORANGE_STAR'
  | 'BLUE_STAR'
  | 'YOUNG_STAR'
  | 'WHITE_DWARF'
  | 'BLACK_HOLE'
  | 'HYPERGIANT'
  | 'NEBULA'
  | 'UNSTABLE'

export type SystemWaypoint = {
  symbol: WaypointSymbol
  type: WaypointType
  x: number
  y: number
  orbitals: Array<WaypointOrbital>
  orbits?: string
}

export type TradeGood = {
  symbol: TradeSymbol
  name: string
  description: string
}

export type TradeSymbol =
  | 'PRECIOUS_STONES'
  | 'QUARTZ_SAND'
  | 'SILICON_CRYSTALS'
  | 'AMMONIA_ICE'
  | 'LIQUID_HYDROGEN'
  | 'LIQUID_NITROGEN'
  | 'ICE_WATER'
  | 'EXOTIC_MATTER'
  | 'ADVANCED_CIRCUITRY'
  | 'GRAVITON_EMITTERS'
  | 'IRON'
  | 'IRON_ORE'
  | 'COPPER'
  | 'COPPER_ORE'
  | 'ALUMINUM'
  | 'ALUMINUM_ORE'
  | 'SILVER'
  | 'SILVER_ORE'
  | 'GOLD'
  | 'GOLD_ORE'
  | 'PLATINUM'
  | 'PLATINUM_ORE'
  | 'DIAMONDS'
  | 'URANITE'
  | 'URANITE_ORE'
  | 'MERITIUM'
  | 'MERITIUM_ORE'
  | 'HYDROCARBON'
  | 'ANTIMATTER'
  | 'FAB_MATS'
  | 'FERTILIZERS'
  | 'FABRICS'
  | 'FOOD'
  | 'JEWELRY'
  | 'MACHINERY'
  | 'FIREARMS'
  | 'ASSAULT_RIFLES'
  | 'MILITARY_EQUIPMENT'
  | 'EXPLOSIVES'
  | 'LAB_INSTRUMENTS'
  | 'AMMUNITION'
  | 'ELECTRONICS'
  | 'SHIP_PLATING'
  | 'SHIP_PARTS'
  | 'EQUIPMENT'
  | 'FUEL'
  | 'MEDICINE'
  | 'DRUGS'
  | 'CLOTHING'
  | 'MICROPROCESSORS'
  | 'PLASTICS'
  | 'POLYNUCLEOTIDES'
  | 'BIOCOMPOSITES'
  | 'QUANTUM_STABILIZERS'
  | 'NANOBOTS'
  | 'AI_MAINFRAMES'
  | 'QUANTUM_DRIVES'
  | 'ROBOTIC_DRONES'
  | 'CYBER_IMPLANTS'
  | 'GENE_THERAPEUTICS'
  | 'NEURAL_CHIPS'
  | 'MOOD_REGULATORS'
  | 'VIRAL_AGENTS'
  | 'MICRO_FUSION_GENERATORS'
  | 'SUPERGRAINS'
  | 'LASER_RIFLES'
  | 'HOLOGRAPHICS'
  | 'SHIP_SALVAGE'
  | 'RELIC_TECH'
  | 'NOVEL_LIFEFORMS'
  | 'BOTANICAL_SPECIMENS'
  | 'CULTURAL_ARTIFACTS'
  | 'FRAME_PROBE'
  | 'FRAME_DRONE'
  | 'FRAME_INTERCEPTOR'
  | 'FRAME_RACER'
  | 'FRAME_FIGHTER'
  | 'FRAME_FRIGATE'
  | 'FRAME_SHUTTLE'
  | 'FRAME_EXPLORER'
  | 'FRAME_MINER'
  | 'FRAME_LIGHT_FREIGHTER'
  | 'FRAME_HEAVY_FREIGHTER'
  | 'FRAME_TRANSPORT'
  | 'FRAME_DESTROYER'
  | 'FRAME_CRUISER'
  | 'FRAME_CARRIER'
  | 'REACTOR_SOLAR_I'
  | 'REACTOR_FUSION_I'
  | 'REACTOR_FISSION_I'
  | 'REACTOR_CHEMICAL_I'
  | 'REACTOR_ANTIMATTER_I'
  | 'ENGINE_IMPULSE_DRIVE_I'
  | 'ENGINE_ION_DRIVE_I'
  | 'ENGINE_ION_DRIVE_II'
  | 'ENGINE_HYPER_DRIVE_I'
  | 'MODULE_MINERAL_PROCESSOR_I'
  | 'MODULE_GAS_PROCESSOR_I'
  | 'MODULE_CARGO_HOLD_I'
  | 'MODULE_CARGO_HOLD_II'
  | 'MODULE_CARGO_HOLD_III'
  | 'MODULE_CREW_QUARTERS_I'
  | 'MODULE_ENVOY_QUARTERS_I'
  | 'MODULE_PASSENGER_CABIN_I'
  | 'MODULE_MICRO_REFINERY_I'
  | 'MODULE_SCIENCE_LAB_I'
  | 'MODULE_JUMP_DRIVE_I'
  | 'MODULE_JUMP_DRIVE_II'
  | 'MODULE_JUMP_DRIVE_III'
  | 'MODULE_WARP_DRIVE_I'
  | 'MODULE_WARP_DRIVE_II'
  | 'MODULE_WARP_DRIVE_III'
  | 'MODULE_SHIELD_GENERATOR_I'
  | 'MODULE_SHIELD_GENERATOR_II'
  | 'MODULE_ORE_REFINERY_I'
  | 'MODULE_FUEL_REFINERY_I'
  | 'MOUNT_GAS_SIPHON_I'
  | 'MOUNT_GAS_SIPHON_II'
  | 'MOUNT_GAS_SIPHON_III'
  | 'MOUNT_SURVEYOR_I'
  | 'MOUNT_SURVEYOR_II'
  | 'MOUNT_SURVEYOR_III'
  | 'MOUNT_SENSOR_ARRAY_I'
  | 'MOUNT_SENSOR_ARRAY_II'
  | 'MOUNT_SENSOR_ARRAY_III'
  | 'MOUNT_MINING_LASER_I'
  | 'MOUNT_MINING_LASER_II'
  | 'MOUNT_MINING_LASER_III'
  | 'MOUNT_LASER_CANNON_I'
  | 'MOUNT_MISSILE_LAUNCHER_I'
  | 'MOUNT_TURRET_I'
  | 'SHIP_PROBE'
  | 'SHIP_MINING_DRONE'
  | 'SHIP_SIPHON_DRONE'
  | 'SHIP_INTERCEPTOR'
  | 'SHIP_LIGHT_HAULER'
  | 'SHIP_COMMAND_FRIGATE'
  | 'SHIP_EXPLORER'
  | 'SHIP_HEAVY_FREIGHTER'
  | 'SHIP_LIGHT_SHUTTLE'
  | 'SHIP_ORE_HOUND'
  | 'SHIP_REFINING_FREIGHTER'
  | 'SHIP_SURVEYOR'

export type Waypoint = {
  symbol: WaypointSymbol
  type: WaypointType
  systemSymbol: SystemSymbol
  x: number
  y: number
  orbitals: Array<WaypointOrbital>
  orbits?: string
  faction?: WaypointFaction
  traits: Array<WaypointTrait>
  modifiers?: Array<WaypointModifier>
  chart?: Chart
  isUnderConstruction: boolean
}

export type WaypointFaction = {
  symbol: FactionSymbol
}

export type WaypointModifier = {
  symbol: WaypointModifierSymbol
  name: string
  description: string
}

export type WaypointModifierSymbol =
  | 'STRIPPED'
  | 'UNSTABLE'
  | 'RADIATION_LEAK'
  | 'CRITICAL_LIMIT'
  | 'CIVIL_UNREST'

export type WaypointOrbital = {
  symbol: string
}

export type WaypointSymbol = string

export type WaypointTrait = {
  symbol: WaypointTraitSymbol
  name: string
  description: string
}

export type WaypointTraitSymbol =
  | 'UNCHARTED'
  | 'UNDER_CONSTRUCTION'
  | 'MARKETPLACE'
  | 'SHIPYARD'
  | 'OUTPOST'
  | 'SCATTERED_SETTLEMENTS'
  | 'SPRAWLING_CITIES'
  | 'MEGA_STRUCTURES'
  | 'PIRATE_BASE'
  | 'OVERCROWDED'
  | 'HIGH_TECH'
  | 'CORRUPT'
  | 'BUREAUCRATIC'
  | 'TRADING_HUB'
  | 'INDUSTRIAL'
  | 'BLACK_MARKET'
  | 'RESEARCH_FACILITY'
  | 'MILITARY_BASE'
  | 'SURVEILLANCE_OUTPOST'
  | 'EXPLORATION_OUTPOST'
  | 'MINERAL_DEPOSITS'
  | 'COMMON_METAL_DEPOSITS'
  | 'PRECIOUS_METAL_DEPOSITS'
  | 'RARE_METAL_DEPOSITS'
  | 'METHANE_POOLS'
  | 'ICE_CRYSTALS'
  | 'EXPLOSIVE_GASES'
  | 'STRONG_MAGNETOSPHERE'
  | 'VIBRANT_AURORAS'
  | 'SALT_FLATS'
  | 'CANYONS'
  | 'PERPETUAL_DAYLIGHT'
  | 'PERPETUAL_OVERCAST'
  | 'DRY_SEABEDS'
  | 'MAGMA_SEAS'
  | 'SUPERVOLCANOES'
  | 'ASH_CLOUDS'
  | 'VAST_RUINS'
  | 'MUTATED_FLORA'
  | 'TERRAFORMED'
  | 'EXTREME_TEMPERATURES'
  | 'EXTREME_PRESSURE'
  | 'DIVERSE_LIFE'
  | 'SCARCE_LIFE'
  | 'FOSSILS'
  | 'WEAK_GRAVITY'
  | 'STRONG_GRAVITY'
  | 'CRUSHING_GRAVITY'
  | 'TOXIC_ATMOSPHERE'
  | 'CORROSIVE_ATMOSPHERE'
  | 'BREATHABLE_ATMOSPHERE'
  | 'THIN_ATMOSPHERE'
  | 'JOVIAN'
  | 'ROCKY'
  | 'VOLCANIC'
  | 'FROZEN'
  | 'SWAMP'
  | 'BARREN'
  | 'TEMPERATE'
  | 'JUNGLE'
  | 'OCEAN'
  | 'RADIOACTIVE'
  | 'MICRO_GRAVITY_ANOMALIES'
  | 'DEBRIS_CLUSTER'
  | 'DEEP_CRATERS'
  | 'SHALLOW_CRATERS'
  | 'UNSTABLE_COMPOSITION'
  | 'HOLLOWED_INTERIOR'
  | 'STRIPPED'

export type WaypointType =
  | 'PLANET'
  | 'GAS_GIANT'
  | 'MOON'
  | 'ORBITAL_STATION'
  | 'JUMP_GATE'
  | 'ASTEROID_FIELD'
  | 'ASTEROID'
  | 'ENGINEERED_ASTEROID'
  | 'ASTEROID_BASE'
  | 'NEBULA'
  | 'DEBRIS_FIELD'
  | 'GRAVITY_WELL'
  | 'ARTIFICIAL_GRAVITY_WELL'
  | 'FUEL_STATION'
